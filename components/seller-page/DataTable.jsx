import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image2 from "@/public/image.png";
import Image from "next/image";
import RatingComponent from "../common/RatingComponent";
const ProductList = [
  {
    _id: 1,
    product_name: "RIG-BS-6025RF Research Upright Metallurgical Microscope",
    image: Image2,
    Customer: "Godhuli Akash",
    review:
      "Very Good Products!...Their service is marked by efficiency and punctuality. They’ve helped us stay ahead of the curve in our industry. Flexible and adaptable. The staff was attentive and helpful, making my experience exceptional. Read more",
  },
  {
    _id: 2,
    product_name: "Nikon Eclipse MA200 Inverted Metallurgical Microscope",
    image: Image2,
    Customer: "Aarav Kumar",
    review:
      "Excellent quality and performance. This microscope has exceeded our expectations in every way. The service was prompt and the team was very knowledgeable. Highly recommended. Read more",
  },
  {
    _id: 3,
    product_name: "Olympus GX51 Inverted Metallurgical Microscope",
    image: Image2,
    Customer: "Maya Singh",
    review:
      "Top-notch product with great precision and clarity. The customer support was superb, guiding us through every step. A must-have for any lab serious about research. Read more",
  },
  {
    _id: 4,
    product_name: "Zeiss Axio Observer Inverted Microscope",
    image: Image2,
    Customer: "Rohan Sharma",
    review:
      "High-quality microscope with excellent features. The after-sales support was fantastic. We are extremely satisfied with our purchase and the overall experience. Read more",
  },
  {
    _id: 5,
    product_name: "Leica DMI3000 B Inverted Microscope",
    image: Image2,
    Customer: "Anjali Patel",
    review:
      "This microscope offers remarkable clarity and precision. The service team was highly professional and provided great assistance. It has significantly improved our research capabilities. Read more",
  },
];

const randomProfileIcon = [
  {
    backgroundColor: "#DFFFDA",
    color: "#219F0C",
  },
  {
    backgroundColor: "#FFE4D5",
    color: "#FC5C02",
  },
  {
    backgroundColor: "#FFE4F0",
    color: "#FF1E7C",
  },
  ,
  {
    backgroundColor: "#FFE8E8",
    color: "#FF1E1E",
  },
];

function getFirstLetterCapital(name) {
  if (!name || typeof name !== "string") {
    return "";
  }
  return name.charAt(0).toUpperCase();
}

function getRandomProfileIcon() {
  const randomIndex = Math.floor(Math.random() * randomProfileIcon.length);
  return randomProfileIcon[randomIndex];
}

const DataTable = () => {
  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow className="bg-[#DFECFF] font-bold text-black rounded-l-lg">
          <TableHead>Product Name</TableHead>

          <TableHead>Customer</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Review</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b-2 border-slate-200">
        {ProductList.map((product) => {
          const profileIconStyle = getRandomProfileIcon() || {};

          return (
            <TableRow
              className="text-black border-b-2 border-slate-200"
              key={product._id}
            >
              <TableCell className="w-[25%]">
                <div className="flex gap-3 items-center font-bold">
                  <Image
                    width={48}
                    height={48}
                    alt="reviewed_product"
                    src={Image2}
                  />
                  {product.product_name}
                </div>
              </TableCell>
              <TableCell className="w-[25%]">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full bg-slate-400 text-red-400 flex items-center justify-center`}
                    style={{
                      backgroundColor: profileIconStyle.backgroundColor,
                      color: profileIconStyle.color,
                    }}
                  >
                    {getFirstLetterCapital(product.Customer)}
                  </div>
                  {product.Customer}
                </div>
              </TableCell>
              <TableCell className=" text-gray-500 w-[15%]">
                <RatingComponent size={20} rating={4} />
              </TableCell>
              <TableCell className=" text-gray-500 w-[35%]">
                {product.review}{" "}
                <button className="text-main-900">Read More ...</button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
