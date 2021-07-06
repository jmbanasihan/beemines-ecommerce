import Link from "next/link";
import { useRouter } from "next/router";
// import { withSession } from "../middlewares/session";

import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import useProductData from "../common/useProductData";

const Home = ({ user }) => {
  const router = useRouter();

  const onLogout = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LayoutOne title="Stora">
        <Banners />
        <ShopLayout
          fiveColumn
          shopSidebarResponsive={{ xs: 24, lg: 4 }}
          shopContentResponsive={{ xs: 24, lg: 20 }}
          productResponsive={{ xs: 12, sm: 8, md: 6 }}
          productPerPage={15}
          // data={[...data]}
        />
      </LayoutOne>
    </>
  );
};
export default Home;
