import { SVGProps } from "react";

interface ArrowUpRightIconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
}

export default function ArrowUpRightIcon({
  color = "currentColor",
  size = 24,
  ...props
}: ArrowUpRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      stroke={color}
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

