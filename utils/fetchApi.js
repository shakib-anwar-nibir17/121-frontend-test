export const fetchApi = async ({ endpoint, cacheType, revalidationTime }) => {
    let config;
    if (revalidationTime) {
        config = { next: { revalidate: revalidationTime } }
    } else if (cacheType && !revalidationTime) {
        config = { cache: cacheType }
    } else if (!cacheType && !revalidationTime) {
        config = { cache: "force-cache" }
    }
    // console.log(`${process.env.NEXT_PUBLIC_BASE_DEV_URL}${endpoint}`, config)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_DEV_URL}${endpoint}`, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        return null;
    }
};
