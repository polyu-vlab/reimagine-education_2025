# GPTutor Project Website

This is a static HTML website showcasing the GPTutor project at Hong Kong Polytechnic University.

## Project Structure

```
gptutor/
├── assets/                 # All image files
│   ├── comment.png
│   ├── home-demo.png
│   ├── overview-demo.png
│   ├── achievement1.png
│   ├── achievement2.png
│   ├── achievement3.png
│   ├── student1.png
│   ├── student2.png
│   ├── ic1.jpg
│   └── ... (other images)
├── src/
│   └── pages/
│       ├── Home/
│       │   ├── index.html
│       │   └── index.css
│       ├── About/
│       │   ├── index.html
│       │   └── index.css
│       ├── Innov/
│       │   ├── index.html
│       │   └── index.css
│       └── Impact/
│           ├── index.html
│           └── index.css
└── README.md
```

## How to Run

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd gptutor
   ```

2. **Open the website:**
   - Navigate to `src/pages/Home/index.html`
   - Open it in your web browser
   - Or use a local server for better experience

3. **Using a local server (recommended):**
   ```bash
   # From project root directory
   npx http-server .
   
   # Or using Python 3
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Then open `http://localhost:8080/src/pages/Home/index.html` in your browser.

## Important Notes

- **Image Paths:** All images use absolute paths (`/assets/`) from the server root to ensure they work correctly when the project is cloned to any location.
- **Cross-browser Compatibility:** The website is designed to work on modern browsers.
- **Responsive Design:** The website is responsive and works on different screen sizes.

## Pages

- **Home:** Main landing page with project overview
- **About:** Detailed project description and PolyU Industrial Centre information
- **Innovation Highlights:** Features and capabilities of the GPTutor platform
- **Impacts:** Project achievements and student testimonials

## Features

- Responsive design
- Interactive navigation
- YouTube video integration
- External links to GPTutor platform and events
- Student testimonials and impact data 
