import "./FooterSectionStyle.css";
import { LogoIcon } from "../Icons/Icon";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";

export default function FooterSection() {
  return (
    <>
      <footer>
        <div className="footerContent"></div>
        <LogoIcon className="logoIcon" />
        <h1>© 2024 Eco Points. Todos os direitos reservados.</h1>
        <h1>Feito por: Oziel Sousa</h1>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/devozielsousa"><img className="linkedin" src={linkedinLogo} alt="Linkedin"/></a>
          <a href="https://github.com/Oziel062"><img className="github" src={githubLogo} alt="GitHub" /></a>
        </div>
      </footer>
    </>
  );
}
