export const loginFormFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    className:
      "h-[42px] border-gray-300 focus-visible:border-black focus:ring-black rounded-sm  shadow-xs focus-visible:ring-black focus-visible:ring-[1px]",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    className:
      "h-[42px] border-gray-300 focus-visible:border-black focus:ring-black rounded-sm  shadow-xs focus-visible:ring-black focus-visible:ring-[1px]",
  },
  {
    name: "remember",
    type: "singleCheckbox",
    checkboxLabel: "Remember me",
    className: "text-sm text-gray-600",
  },
  {
    name: "captcha",
    type: "captcha",
    required: true,
  },
];
