import ProductSmCard from "@/components/home/ProductSmCard";
import TitleWithViewAll from "@/components/home/TitleWithViewAll";
import { fetchApi } from "@/utils/fetchApi";

const LatestProducts = async () => {
  const data = await fetchApi({ endpoint: `get_product_impacttype_with_images/?impact_type_id=2&offset=0&limit=4`, cacheType: "no-store" });

  return (
    <div className={`${data && data?.length ? "block" : "hidden"}`}>
      <div className="container @container sm:px-8 px-4 overflow-hidden">
        <TitleWithViewAll title={"Latest Deals"} href={"impact-type/2"} />
      </div>

      <hr className="mb-8" />

      <div className="container @container sm:px-8 px-4 pb-6 lg:pb-12 xl:pb-24 overflow-hidden">
        <div className="grid grid-cols-2 @md:grid-cols-2 @sm:grid-cols-2 @2xl:grid-cols-3 @6xl:grid-cols-4 gap-2 @md:gap-6 @lg:gap-8 @xl:gap-6">
          {data && data?.length ? data.map((item, index) => (
            <ProductSmCard key={`latest_${index}`} product={item} />
          )) : "No Data Available"
          }
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;