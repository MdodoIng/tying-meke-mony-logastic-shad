"use client"
import { productsData } from '@/lib/products';
import { ProductDetails } from 'components';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Page = (): JSX.Element => {
  const pathname = usePathname();

  const productID = pathname
    ?.split('/')
    .slice(2)
    .toLocaleString()
    .replaceAll('%20', ' ');
  const product = productsData.filter(
    (item: any) => item.name === productID && item,
  );


  return (
    <>
      <ProductDetails data={product} />;
    </>
  );
};

export default Page;
