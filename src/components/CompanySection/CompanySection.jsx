import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import StatesSelectButton from "../SelectButtonStates/SelectButtonStates";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./CompanyStyle.css";

export default function CompanySection() {
  const { getData } = useFetch();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getData("https://ecopoints-api.onrender.com/api/companies").then((res) => {
      setCompanies(res.allCompanies);
    });
  }, []);
  
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
          {companies.length > 0 && (
            companies.map((company) => {
              return (
                <CompanyInfo
                  key={company.id}
                  name={company.name}
                  street={company.street}
                  municipality={company.municipality}
                  zipCode={company.zipCode}
                  neighborhood={company.neighborhood}
                  state={company.state}
                  companyImg={company.companyImg}
                />
              );
            }))}
        </div>
      </section>
    </>
  );
}
