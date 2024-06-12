import Header from "@/components/common/Header";
import ShopBanner from "../../components/shop-application/ShopBanner";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex container px-10 xl:gap-24 lg:gap-16 gap-0 mx-auto mt-16 mb-12">
        <div className="flex-1 mt-5">{children}</div>
        <ShopBanner />
      </main>
    </>
  );
}
