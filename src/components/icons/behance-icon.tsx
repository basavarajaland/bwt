import { SVGProps } from "react";

export function BehanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 7h7v2h-7v2h6.5a2.5 2.5 0 0 1 0 5H14v-2h7v-2h-7z" />
      <path d="M8 7H3v10h5a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-3 2h3v2H5zm0 4h4v1a1 1 0 0 1-1 1H5z" />
      <path d="M15 15h2" />
    </svg>
  );
}
