type authType = {
  heading: string;
  text: string;
};

type authAuthType = {
  signin: authType;
  signup: authType;
  forgot: authType;
  verification: authType;
  reset: authType;
};

export const authContent: authAuthType = {
  signin: {
    heading: "Welcome back",
    text: "Access your account securely by using your email and password.",
  },
  signup: {
    heading: "Set Up Your Account",
    text: "Complete yout account setup by providing your proper biography info.",
  },

  forgot: {
    heading: "Forgot Password",
    text: "Provide the email address associated with your account in the designated field.",
  },
  verification: {
    heading: "Verification Code",
    text: "We've sent the code to your mail address that you includes: ",
  },
  reset: {
    heading: "Reset Passowrd",
    text: "Ensure the security of your account by selecting a robust and fortified password.",
  },
} as const;
