import Shikshya_Card_Overlay from "../../../public/overlays/Shikshya_Card_Overlay";

export default function FeatureCard({
  Icon,
  title,
  color,
  description,
}: {
  Icon: JSX.Element;
  title: string;
  color: string;
  description: string;
}) {
  return (
    <div className="flex flex-col outline outline-1 outline-neutral-100 rounded-md overflow-clip group flex-grow w-[270px]">
      <div className="flex flex-col items-center bg-white p-5 justify-between gap-3 relative">
        <Shikshya_Card_Overlay
          className="absolute right-0 top-0 z-[0]"
          color={color}
        />
        <div className={`p-3 rounded-full`} style={{ backgroundColor: color }}>
          {Icon}
        </div>
        <h2 className="text-sm font-medium text-text-dark z-[1]">{title}</h2>
        <p className="text-xs font-regular text-text-light z-[1]">
          {description}
        </p>
      </div>
      <div
        className={`w-full h-[5px] opacity-0 group-hover:opacity-[0.7] transition-opacity duration-700`}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
