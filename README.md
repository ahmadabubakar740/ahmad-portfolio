# Abubakar Ahmad &mdash; Professional Portfolio Website

A complete, modern, and elegant Personal Portfolio Website for **Abubakar Ahmad**, Economist and Monitoring, Evaluation, Planning, and Budgeting Professional.

---

## 🌟 Overview & Key Sections

This website is custom-built with **pure HTML5, CSS3, and JavaScript** (no backend or database required) and is fully optimized for hosting on **GitHub Pages**.

### 1. Hero Section
* **Prominent Portrait Photograph:** Showcases the official professional photograph (`profile.jpg`) inside an elegant dark green and gold accented geometric frame.
* **Professional Title:** *Monitoring, Evaluation, Planning and Budgeting Professional*.
* **Impact Summary:** Highlights economic governance, public financial management, and evidence-based planning.
* **Quick Action Buttons:** Direct access to *Download CV*, *View CV Online*, and *LinkedIn Profile*.

### 2. About Me
* Engaging professional narrative emphasizing an **Economics** background from Kaduna State University.
* Experience in public-sector planning, results-based M&E, budget preparation, and macroeconomic research at the **Kaduna State Planning and Budget Commission**.
* State-level analytical contributions:
  * **2024 Kaduna State Debt Sustainability Analysis (DSA)**
  * **Kaduna State Macroeconomic Outlook**
  * **M&E Framework for Social Protection Agencies**
  * Technology oversight platforms: **Kaduna State Public Expenditure Tracking System (PETS)** and the **Eyes and Ears Project**.

### 3. Core Competencies
Structured into four core domain pillars:
1. **Monitoring & Evaluation:** Results-based M&E, project inspection (education, health, infrastructure), contractor compliance audits, citizen grievance redressal.
2. **Planning & Budgeting:** Development planning, annual budget formulation, budget implementation returns analysis, macroeconomic forecasts.
3. **Data Analysis & Reporting:** Power BI and MS Excel modeling, field data validation, executive decision-support briefs.
4. **Leadership & Stakeholder Coordination:** MDA coordination, contractor accountability sessions, community liaison, field team supervision.

### 4. Professional Experience Timeline
Chronological career milestones:
* **Senior Planning Officer** &mdash; *Kaduna State Planning and Budget Commission* (2024 &ndash; Present)
* **Class Teacher (NYSC)** &mdash; *All Bright International College, Kano* (2019 &ndash; 2020)
* **Presiding Officer** &mdash; *Independent National Electoral Commission (INEC)* (Feb &ndash; Mar 2019)
* **Health Facility Census Enumerator** &mdash; *Kaduna State Bureau of Statistics* (Jul &ndash; Aug 2018)

### 5. Education & Professional Certifications
* **B.Sc. Economics** &mdash; *Kaduna State University* (2015 &ndash; 2019)
* **Diploma in Computer Operations** &mdash; *Kaduna Community Resource Center* (2019 &ndash; 2020)
* **PwC Certifications (PricewaterhouseCoopers):**
  * Power BI for Beginners
  * Monitoring and Evaluation (M&E)
  * Project Management
  * Data Collection and Data Analysis
  * Technical Report Writing
  * Professional Work Ethics
  * Foundation of Digital Marketing

### 6. Dedicated Curriculum Vitae (CV) Section
* **Functional Download:** One-click download of the verified PDF file (`cv.pdf`).
* **Interactive Online Viewer:** Built-in modal window to view the PDF directly without leaving the page.
* **Open in New Tab:** Direct link to open the PDF in any browser tab.

### 7. Contact & Official LinkedIn Profile
* **LinkedIn Profile Link:** `https://www.linkedin.com/in/ahmad-abubakar-13b650450/`
* **Professional Email:** `ahmadabubakar740@gmail.com` with `mailto:` link and an interactive 1-click **Copy Email** button with toast notification.
* Strictly adheres to privacy guidelines: **no residential addresses** and **no referees' personal phone numbers** are displayed.

---

## 🎨 Design System

* **Primary Palette:** Refined Dark Green (`#042616`, `#0a3d24`, `#115e3b`), crisp white backgrounds, mint tints (`#eaf6ef`), and subtle gold accents (`#c28e1c`).
* **Typography:** *Plus Jakarta Sans* for modern, authoritative headings and *Inter* for clean body text.
* **Iconography:** Font Awesome 6.5.
* **Responsiveness:** Fluid grid and flexbox layout tested across smartphones, tablets, and desktop displays.

---

## 📁 Project Directory Structure

```
abubakar-ahmad-portfolio/
│
├── index.html              # Main website entry point
├── profile.jpg             # Professional portrait photograph
├── cv.pdf                  # Official Curriculum Vitae document
├── README.md               # Project documentation & GitHub Pages guide
│
└── assets/
    ├── css/
    │   └── style.css       # Custom dark green & white styling, animations, responsive design
    ├── js/
    │   └── main.js         # Mobile navigation, CV modal, active scrollspy, copy email toast
    └── images/
        └── profile.jpg     # Image asset copy for modularity
```

---

## 🚀 How to Publish on GitHub Pages (Step-by-Step)

Publishing this website is completely free using **GitHub Pages**:

### Option 1: Using GitHub Web Interface (Easiest)
1. Sign in to your [GitHub Account](https://github.com/).
2. Click **New Repository** (or the `+` icon at the top right).
3. Name your repository (e.g., `portfolio` or `abubakar-ahmad`).
   * *Tip:* If you name it `<your-github-username>.github.io`, it will be hosted directly at your root domain!
4. Choose **Public** and leave "Initialize with a README" unchecked.
5. Click **Create repository**.
6. On the empty repository page, click **uploading an existing file**.
7. Drag and drop all files from this folder:
   * `index.html`
   * `profile.jpg`
   * `cv.pdf`
   * `README.md`
   * The entire `assets/` folder (including `assets/css/style.css` and `assets/js/main.js`)
8. Write a commit message (e.g. `Initial portfolio launch`) and click **Commit changes**.
9. Go to **Settings** &rarr; **Pages** (in the left sidebar).
10. Under **Build and deployment** &rarr; **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
11. Within 1 to 2 minutes, GitHub Pages will display your live URL:
    * `https://<your-username>.github.io/<repository-name>/`

---

### Option 2: Using Git Command Line
```bash
# 1. Navigate to the portfolio folder
cd abubakar-ahmad-portfolio

# 2. Initialize git
git init
git branch -M main

# 3. Stage and commit all files
git add .
git commit -m "Launch Abubakar Ahmad Professional Portfolio"

# 4. Add your GitHub remote repository URL
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push files to GitHub
git push -u origin main
```
Then navigate to **Settings &rarr; Pages &rarr; Deploy from main branch** on GitHub.

---

## 🧪 Local Testing

To view the website locally on your computer:
* Simply double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.
* Alternatively, run any local lightweight HTTP server:
  ```bash
  # Using Python (if installed)
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`.

---

## 📄 License & Attribution
&copy; 2026 Abubakar Ahmad. All rights reserved.
Developed for professional presentation and career advancement.
