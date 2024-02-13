import CircleTickIcon from "../../../public/elements/CircleTickElement";
import TickIcon from "../../../public/elements/TickElement";
import MultiApplicationTab from "../MultiApplicationTab";

export default function MultiApplicationSection() {
  return (
    <div className="flex flex-col items-center relative bg-white w-full gap-3 xl:px-[8%] lg:px-[7%] px-[5%] py-[50px]">
      <h3 className="text-brand-color sm:text-xs text-xxs">
        Multi-application
      </h3>
      <h2 className="text-text-dark md:text-lg text-rg font-semibold">
        We’ve got you covered!
      </h2>
      <TickIcon className="absolute right-[20%] top-[8%] lg:block hidden" />
      <CircleTickIcon className="absolute left-[20%] top-[18%] lg:block hidden" />
      <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
        Explore a world of possibilities with our Multi-Application feature –
        because we've got you covered! From lesson planning to attendance
        tracking, assignments, and more, enjoy a seamless and comprehensive
        experience all in one place
      </p>
      <MultiApplicationTab />
    </div>
  );
}
