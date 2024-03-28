import Button from "../../components/Button/Button";
import { LogoIcon } from "../../components/Icons/Icon";
import "./home.css"

export default function Home(){
  return(
    <header>
      <nav>
        <LogoIcon/>
        <ul>
          <li><Button title="Home"/></li>
          <li><Button title="Infos"/></li>
          <li><Button title="Locais"/></li>
        </ul>
      </nav>
      <div className="imgHeader"></div>
    </header>
  )
}