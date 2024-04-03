import StatesSelectButton from "../SelectButtonStates/SelectButtonStates";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./CompanyStyle.css";

export default function CompanySection() {
  return (
    <>
      <section className="companySection">
        <h1 className="sectionTitle">Pontos de Coleta</h1>
        <div className="companyHeader">
          <input
            type="search"
            autoComplete="off"
            className="searchInput"
            placeholder="Pesquisar por cidade"
          />
          <StatesSelectButton />
        </div>
        <div className="companyList">
          <CompanyInfo
            companyName="Campo Limpo"
            street="Rua Sao joao"
            neighborhood="Jardim das Oliveiras"
            municipality="Goiania"
            state="GO"
            zipCode="1231551"
          />
        </div>
      </section>
    </>
  );
}
