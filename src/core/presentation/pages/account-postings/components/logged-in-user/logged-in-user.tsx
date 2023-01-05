import Link from 'next/link';

function LoggedInUserComponent() {
  return (
    <div
      className='text-gray6 flex gap-4px justify-end pb-29px'
      role='presentation'
      aria-label='Usuário logado'
    >
      <div className='flex gap-4px'>
        <p>Olá,</p>
        <p>Usuário</p>
      </div>
      <div className='flex gap-4px'>
        <p>|</p>
        <Link className='text-blue' href='/login'>
          Sair
        </Link>
      </div>
    </div>
  );
}

export default LoggedInUserComponent;
