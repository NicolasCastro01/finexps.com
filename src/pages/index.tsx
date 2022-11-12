import { ButtonTag, InputTextTag } from '~/app/presentation/common/components';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

const IndexPage = () => (
  <GlobalLayoutTag>
    <ButtonTag
      backgroundTransparent={true}
      onClick={() => console.log('clicked!')}
      variant='small'
      label='Buscar'
    />
    <InputTextTag
      placeholder='Digite aqui'
      onChange={value => console.log(value)}
      error={true}
    />
  </GlobalLayoutTag>
);

export default IndexPage;
