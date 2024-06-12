import { fetchApi } from "@/utils/fetchApi";
import CategoryCard from "./CategoryCard";

const Category = async () => {
  const data = await fetchApi({
    endpoint: `category_with_subcategory/?offset=0&limit=7`,
  });
  if (!data) return null;

  return (
    <>
      {data.length > 0
        ? data.map((item) => (
            <div key={item.category_id}>
              <CategoryCard item={item} />
            </div>
          ))
        : null}
    </>
  );
};

export default Category;
