import TestimonialCard from "../TestimonialCard";
import Button from "../shared/Button";

export default function TestimonialSection() {
  return (
    <div className="flex flex-row items-start gap-2  bg-brand-blue-light w-full h-[750px] pt-[100px]">
      <div className="flex flex-col gap-3 items-start px-[12%]">
        <h4 className="text-brand-color text-xxs">Testimonial</h4>
        <h2 className="text-text-dark text-lg font-semibold">
          See What Others Are Saying
        </h2>
        <p className="text-xs text-text-light w-1/2 text-center">
          We asked how satisfied they are with our service, Here are their
          statements
        </p>
        <Button title="Want to become our client?" />
      </div>
      <div className="relative">
        <TestimonialCard className="absolute translate-y-[-60%] w-[400px]" />
        <TestimonialCard className="absolute translate-y-[70%] w-[350px] translate-x-[50px]" />
        <TestimonialCard className="absolute translate-y-[50%] translate-x-[-100%] w-[350px]" />
        <TestimonialCard className="absolute translate-y-[180%] translate-x-[-150%] w-[400px]" />
      </div>
    </div>
  );
}
