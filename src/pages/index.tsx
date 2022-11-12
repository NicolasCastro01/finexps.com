import { ButtonTag } from '~/app/presentation/common/components';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

const IndexPage = () => (
  <GlobalLayoutTag>
    <ButtonTag
      backgroundTransparent={true}
      onClick={() => console.log('clicked!')}
      variant='small'
      label='Buscar'
    />
  </GlobalLayoutTag>
);

export default IndexPage;
