import * as Yup from "yup";

export const signUpSchema = Yup.object({
  full_name: Yup.string()
    .min(2, "Fullname Must be 2 characters")
    .max(20, "Enter Name less then 20")
    .required("Pleas Enter Your Name"),
  username: Yup.string()
    .min(4, "Username Must be 4 characters")
    .max(12, "Enter Name less then 12")
    .required("Pleas Enter Username"),
  email: Yup.string()
    .email("Pleas enter valid email")
    .required("Pleas enter email"),
  password: Yup.string()
    .min(8, "Password Must be 8 characters")
    .max(12, "Enter password less then 12")
    .required("Pleas Enter Password"),
  cpassword: Yup.string()
    .required("Enter Comfirm Password")
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});
