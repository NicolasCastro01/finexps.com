import { ArrowUpCircleIcon } from '~/app/presentation/common';
import {
  ButtonTag,
  InputTextTag,
  SelectButtonTag
} from '~/app/presentation/common/components';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

const IndexPage = () => (
  <GlobalLayoutTag>
    <ButtonTag
      backgroundTransparent={true}
      onClick={() => console.log('clicked!')}
      variant='large'
      label='Buscar'
    />
    <InputTextTag
      placeholder='Digite aqui'
      onChange={value => console.log(value)}
      error={false}
    />
    <SelectButtonTag
      icon={<ArrowUpCircleIcon />}
      label='Entrada'
      onClick={() => console.log('clicked!')}
      selected={true}
      variant='success'
    />
  </GlobalLayoutTag>
);

export default IndexPage;
