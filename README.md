# Vini Hundlani - Portfolio

A LeetCode-inspired portfolio built with React and Vite.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

### Profile Image
Add your profile photo as `public/profile.jpg`. The image will display in the left sidebar. If no image is found, a placeholder icon is shown.

### Contact Information
Update the links and text in `src/components/ContactSection.jsx`:
- **LinkedIn**: Replace the href and text with your profile URL
- **Email**: Replace with your email address
- **Contact**: Replace with your phone number

### Content
Edit these files to customize your content:
- `src/components/EducationSection.jsx` - Education details
- `src/components/ExperienceRoadmap.jsx` - Experience timeline
- `src/components/CertificationCard.jsx` - Certifications
- `src/components/ProblemSolvingCard.jsx` - LeetCode/problem stats
- `src/components/PublicationsCard.jsx` - Publications
- `src/components/AchievementsCard.jsx` - Achievements overview
- `src/components/AboutMe.jsx` - About section
- `src/components/DetailedExperience.jsx` - Full experience details
- `src/components/DetailedProjects.jsx` - Project details
- `src/components/DetailedAchievements.jsx` - Full achievements

## Build

```bash
npm run build
```

Output will be in the `dist` folder.

## GitHub Repository & Deploy (GitHub Pages)

### 1. Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Set **Repository name** (e.g. `portfolio`). Your site will be at `https://<username>.github.io/<repo-name>/`.
3. Choose **Public**, do **not** initialize with a README (you already have one).
4. Click **Create repository**.

### 2. Push this project to GitHub

From the project folder in the terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repo-name>` with your GitHub username and the repository name.

### 3. Enable GitHub Pages

- In the repo, go to **Settings** → **Pages**.
- Under **Source**, choose **Deploy from a branch**.
- Under **Branch**, select **gh-pages** and **/ (root)**.
- Click **Save**. The first deployment will run from the workflow; after a minute or two the site will be at `https://<username>.github.io/<repo-name>/`.

### 4. Deploy

- **Automatic:** Every push to `main` runs the GitHub Action and updates the `gh-pages` branch, which GitHub Pages serves.
- **Manual from your machine:** Install dependencies once (`npm install`), then run:

  ```bash
  npm run deploy
  ```

  This builds with base path `/portfolio/` and pushes the build to the `gh-pages` branch. If your repo name is **not** `portfolio`, either change the `VITE_BASE_PATH` in the `deploy` script in `package.json`, or run:

  ```bash
  VITE_BASE_PATH=/your-repo-name/ npm run build && npx gh-pages -d dist
  ```
