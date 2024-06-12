import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const ProductQuotationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="px-[89px]">
      <div className="mb-5">
        <label
          htmlFor="product_name"
          className="text-main-950 inline-block mb-1.5 font-medium"
        >
          Product Name
        </label>
        <div
          className={`relative flex items-center rounded-lg border-2 ${
            errors.product_name?.message ? "border-red-400" : ""
          } overflow-hidden`}
        >
          <input
            {...register("product_name")}
            className="py-2.5 px-4 w-full focus:outline-none"
            id="product_name"
            type="text"
            placeholder="Type product Name"
          />
        </div>
        {errors.product_name && (
          <div className="text-red-500">{errors.product_name.message}</div>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="product_quantity"
          className="text-main-950 inline-block mb-1.5 font-medium"
        >
          Product QTY*
        </label>
        <div
          className={`relative flex items-center rounded-lg border-2 ${
            errors.product_quantity?.message ? "border-red-400" : ""
          } overflow-hidden`}
        >
          <input
            {...register("product_quantity")}
            className="py-2.5 px-4 w-full focus:outline-none"
            id="product_quantity"
            type="number"
            placeholder="Type product quantity"
          />
        </div>
        {errors.product_quantity && (
          <div className="text-red-500">{errors.product_quantity.message}</div>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="product_note"
          className="text-main-950 inline-block mb-1.5 font-medium"
        >
          Request Note
        </label>
        <div
          className={`relative flex items-center rounded-lg border-2 ${
            errors.product_note?.message ? "border-red-400" : ""
          } overflow-hidden`}
        >
          <textarea
            {...register("product_note")}
            className="py-2.5 px-4 w-full h-[160px] focus:outline-none"
            id="product_note"
            type="text"
            placeholder="request note"
          />
        </div>
        {errors.product_note && (
          <div className="text-red-500">{errors.product_note.message}</div>
        )}
      </div>
      <Button className="w-full mb-10 py-3">Request for Quotation</Button>
    </form>
  );
};

export default ProductQuotationForm;
