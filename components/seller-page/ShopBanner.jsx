import RatingComponent from "@/components/common/RatingComponent";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import profile from "../../public/profile_pic.png";
import banner from "../../public/seller-banner.png";
import { BusinessBagSVG, EmailSVG, PhoneSVG } from "../icons/icons";

const ShopBanner = () => {
  return (
    <div className="pb-6 border-b-2 border-slate-300">
      <div className="h-[300px] rounded-2xl w-full relative px-[68px]">
        <Image width={1504} height={300} alt="vendor_shop" src={banner} />
        <div className="w-[168px] h-[168px] rounded-full absolute left-28 -bottom-[78px]">
          <Image
            width={168}
            height={168}
            alt="profile_pic"
            src={profile}
            className="rounded-full relative"
          />
        </div>
      </div>
      {/* shop name and other information */}
      <div className="ml-[290px] mt-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl text-black font-bold">
            Tesla Car Technology Ltd.
          </h1>
          <MdVerified color="#49ADF4" size={20} />
        </div>
        <div className="text-lg flex items-center gap-3 mt-3">
          <RatingComponent rating={4} size={20} />
          <span>|</span>
          <p>15,308 Total Ratings</p>
          <span>|</span>
          <p>105 Reviews</p>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <BusinessBagSVG />
          <p>
            Maintenance and Repair; Packaging and Shipping; Plumbing and Pipe
            Fittings; Instrumentation and Control
          </p>
        </div>
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <PhoneSVG />
            <p className="text-black font-medium">01603250609</p>
          </div>
          <div className="flex items-center gap-3">
            <EmailSVG />
            <p className="text-black font-medium">seller1234@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationDot color="#0D6EFD" size={22} />
            <p className="text-black font-medium">01603250609</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
