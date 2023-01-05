import { Button } from '@react-email/button';
import { Html } from '@react-email/html';

export default function Email() {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href='https://example.com'
        style={{ background: 'blue', color: '#fff' }}
      >
        Click me
      </Button>
    </Html>
  );
}
