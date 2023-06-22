"use client"
import { productsData } from '@/lib/products';
import CollationSlug from 'components/collections/[collationSlug]/collationSlug';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const index = (): JSX.Element => {
  const pathname = usePathname();

  const productsCatogory = productsData.filter(
    (item) => item.categorySlug === pathname?.split('/').slice(2).toString(),
  );

  if (pathname === null) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image
            width={1440}
            height={500}
            loading="lazy"
            src=""
            alt=""
            className="h-[500px] object-contain"
          />
          <h1
            style={{ fontSize: '40px', color: 'red', fontFamily: 'monospace' }}
          ></h1>
        </div>
      </>
    );
  }

  return (
    <>
      <CollationSlug data={productsCatogory} />
    </>
  );
};

export default index;
