import CircleTickIcon from "../../../../public/elements/CircleTickElement";
import TickIcon from "../../../../public/elements/TickElement";
import MultiApplicationTab from "../MultiApplicationTab";

export default function MultiApplicationSection() {
  return (
    <div className="flex flex-col items-center relative bg-white w-full gap-2 px-[8%] py-[50px]">
      <h3 className="text-brand-color text-xs">Multi-application</h3>
      <h2 className="font-semibold text-lg  text-text-dark">
        We’ve got you covered!
      </h2>
      <TickIcon className="absolute right-[20%] top-[8%]" />
      <CircleTickIcon className="absolute left-[20%] top-[18%]" />
      <p className="text-center w-[45%] text-xs text-text-light">
        Empower your entire educational community with dedicated applications
        for students, teachers, and parents. Streamline communication, enhance
        learning, and stay connected effortlessly.
      </p>
      <MultiApplicationTab />
    </div>
  );
}
