import { useState } from 'react'

// Replace with your Formspree form ID from https://formspree.io (create a form there to get the ID)
const FORMSPREE_FORM_ID = 'xkovqnwr'

const contactInfo = {
  email: 'vini.hundlani2024@gmail.com',
  location: 'Ahmedabad, Gujarat, India',
  responseTime: 'Within 24 hours',
}

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setSubmitSuccess(true)
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    } catch (err) {
      setSubmitError(err.message || 'Failed to send. Please try again or email me directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="get-in-touch">
      <h2 className="get-in-touch-title">Get In Touch</h2>
      <p className="get-in-touch-subtitle">
        Let's discuss your next project or just say hello!
      </p>

      <div className="get-in-touch-grid">
        <div className="get-in-touch-info">
          <h3 className="get-in-touch-connect">Let's Connect</h3>
          <p className="get-in-touch-intro">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
          <div className="get-in-touch-details">
            <div className="get-in-touch-detail">
              <span className="get-in-touch-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <div>
                <span className="get-in-touch-label">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="get-in-touch-value">{contactInfo.email}</a>
              </div>
            </div>
            <div className="get-in-touch-detail">
              <span className="get-in-touch-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </span>
              <div>
                <span className="get-in-touch-label">Location</span>
                <span className="get-in-touch-value">{contactInfo.location}</span>
              </div>
            </div>
            <div className="get-in-touch-detail">
              <span className="get-in-touch-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </span>
              <div>
                <span className="get-in-touch-label">Response Time</span>
                <span className="get-in-touch-value">{contactInfo.responseTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="get-in-touch-form-wrap">
          <form className="get-in-touch-form" onSubmit={handleSubmit}>
            <div className="get-in-touch-row">
              <label className="get-in-touch-field">
                <span className="get-in-touch-field-label">First Name <span className="required">*</span></span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="first name"
                  required
                />
              </label>
              <label className="get-in-touch-field">
                <span className="get-in-touch-field-label">Last Name <span className="required">*</span></span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="last name"
                  required
                />
              </label>
            </div>
            <label className="get-in-touch-field">
              <span className="get-in-touch-field-label">Email <span className="required">*</span></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </label>
            <label className="get-in-touch-field">
              <span className="get-in-touch-field-label">Subject <span className="required">*</span></span>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="project">Project inquiry</option>
                <option value="hire">Hiring / Collaboration</option>
                <option value="chat">Just saying hello</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="get-in-touch-field">
              <span className="get-in-touch-field-label">Message <span className="required">*</span></span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or how I can help you..."
                rows={5}
                required
              />
            </label>
            <p className="get-in-touch-tip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
              </svg>
              Tip: Write a meaningful message with at least 3 words and 10 characters. Avoid random characters or excessive repetition.
            </p>
            {submitSuccess && (
              <p className="get-in-touch-success" role="status">
                Thanks for your message! I'll get back to you soon.
              </p>
            )}
            {submitError && (
              <p className="get-in-touch-error" role="alert">
                {submitError}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary get-in-touch-submit"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
