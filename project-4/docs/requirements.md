# Requirements Mapping

This implementation is based on the supplied *Frontend Development P4 — Project 4: Form Design & Validation* PDF.

| Requirement | Implementation | Status |
|---|---|---|
| Semantic form structure | `index.html` uses labels, inputs, a form and submit button | Implemented |
| Name and email fields | Full name and email inputs | Implemented |
| JavaScript validation | `js/validation.js` and `js/main.js` | Implemented |
| Custom feedback | Field-level errors and a live status message | Implemented |
| Prevent default submission | Submit handler calls `event.preventDefault()` | Implemented |
| Email and password patterns | Regex-based format and password checks | Implemented |
| Password policy | 8+ characters, uppercase, lowercase, number and symbol | Implemented |
| Confirm-password check | Password values are compared | Implemented |
| Accessible feedback | `aria-describedby`, `aria-invalid`, `role="status"` and `aria-live` | Implemented |
| Responsive layout | CSS media queries | Implemented; browser verification recommended |

## Scope and limitations

- This project performs client-side validation only.
- It does not send data to a server, create an account, or persist user information.
- Email validation checks a practical format; it cannot prove that an inbox exists.
- Client-side checks are not a security boundary. A real service must validate data on the server as well.
