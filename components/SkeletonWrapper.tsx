import React, { ReactNode } from 'react';
import { Skeleton } from './ui/skeleton';

interface SkeletonWrapperProps {
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const SkeletonWrapper = ({ 
  children, 
  isLoading = false, 
  fullWidth = false 
}: SkeletonWrapperProps) => {
  if (isLoading) {
    return (
      <div className={`space-y-3 ${fullWidth ? 'w-full' : ''}`}>
        <Skeleton className="h-[200px] w-full rounded-xl" />
        
      </div>
    );
  }

  return <>{children}</>;
};

export default SkeletonWrapper;