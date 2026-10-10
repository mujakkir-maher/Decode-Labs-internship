Live Demo: https://mujakkir-maher.github.io/Decode-Labs-internship/project-4/

# Form Design & Validation

A responsive registration form built with semantic HTML, CSS, and vanilla JavaScript. It demonstrates custom field validation, password rules, accessible feedback, and controlled form submission.

## Features

- Semantic registration form with associated labels
- Full-name and email-format validation
- Password policy: at least 8 characters with uppercase, lowercase, a number, and a symbol
- Confirm-password matching
- Required terms checkbox
- Field-specific error messages and live form feedback
- Accessible error associations using `aria-describedby` and `aria-invalid`
- Password visibility toggle and strength indicator
- Responsive layout and visible keyboard focus
- No external dependencies or build tooling

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Project structure

```text
frontend-development-p4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── validation.js
│   └── main.js
├── docs/
│   ├── requirements.md
│   └── testing-guide.md
├── .gitignore
└── README.md
```

## Prerequisites

A modern web browser is sufficient. Node.js and a package manager are not required.

## Run locally

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: VS Code Live Server

1. Open this folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

There is no compilation or build step.

## How validation works

1. The browser dispatches the form's `submit` event.
2. JavaScript calls `event.preventDefault()` to prevent navigation/reload.
3. Reusable rules in `js/validation.js` validate the entered values.
4. Errors are shown beside the relevant fields and associated with inputs for assistive technology.
5. If all checks pass, a success message appears without sending the data anywhere.

The password must contain at least eight characters, an uppercase letter, a lowercase letter, a digit, and a symbol. The confirmation field must match the password.

## Testing

Follow [`docs/testing-guide.md`](docs/testing-guide.md) for manual test cases. See [`docs/requirements.md`](docs/requirements.md) for the requirement mapping.

## Security and limitations

This is a frontend learning demonstration, not a production authentication system.

- No data is sent to a backend or saved by the project.
- Email validation checks syntax only; it does not confirm that an inbox exists.
- Client-side validation can be bypassed. A real application must validate on the server and implement secure authentication and password storage.
- The success message means local validation passed; it does not mean an account was created.

## Source

Based on the supplied *Frontend Development P4 — Project 4: Form Design & Validation* training PDF.
