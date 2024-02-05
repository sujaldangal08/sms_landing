import Button from "../shared/Button";

export default function ProductInsightSection() {
  return (
    <div className="flex flex-col items-center gap-3 bg-background-color py-10 w-full">
      <h4 className="text-brand-color text-xs">Product Insight</h4>
      <h2 className="text-text-dark text-lg font-semibold">
        Meet Our Product In Action
      </h2>
      <p className="text-xs text-text-light w-[45%] text-center">
        Empower your entire educational community with dedicated applications
        for students, teachers, and parents. Streamline communication, enhance
        learning, and stay connected effortlessly.
      </p>
      <iframe
        className="w-[60%] aspect-video"
        src="https://www.youtube.com/embed/8FZkxas126o?si=f_CwAaD5MV2kPsTP"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Button title="Request a Demo" className={"py-3 px-8 text-xs mt-5"} />
    </div>
  );
}
