import type { SkeletonProps } from './interfaces';

function SkeletonComponent({ height }: SkeletonProps) {
  const handleHeight = () => {
    const heights = {
      small: 'h-7px',
      medium: 'h-10px',
      large: 'h-16px'
    }[height];

    return heights;
  };

  return (
    <div role='status' className='animate-pulse'>
      <div className={`${handleHeight()} bg-gray5 rounded`} />
    </div>
  );
}

export default SkeletonComponent;
