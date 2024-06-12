import ProductXsCard from "@/components/home/ProductXsCard";
import TitleWithViewAll from "@/components/home/TitleWithViewAll";
import { fetchApi } from "@/utils/fetchApi";

const NewProducts = async () => {
  const data = await fetchApi({ endpoint: `get_product_impacttype_with_images/?impact_type_id=3&offset=0&limit=4`, cacheType: "no-store" });

  return (
    <div className={`${data && data?.length ? "block" : "hidden"}`}>
      <TitleWithViewAll title={"New Arrivals"} href={"impact-type/3"} />
      <div className="grid grid-cols-2 @md:grid-cols-2 @sm:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 gap-2 @md:gap-6 @lg:gap-3 @xl:gap-2 mb-6 sm:mb-8">
        {data && data?.length ? data.map((item, index) => (
          <ProductXsCard key={'NewProducts' + index} product={item} />
        )) : null}
      </div>
    </div>
  );
}

export default NewProducts