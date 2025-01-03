import { Suspense, lazy } from 'react';
import { Loader } from './3d/Loader';

const Spline = lazy(() => import('@splinetool/react-spline'));

type LazySplineProps = {
  scene: string;
  className?: string;
};

export const LazySpline = ({ scene, className = '' }: LazySplineProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<Loader />}>
        <Spline scene={scene} className="w-full h-full" />
      </Suspense>
    </div>
  );
};