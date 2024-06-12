import SliderMain from "@/components/ui/SliderMain";
import { fetchApi } from "@/utils/fetchApi";

const MainBanner = async () => {
  const data = await fetchApi({ endpoint: `contentdata/1`, revalidationTime: 3600 });

  return (
    <>
      {data && data?.length ? <SliderMain data={data} height="510" width="1164" /> : null}
    </>
  );
}

export default MainBanner