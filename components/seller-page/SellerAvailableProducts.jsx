import ProductXsCard from "@/components/home/ProductXsCard";
import { Button } from "@/components/ui/button";

const item = {
  impact_type_id: 4,
  supplierproduct_id: "01641318-39ee-4682-ad40-2f8a70f28cf1",
  previous_price: "300000",
  new_price: "265894",
  product_id: "fb7c5aaa-6a74-4c84-be2e-1c47485f1452",
  product_name: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
  product_description: "",
  product_specification: "",
  stock: "5",
  brand_name: "Rigle",
  tag_name: "Main Product",
  product_images: [
    {
      created: "2024-02-10T08:40:45.515218",
      image_id: "e0c23ac2-17ed-4a17-8869-c065578d1e89",
      image_url: "product/d20082fa-3f9c-43fb-8a5d-b3f11df8b821.jpg",
      is_active: true,
      alter_text: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
      download_name: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
    },
    {
      created: "2024-02-10T08:40:45.787048",
      image_id: "987e5fc3-c38f-4e30-b3e3-adbb76597db3",
      image_url: "product/657b1e11-1ded-4b46-a999-70503fc2ffce.jpg",
      is_active: true,
      alter_text: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
      download_name:
        "RIG-BS-6025RF Research Upright Metallurgical Microscopewe",
    },
    {
      created: "2024-02-10T08:40:45.95521",
      image_id: "dffdc0cc-1a5c-4d06-b1ae-20fefd9a6b7c",
      image_url: "product/4616eff2-8d31-4aec-899f-12efb8f69b51.jpg",
      is_active: true,
      alter_text: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
      download_name:
        "RIG-BS-6025RF Research Upright Metallurgical Microscopeswf",
    },
  ],
};

const SellerAvailableProducts = () => {
  return (
    <>
      <div className="mt-10 pb-6 border-b border-slate-200">
        <h1 className="text-black font-bold text-2xl">
          Our Available Products
        </h1>
      </div>
      {/* cards */}
      <div>
        <div className="grid grid-cols-4 mt-6 gap-5">
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
          <ProductXsCard product={item} />
        </div>
        <div className="flex justify-center mt-14">
          <Button className="px-10 py-4">Load More</Button>
        </div>
      </div>
    </>
  );
};

export default SellerAvailableProducts;
