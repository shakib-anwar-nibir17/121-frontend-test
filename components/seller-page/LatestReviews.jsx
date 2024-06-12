import PaginationComponent from "@/components/common/Pagination";
import DataTable from "@/components/seller-page/DataTable";

const LatestReviews = () => {
  return (
    <div>
      <div className="mt-10 pb-6 border-b border-slate-200">
        <h1 className="text-black font-bold text-2xl">Latest Reviews</h1>
      </div>
      <div className="mt-10 mb-6">
        <PaginationComponent />
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default LatestReviews;
