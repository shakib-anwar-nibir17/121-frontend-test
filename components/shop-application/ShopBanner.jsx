import Image from "next/image";

const ShopBanner = () => {
  return (
    <div className="2xl:w-[700px] xl:w-[576px] lg:w-[409px] 2xl:h-[900px] xl:h-[857px] lg:h-[830px] hidden lg:block">
      <Image
        src="/e-shop-banner.png"
        width={576}
        height={857}
        sizes="100vw"
        alt="e-shop-banner"
        className="w-full h-full"
      />
    </div>
  );
};

export default ShopBanner;
