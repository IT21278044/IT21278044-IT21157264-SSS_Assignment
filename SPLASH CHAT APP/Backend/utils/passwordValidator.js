const passwordValidator = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumbers = /[0-9]/;
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  
    const errors = [];
  
    if (password.length < minLength) {
      errors.push(`Password must be at least ${minLength} characters long.`);
    }
    if (!hasUppercase.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    if (!hasLowercase.test(password)) {
      errors.push('Password must contain at least one lowercase letter.');
    }
    if (!hasNumbers.test(password)) {
      errors.push('Password must contain at least one number.');
    }
    if (!hasSpecialCharacters.test(password)) {
      errors.push('Password must contain at least one special character.');
    }
  
    return {
      isValid: errors.length === 0,
      errors
    };
  };
  
  module.exports = passwordValidator;
  