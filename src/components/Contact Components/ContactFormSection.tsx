"use client";

import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import TextArea from "../../components/shared/TextArea";

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
  return (
    <div className="w-[90%] mx-auto sm:p-5 p-3 bg-white rounded-md flex flex-col gap-2">
      <div className="md:grid flex flex-col grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="Enter full name"
          className=""
          type="text"
          name="name"
          isRequired
          onChange={() => {}}
        />
        <Input
          label="Organization Name"
          placeholder="Enter organization name"
          className=""
          type="text"
          name="organization_name"
          isRequired
          onChange={() => {}}
        />
        <Input
          label="Email Address"
          placeholder="Enter email address"
          className=""
          type="text"
          name="email"
          isRequired
          onChange={() => {}}
        />
        <Input
          label="Phone Number (Optional)"
          placeholder="Enter phone number"
          className=""
          type="tel"
          name="phone_number"
          onChange={() => {}}
        />
        <Input
          label="Subject"
          placeholder="Application Subject"
          className=""
          type="text"
          name="subject"
          isRequired
          onChange={() => {}}
        />
        <TextArea
          label="Message"
          placeholder="Your Message...."
          className=""
          name="subject"
          isRequired
          onChange={() => {}}
        />
      </div>
      <Button title="Send Message" className={"w-[200px] mx-auto my-4"} />
    </div>
  );
}
