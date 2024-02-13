import SettingIcon from "../../public/icons/SettingIcon";

export default function MultiApplicationFeatureCard({
  bgColor,
  title,
  description,
  color,
}: {
  bgColor: string;
  title: string;
  color?: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-start xl:gap-5 rg:gap-4 sm:gap-3 gap-2">
      <div className="p-2 rounded-full" style={{ backgroundColor: bgColor }}>
        <SettingIcon
          color={color}
          className="xl:w-[36px] xl:h-[36px] lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px]  w-[20px] h-[20px]"
        />
      </div>
      <div className="flex flex-col md:gap-2 gap-1">
        <h2 className="text-text-dark xl:text-md md:text-sm sm:text-xs text-xxs font-medium">
          {title}
        </h2>
        <p className="text-text-light font-regular md:text-xxs text-xxxs">
          {description}
        </p>
      </div>
    </div>
  );
}
