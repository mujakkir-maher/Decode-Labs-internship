Live Demo: https://mujakkir-maher.github.io/Decode-Labs-internship/project-3/

# FocusFlow — Interactive Web Elements

A vanilla JavaScript project created for DecodeLabs Frontend Development Project 3.

## Features

- Add tasks dynamically
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks
- Filter All / Active / Completed
- Dynamic task statistics
- Dark mode toggle
- Dark mode preference saved with `localStorage`
- Task list saved with `localStorage`
- Responsive mobile-first layout
- Accessible markup with `aria-label`, `aria-live`, and `sr-only`
- DOM manipulation with `querySelector`, `createElement`, `classList`, and `textContent`
- Event handling with `addEventListener`
- Event delegation for dynamically created task items
- State management using JavaScript variables

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project 3 Concepts Demonstrated

### Input

User clicks, form submission, checkbox changes and filter selection.

### Process

JavaScript functions update the `tasks` state and determine the current UI state.

### Output

The DOM is re-rendered with updated counts, task elements and CSS classes.

## Data Flow

```
User Action -> Event Listener -> State Change -> render() -> DOM Update
```

## Project Structure

```
project-3/
├── index.html
├── style.css
├── app.js
└── README.md
```

## Run

Open `index.html` in a browser.

No framework or build tool is required.

## Author

Mujakkir Maher

- GitHub: https://github.com/mujakkir-maher