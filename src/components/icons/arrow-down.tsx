import { SVGProps } from "react";

interface ArrowDownIconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
}

export default function ArrowDownIcon({
  color = "currentColor",
  size = 24,
  ...props
}: ArrowDownIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      width={size}
      height={size}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  );
}

