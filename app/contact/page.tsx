"use client"
import HeadRootNames from "@/ui/HeadRootNames";
import ContactForm from "components/contact/ContactForm";
import HelpYou from "components/contact/HelpYou";
import LocationMap from "components/contact/LocationMap";
import OurOffice from "components/contact/OurOffice";


const Contact = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-lg:mt-[100px] ">
      <HeadRootNames customPath="Contact" />
      <div className="mx-4  grid lg:mx-[5%] xl:mx-[10%]">
        <HelpYou />
      </div>
      <div className="grid w-full px-4 ">
        <LocationMap />
      </div>
      <div className="mx-4 grid lg:mx-[5%] xl:mx-[10%]">
        <OurOffice />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
