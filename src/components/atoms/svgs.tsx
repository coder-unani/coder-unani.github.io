import * as React from "react";
import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  width?: number | 0;
  height?: number | 0;
}

const SVGArrowDown = (props: IProps) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
    />
  </svg>
);

const SVGArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
    />
  </svg>
);

const SVGAccount = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"
    />
  </svg>
);

const SVGClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
    />
  </svg>
);

const SVGCommentDiscussion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z"
    />
  </svg>
);

const SVGExtensions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
    />
  </svg>
);

const SVGFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"
    />
  </svg>
);

const SVGPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 10V2H14V10H2Z"
    />
  </svg>
);

const SVGSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"
    />
  </svg>
);

const SVGSettingGear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"
    />
  </svg>
);

const SVGSidebarLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H7V2H14V14Z"
    />
  </svg>
);

const SVGSourceControl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"
    />
  </svg>
);

const SVGFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5l-.01 4zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99z"
    />
  </svg>
);

const SVGFolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11l.5.5zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08L2 3zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79l-2.37 6z"
    />
  </svg>
);

const SVGFileHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"HTML5"}</title>
    <path
      fill="current"
      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
    />
  </svg>
);

const SVGFileCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"CSS3"}</title>
    <path
      fill="current"
      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
    />
  </svg>
);

const SVGFileJs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"JavaScript"}</title>
    <path
      fill="current"
      d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
    />
  </svg>
);

const SVGFileJson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="current"
      d="m5 3h2v2h-2v5a2 2 0 0 1 -2 2 2 2 0 0 1 2 2v5h2v2h-2c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0 -2 -2h-1v-2h1a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0 -2 2v4a2 2 0 0 1 -2 2h-2v-2h2v-5a2 2 0 0 1 2 -2 2 2 0 0 1 -2 -2v-5h-2v-2h2m-7 12a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m-4 0a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m8 0a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1z"
    />
  </svg>
);

export {
  SVGArrowDown,
  SVGArrowRight,
  SVGAccount,
  SVGClose,
  SVGCommentDiscussion,
  SVGExtensions,
  SVGFiles,
  SVGPanel,
  SVGSearch,
  SVGSettingGear,
  SVGSidebarLeft,
  SVGSourceControl,
  SVGFolder,
  SVGFolderOpen,
  SVGFileHtml,
  SVGFileCss,
  SVGFileJs,
  SVGFileJson,
};
