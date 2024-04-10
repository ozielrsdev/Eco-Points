import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./CompanyStyle.css";
import SelectButtonStates from "../SelectButtonStates/SelectButtonStates";
import SkeletonCompany from "../skeletons/SkeletonCompany";
import NotFoundError from "../SearchError/SearchError";

export default function CompanySection() {
  const { getData } = useFetch();
  const [companies, setCompanies] = useState([]);

  const [search, setSearch] = useState([]);
  const [searchByState, setSearchByState] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredCompanies = companies.filter((company) =>
    company.municipality.toLowerCase().includes(search)
  );

  
  useEffect(() => {
    setLoading(true);
    getData(`https://ecopoints-api.onrender.com/api/companies/${searchByState}`)
      .then((res) => {
        setCompanies(res.companies);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchByState]);

 

  return (
    <>
      <section className="companySection">
        <h1 className="sectionTitle">Pontos de Coleta</h1>
        <div className="companyHeader">
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="search"
            autoComplete="off"
            className="searchInput"
            placeholder="Pesquisar por cidade"
          />
          <SelectButtonStates
            onChange={(e) => setSearchByState(e.target.value)}
          />
        </div>
        <div className="companyList">
          <div className="companyListContent">
            {loading ? (
              <>
                <SkeletonCompany />
              </>
            ) : search.length > 0 ? (
              filteredCompanies.length > 0 ?(
                filteredCompanies.map((company) => (
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
                ))
              ) : (
                <NotFoundError/>
              )
            ) : (
              companies.length > 0 ? (
                companies.map((company) => (
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
                ))

              ) : (
                <NotFoundError/>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
