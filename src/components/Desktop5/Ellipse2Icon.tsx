import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={25} cy={25} r={25} stroke='white' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
