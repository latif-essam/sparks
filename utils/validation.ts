export const validateEmail = (email: string) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

export const validatePasswordStrength = (password: string) => {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongRegex.test(password);
};
