import { TextCategoryMob, TextCategory } from '@/ui/TextCategory';
import React from 'react';
import { ButtonShopNow } from '@/ui/button';
import DailyBestSellerInOneLine from './inOneLine/DailyBestSellerInOneLine';
import { dailyBestSellerCategory } from '@/lib/data';
import Image from 'next/image';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import { dailyBestSellerProduts, popularProductsData } from '@/lib/produtsInDefrentCatogory';
import { productsData } from '@/lib/products';

const DailyBestSeller = (): any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    dailyBestSellerCategory[0].name,
  );
  const [toggleOn, setToggleOn] = React.useState<boolean | any>(false);

  const [mouseOver, setMouseOver] = React.useState<string | any>('');
  const [windowWidth, setWindowWidth] = React.useState<number | any>();
  const [isproductData, setIsProductData] = React.useState<any[]>(dailyBestSellerProduts)

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });

      setWindowWidth(window.innerWidth);

      return window.removeEventListener('resize', () =>
        setWindowWidth(windowWidth),
      );
    }
  }, []);


  React.useEffect(() => {
    if (isSelectedCatN === 'Featured') return setIsProductData(dailyBestSellerProduts)
    else if (isSelectedCatN === 'Popular') return setIsProductData(popularProductsData)
    else if (isSelectedCatN === 'New added') return setIsProductData(productsData.sort((a, b) => b.id >= a.id ? 1 : -1))

  }, [isSelectedCatN])


  return (
    <div className="z-1 relative mt-10 flex w-full flex-col items-start  justify-center overflow-hidden px-4 md:mt-[50px]">
      <div className="mb-10 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
          Daily best sells
        </h4>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="hidden flex-row flex-wrap gap-4 md:flex">
            {dailyBestSellerCategory?.map((item) => (
              <TextCategory
                key={item.id}
                {...item}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            ))}
          </div>
          <div className="block md:hidden">
            <p
              onClick={() => setToggleOn(!toggleOn)}
              className="cursor-pointer font-head text-base leading-3 text-gray-800 md:text-base"
            >
              {isSelectedCatN}{' '}
              <i className="fa-solid fa-chevron-down relative ml-2 text-gray-800 duration-700" />
            </p>
            {toggleOn && (
              <TextCategoryMob
                setToggleOn={setToggleOn}
                list={dailyBestSellerCategory}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-start gap-5 md:flex-row md:gap-6">
        <div className="relative z-[1] flex h-[70vh] w-full min-w-[40%] flex-grow-0 flex-col  items-start gap-12 overflow-hidden rounded-[18px] p-12 md:h-auto md:min-w-[300px] md:justify-evenly md:max-w-[350px]">
          <Image height={100}
            src="/bananaleaf1.jpeg"
            alt=""
            loading='lazy'
            width={200}
            className=" absolute inset-0 -z-10 h-full w-full object-cover bg-[#7e7e7e]  "
          />
          <h1 className="font-head text-[38px] leading-9 text-gray-800 md:text-h2 md:leading-10">
            Bring <br className="hidden md:block" /> Nature Banana Leaves
          </h1>
          <ButtonShopNow paddingAndStyle="px-3 py-2" value="Shop Now" />
        </div>
        <div className="xl:flex hidden w-full items-start justify-start overflow-scroll gap-3">
          {isproductData?.map((item) => (
            <OneProductWithOffer
              {...item}
              key={item.id}
              setMouseOver={setMouseOver}
              mouseOver={mouseOver}
              buttonStyle="add-to-cart"
              classNameForTotal="max-w-full md:h-full h-full"
              classNameForPic="h-[37vh] p-1"
            />
          ))}
        </div>

        <div className="lapHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={4}
          />
        </div>
        <div className="tabHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={3}
          />
        </div>

        <div className="mobileHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={1}
          />
        </div>
        <div className="flex w-full items-center justify-center sm:hidden ">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyBestSeller;
