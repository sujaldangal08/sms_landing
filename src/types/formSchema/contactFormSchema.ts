import * as y from "yup";

export const contactSchema = y.object({
  fullName: y.string().required("Please enter full name"),
  organizationName: y.string().required("Please enter organization name"),
  email: y.string().email("Invalid Email").required("Please enter your email"),
  phone: y.string(),
  subject: y.string().required("Please enter message subject"),
  message: y.string().required("Please enter your message"),
});

export type contactInterface = y.InferType<typeof contactSchema>;
