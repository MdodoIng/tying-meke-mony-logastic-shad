"use client"
import { productsData } from '@/lib/products';
import CollationSlug from 'components/collections/[collationSlug]/collationSlug';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Page = (): JSX.Element => {
  const pathname = usePathname();

  const productsCatogory = productsData.filter(
    (item) => item.categorySlug === pathname?.split('/').slice(2).toString(),
  );



  return (
    <>
      <CollationSlug data={productsCatogory} />
    </>
  );
};

export default Page;
