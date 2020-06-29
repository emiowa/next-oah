import Link from "next/link";
import { useState } from "react";
import GaritmicConfig from "garitmic.config.json";

function Navbar({ lang = "es-es" }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="page-header">
      <nav id="Top-bar" className="page-nav-container">
        <div className="page-nav-content">
          <ul id="nav-large" className="nav-list page-nav-menu-large">
            <li className="item"></li>
            <li className="logo item logo-container">
              <Link href={GaritmicConfig.root[lang]}>
                <a>
                  <img
                    style={{ maxHeight: "80px" }}
                    src="https://images.prismic.io/oaharchitecture/6bc37450-cc5b-4ebf-8651-88d053a8b9cf_logo.jpg?auto=compress,format"
                  />
                </a>
              </Link>
            </li>
            <li className="item hide-small" style={{ marginLeft: "auto" }}>
              <ul className="nav-list">
                {lang === "es-es" ? (
                  <>
                    <li className="item">
                      <Link href="/[uid]" as="/concepto">
                        <a>CONCEPTO</a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="/[uid]" as="/acerca-de-mi">
                        <a>ACERCA DE MÍ</a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="/[uid]" as="/contacto">
                        <a>CONTACTO</a>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="item">
                      <Link href="/en/[uid]" as="/en/concept">
                        <a>CONCEPT</a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="/en/[uid]" as="/en/about-me">
                        <a>ABOUT ME</a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="/en/[uid]" as="/en/contact">
                        <a>CONTACT</a>
                      </Link>
                    </li>
                  </>
                )}
                <li className="item">
                  <Link href="/">
                    <a style={{ position: "relative", top: "3px" }}>
                      <img
                        width="22"
                        src="https://www.countryflags.io/es/flat/64.png"
                      />
                    </a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/en/">
                    <a style={{ position: "relative", top: "3px" }}>
                      <img
                        width="22"
                        src="https://www.countryflags.io/us/flat/64.png"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="item hide-large menu-toggle-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menú
            </li>
          </ul>
        </div>
        {isOpen && (
          <ul id="menu-trigger" className="open">
            {lang === "es-es" ? (
              <>
                <li className="item">
                  <Link href="/[uid]" as="/concepto">
                    <a>CONCEPTO</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/[uid]" as="/acerca-de-mi">
                    <a>ACERCA DE MÍ</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/[uid]" as="/contacto">
                    <a>CONTACTO</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="item">
                  <Link href="/en/[uid]" as="/en/concept">
                    <a>CONCEPT</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/en/[uid]" as="/en/about-me">
                    <a>ABOUT ME</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/en/[uid]" as="/en/contact">
                    <a>CONTACTO</a>
                  </Link>
                </li>
              </>
            )}
            <li className="item">
              <ul
                className="nav-list"
                style={{ maxWidth: "200px", margin: "0 auto" }}
              >
                <li>
                  <Link href="/">
                    <a>
                      <img
                        width="22"
                        src="https://www.countryflags.io/es/flat/64.png"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/en/">
                    <a>
                      <img
                        width="22"
                        src="https://www.countryflags.io/us/flat/64.png"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
