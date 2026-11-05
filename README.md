# Nazmuzzaman Shifat — Academic & Research Portfolio Website

A sleek, modern, minimalistic portfolio website designed for researchers, academics, educators, and public intellectuals. Built with clean, accessible, zero-dependency static HTML5, CSS3, and JavaScript, specifically optimized for **GitHub Pages**.

---

## 🌟 Key Features

* **Multi-Page Architecture**:
  * **[Home](index.html)**: Profile hero, research pillars, recent news ticker, selected works, and quick metrics.
  * **[Research Projects](research.html)**: Working papers, work-in-progress, abstracts, replication packages, GitHub code links, and OSF datasets.
  * **[Publications](publications.html)**: Peer-reviewed journal articles, book chapters, policy white papers with live search, year filters, and one-click copyable **BibTeX citations**.
  * **[Op-Eds & Media](opeds.html)**: Public columns & newspaper essays with dual-reading support:
    1. Direct hyperlink to original media outlet (e.g., *The Daily Star*, *Project Syndicate*, *FT*, *Dhaka Tribune*).
    2. Full-text on-site reading mode hosted directly on GitHub (`article.html`).
  * **[Teaching](teaching.html)**: Course listings, syllabi downloads, course evaluations, and pedagogical philosophy.
  * **[Collaborations](collaborations.html)**: Co-authors, research groups, institutional affiliations, and collaborative callout.
  * **[Experience & CV](experience.html)**: Academic appointments, education, methodology toolkit, and prominent PDF CV download button.
  * **[Contact](contact.html)**: Direct email, office hours, and academic profiles (Google Scholar, ORCID, GitHub, LinkedIn).
* **Modern Design System**:
  * **Dark Mode & Light Mode**: Smooth toggle with automatic OS preference detection and `localStorage` persistence.
  * **Academic Typography**: Crisp serif and sans-serif pairings (*Inter* + *Newsreader* + *JetBrains Mono*).
  * **Dynamic Search & Filtering**: Client-side filtering across research, publications, and op-eds with zero delay.
  * **Zero Dependencies / No Build Step**: Works out-of-the-box by opening `index.html` in any browser. No `npm install`, Ruby, or build configurations required.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html                 # Homepage (Bio, Highlights, Featured Cards)
├── research.html              # Research Projects & Working Papers
├── publications.html          # Peer-Reviewed Journal Articles & BibTeX
├── opeds.html                 # Op-Eds & Media Commentary Directory
├── article.html               # Distraction-free Op-Ed Full-Text Reader
├── teaching.html              # Courses Taught & Syllabi
├── collaborations.html        # Co-authors, Institutes & Grants
├── experience.html            # Curriculum Vitae & Experience Timeline
├── contact.html               # Contact Details & Office Hours
├── assets/
│   ├── css/
│   │   └── style.css          # Design system & dark/light mode styles
│   ├── js/
│   │   ├── main.js            # Theme toggle, search & category filtering, modal
│   │   └── articles.js        # Op-Ed database & markdown renderer
│   ├── img/
│   │   ├── avatar.svg         # Profile portrait placeholder (replace with your photo)
│   │   └── favicon.svg        # Custom monogram site favicon
│   └── docs/
│       ├── cv.pdf             # Place your full CV PDF here
│       └── README.txt
├── articles/                  # Markdown files of your published op-eds
│   ├── sample-oped-1.md
│   └── sample-oped-2.md
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions automated Pages deployment
├── .nojekyll                  # Bypasses Jekyll on GitHub Pages
└── README.md                  # Documentation & customization guide
```

---

## 🚀 How to Preview Locally

1. Open File Explorer to `f:\Antigravity\Portfolio`.
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari).
3. Everything (dark mode, search, modals, reader) works immediately without needing a local web server!

---

## 🌐 How to Publish to GitHub Pages

### Method A: Using GitHub Desktop (Recommended)

1. Open **GitHub Desktop** on your computer.
2. Click **File > Add Local Repository...** (or press `Ctrl+O`).
3. Choose this folder: `f:\Antigravity\Portfolio` and click **Add Repository**.
   *(If GitHub Desktop asks to initialize a Git repository, click **Create Repository**).*
4. Click **Publish repository** to push it to your GitHub account (e.g. `your-username/portfolio` or `your-username/your-username.github.io`).
5. Go to your repository on `github.com`:
   - Click **Settings** (tab at the top).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Source**, select:
     - **Deploy from a branch**: Select branch `main` and folder `/ (root)`, then click **Save**.
     - *(Alternatively, choose **GitHub Actions** to use `.github/workflows/deploy.yml`)*.
6. In 1–2 minutes, your website will be live at:
   `https://<your-username>.github.io/<repository-name>/` (or `https://<your-username>.github.io/` if named `<your-username>.github.io`).

---

## ✍️ How to Add or Update Content

### 1. Adding a New Op-Ed
You can add an Op-Ed in two simple steps:
1. Open `opeds.html` and add a new `<article class="card">` card with:
   - The publisher name (e.g., *The Daily Star*, *Project Syndicate*)
   - The original media hyperlink
   - The link to `article.html?id=your-article-slug`
2. Open `assets/js/articles.js` and add your article under `articlesDatabase`:
   ```javascript
   "your-article-slug": {
     title: "Your Op-Ed Title",
     subtitle: "Subheading or summary",
     outlet: "Media Name",
     outletUrl: "https://newspaper.com/your-article",
     date: "November 2026",
     readingTime: "5 min read",
     category: "technology", // or policy, climate, etc.
     author: "Nazmuzzaman Shifat",
     content: `
       Write your article in markdown or plain paragraphs here...
     `
   }
   ```
   *(You can also keep a copy in `articles/your-article-slug.md` for clean GitHub versioning!)*

### 2. Adding a Publication & BibTeX Citation
In `publications.html`:
- Duplicate any `<article class="card">` block.
- Update the title, authors, journal name, year, and DOI.
- Update the `data-bibtex="..."` attribute with your paper's BibTeX. The site will automatically power the "Cite (BibTeX)" copy button!

### 3. Adding Your CV & Profile Photo
- **CV**: Drop your PDF into `assets/docs/cv.pdf`. All "Download CV" buttons on the website link directly to this file.
- **Photo**: Place your photo (e.g., `photo.jpg`) into `assets/img/photo.jpg` and update the `src` attribute in `index.html` from `assets/img/avatar.svg` to `assets/img/photo.jpg`.

---

## 🎨 Customizing Colors & Styling

All colors, fonts, and spacing are defined in `assets/css/style.css` under the `:root` and `[data-theme="dark"]` CSS variables.
To change the accent color from blue to another color (e.g. emerald or burgundy):
```css
:root {
  --accent: #2563eb; /* Change to your preferred primary color */
}
```

---

## 📄 License
This portfolio template is open-source and free to adapt for personal, academic, and non-commercial scholarship.

