import Link from "next/link";
import moment from "moment";
import GaritmicConfig from "../../garitmic.config.json";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>
          © {moment().locale(`${GaritmicConfig.lang}`).format("YYYY")} OAH
          ARCHITECTURE. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
