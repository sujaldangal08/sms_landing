import InnovationIcon from "../../../public/icons/InnovationIcon";
import TrustIcon from "../../../public/icons/TrustIcon";
import StrengthIcon from "../../../public/icons/StrengthIcon";
import GoldIcon from "../../../public/icons/GoldIcon";

export default function CompanyFeature() {
  

  return (
    <div className="bg-header-gradient w-full xl:px-[10%] lg:px-[5%] px-[3%] md:py-[80px] py-[40px] flex flex-col gap-4 items-center">
      <h4 className="text-xxs text-brand-color">Our Core Values</h4>
      <h2 className="sm:text-rg text-md font-semibold">
        Guiding Principles That Define Us
      </h2>
      <h4 className="text-text-light sm:text-xs text-xxs text-center lg:w-1/2 rg:w-[60%] md:w-[70%]">
        At the heart of our company are core values that steer our actions and
        define our identity. These principles underpin every aspect of our work,
        driving innovation, trust, diversity, and a customer-centric approach
      </h4>
      <div className="xl:flex grid rg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-2 xl:gap-4 sm:gap-3 gap-3">
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <InnovationIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Innovation at our Core
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            We pioneer creative solutions, setting new standards in every
            project we undertake.
          </p>
        </div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <TrustIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Trust Built In
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            Our reliability is your peace of mind. We deliver on our promises,
            every time.
          </p>
        </div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <StrengthIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Strength in Diversity
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            We celebrate differences and cultivate an inclusive environment for
            all.
          </p>
        </div>
        <div className="hidden rg:block"></div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <GoldIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Your Success, Our Priority
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            Our dedication to your satisfaction drives us to go above and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
