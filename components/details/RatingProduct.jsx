'use client';

import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/lib/authUser";
import Cookies from "js-cookie";
import { useAddProductRatingMutation } from "@/features/api/auth";

const customRatingStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC107",
    inactiveFillColor: "#E6E6E7",
};

const RatingProduct = ({ data }) => {
    const router = useRouter();
    const user_info = getUserInfo();
    const [rating, setRating] = useState(0);
    const [addProductRating, { }] = useAddProductRatingMutation();

    useEffect(() => {
        setRating(Math.ceil(data?.average_rating ?? 0));
    }, [data]);

    const handleRedirect = () => {
        // below is redirect function that will refetch useGetProductDetailsQuery();
        // const handleRedirect = () => refetch();
        // refetch();
    };

    const handleRating = async (rating) => {
        const token = Cookies.get("authToken");
        if (token) {
            const updated_data = {
                rate: rating,
                login_name: user_info?.login_name,
                supplier_product_id: data?.supplierproduct_id,
            };

            try {
                console.log(rating);
                const res = await addProductRating(updated_data);
                console.log(res);

                if (res?.data) {
                    handleRedirect();
                    console.log("Successfully added review!");
                }
                if (res?.error) {
                    console.log("Failed to add review");
                }
            } catch (error) {
                console.log("Failed to add review");
            }
        } else {
            router.push(`/signin`);
        }
    };

    return (
        <div className="">
            <ReactRating
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={handleRating}
                itemStyles={customRatingStyles}
            />
        </div>
    )
}

export default RatingProduct