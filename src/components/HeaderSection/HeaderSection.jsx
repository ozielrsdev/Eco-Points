import Button from "../Button/Button";
import { LogoIcon } from "../Icons/Icon";
import "./headerStyle.css";

export default function HeaderSection() {
  return (
    <>
    <div className="bg-Home">
      <header>
        <nav>
          <LogoIcon className="iconLogo" />
          <ul>
            <li>
              <Button title="HOME" />
            </li>
            <li>
              <Button title="INFOS" />
            </li>
            <li>
              <Button title="LOCAIS" />
            </li>
          </ul>
        </nav>
      </header>

      <div className="cardHeader">
        <h1 className="cardHeaderTitle">FAÇA A DIFERENÇA</h1>
        <h2 className="cardHeaderText">
          Recicle mais, desperdice menos. Encontre pontos de coleta perto de
          você!
        </h2>
      </div>
    </div>
    </>
  );
}
