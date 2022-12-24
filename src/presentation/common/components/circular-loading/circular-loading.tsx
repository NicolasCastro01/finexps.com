import { CircularLoadingIcon } from '~/presentation/common/icons';

function CircularLoadingComponent() {
  return (
    <div
      className='animate-spin h-21px w-21px'
      role='progressbar'
      aria-label='Loading em forma de círculo'
    >
      <CircularLoadingIcon />
    </div>
  );
}

export default CircularLoadingComponent;
