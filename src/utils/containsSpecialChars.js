const containsSpecialChars = (str) => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return specialChars.test(str);
};

export default containsSpecialChars;
