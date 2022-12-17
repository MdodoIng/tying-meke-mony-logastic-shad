import React, { HtmlHTMLAttributes } from 'react';

export const Icon = ({ className }: any) => (
  <svg
    aria-hidden="true"
    height="44"
    viewBox="0 0 16 16"
    version="1.1"
    width="44"
    data-view-component="true"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

export const CallIcon = (
  props: React.SVGProps<SVGAElement> | JSX.IntrinsicElements | any,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#000000"
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
  </svg>
);

export const Spinner = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M17.6 39q-5.95-2-9.8-7.15Q3.95 26.7 3.95 20q0-1.6.25-3.2t.8-3.15L1.8 15.5.3 12.95l8.65-5 5 8.6-2.6 1.5-2.9-4.95q-.7 1.65-1.075 3.4T7 20.05q0 5.8 3.425 10.25t8.725 6.05ZM32 13v-3h5.75q-2.4-3.3-6.025-5.15Q28.1 3 24 3q-3.45 0-6.425 1.25Q14.6 5.5 12.3 7.7L10.75 5q2.7-2.35 6.05-3.675Q20.15 0 23.95 0q4.4 0 8.3 1.775Q36.15 3.55 39 6.8V3h3v10Zm-2.25 31-8.65-5 5-8.6 2.55 1.5-2.9 5.05q6.5-.65 10.875-5.475Q41 26.65 41 20.05 41 19 40.875 18q-.125-1-.375-2h3.1q.2 1 .3 2 .1 1 .1 2 0 7.15-4.475 12.65T28.1 39.6l3.15 1.85Z" />
  </svg>
);
export const Love = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" />
  </svg>
);
export const Cart = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z" />
  </svg>
);
export const User = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" />
  </svg>
);
export const GridApps = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M9 22.5q-1.25 0-2.125-.875T6 19.5V9q0-1.25.875-2.125T9 6h10.5q1.25 0 2.125.875T22.5 9v10.5q0 1.25-.875 2.125T19.5 22.5ZM9 42q-1.25 0-2.125-.875T6 39V28.5q0-1.25.875-2.125T9 25.5h10.5q1.25 0 2.125.875T22.5 28.5V39q0 1.25-.875 2.125T19.5 42Zm19.5-19.5q-1.25 0-2.125-.875T25.5 19.5V9q0-1.25.875-2.125T28.5 6H39q1.25 0 2.125.875T42 9v10.5q0 1.25-.875 2.125T39 22.5Zm0 19.5q-1.25 0-2.125-.875T25.5 39V28.5q0-1.25.875-2.125T28.5 25.5H39q1.25 0 2.125.875T42 28.5V39q0 1.25-.875 2.125T39 42ZM9 19.5h10.5V9H9Zm19.5 0H39V9H28.5Zm0 19.5H39V28.5H28.5ZM9 39h10.5V28.5H9Zm19.5-19.5Zm0 9Zm-9 0Zm0-9Z" />
  </svg>
);
export const Fire = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M11 28q0 3.15 1.425 5.925T16.4 38.55q-.2-.6-.3-1.225Q16 36.7 16 36.1q0-1.6.6-3t1.75-2.55L24 25l5.65 5.55q1.15 1.15 1.75 2.55.6 1.4.6 3 0 .6-.1 1.225-.1.625-.3 1.225 2.55-1.85 3.975-4.625Q37 31.15 37 28q0-2.7-1.15-5.275T32.55 18q-1.05.75-2.2 1.175-1.15.425-2.3.425-3.05 0-5.05-2.075T21 12.3v-1q-2.3 1.65-4.15 3.65-1.85 2-3.15 4.175-1.3 2.175-2 4.45Q11 25.85 11 28Zm13 1.2-3.55 3.5q-.7.7-1.075 1.55Q19 35.1 19 36.1q0 2.05 1.45 3.475Q21.9 41 24 41q2.1 0 3.55-1.425Q29 38.15 29 36.1q0-1-.375-1.85-.375-.85-1.075-1.55ZM24 6v6.6q0 1.7 1.175 2.85 1.175 1.15 2.875 1.15.9 0 1.675-.375T31.1 15.1L32 14q3.7 2.1 5.85 5.85Q40 23.6 40 28q0 6.7-4.65 11.35Q30.7 44 24 44q-6.7 0-11.35-4.65Q8 34.7 8 28q0-6.4 4.3-12.325Q16.6 9.75 24 6Z" />
  </svg>
);
export const ArrowWithLine = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z" />
  </svg>
);
export const HomeIcon = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
  </svg>
);
export const ArrowNoLine = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
  </svg>
);
export const CloseIcon = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
  </svg>
);
export const SortIcon = (props: any): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg
    width="48"
    height="48"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m9 22.5c-0.83333 0-1.5417-0.29167-2.125-0.875s-0.875-1.2917-0.875-2.125v-10.5c0-0.83333 0.29167-1.5417 0.875-2.125s1.2917-0.875 2.125-0.875h10.5c0.83333 0 1.5417 0.29167 2.125 0.875s0.875 1.2917 0.875 2.125v10.5c0 0.83333-0.29167 1.5417-0.875 2.125s-1.2917 0.875-2.125 0.875zm0 19.5c-0.83333 0-1.5417-0.29167-2.125-0.875s-0.875-1.2917-0.875-2.125v-10.5c0-0.83333 0.29167-1.5417 0.875-2.125s1.2917-0.875 2.125-0.875h10.5c0.83333 0 1.5417 0.29167 2.125 0.875s0.875 1.2917 0.875 2.125v10.5c0 0.83333-0.29167 1.5417-0.875 2.125s-1.2917 0.875-2.125 0.875zm0-22.5h10.5v-10.5h-10.5zm0 19.5h10.5v-10.5h-10.5z" />
    <path d="m34.901 41.97-8-8 2.2-2.2 4.3 4.3v-24.2l-4.3 4.3-2.2-2.2 8-8 8 8-2.2 2.2-4.3-4.3v24.2l4.3-4.3 2.2 2.2z" />
  </svg>
);
export const ArrowDownFilled = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m24 30-10-9.95h20Z" />
  </svg>
);
export const FilterIcon = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="M21.35 42V30.75h3v4.15H42v3H24.35V42ZM6 37.9v-3h12.35v3Zm9.35-8.3v-4.1H6v-3h9.35v-4.2h3v11.3Zm6-4.1v-3H42v3Zm8.3-8.25V6h3v4.1H42v3h-9.35v4.15ZM6 13.1v-3h20.65v3Z" />
  </svg>
);
export const TickFilledIcon = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
    <path d="m21.05 28.55-4.9-4.9q-.45-.45-1.1-.45-.65 0-1.1.45-.5.5-.5 1.175t.45 1.125l6.1 6.1q.4.4 1.05.4t1.05-.4l12-12q.45-.45.45-1.1 0-.65-.5-1.15-.45-.45-1.125-.45t-1.175.5ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Z" />
  </svg>
);
export const ShuffleIcon = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" {...props}>
    <path d="M12 16v-1.5h1.438l-2.376-2.375 1.063-1.063 2.375 2.376V12H16v4Zm-6.938 0L4 14.938 13.438 5.5H12V4h4v4h-1.5V6.562Zm2.813-7.062L4 5.062 5.062 4l3.876 3.875Z" />
  </svg>
);
export const SquigglyLine = (
  props: any,
): HtmlHTMLAttributes<SVGAElement> | any => (
<svg width="48" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="m.59254 1.5155s2.0973 2.4731 3.5585 2.5801c1.9186.14046 3.1929-2.726 5.1159-2.671 1.5483.044272 2.4417 2.3254 3.9895 2.3825 1.8439.067937 3.108-2.6121 4.9485-2.4807 1.4334.10232 2.1068 2.3605 3.5404 2.4598 1.693.11731 2.8447-2.3042 4.5418-2.3006 1.6397.00353 2.7396 2.2861 4.3787 2.2416 1.6808-.04563 2.6781-2.5895 4.3587-2.5389 1.6338.049201 2.4469 2.68 4.0809 2.7185 1.661.039124 2.6128-2.526 4.2739-2.5651 1.7338-.040814 1.0056.75073 2.9702 2.2674.47173.36416 1.5075.17514 1.5075.17514" strokeWidth='1.0549px' fill='none' stroke='#10b981' />
</svg>
);
