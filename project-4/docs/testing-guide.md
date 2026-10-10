# Manual Testing Guide

## Run

Open `index.html` in a modern browser, or use a static server such as VS Code Live Server. No package installation or build step is needed.

| Test | Action | Expected result |
|---|---|---|
| Empty form | Submit without entering data | Required errors appear and the first invalid field receives focus |
| Short name | Enter one character and leave the field | Name length error appears |
| Invalid email | Enter `not-an-email` | Email format error appears |
| Weak password | Enter `password` | Password rule error appears and strength indicator updates |
| Strong password | Include 8+ chars, uppercase, lowercase, number and symbol | Password validation passes |
| Mismatched passwords | Enter different password values | Confirmation error appears |
| Terms unchecked | Complete fields but do not check terms | Terms error appears |
| Valid submission | Complete all fields and check terms | Success status appears without page reload |
| Password visibility | Activate Show, then Hide | Password visibility toggles |
| Keyboard navigation | Tab through controls | Focus remains visible and controls are keyboard reachable |
| Mobile layout | Resize viewport to a narrow screen | Form changes to a single-column layout |

These are test instructions, not a claim that every case has been executed. Record actual results when running them in a browser.
