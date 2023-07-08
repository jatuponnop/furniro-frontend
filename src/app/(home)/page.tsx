import Navbar from "../_components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Category />
    </main>
  );
}
