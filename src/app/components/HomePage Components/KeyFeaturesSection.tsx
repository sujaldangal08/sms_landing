import AIIcon from "../../../../public/icons/AIIcon";
import AutomationIcon from "../../../../public/icons/AutomationIcon";
import MultiDeviceIcon from "../../../../public/icons/MultiDeviceIcon";
import QuestionMark from "../../../../public/elements/QuotationElement";
import UserFriendly from "../../../../public/icons/UserFriendly";
import FeatureCard from "../FeatureCard";
import { getFeatureData } from "../../../../actions";

export default async function KeyFeaturesSection() {
  const data = await getFeatureData();

  return (
    <div className="flex flex-col items-center gap-2 bg-background-color w-full h-[680px] md:pt-[180px] sm:pt-[160px] pt-[150px]">
      <h4 className="text-brand-color text-xxs">{data.Subtitle}</h4>
      <h2 className="text-text-dark text-lg font-semibold">{data.Title}</h2>
      <p className="sm:text-xs text-xxs text-text-light lg:w-[50%] rg:w-[60%] sm:w-[70%] w-[80%] text-center">
        {data.Description}
      </p>
      <QuestionMark className="absolute left-0 xl:translate-x-[500%] lg:translate-x-[330%] rg:translate-x-[250%]  md:translate-x-[150%] sm:translate-x-[80%] sm:block hidden translate-y-[100%]" />
      <QuestionMark className="absolute right-0 xl:translate-x-[-500%] lg:translate-x-[-330%] rg:translate-x-[-250%]  md:translate-x-[-150%] sm:translate-x-[-80%]  translate-y-[0%] rotate-45  sm:block hidden" />
      <div className="flex flex-row flex-wrap gap-5 px-[12%] pt-[1.5%]">
        <div className="flex-1">
          <FeatureCard
            Icon={<AIIcon width="27px" height="27px" />}
            title="AI Integrated"
            color="#F15C5C"
            description={data.DescriptionOne}
          />
        </div>
        <div className="flex-1">
          <FeatureCard
            Icon={<AutomationIcon width="27px" height="27px" />}
            title="Automation"
            color="#B25CF1"
            description={data.DescriptionTwo}
          />
        </div>
        <div className="flex-1">
          <FeatureCard
            Icon={<UserFriendly width="27px" height="27px" />}
            title="User Friendly Experience"
            color="#5C7DF1"
            description={data.DescriptionThree}
          />
        </div>
        <div className="flex-1">
          <FeatureCard
            Icon={<MultiDeviceIcon width="27px" height="27px" />}
            title="Multi Application"
            color="#5CDFF1"
            description={data.DescriptionFour}
          />
        </div>
      </div>
    </div>
  );
}
