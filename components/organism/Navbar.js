import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="page-header">
      <nav id="Top-bar" className="page-nav-container">
        <div className="page-nav-content">
          <ul id="nav-large" className="nav-list page-nav-menu-large">
            <li className="item"></li>
            <li className="logo item logo-container">
              <Link href="/">
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
                <li className="item">
                  <Link href="/">
                    <a>CONCEPTO</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/">
                    <a>ACERCA DE MÍ</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/">
                    <a>CONTACTO</a>
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
            <li className="item">
              <Link href="/">
                <a>CONCEPTO</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/">
                <a>ACERCA DE MÍ</a>
              </Link>
            </li>
            <Link href="/">
              <a>CONTACTO</a>
            </Link>
            <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
