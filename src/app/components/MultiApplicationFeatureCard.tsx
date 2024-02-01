import SettingIcon from "../../../public/icons/SettingIcon";

export default function MultiApplicationFeatureCard({
  bgColor,
  title,
  color,
}: {
  bgColor: string;
  title: string;
  color?: string;
}) {
  return (
    <div className="flex flex-row items-start w-[350px] gap-5">
      <div className="p-2 rounded-full" style={{ backgroundColor: bgColor }}>
        <SettingIcon width="36px" height="36px" color={color} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-text-dark text-md font-medium">{title}</h2>
        <p className="text-text-light font-regular text-xxs">
          Manage and pay school fees securely from the comfort of your home,
          keeping track of payment history.
        </p>
      </div>
    </div>
  );
}
