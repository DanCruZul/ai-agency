// globals.d.ts
import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      feTurbulence: React.DetailedHTMLProps<
        React.SVGAttributes<SVGFETurbulenceElement>,
        SVGFETurbulenceElement
      >;
      feColorMatrix: React.DetailedHTMLProps<
        React.SVGAttributes<SVGFEColorMatrixElement>,
        SVGFEColorMatrixElement
      >;
    }
  }
}
