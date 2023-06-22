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

  if (!product) {
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
      <ProductDetails data={product} />;
    </>
  );
};

export default Page;
