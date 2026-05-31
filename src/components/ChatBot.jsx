import { useState, useRef, useEffect, useCallback } from 'react'

const SUGGESTED_QUESTIONS = [
  "What is Vini's current role?",
  "What are Vini's key technical skills?",
  "Tell me about Vini's projects",
  "What achievements has Vini earned?",
]

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: "Hi! I'm Vini's AI assistant. Ask me anything about Vini's experience, skills, projects, or background!",
  id: 'welcome',
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [playingId, setPlayingId] = useState(null)
  const [loadingVoiceId, setLoadingVoiceId] = useState(null)
  const [ttsAvailable, setTtsAvailable] = useState(true)

  const audioRef = useRef(null)
  const audioCacheRef = useRef({})
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      Object.values(audioCacheRef.current).forEach(url => URL.revokeObjectURL(url))
    }
  }, [])

  const autoResizeTextarea = (el) => {
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 96) + 'px'
  }

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    const userMsg = { role: 'user', content: trimmed, id: Date.now() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setIsLoading(true)

    try {
      const history = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      })

      const text = await res.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        throw new Error('Server returned an invalid response. Please try again.')
      }
      if (!res.ok) throw new Error(data.error || 'Failed to get response')

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply,
        id: Date.now() + 1,
      }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: err.message || 'Something went wrong. Please try again.',
        id: Date.now() + 1,
      }])
    } finally {
      setIsLoading(false)
    }
  }, [messages, isLoading])

  const toggleVoice = useCallback(async (messageId, text) => {
    if (playingId === messageId) {
      audioRef.current?.pause()
      setPlayingId(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setPlayingId(null)
    setLoadingVoiceId(messageId)

    try {
      let audioUrl = audioCacheRef.current[messageId]

      if (!audioUrl) {
        const res = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        })

        if (res.status === 503) {
          setTtsAvailable(false)
          return
        }

        if (!res.ok) throw new Error('TTS failed')

        const blob = await res.blob()
        audioUrl = URL.createObjectURL(blob)
        audioCacheRef.current[messageId] = audioUrl
      }

      const audio = new Audio(audioUrl)
      audioRef.current = audio
      audio.onended = () => setPlayingId(null)
      audio.onerror = () => {
        setPlayingId(null)
        setLoadingVoiceId(null)
      }
      await audio.play()
      setPlayingId(messageId)
    } catch {
      setPlayingId(null)
    } finally {
      setLoadingVoiceId(null)
    }
  }, [playingId])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const showSuggestions = messages.length === 1

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        className={`chatbot-fab ${isOpen ? 'chatbot-fab-open' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close chat' : "Chat with Vini's AI"}
        title="Ask Vini's AI"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="Chat with Vini's AI assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#1a1a1a">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <div className="chatbot-header-text">
                <span className="chatbot-header-name">Ask Vini's AI</span>
                <span className="chatbot-header-sub">Gemini 2.5 Flash{ttsAvailable ? ' · Voice enabled' : ''}</span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" aria-live="polite" aria-atomic="false">
            {messages.map(msg => (
              <div key={msg.id} className={`chatbot-msg chatbot-msg-${msg.role}`}>
                <div className="chatbot-msg-bubble">{msg.content}</div>
                {msg.role === 'assistant' && ttsAvailable && (
                  <button
                    type="button"
                    className={`chatbot-voice-btn ${playingId === msg.id ? 'playing' : ''}`}
                    onClick={() => toggleVoice(msg.id, msg.content)}
                    disabled={loadingVoiceId !== null && loadingVoiceId !== msg.id}
                    aria-label={playingId === msg.id ? 'Stop audio' : 'Play audio'}
                  >
                    {loadingVoiceId === msg.id ? (
                      <>
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" className="chatbot-spin" aria-hidden>
                          <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" />
                        </svg>
                        Loading…
                      </>
                    ) : playingId === msg.id ? (
                      <>
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden>
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                        Stop
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden>
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                        Listen
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-msg chatbot-msg-assistant">
                <div className="chatbot-typing" aria-label="Typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions shown only before user sends first message */}
          {showSuggestions && (
            <div className="chatbot-suggestions">
              {SUGGESTED_QUESTIONS.map(q => (
                <button
                  key={q}
                  type="button"
                  className="chatbot-suggestion-btn"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chatbot-input-area">
            <textarea
              ref={(el) => { inputRef.current = el; textareaRef.current = el }}
              className="chatbot-input"
              value={input}
              onChange={e => {
                setInput(e.target.value)
                autoResizeTextarea(e.target)
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Vini's experience, skills…"
              rows={1}
              disabled={isLoading}
              aria-label="Your message"
            />
            <button
              type="button"
              className="chatbot-send-btn"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
