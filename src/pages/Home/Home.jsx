import CompanySection from "../../components/CompanySection/CompanySection";
import FooterSection from "../../components/FooterSection/FooterSection";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import InfoSection from "../../components/InfoSection/InfoSection";
import "./home.css";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <InfoSection />
      <CompanySection/>
      <FooterSection/>
    </>
  );
}
