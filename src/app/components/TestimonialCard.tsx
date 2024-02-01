import Image from "next/image";
import TestimonialImage from "../../../public/testimonial_user.png";
import GradientQuotation from "../../../public/elements/GradientQuotationElement.svg";

export default function TestimonialCard({ className }: { className?: string }) {
  return (
    <div
      className={`${
        "flex flex-col gap-6 shadow-md bg-white p-6 rounded-lg " + className
      }`}
    >
      <div className="flex flex-row gap-2 relative">
        <Image
          alt="Testimonial Photo"
          src={TestimonialImage}
          width={200}
          height={200}
          className="w-[55px] rounded-full aspect-square object-cover absolute translate-x-[-70%] drop-shadow-lg"
        />
        <div className="flex flex-col gap-1 pl-[30px]">
          <h4 className="text-brand-color text-xxs">Sulav Rijal</h4>
          <h4 className="text-text-medium text-xxs">
            Kathmandu World School (Director)
          </h4>
        </div>
        <Image
          src={GradientQuotation}
          width={100}
          height={200}
          className="w-[50px] rounded-full aspect-square object-cover absolute right-[0] translate-y-[-80%] drop-shadow-lg"
          alt="Gradient Quotation"
        />
      </div>
      <p className="text-text-dark text-xs">
        "I absolutely love this mobile app! It's incredibly user-friendly and
        has made my and my student's life so much easier. The features are
        top-notch, and I can't imagine my school day without it. Highly
        recommended!"
      </p>
    </div>
  );
}
