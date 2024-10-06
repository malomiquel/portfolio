import { SVGProps } from "react";

interface CheckCircleIconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
}

export default function CheckCircleIcon({
  color = "currentColor",
  size = 24,
  ...props
}: CheckCircleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      fill="none"
      stroke={color}
      width={size}
      height={size}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

