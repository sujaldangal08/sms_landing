// "use client";

// import { useState } from "react";
// import Button from "./shared/Button";
// import Input from "./shared/Input";
// import TextArea from "./shared/TextArea";
// import { useForm } from "react-hook-form";
// import { contactInterface } from "@/types/formSchema";
// import { contactSchema } from "@/types/formSchema/contactFormSchema";
// import { ObjectSchema, AnyObject } from "yup";

// export default function ContactForm() {
//   const [formData, setFormData] = useState<{
//     name: string;
//     email: string;
//     country: string;
//     phone_number: string;
//     message: string;
//   }>({ name: "", email: "", country: "", phone_number: "", message: "" });

//   const sendMessage = () => {
//     if (formData) {
//       alert("Your Message has been sent");
//       console.log(formData);
//     }
//   };

//   const { register } = useForm<contactInterface>({
//     resolver: yupReslover(contactSchema),
//   });

//   const onChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex flex-col bg-white gap-5 lg:w-[70%] rg:w-[80%]  w-[90%] px-7 py-[30px] mt-6 outline outline-1 outline-neutral-200 rounded-md">
//       <div className="flex md:flex-row flex-col w-full md:gap-10 gap-5 justify-between">
//         <Input
//           label="Name"
//           placeholder="Your Name"
//           className="w-full"
//           type="text"
//           name="name"
//           register={register("fullName")}
//         />
//         <Input
//           label="Email address"
//           placeholder="Email"
//           className="w-full"
//           type="email"
//           name="email"
//           register={register("email")}
//         />
//       </div>
//       <div className="flex md:flex-row flex-col w-full md:gap-10 gap-5 justify-between">
//         <Input
//           label="Phone Number"
//           placeholder="+000"
//           className="w-full"
//           type="number"
//           name="phone_number"
//           register={register("phone")}
//         />
//         <Input
//           label="Country"
//           placeholder="Your Country"
//           className="w-full"
//           type="text"
//           name="country"
//           register={register("email")}
//         />
//       </div>
//       <TextArea
//         placeholder="Hi! We are...."
//         label="Message"
//         name="message"
//         onChange={onChange}
//       />
//       <Button
//         title="Send your message"
//         className={
//           "w-[200px] md:ml-[100%] ml-[50%] md:translate-x-[-100%] translate-x-[-50%] py-[10px]"
//         }
//         onClick={sendMessage}
//       />
//     </div>
//   );
// }
