# DecodeLabs — Frontend Development Industrial Training

A collection of four frontend development projects completed as part of the **DecodeLabs Frontend Development Industrial Training** track. These projects demonstrate my learning journey from semantic HTML and responsive CSS to interactive JavaScript applications and form validation.

## 🚀 Live Projects

| # | Project | Description | Live Demo |
|---|---|---|---|
| 01 | **Maher Vai Coffee** | Semantic HTML & CSS Landing Page | [View Project](https://mujakkir-maher.github.io/Decode-Labs-internship/project-1/) |
| 02 | **Maher Vai Coffee — Responsive Layout** | Responsive Web Design | [View Project](https://mujakkir-maher.github.io/Decode-Labs-internship/project-2/) |
| 03 | **FocusFlow** | Interactive Task Management App | [View Project](https://mujakkir-maher.github.io/Decode-Labs-internship/project-3/) |
| 04 | **Form Design & Validation** | Registration Form with JavaScript Validation | [View Project](https://mujakkir-maher.github.io/Decode-Labs-internship/project-4/) |

---

## 📌 Project Overview

### Project 1 — Maher Vai Coffee

A static landing page for a fictional small-batch coffee roastery and cafe, built with semantic HTML5 and custom CSS.

**Key Features**
- Semantic page structure and accessible navigation
- Hero, About, Menu, Gallery, and Visit sections
- Menu items with prices and business information
- Responsive layouts using Flexbox and CSS Grid
- Custom SVG illustrations
- Keyboard focus states and meaningful image descriptions

**Technologies:** HTML5, CSS3, Google Fonts, SVG

[Live Demo](https://mujakkir-maher.github.io/Decode-Labs-internship/project-1/) · [Source Code](project-1/)

### Project 2 — Maher Vai Coffee: Responsive Web Layout

An enhanced version of Project 1, focusing on responsive design and mobile navigation while maintaining a semantic, framework-free implementation.

**Key Features**
- Mobile-first responsive layout
- Responsive navigation with a hamburger menu
- Native HTML Popover API for menu interaction without JavaScript
- Fluid typography using `clamp()`
- CSS Grid, Flexbox, and custom properties
- Accessible navigation and keyboard interactions

**Technologies:** HTML5, CSS3, Native HTML Popover API, SVG

[Live Demo](https://mujakkir-maher.github.io/Decode-Labs-internship/project-2/) · [Source Code](project-2/)

### Project 3 — FocusFlow

A responsive task management application built with vanilla JavaScript to practice DOM manipulation, event handling, application state, and browser storage.

**Key Features**
- Add, complete, and delete tasks
- Clear all completed tasks
- Filter tasks by All, Active, and Completed
- Dynamic task statistics
- Dark mode with saved preference
- Persistent task data using `localStorage`
- Event delegation for dynamically generated task items
- Accessible feedback and responsive UI

**Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+), DOM API, `localStorage`

**Data Flow**

`User Action → Event Listener → State Update → render() → DOM Update`

[Live Demo](https://mujakkir-maher.github.io/Decode-Labs-internship/project-3/) · [Source Code](project-3/)

### Project 4 — Form Design & Validation

A responsive registration form demonstrating client-side validation, password requirements, accessible error handling, and form interaction.

**Key Features**
- Semantic registration form with associated labels
- Full-name and email-format validation
- Password strength indicator and visibility toggle
- Password rules: minimum eight characters, uppercase, lowercase, number, and symbol
- Confirm-password matching
- Required terms-and-conditions checkbox
- Field-specific validation messages
- Accessible error associations using `aria-describedby` and `aria-invalid`
- Responsive styling and visible keyboard focus

**Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+)

**Validation Flow**

`Form Submission → Input Validation → Error Feedback → Success Message`

The form performs client-side validation only. It does not create an account or transmit user data to a backend.

[Live Demo](https://mujakkir-maher.github.io/Decode-Labs-internship/project-4/) · [Source Code](project-4/)

---

## 🛠️ Technologies & Concepts

Across these four projects, I practiced the following frontend technologies and concepts:

- **HTML5:** Semantic markup, document structure, forms, labels, and accessibility attributes
- **CSS3:** Responsive design, Flexbox, CSS Grid, custom properties, fluid typography, and media queries
- **JavaScript (ES6+):** DOM manipulation, event listeners, event delegation, state management, and validation
- **Browser APIs:** HTML Popover API and Web Storage API (`localStorage`)
- **Accessibility:** Keyboard navigation, focus states, ARIA attributes, and accessible feedback
- **Git & GitHub:** Version control, repository organization, and project deployment with GitHub Pages

## 📂 Repository Structure

```text
Decode-Labs-internship/
├── project-1/
│   ├── index.html
│   ├── style.css
│   └── assets/
├── project-2/
│   ├── index.html
│   ├── style.css
│   └── assets/
├── project-3/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── project-4/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── docs/
│   └── README.md
└── README.md
```

*Note: The structure above is a simplified overview. Refer to each project's directory for its complete file structure.*

## ▶️ Run Locally

No build tools, package managers, or framework installations are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/mujakkir-maher/Decode-Labs-internship.git
   ```

2. Navigate to the repository:

   ```bash
   cd Decode-Labs-internship
   ```

3. Open any project's `index.html` file in your browser.

   Alternatively, open the repository in Visual Studio Code and use the Live Server extension.

## 🔒 Limitations

- Projects 1 and 2 use fictional business information and illustrated SVG assets.
- Project 3 stores task data and preferences in the browser's `localStorage`; the data is not synchronized across devices.
- Project 4 demonstrates client-side validation only and has no backend authentication or database.
- All projects are learning exercises and are not intended to serve as production applications without further development and testing.

## 🎯 Learning Outcomes

Through these projects, I progressed from building a semantic static webpage to creating responsive layouts, interactive interfaces, and client-side form validation.

This experience helped me strengthen my understanding of frontend fundamentals, accessibility, maintainable code organization, and the role of JavaScript in building interactive web experiences.

## 👨‍💻 Author

**Mujakkir Maher**

- GitHub: [@mujakkir-maher](https://github.com/mujakkir-maher)
- LinkedIn: [mujakkir-maher](https://www.linkedin.com/in/mujakkir-maher/)

---

*Part of the DecodeLabs Frontend Development Industrial Training track.*
