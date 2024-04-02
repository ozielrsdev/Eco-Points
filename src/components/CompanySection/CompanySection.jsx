import CompanyInfo from "../CompanyInfo/CompanyInfo";
import StatesSelectButton from "../StatesSelectButton/StatesSelectButton";
import "./CompanyStyle.css";

export default function CompanySection() {
  return (
    <>
      <section className="companySection">
        <h1 className="sectionTitle">Pontos de Coleta</h1>
        <div className="companyHeader">
          <input
            type="search"
            autoComplete="false"
            className="searchInput"
            placeholder="Pesquisar por cidade"
            />
          <StatesSelectButton/>
        </div>
        <div className="companyList">
        <CompanyInfo/>

        </div>
      </section>
    </>
  );
}
