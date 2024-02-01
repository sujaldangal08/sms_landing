import Image from "next/image";
import ClutchReview from "../../../../public/clutch_review.webp";

export default function RatingSection() {
  return (
    <>
      <div className="bg-white shadow xl:w-[76%] lg:w-[86%] w-[90%] lg:px-10 px-6 py-[30px] h-[100px] rg:flex hidden flex-row items-center justify-between absolute left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md">
        <Image
          src={ClutchReview}
          width={250}
          height={250}
          alt="Clutch Review"
          className="w-[150px]"
        />
        <div className="w-[1px] h-[180%] bg-gray-300"></div>
        <div>
          <h2 className="text-rg font-semibold text-text-normal">10+</h2>
          <h4 className="text-xxs font-medium text-text-medium">
            Total Schools Enrolled
          </h4>
        </div>
        <div className="w-[1px] h-[180%] bg-gray-300"></div>
        <div>
          <h2 className="text-rg font-semibold text-text-normal">90%</h2>
          <h4 className="text-xxs font-medium text-text-medium">
            Customer Satisfaction
          </h4>
        </div>
        <div className="w-[1px] h-[180%] bg-gray-300"></div>
        <div>
          <h2 className="text-rg font-semibold text-text-normal">5+ Years </h2>
          <h4 className="text-xxs font-medium text-text-medium">
            Serving the Best Systems
          </h4>
        </div>
        <div className="w-[1px] h-[180%] bg-gray-300"></div>
        <div>
          <h2 className="text-rg font-semibold text-text-normal">24/7</h2>
          <h4 className="text-xxs font-medium text-text-medium">
            Customer Service
          </h4>
        </div>
      </div>
      <div className="rg:hidden flex flex-col w-[90%] absolute bg-white left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md p-5 shadow">
        <Image
          src={ClutchReview}
          width={300}
          height={300}
          alt="Clutch Review"
          className="sm:w-[180px] w-[140px]"
        />
        <hr className="w-full h-[1px] bg-gray-400 sm:my-4 my-3" />
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-md text-sm font-semibold text-text-normal">
              10+
            </h2>
            <h4 className="sm:text-xxs text-4xs font-medium text-text-medium">
              Total Schools Enrolled
            </h4>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-md text-sm font-semibold text-text-normal">
              90%
            </h2>
            <h4 className="sm:text-xxs text-4xs font-medium text-text-medium">
              Customer Satisfaction
            </h4>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-md text-sm font-semibold text-text-normal">
              5+ Years
            </h2>
            <h4 className="sm:text-xxs text-4xs font-medium text-text-medium">
              Serving the Best Systems
            </h4>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-md text-sm font-semibold text-text-normal">
              24/7
            </h2>
            <h4 className="sm:text-xxs text-4xs font-medium text-text-medium">
              Customer Service
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
