import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import { textVariant } from 'utils/motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Icon } from 'constants/icon';
import { homeComponentBig } from 'constants/data';
import { Key } from 'react';

const HomeComponent = (): any => {
  return (
    <div className=" h-ofHome relative z-10 flex items-center justify-center overflow-hidden px-4 md:h-[540px]  md:pt-12">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{ width: '100%', height: '100%' }}
      >
        {homeComponentBig.map(
          (item: {
            id: Key;
            title: string;
            picture: any;
            subtitle: string;
          }) => (
            <SwiperSlide
              key={item.id}
              style={{ width: '100%', height: '100%' }}
            >
              <div className="relative z-auto grid h-full content-center overflow-hidden rounded-3xl p-10 sm:p-10 md:pl-20">
                <img
                  className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                  src={item.picture}
                  alt="wallpaper"
                />
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  variants={textVariant(0.2, 0.5)}
                  className="max-w-[580px] font-body text-[42px] font-bold leading-10 text-gray-800 md:text-7xl"
                >
                  {item.title}
                </motion.h1>
                <motion.h6
                  variants={textVariant(0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="mt-2 font-head text-h6 leading-9 text-gray-700 md:text-h4"
                >
                  {item.subtitle}
                </motion.h6>
                <motion.form
                  variants={textVariant(0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="relative mt-5 flex h-16 w-[279px] flex-row  items-center overflow-hidden rounded-full bg-white sm:mt-10 md:w-[450px]"
                >
                  <Icon className="ml-1 mr-2 h-4 fill-gray-700 md:ml-6 md:mr-4" />
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="h-full font-body text-sm tracking-wide text-gray-700 outline-none"
                  />
                  <button className="absolute -right-1 h-full rounded-full bg-emerald-500 px-5 font-body text-sm tracking-wider text-white transition hover:bg-emerald-600 sm:px-10">
                    Subscribe
                  </button>
                </motion.form>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default HomeComponent;
