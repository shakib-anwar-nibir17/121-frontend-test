import { fetchApi } from "@/utils/fetchApi";
import SpecialCollectionCard from "./NewArrivalsWithSpecialCollection/SpecialCollectionCard";

const SpecialCollectionMulti = async () => {
    const data = await fetchApi({ endpoint: `contentdata/16?offset=0&limit=1`, cacheType: "no-store" });

    return (
        data && data?.length ? data.map((item, index) => (
            <SpecialCollectionCard key={`specialMulti_${index}`} info={item} />
        )) : null
    );
}

export default SpecialCollectionMulti