import { fetchApi } from "@/utils/fetchApi";
import SpecialCollectionLongCard from "./NewArrivalsWithSpecialCollection/SpecialCollectionLongCard";

const SpecialCollectionLong = async () => {
  const data = await fetchApi({ endpoint: `contentdata/17?offset=0&limit=1`, cacheType: "no-store" });

  return (
    <>
      {data && data?.length ? data.map((item, index) => (
        <SpecialCollectionLongCard key={`specialLong_${index}`} info={item} />
      )) : null}
    </>
  );
}

export default SpecialCollectionLong