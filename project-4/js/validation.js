/* Reusable field validation rules. */
(() => {
  "use strict";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;

  function validateField(field, values) {
    const value = field.type === "checkbox" ? field.checked : field.value.trim();

    if (field.required && (field.type === "checkbox" ? !value : value === "")) {
      return field.type === "checkbox"
        ? "Please agree to the terms before continuing."
        : "This field is required.";
    }
    if (value === "" && !field.required) return "";

    switch (field.name) {
      case "fullName":
        if (value.length < 2) return "Enter at least 2 characters.";
        if (value.length > 80) return "Name must be 80 characters or fewer.";
        return "";
      case "email":
        return value.length > 254 || !emailPattern.test(value)
          ? "Enter a valid email address, such as you@example.com."
          : "";
      case "password":
        return !passwordPattern.test(value)
          ? "Use 8+ characters with uppercase, lowercase, a number and a symbol."
          : "";
      case "confirmPassword":
        return value !== values.password ? "Your passwords do not match." : "";
      default:
        return "";
    }
  }

  function passwordScore(password) {
    if (!password) return 0;
    return [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[^A-Za-z0-9\s]/.test(password)
    ].filter(Boolean).length;
  }

  window.FormValidation = { validateField, passwordScore };
})();
