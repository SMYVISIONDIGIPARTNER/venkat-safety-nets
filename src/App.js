
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import OurSafetyNets from "./components/OurSafetyNets";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

// Replace with your actual business number.
// Include country code, without + or spaces.
const PHONE_NUMBER = "918722277643";

const WHATSAPP_MESSAGE =
  "Hello Venkat Safety Nets, I would like to enquire about your safety net services.";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const notFoundStyle = {
  padding: "100px 20px",
  textAlign: "center",
  background: "#f8f5ed",
  minHeight: "60vh",
};

function NotFound() {
  return (
    <main style={notFoundStyle}>
      <h1 style={{ color: "#b88b17", fontSize: "48px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ margin: "15px 0 25px" }}>
        The page you are looking for could not be found.
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          background: "#dcae35",
          color: "#111",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Back to Home
      </a>
    </main>
  );
}

function FloatingContactButtons() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <style>{`
        .vs-floating-contact {
          position: fixed;
          right: 22px;
          bottom: 24px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .vs-float-btn {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          text-decoration: none;
          color: #fff;
          box-shadow: 0 5px 18px rgba(0, 0, 0, .22);
          transition: transform .25s ease, box-shadow .25s ease;
          position: relative;
        }

        .vs-float-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 9px 24px rgba(0, 0, 0, .28);
        }

        .vs-float-btn svg {
          width: 28px;
          height: 28px;
          display: block;
        }

        .vs-float-btn .vs-float-label {
          position: absolute;
          right: 70px;
          padding: 9px 13px;
          border-radius: 6px;
          background: #171717;
          color: #fff;
          font: 700 13px Arial, sans-serif;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(5px);
          transition: .2s ease;
          pointer-events: none;
        }

        .vs-float-btn:hover .vs-float-label,
        .vs-float-btn:focus-visible .vs-float-label {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .vs-float-whatsapp {
          background: #25D366;
        }

        .vs-float-call {
          background: linear-gradient(135deg, #ffe9a0, #d4a72c);
          color: #171207;
          border: 1px solid #c59a29;
        }

        .vs-float-whatsapp::after {
          content: "";
          position: absolute;
          inset: -4px;
          border: 2px solid rgba(37, 211, 102, .5);
          border-radius: 50%;
          animation: vs-whatsapp-pulse 2s infinite;
          pointer-events: none;
        }

        @keyframes vs-whatsapp-pulse {
          0% {
            transform: scale(.92);
            opacity: .8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          .vs-floating-contact {
            right: 14px;
            bottom: 18px;
            gap: 12px;
          }

          .vs-float-btn {
            width: 54px;
            height: 54px;
          }

          .vs-float-btn svg {
            width: 25px;
            height: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-float-whatsapp::after {
            animation: none;
          }

          .vs-float-btn {
            transition: none;
          }
        }
      `}</style>

      <div className="vs-floating-contact" aria-label="Quick contact options">
        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          className="vs-float-btn vs-float-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="WhatsApp us"
        >
          <span className="vs-float-label">Chat on WhatsApp</span>

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.56 0 .24 5.32.24 11.86c0 2.09.55 4.13 1.59 5.93L.14 24l6.37-1.67a11.9 11.9 0 0 0 5.58 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.44-8.41ZM12.1 21.73c-1.75 0-3.47-.47-4.97-1.36l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.82 9.82 0 0 1-1.51-5.23c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>

        {/* Direct call button */}
        <a
          href={`tel:+${PHONE_NUMBER}`}
          className="vs-float-btn vs-float-call"
          aria-label="Call Venkat Safety Nets"
          title="Call us"
        >
          <span className="vs-float-label">Call Us</span>

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about-balcony-safety-nets-marathahalli-bangalore"
          element={<About />}
        />

        <Route
          path="/our-balcony-pigeon-safety-nets-hsrlayout-bangalore"
          element={<OurSafetyNets />}
        />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/contact-venkat-safetynets-whitefield"
          element={<Contact />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <FloatingContactButtons />
    </>
  );
}
