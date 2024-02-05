import AvailabilityIcon from "../../../public/icons/AvailabilityIcon";
import EmailIcon from "../../../public/icons/EmailIcon";
import LocationIcon from "../../../public/icons/LocationIcon";
import PhoneIcon from "../../../public/icons/PhoneIcon";

export default function ContactFeature() {
  return (
    <div className="bg-header-gradient w-full xl:px-[10%] lg:px-[5%] px-[3%] md:py-[80px] py-[40px] flex flex-col gap-2 items-center">
      <h4 className="text-xxs text-brand-color">
        We’re here for your queries.
      </h4>
      <h2 className="sm:text-rg text-md font-semibold">Contact Information</h2>
      <h4 className="text-text-light sm:text-xs text-xxs text-center">
        Browse through our collection of frequently asked questions to find
        quick answers to common queries.
      </h4>
      <div className="xl:flex grid rg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-2 xl:gap-4 sm:gap-3 gap-3">
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <EmailIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Email
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            We pioneer creative solutions, setting new standards in every
            project we undertake.
          </p>
        </div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <PhoneIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Phone
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            Our reliability is your peace of mind. We deliver on our promises,
            every time.
          </p>
        </div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <LocationIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            Location
          </h3>
          <p className="text-text-light sm:text-xxs text-xxxs text-center">
            We celebrate differences and cultivate an inclusive environment for
            all.
          </p>
        </div>
        <div className="hidden rg:block"></div>
        <div className="xl:w-[280px] lg:w-[260px] md:w-[250px] sm:w-[220px] w-[280px] bg-white outline outline-1 outline-neutral-200 flex flex-col items-center rounded-lg sm:gap-1 gap-[3px] p-2 ">
          <AvailabilityIcon width="35px" />
          <h3 className="text-text-normal font-medium sm:text-sm text-xs">
            24/7 Availability
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
