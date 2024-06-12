import RatingComponent from "@/components/common/RatingComponent";
import StarProgress from "@/components/common/StarProgress";

const SellerRating = () => {
  return (
    <div>
      {/* customer rating */}
      <div className="px-6 pt-6 pb-2 border-b">
        <div>
          <div className="text-primary-950 text-xl font-bold flex items-center gap-2">
            <RatingComponent size={24} rating={4} /> (4 out 5)
          </div>
          <p className="text-lg pt-3 pb-6">15,308 Total Ratings</p>
        </div>
        {/* progress bars */}
        <div>
          <StarProgress value={82} type={5} />
          <StarProgress value={76} type={4} />
          <StarProgress value={13} type={3} />
          <StarProgress value={7} type={2} />
          <StarProgress value={2} type={1} />
        </div>
      </div>
    </div>
  );
};

export default SellerRating;
