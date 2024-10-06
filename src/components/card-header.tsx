import { twMerge } from "tailwind-merge";
import StarIcon from "@/components/icons/star-icon";

export default function CardHeader({ title, description, className }: { title: string; description: string, className?: string }) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-6", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-white" />
        <h3 className="font-serif text-3xl text-white">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-sm text-white/80 mt-2">{description}</p>
    </div>
  );
};

