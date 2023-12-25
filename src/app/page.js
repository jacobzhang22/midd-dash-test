import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";
import AboutUs from "./components/layout/AboutUs";
import SocialMediaBar from "./components/layout/SocialMediaBar";

export default function Home() {
  return (
    <>
      <Header />
      <pre className="text-gray-500 -mt-2"> by MiddDev</pre>
      <Hero />
      <HomeMenu />
      <AboutUs />
      <SocialMediaBar />

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All Rights Reserved
      </footer>
    </>
  );
}
