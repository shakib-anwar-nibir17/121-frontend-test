import { fetchApi } from "@/utils/fetchApi";
import MostlyViewedOrPurchased from "./MostlyViewedOrPurchased";

const MostViewedProduct = async () => {
  const data = await fetchApi({ endpoint: `get_top_visited_product/?offset=0&limit=3`, revalidationTime: 3600 });

  return (
    <div className="space-y-4">
      <div className="text-base xl:text-2xl leading-9 font-bold mb-1.5 xl:mb-6">
        <p className="text-primary-950"> Mostly Viewed </p>
      </div>
      <ul
        role="list"
        className="border-t border-primary-200 text-sm font-medium"
      >
        {data && data?.length ? <MostlyViewedOrPurchased products={data} /> : "No Data Available"}
      </ul>
    </div>
  );
}

export default MostViewedProduct