import { fetchApi } from "@/utils/fetchApi";
import OnGoingSale from "./NewArrivalsWithSpecialCollection/OnGoingSale";

const OnGoingSaleCard = async () => {
    const data = await fetchApi({ endpoint: `contentdata/20?offset=0&limit=1`, cacheType: "no-store" });

    return (
        <>
            {data && data?.length ? data.map((item, index) => (
                <OnGoingSale key={`ongoing_${index}`} info={item} />
            )) : null}
        </>
    );
}

export default OnGoingSaleCard