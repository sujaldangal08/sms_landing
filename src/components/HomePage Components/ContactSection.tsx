import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-3 bg-background-color py-10 w-full">
      <h4 className="text-brand-color sm:text-xs text-xxs">Contact Us</h4>
      <h2 className="text-text-dark md:text-lg text-rg font-semibold">
        Get In Touch With Us
      </h2>
      <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
        Reach out to us with any question or inquiry you have and we'll do our
        best to get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
