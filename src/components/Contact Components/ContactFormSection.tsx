"use client";

import { contactInterface } from "@/types/formSchema";
import { contactSchema } from "@/types/formSchema/contactFormSchema";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import TextArea from "../../components/shared/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactAction from "@/actions/contactAction";
import { toast } from "react-toastify";

// export default function ContactFormSection() {
//   return (
//     <div className="bg-background-color w-full xl:px-[12%] lg:px-[7%] px-[5%] md:py-[80px] py-[40px] flex flex-col items-center">
//       <div className="w-full sm:p-5 p-3 bg-white rounded-md flex flex-col gap-2">
//         <h4 className="text-xxs text-text-light">We’re here to help you!</h4>
//         <h2 className="sm:text-rg text-md  text-brand-color font-semibold">
//           Shikshya <span className="text-[#202020]">Support</span>
//         </h2>
//         <div className="md:grid flex flex-col grid-cols-2 gap-4">
//           <Input
//             label="Full Name"
//             placeholder="Enter full name"
//             className=""
//             type="text"
//             name="name"
//             isRequired
//             onChange={() => {}}
//           />
//           <Input
//             label="Organization Name"
//             placeholder="Enter organization name"
//             className=""
//             type="text"
//             name="organization_name"
//             isRequired
//             onChange={() => {}}
//           />
//           <Input
//             label="Email Address"
//             placeholder="Enter email address"
//             className=""
//             type="text"
//             name="email"
//             isRequired
//             onChange={() => {}}
//           />
//           <Input
//             label="Phone Number (Optional)"
//             placeholder="Enter phone number"
//             className=""
//             type="tel"
//             name="phone_number"
//             onChange={() => {}}
//           />
//           <Input
//             label="Subject"
//             placeholder="Application Subject"
//             className=""
//             type="text"
//             name="subject"
//             isRequired
//             onChange={() => {}}
//           />
//           <TextArea
//             label="Message"
//             placeholder="Your Message...."
//             className=""
//             name="subject"
//             isRequired
//             onChange={() => {}}
//           />
//         </div>
//         <Button title="Send Message" className={"w-[200px] mx-auto my-4"} />
//       </div>
//     </div>
//   );
// }

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactInterface>({
    resolver: yupResolver(contactSchema),
  });

  const sendContact = async (e: contactInterface) => {
    try {
      const response = await contactAction(e);
      if (response) {
        toast.success("Message Sent");
        reset();
      } else {
        toast.error("Server Error");
      }
    } catch (e) {
      console.log("--------------------------------");
      console.log("Error on sendContact");
      console.log(e);
    }
  };

  return (
    <div className="w-[90%] mx-auto sm:p-5 p-3 bg-white rounded-md flex flex-col gap-2">
      <div className="md:grid flex flex-col grid-cols-2 gap-4">
        <div>
          <Input
            label="Full Name"
            placeholder="Enter full name"
            className=""
            type="text"
            name="fullName"
            isRequired
            register={register("fullName")}
          />
          <label className="text-red-500 text-xxxs">
            {errors?.fullName && errors?.fullName.message}
          </label>
        </div>
        <div>
          <Input
            label="Organization Name"
            placeholder="Enter organization name"
            className=""
            type="text"
            name="organizationName"
            isRequired
            register={register("organizationName")}
          />
          <label className="text-red-500 text-xxxs">
            {errors?.organizationName && errors?.organizationName.message}
          </label>
        </div>
        <div>
          <Input
            label="Email Address"
            placeholder="Enter email address"
            className=""
            type="email"
            name="email"
            isRequired
            register={register("email")}
          />
          <label className="text-red-500 text-xxxs">
            {errors?.email && errors?.email.message}
          </label>
        </div>
        <div>
          <Input
            label="Phone Number (Optional)"
            placeholder="Enter phone number"
            className=""
            type="tel"
            name="phone"
            register={register("phone")}
          />
        </div>
        <div>
          <Input
            label="Subject"
            placeholder="Application Subject"
            className=""
            type="text"
            name="subject"
            isRequired
            register={register("subject")}
          />
          <label className="text-red-500 text-xxxs">
            {errors?.subject && errors?.subject.message}
          </label>
        </div>
        <div>
          <TextArea
            label="Message"
            placeholder="Your Message...."
            className=""
            name="message"
            isRequired
            register={register("message")}
          />
          <label className="text-red-500 text-xxxs">
            {errors?.message && errors?.message.message}
          </label>
        </div>
      </div>
      <Button
        title="Send Message"
        className={"w-[200px] mx-auto my-4"}
        onClick={handleSubmit(sendContact)}
      />
    </div>
  );
}
