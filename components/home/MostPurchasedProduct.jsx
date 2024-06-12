import { fetchApi } from "@/utils/fetchApi";
import MostlyViewedOrPurchased from "./MostlyViewedOrPurchased";

const MostPurchasedProduct = async () => {
  const data = await fetchApi({ endpoint: `get_product_impacttype_with_images/?impact_type_id=7&offset=0&limit=3`, revalidationTime: 1800 });

  return (
    <div className="space-y-4">
      <div className="text-base xl:text-2xl leading-9 font-bold mb-1.5 xl:mb-6">
        <p className="text-primary-950"> Most Purchased </p>
      </div>
      <ul
        role="list"
        className="border-t border-primary-200 text-sm font-medium"
      >
        {data && data?.length > 0 && <MostlyViewedOrPurchased products={data} />}
      </ul>
    </div>
  );
}

export default MostPurchasedProduct