export const expressions = {
  name: /^[a-zA-Z ]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  number: /^[6-9]\d{9}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$]).{8,}$/,
} as const;
