'use client';

import Image from 'next/image';
import StationImage from '~/core/presentation/common/images/station.png';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <Image
        src={StationImage}
        alt='Station'
        className='absolute top-0 left-0 w-full-vw lg:h-85-vh sm:h-65-vh object-cover -z-10'
        placeholder='blur'
      />
    </main>
  );
}
