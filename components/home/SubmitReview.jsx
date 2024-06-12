'use client'
import { Button } from "@/components/ui/button";
import { useAddProductReviewMutation } from "@/features/api/auth";
import { getUserInfo } from "@/lib/authUser";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const schema = yup
  .object({
    review: yup
      .string()
      .required("Review field is not empty!"),
  })
  .required();

export default function SubmitReview({ sp_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const router = useRouter();
  const user_info = getUserInfo();
  const [addProductReview, { isLoading, isSuccess, error, isError }] =
    useAddProductReviewMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login_name: user_info?.login_name,
    },
  });



  const handleOpenModal = () => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsOpen(true);
    } else {
      router.push(`/signin`);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    reset();
  };

  async function onSubmit(data) {
    const updated_data = {
      ...data,
      supplier_product_id: sp_id,
    };

    try {
      console.log(data);
      const res = await addProductReview(updated_data);
      console.log(res);

      if (res?.data) {
        // below is redirect function that will refetch useGetProductDetailsQuery();
        // const handleRedirect = () => refetch();
        // redirect();
        reset();
        console.log("Successfully added review!");
        setIsOpen(false);
      }
      if (res?.error) {
        console.log("Failed to add review");
      }
    } catch (error) {
      console.log("Failed to add review");
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="py-2.5 2xl:py-3 px-8 text-base 2xl:text-lg"
        onClick={handleOpenModal}
      >
        Submit Review
      </Button>
      {isOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-white rounded p-8 relative border shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <textarea
              value={textValue}
              onChange={handleTextareaChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your text here..."
              rows={5}
              cols={50}
            /> */}
              <textarea
                {...register("review")}
                className="w-full p-2 border border-gray-300 rounded"
                id="review"
                placeholder="Please write product review.."
                rows={5}
                cols={50}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleCloseModal}
                  className="py-1 px-3 hover:text-white bg-red-500 rounded-lg text-gray-800"
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="py-2 px-6 hover:text-white bg-[#ECF3FF] rounded-lg text-gray-800"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
