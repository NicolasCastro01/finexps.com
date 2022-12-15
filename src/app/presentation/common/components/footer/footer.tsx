import { FinexpsIcon } from '~/app/presentation/common/icons';

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='flex justify-center items-center my-10 gap-30px text-14px border-t-0 border-t-gray sm:flex-col'
      aria-label='Rodapé com informações sobre o Finexps'
      role='contentinfo'
    >
      <div className='[&>svg]:fill-white flex gap-8px text-white items-center'>
        <FinexpsIcon width={24} height={24} />
        <p>© {currentYear} finexps</p>
      </div>
      <div className='flex text-blue gap-30px'>
        <p>
          <a href='#'>GitHub</a>
        </p>
        <p>
          <a href='#'>Contato</a>
        </p>
        <p>
          <a href='#'>Termos de uso</a>
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
