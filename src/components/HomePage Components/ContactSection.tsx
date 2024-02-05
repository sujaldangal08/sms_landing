import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-3 bg-background-color py-10 w-full">
      <h4 className="text-brand-color text-xs">Contact Us</h4>
      <h2 className="text-text-dark text-lg font-semibold">
        Get In Touch With Us
      </h2>
      <p className="text-xs text-text-light w-[45%] text-center">
        Reach out to us with any question or inquiry you have and we'll do our
        best to get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
