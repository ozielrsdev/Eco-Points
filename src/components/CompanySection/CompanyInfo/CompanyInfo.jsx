import PropTypes from "prop-types";

import "./CompanyInfoStyle.css";

export default function CompanyInfo(props) {
  return (
    <>
      <div className="companyContent">
        <div className="companyImg">
          <img src={props.companyImg} alt="Imagem da Empresa" />
        </div>
        <div className="companyInfos">
          <div className="companyName">
          <h1>{props.name}</h1>
          </div>
        <div className="companyInfoContent">
          <div className="companyAddressLeft">
          <p className="street">Logradouro: <span className="streetName">{props.street}</span></p>
          <p className="municipality">Município:<span className="municipalityName">{props.municipality}</span></p>
          <p className="zip">Cep:<span className="zipCode">{props.zipCode}</span></p>
          </div>
          <div className="companyAddressRight">
          <p className="neighborhood">Bairro:<span className="neighborhoodName">{props.neighborhood}</span></p>
          <p className="state">UF:<span className="stateName">{props.state}</span></p>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}


CompanyInfo.propTypes = {
  companyImg: PropTypes.string,
  street: PropTypes.string,
  name: PropTypes.string,
  municipality: PropTypes.string,
  zipCode: PropTypes.string,
  neighborhood: PropTypes.string,
  state: PropTypes.string
}