
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const GOLD = "#d4a72c";


const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about-balcony-safety-nets-marathahalli-bangalore",
  },
  {
    label: "Our Safety Nets",
    to: "/our-balcony-pigeon-safety-nets-hsrlayout-bangalore",
  },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 1050;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const getLinkStyle = (isActive, mobile = false) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: mobile ? "100%" : "auto",
    minHeight: mobile ? "62px" : "76px",
    padding: mobile ? "15px 18px" : "0",
    boxSizing: "border-box",
    color: isActive ? GOLD : "#222222",
    background:
      mobile && isActive ? "rgba(212,167,44,0.10)" : "transparent",
    borderBottom: mobile
      ? "1px solid rgba(0,0,0,0.08)"
      : `3px solid ${isActive ? GOLD : "transparent"}`,
    borderRadius: mobile ? "6px" : "0",
    textDecoration: "none",
    fontSize: mobile ? "18px" : "clamp(14px, 1.05vw, 17px)",
    fontWeight: isActive ? 800 : 600,
    letterSpacing: mobile ? "0.3px" : "0.1px",
    lineHeight: 1.4,
    transition:
      "color .25s ease, background .25s ease, border-color .25s ease",
  });

  const contactStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    width: isMobile ? "100%" : "auto",
    minWidth: isMobile ? "100%" : "165px",
    minHeight: isMobile ? "58px" : "52px",
    padding: "0 22px",
    boxSizing: "border-box",
    background: "linear-gradient(120deg, #ffe8a0 0%, #e8bf4e 55%, #c99620 100%)",
    border: "1px solid #d5a52c",
    borderRadius: "7px",
    color: "#171207",
    textDecoration: "none",
    fontSize: isMobile ? "17px" : "15px",
    fontWeight: 800,
    letterSpacing: "0.2px",
    boxShadow: "0 4px 13px rgba(160,120,20,.15)",
    transition: "transform .25s ease, box-shadow .25s ease",
  };

  return (
    <>
      <style>{`
        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0 !important;
          padding: 0 !important;
        }

        html,
        body {
          overflow-x: clip;
        }

        .vs-header,
        .vs-header * {
          box-sizing: border-box;
        }

        .vs-header {
          width: 100%;
          margin: 0;
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 9999;
          background: #ffffff;
          border-bottom: 2px solid ${GOLD};
          box-shadow: 0 4px 18px rgba(0,0,0,.08);
          font-family: Arial, Helvetica, sans-serif;
        }

        .vs-header-inner {
          width: 100%;
          min-height: 112px;
          margin: 0;
          padding: 5px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          position: relative;
          background: #ffffff;
        }

        .vs-brand {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          min-width: 0;
          text-decoration: none;
        }

        .vs-brand img {
          display: block;
          width: clamp(310px, 26vw, 400px);
          height: 100px;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
          background: transparent;
          opacity: 1;
          transition: transform .3s ease;
        }

        .vs-brand:hover img {
          transform: scale(1.015);
        }

        .vs-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(16px, 1.8vw, 30px);
          flex-shrink: 0;
        }

        .vs-nav-link {
          position: relative;
          overflow: hidden;
        }

        .vs-nav-link:hover {
          color: ${GOLD} !important;
        }

        .vs-nav-link:focus-visible,
        .vs-contact:focus-visible,
        .vs-hamburger:focus-visible {
          outline: 2px solid ${GOLD};
          outline-offset: 4px;
        }

        .vs-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(212,167,44,.28);
        }

        .vs-hamburger {
          width: 54px;
          height: 52px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #ffffff;
          border: 1px solid ${GOLD};
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 3px 12px rgba(0,0,0,.06);
          transition: background .25s ease, box-shadow .25s ease;
        }

        .vs-hamburger:hover {
          background: #fff9e9;
          box-shadow: 0 0 16px rgba(212,167,44,.18);
        }

        .vs-hamburger-lines {
          width: 26px;
          height: 21px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .vs-hamburger-lines span {
          display: block;
          width: 100%;
          height: 3px;
          border-radius: 5px;
          background: #222222;
          transform-origin: center;
          transition:
            transform .32s cubic-bezier(.2,.8,.2,1),
            opacity .2s ease,
            width .25s ease;
        }

        .vs-hamburger-lines span:nth-child(2) {
          width: 75%;
          align-self: flex-end;
        }

        .vs-hamburger:hover .vs-hamburger-lines span:nth-child(2) {
          width: 100%;
        }

        .vs-hamburger.open .line-one {
          transform: translateY(9px) rotate(45deg);
        }

        .vs-hamburger.open .line-two {
          opacity: 0;
          transform: translateX(-10px);
        }

        .vs-hamburger.open .line-three {
          transform: translateY(-9px) rotate(-45deg);
        }

        .vs-mobile-panel {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-height: calc(100dvh - 90px);
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 16px 18px 24px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          background: #ffffff;
          border-top: 1px solid rgba(212,167,44,.45);
          border-bottom: 2px solid ${GOLD};
          box-shadow: 0 18px 35px rgba(0,0,0,.13);
          animation: vs-panel-in .38s cubic-bezier(.16,1,.3,1) both;
        }

        .vs-mobile-heading {
          color: #9a7418;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
          padding: 8px 17px 15px;
          animation: vs-link-in .38s ease both;
        }

        .vs-mobile-panel .vs-nav-link {
          width: 100%;
          flex-shrink: 0;
          opacity: 0;
          animation: vs-link-in .5s cubic-bezier(.16,1,.3,1) both;
        }

        .vs-mobile-panel .vs-nav-link:nth-of-type(1) {
          animation-delay: .06s;
        }

        .vs-mobile-panel .vs-nav-link:nth-of-type(2) {
          animation-delay: .13s;
        }

        .vs-mobile-panel .vs-nav-link:nth-of-type(3) {
          animation-delay: .20s;
        }

        .vs-mobile-panel .vs-nav-link:nth-of-type(4) {
          animation-delay: .27s;
        }

        .vs-mobile-panel .vs-contact {
          opacity: 0;
          animation: vs-link-in .5s cubic-bezier(.16,1,.3,1) .34s both;
          flex-shrink: 0;
        }

        .vs-mobile-panel .vs-nav-link:hover {
          background: rgba(212,167,44,.09);
          padding-left: 24px;
        }

        @keyframes vs-panel-in {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes vs-link-in {
          from {
            opacity: 0;
            transform: translateX(-28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1051px) {
          .vs-mobile-panel,
          .vs-hamburger {
            display: none;
          }
        }

        @media (max-width: 1050px) {
          .vs-header-inner {
            min-height: 100px;
            padding: 7px 16px;
            gap: 14px;
          }

          .vs-brand img {
            width: min(370px, calc(100vw - 105px));
            height: 86px;
          }
        }

        @media (max-width: 600px) {
          .vs-header-inner {
            min-height: 96px;
            padding: 5px 12px;
            gap: 10px;
          }

          .vs-brand img {
            width: min(330px, calc(100vw - 85px));
            height: 84px;
          }

          .vs-hamburger {
            width: 50px;
            height: 50px;
          }

          .vs-mobile-panel {
            padding: 16px 13px 24px;
            max-height: calc(100dvh - 96px);
          }

          .vs-mobile-panel .vs-nav-link {
            min-height: 64px;
            padding: 16px 18px;
            font-size: 19px;
          }

          .vs-mobile-panel .vs-contact {
            min-height: 60px;
            font-size: 18px;
          }
        }

        @media (max-width: 380px) {
          .vs-header-inner {
            min-height: 88px;
            padding: 5px 9px;
          }

          .vs-brand img {
            width: min(280px, calc(100vw - 75px));
            height: 76px;
          }

          .vs-hamburger {
            width: 46px;
            height: 47px;
          }

          .vs-mobile-panel {
            max-height: calc(100dvh - 88px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-header *,
          .vs-header *::before,
          .vs-header *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <header className="vs-header">
        <div className="vs-header-inner">
          <Link
            to="/"
            className="vs-brand"
            aria-label="Venkat Safety Nets home"
          >
            <img src="/logo.png" alt="Venkat Safety Nets" />
          </Link>

          {!isMobile && (
            <nav className="vs-desktop-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="vs-nav-link"
                  style={({ isActive }) => getLinkStyle(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact-venkat-safetynets-whitefield"
                className="vs-contact"
                style={contactStyle}
              >
                Contact Us
                <span aria-hidden="true" style={{ fontSize: 23 }}>→</span>
              </Link>
            </nav>
          )}

          {isMobile && (
            <button
              type="button"
              className={`vs-hamburger${menuOpen ? " open" : ""}`}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="vs-mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="vs-hamburger-lines" aria-hidden="true">
                <span className="line-one" />
                <span className="line-two" />
                <span className="line-three" />
              </span>
            </button>
          )}

          {isMobile && menuOpen && (
            <nav
              id="vs-mobile-navigation"
              className="vs-mobile-panel"
              aria-label="Mobile navigation"
            >
              <div className="vs-mobile-heading">EXPLORE</div>

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="vs-nav-link"
                  style={({ isActive }) => getLinkStyle(isActive, true)}
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact-venkat-safetynets-whitefield"
                className="vs-contact"
                style={contactStyle}
              >
                Contact Us
                <span aria-hidden="true" style={{ fontSize: 23 }}>→</span>
              </Link>

              <div
                style={{
                  textAlign: "center",
                  color: "#9a7418",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  paddingTop: 13,
                }}
              >
                VENKAT SAFETY NETS
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
