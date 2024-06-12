import AboutSeller from "@/components/seller-page/AboutSeller";
import BreadcrumbSeller from "@/components/seller-page/BreadcrumbSeller";
import LatestReviews from "@/components/seller-page/LatestReviews";
import SearchBar from "@/components/seller-page/SearchBar";
import SellerAvailableProducts from "@/components/seller-page/SellerAvailableProducts";
import SellerLatestDeals from "@/components/seller-page/SellerLatestDeals";
import SellerRating from "@/components/seller-page/SellerRating";
import SellerTopSelling from "@/components/seller-page/SellerTopSelling";
import ShopBanner from "@/components/seller-page/ShopBanner";

const ShopPage = () => {
  return (
    <div className="px-36 mb-[96px]">
      <BreadcrumbSeller />
      <ShopBanner />
      {/* 1st section */}
      <div className="grid grid-cols-5 gap-6 mt-8">
        <div className="col-span-1">
          <AboutSeller />
          <hr className="my-4 border-2" />
          <SellerRating />
        </div>
        <div className="col-span-4">
          <SearchBar />
          <SellerAvailableProducts />
        </div>
      </div>
      {/* 2nd section */}
      <SellerLatestDeals />
      <SellerTopSelling />
      <LatestReviews />
    </div>
  );
};

export default ShopPage;
