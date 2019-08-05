export default [
  {
    name: "first-name",
    type: "text",
    placeholder: "First name",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Enter your first name"
      }
    ],
    required: true
  },
  {
    name: "last-name",
    type: "text",
    placeholder: "Last name",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Enter your last name"
      }
    ],
    required: true
  },
  {
    name: "login",
    type: "text",
    placeholder: "Login",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Enter your login"
      },
      {
        pattern: /.{6,}/,
        errormsg: "Use 6 or more characters"
      },
      {
        pattern: /[\w\d]+/,
        errormsg: "You can only use letters and numbers"
      }
    ],
    required: true
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Enter your email address"
      },
      {
        pattern: /[\w\d]+@[\w\d]+\.[\w\d]+/,
        errormsg: "This is not a valid email address"
      }
    ],
    required: true
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Enter your password"
      },
      {
        pattern: /.{6,}/,
        errormsg: "Use 6 or more characters"
      }
    ],
    required: true
  },
  {
    name: "password-confirmation",
    type: "password",
    placeholder: "Password confirmation",
    validations: [
      {
        pattern: /.+/,
        errormsg: "Confirm your password"
      }
    ],
    required: true
  }
];
