# Md Nazmuzzaman Shifat — Academic & Research Portfolio Website

A sleek, modern, minimalistic portfolio website customized for **Md Nazmuzzaman Shifat** (Quantitative & Mixed-Methods Research Analyst, Harvard Ed.M., Teaching Fellow at Harvard University). 

Optimized for **GitHub Pages** with support for both **Jekyll** and **zero-dependency static serving**.

---

## 🌟 Key Highlights & Pages

* **[Home](index.html)**: Profile hero, research keywords, recent news ticker (Harvard TF roles, RCT replication with Prof. Susan Dynarski, Ash Center HKS), featured research, and stats.
* **[Research Projects](research.html)**: 
  * Reproducible RCT replication suite in R with Prof. Susan Dynarski (Harvard GSE).
  * Bangladesh Senior Civil Service survey system at Ash Center (Harvard Kennedy School).
  * 3MPower EdTech-supported instruction with The Open University (UK) & EdTechHub.
  * COVID-19 learning gap in Char Islands with Friendship NGO (University of Dhaka).
  * National TVET engineering curriculum tracer study.
  * Undergraduate concepts of Elasticity thesis (1st Bangabandhu Scholar of Education and Development).
* **[Publications](publications.html)**: 
  * *Beyond SDG4* book chapter (2024).
  * *Declining Trend in Finland's PISA Reading Scores* book chapter (2024).
  * *Higher Education Admission Policies in Bangladesh* (Boston College WES-CIHE Summer Institute).
  * Interactive **BibTeX citation copy** modal.
* **[Op-Eds & Public Writing](opeds.html)**: 
  * High-stakes university admission inequities in Bangladesh.
  * Global learning poverty and post-pandemic education metrics.
  * Digital pedagogy in low-resource riverine communities.
  * Features dual reading: direct external press links **and** distraction-free on-site reading (`article.html`).
* **[Teaching](teaching.html)**: 
  * **Harvard University (Sep 2024 – Present)**: *Using Economic Models to Understand Education Systems (A205)*; *Applied Linear Regression (EDU S030/S040)*; *Quantitative Methods (STAT E100)*; *Analytical Methods in Sustainability (ENVR E210)*; *Using Evidence to Improve Teaching (BA840)*; *Education Policy in Comparative Perspective (BA801)*.
  * **BSMRA Digital University (2023)**: *Educational Research and Data Analysis*, *Introduction to Education* (UGC Grant recipient).
  * **Prime University (2022–2023)**: *Advanced Educational Measurement and Evaluation*, *Advanced Teaching Methods*.
* **[Collaborations](collaborations.html)**: Institutional partnerships across Harvard University (HGSE & HKS), The Open University (UK), and University of Dhaka (IER).
* **[CV / Experience](experience.html)**: Academic appointments, Harvard Ed.M., University of Dhaka B.Ed. & M.Ed. (Gold Medalist & 1st Bangabandhu Scholar), computational toolkit (Stata, R, SPSS, Qualtrics, Dedoose, Git/GitHub), and direct PDF CV download.
* **[Contact](contact.html)**: Harvard email (`nzshifat@gse.harvard.edu`), Cambridge address, LinkedIn, and GitHub profiles.

---

## 📁 Jekyll Architecture

```text
Portfolio/
├── _config.yml               # Jekyll configuration & metadata
├── _layouts/                 # Reusable Jekyll layouts
│   ├── default.html          # Base layout (head, nav, footer, BibTeX modal)
│   ├── page.html             # Standard page layout
│   └── oped.html             # Op-Ed reader layout
├── _includes/                # Modular include components
│   ├── nav.html              # Main navigation & theme switch
│   ├── footer.html           # Site footer
│   └── bibtex-modal.html     # Citation modal
├── _data/                    # Structured YAML datasets
│   ├── education.yml         # Degrees, honors, and coursework
│   ├── experience.yml        # Appointments, responsibilities, and dates
│   ├── publications.yml      # Publications, venues, DOIs, and BibTeX
│   ├── research.yml          # Research projects, methodology, and tags
│   └── teaching.yml          # Courses supported at Harvard & Bangladesh
├── _opeds/                   # Markdown files for published op-eds
│   ├── 2024-09-18-higher-education-admission-inequality.md
│   └── 2024-05-15-beyond-sdg4-educational-equity.md
├── index.html                # Fully rendered, self-contained homepage
├── research.html             # Research projects page
├── publications.html         # Publications & BibTeX page
├── opeds.html                # Op-Eds directory page
├── article.html              # Distraction-free Op-Ed reader
├── teaching.html             # Courses & pedagogy page
├── collaborations.html       # Institutional partners page
├── experience.html           # Full CV & appointments timeline
├── contact.html              # Contact details & form
├── assets/
│   ├── css/style.css         # Modern minimalist CSS & dark/light theme
│   ├── js/main.js            # Theme switch, search/filter, and modal logic
│   ├── js/articles.js        # Op-Ed data & reader engine
│   ├── docs/cv.pdf           # Md Nazmuzzaman Shifat - Official CV PDF
│   └── img/
│       ├── avatar.svg        # Profile avatar
│       └── favicon.svg       # Monogram favicon
└── README.md
```

---

## 🚀 How to Preview & Deploy

### Instant Local Preview
Double-click `index.html` in File Explorer. Every page, search filter, BibTeX modal, and theme switch will work immediately in Chrome, Edge, or Firefox without requiring local web servers or Ruby installation!

### Deploy to GitHub Pages
1. Open **GitHub Desktop**.
2. Click **File > Add Local Repository...** and select `f:\Antigravity\Portfolio`.
3. Click **Publish repository** to push it to `github.com/nzshifat/nzshifat.github.io` (or `portfolio`).
4. On GitHub.com, go to **Settings > Pages**:
   - Under **Build and deployment > Source**, choose **Deploy from a branch** (`main` branch, `/ (root)` folder).
5. Your website will be live in 60 seconds with HTTPS enabled!
