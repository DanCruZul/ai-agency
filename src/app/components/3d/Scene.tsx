import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader } from './Loader';

type SceneProps = {
  scene: string;
  className?: string;
};

export const Scene = ({ scene, className = '' }: SceneProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<Loader />}>
        <Spline 
          scene={scene} 
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};