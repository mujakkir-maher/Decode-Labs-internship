/* Wire validation rules to form interactions and accessible feedback. */
(() => {
  "use strict";

  const form = document.querySelector("#registration-form");
  const status = document.querySelector("#form-status");
  const password = document.querySelector("#password");
  const confirmation = document.querySelector("#confirm-password");
  const toggleButton = document.querySelector("#toggle-password");
  const strengthBar = document.querySelector("#strength-bar");
  const strengthLabel = document.querySelector("#password-strength");
  const fields = [...form.querySelectorAll("input")];
  const byName = Object.fromEntries(fields.map((field) => [field.name, field]));

  function values() {
    return {
      fullName: byName.fullName.value.trim(),
      email: byName.email.value.trim(),
      password: byName.password.value,
      confirmPassword: byName.confirmPassword.value,
      terms: byName.terms.checked
    };
  }

  function setError(field, message) {
    const error = document.querySelector(`#${field.id}-error`);
    field.setAttribute("aria-invalid", String(Boolean(message)));
    error.textContent = message;
    error.hidden = !message;
  }

  function validateField(field) {
    const message = window.FormValidation.validateField(field, values());
    setError(field, message);
    return !message;
  }

  function clearStatus() {
    status.hidden = true;
    status.textContent = "";
    status.className = "form-status";
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.className = `form-status is-${type}`;
    status.hidden = false;
  }

  function updateStrength() {
    const score = window.FormValidation.passwordScore(password.value);
    const labels = ["Not entered", "Very weak", "Weak", "Fair", "Good", "Strong"];
    const colors = ["#aebbb2", "#b42332", "#c45c2d", "#bd8a20", "#39815d", "#176343"];
    strengthBar.style.width = `${score * 20}%`;
    strengthBar.style.backgroundColor = colors[score];
    strengthLabel.textContent = labels[score];
  }

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim() !== "" || field.type === "checkbox") validateField(field);
    });

    field.addEventListener("input", () => {
      clearStatus();
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
      if (field.name === "password") {
        updateStrength();
        if (confirmation.value) validateField(confirmation);
      }
    });

    if (field.type === "checkbox") {
      field.addEventListener("change", () => validateField(field));
    }
  });

  toggleButton.addEventListener("click", () => {
    const reveal = password.type === "password";
    password.type = reveal ? "text" : "password";
    toggleButton.textContent = reveal ? "Hide" : "Show";
    toggleButton.setAttribute("aria-pressed", String(reveal));
  });

  form.addEventListener("submit", (event) => {
    // Prevent navigation so validation can run before any submission.
    event.preventDefault();
    clearStatus();

    let firstInvalid = null;
    fields.forEach((field) => {
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      showStatus("Please review the highlighted fields and correct the errors.", "error");
      firstInvalid.focus();
      return;
    }

    // This demonstration validates locally; it does not create an account.
    showStatus("Validation successful. The form is ready to connect to a backend.", "success");
    status.focus();
  });

  updateStrength();
})();
