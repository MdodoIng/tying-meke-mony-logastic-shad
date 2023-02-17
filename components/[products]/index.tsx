import CategorySmallBox from '@/ui/categorySmallBox';
import Error from 'next/error';
import React from 'react';
import HeadRootNames from '../../ui/HeadRootNames';
import NewProducts from '../../ui/newProducts';
import OfferBoxInCollection from '@/ui/OfferBoxInCollection';
import ProductEachDetail from './ProductEachDetail';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import Description from './Description';
import Image from 'next/image';
import { productsData } from '@/lib/products';

const ProductDetails = ({ data }: any) => {
  const [mouseOver, setMouseOver] = React.useState(false);

  if (data?.length === 0) return <Error statusCode={404} title={`Loading`} />;
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-lg:mt-[100px] ">
      <HeadRootNames product={data} />

      <div className="mt-5 flex w-full flex-col px-4">
        {/* products detail */}
        <div className="flex  flex-col ">
          <div className="mb-8 grid w-full  max-lg:gap-4 lg:grid-cols-2 ">
            <div className="grid">
              <div className="flex items-center justify-center bg-gray-100">
                <Image
                  width={1000}
                  height={1000}
                  src={data[0]?.picture}
                  alt=""
                  layout='responsive'
                  className="object-contain lg:w-[96%]"
                  loading="lazy"
                />
              </div>
            </div>
            <ProductEachDetail {...data} />
          </div>
          <div className="mb-8 pr-4">
            <Description products={data[0]} />
          </div>
          <div className="flex flex-col gap-4 rounded-xl  pr-4 pb-8 pt-3">
            <h2 className="before:content- relative mb-4 w-full shrink-0 border-b pb-4 font-head text-[24px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 md:pb-5 md:text-h4">
              Related products
            </h2>
            <div className="flex  w-full flex-row gap-5 overflow-x-scroll">
              {productsData?.map(
                (
                  item: JSX.IntrinsicAttributes & {
                    id?: React.Key | undefined;
                    name?: any;
                    rating?: any;
                    tags?: string | undefined;
                    rate?: any;
                    offer?: any;
                    picture?: any;
                    category?: string;
                    bacPicture?: any;
                    mouseOver?: any;
                    setMouseOver?: any;
                    buttonStyle?: any;
                    classNameForPic?: any;
                    classNameForTotal?: any;
                  },
                ) => (
                  <OneProductWithOffer
                    mouseOver={mouseOver}
                    setMouseOver={setMouseOver}
                    key={item.id}
                    {...item}
                    buttonStyle="add"
                    classNameForTotal="xl:w-auto xl:max-w-[220px] xl:h-auto w-[250px] h-[443px] mx-auto"
                    classNameForPic="p-4  "
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div className="relative hidden w-full shrink-0 gap-5 sm:flex">
          <div
            className={`grid h-full w-full grid-cols-1 gap-5 transition-transform duration-1000 ease-linear max-xl:relative md:grid-cols-2 lg:grid-cols-3`}
          >
            <CategorySmallBox />
            <OfferBoxInCollection className="min-h-[300px]" />
            <NewProducts limit="0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
