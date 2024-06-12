import SliderAds from "@/components/ui/SliderAds";
import { fetchApi } from "../../utils/fetchApi";

const MidBanner = async () => {
  const data = await fetchApi({ endpoint: `contentdata/2`, revalidationTime: 3600 });

  return (
    <>
      {data && data?.length ? <SliderAds data={data} height="300" width="1646" /> : null}
    </>
  );
}

export default MidBanner