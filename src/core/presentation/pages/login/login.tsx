import Image from 'next/image';
import Link from 'next/link';
import {
  BoxTag,
  ButtonTag,
  InputTextTag
} from '~/core/presentation/common/components';
import EscalatorImage from '~/core/presentation/common/images/escalator.png';

function LoginPage() {
  return (
    <div
      className='flex justify-center items-center pt-192px pb-40px sm:pt-112px sm:px-16px'
      role='presentation'
      aria-label='Página de login'
    >
      <BoxTag title='Login'>
        <div className='mt-8 flex flex-col gap-32px'>
          <div className='flex flex-col gap-16px'>
            <InputTextTag type='email' placeholder='Email' />
            <InputTextTag type='password' placeholder='Senha' />
          </div>
          <div className='flex flex-col justify-center items-center gap-20px'>
            <ButtonTag
              ariaLabel='Login'
              backgroundTransparent={false}
              onClick={() => {
                return;
              }}
              variant='large'
              label='Login'
            />
            <Link className='text-blue' href='/cadastro'>
              Não tenho conta
            </Link>
            {/* 
              TODO: Add component of forgot password when the feature is implemented with link component of nextjs
            */}
            <p className='text-blue'>Esqueci minha senha</p>
          </div>
        </div>
        <Image
          src={EscalatorImage}
          alt='Station'
          className='absolute top-0 left-0 w-full-vw h-full-vh object-cover -z-10'
          placeholder='blur'
        />
      </BoxTag>
    </div>
  );
}

export default LoginPage;
