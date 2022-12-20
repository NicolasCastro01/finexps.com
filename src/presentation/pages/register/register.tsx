import Image from 'next/image';
import Link from 'next/link';
import {
  BoxTag,
  ButtonTag,
  InputTextTag
} from '~/presentation/common/components';
import StationImage from '~/presentation/common/images/station.png';

function RegisterPage() {
  return (
    <div
      className='flex justify-center items-center pt-192px pb-40px sm:pt-112px sm:px-16px'
      role='presentation'
      aria-label='Página de cadastro'
    >
      <BoxTag title='Cadastro'>
        <div className='mt-8 flex flex-col gap-32px'>
          <div className='flex flex-col gap-16px'>
            <InputTextTag type='text' placeholder='Nome do usuário' />
            <InputTextTag type='text' placeholder='Email' />
            <InputTextTag type='password' placeholder='Senha' />
          </div>
          <div className='flex flex-col justify-center items-center gap-20px'>
            <ButtonTag
              ariaLabel='Cadastrar'
              backgroundTransparent={false}
              onClick={() => {
                return;
              }}
              variant='large'
              label='Cadastrar'
            />
            <Link className='text-blue' href='/login'>
              Já tenho conta
            </Link>
          </div>
        </div>
        <Image
          src={StationImage}
          alt='Station'
          className='absolute top-0 left-0 w-full-vw lg:h-85-vh sm:h-65-vh object-cover -z-10'
          placeholder='blur'
        />
      </BoxTag>
    </div>
  );
}

export default RegisterPage;
