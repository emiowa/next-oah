import Link from "next/link";
import moment from "moment";
import GaritmicConfig from "../../garitmic.config.json";

function Footer({ lang = "es-es" }) {
  return (
    <footer>
      <div className="copyright">
        {lang === "es-es" ? (
          <p>
            © {moment().locale(`${GaritmicConfig.lang}`).format("YYYY")} OAH
            ARCHITECTURE. Todos los derechos reservados
          </p>
        ) : (
          <p>
            © {moment().locale(`${GaritmicConfig.lang}`).format("YYYY")} OAH
            ARCHITECTURE. All rights reserved
          </p>
        )}
      </div>
    </footer>
  );
}

export default Footer;
