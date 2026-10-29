
import React, { useEffect, useRef, useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaHome,
  FaUsers,
  FaTools,
  FaChild,
  FaFeatherAlt,
  FaPaw,
  FaBuilding,
  FaClock,
  FaRulerCombined,
  FaEye,
  FaFutbol,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const PHONE_NUMBER = "8722277643";
const WHATSAPP_NUMBER = "918722277643";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Venkat Safety Nets, I would like to enquire about your services."
)}`;

const services = [
  {
    icon: <FaShieldAlt />,
    title: "Balcony Safety Nets",
    subtitle: "Everyday protection for your home",
    description:
      "Custom-fitted safety netting for balconies and open spaces, helping families create a more secure environment while keeping the space open and airy.",
    points: [
      "Suitable for apartments, houses and balconies",
      "Custom measurements for your available space",
      "Helps reduce the risk of accidental falls",
      "Options designed to retain airflow and visibility",
      "Material selection based on your requirements",
    ],
  },
  {
    icon: <FaEye />,
    title: "Invisible Grills",
    subtitle: "Safety with an open view",
    description:
      "Modern stainless-steel cable grill solutions for selected balconies and windows, offering a minimal appearance while adding a physical barrier.",
    points: [
      "Slim cable design for a contemporary appearance",
      "Options for suitable balconies and windows",
      "Measurements and fixing based on the site",
      "Material and cable specifications discussed beforehand",
      "Designed to preserve the open feel of your balcony",
    ],
  },
  {
    icon: <FaFeatherAlt />,
    title: "Pigeon Safety Nets",
    subtitle: "Keep unwanted birds outside",
    description:
      "Netting solutions for balconies, windows and utility spaces to help prevent pigeons from entering and nesting in your property.",
    points: [
      "Helps restrict pigeon entry into protected spaces",
      "Suitable for balconies and selected window openings",
      "Custom fitting for different opening sizes",
      "Helps reduce bird droppings and nesting mess",
      "Net type selected according to the installation area",
    ],
  },
  {
    icon: <FaChild />,
    title: "Children Safety Nets",
    subtitle: "Additional protection for families",
    description:
      "Safety netting for suitable balcony and window openings in homes where families want an additional protective barrier.",
    points: [
      "Suitable for selected residential openings",
      "Custom-fitted to the available area",
      "Options for balconies and windows",
      "Installation planned around the property layout",
      "Not a substitute for adult supervision",
    ],
  },
  {
    icon: <FaPaw />,
    title: "Pet & Cat Safety Nets",
    subtitle: "A more secure space for pets",
    description:
      "Netting solutions designed to help keep cats and other pets away from exposed balcony edges and selected open spaces.",
    points: [
      "Options for pet-friendly balcony protection",
      "Custom sizing for the installation area",
      "Net selection based on pet size and behaviour",
      "Suitable options for selected windows and balconies",
      "Periodic checks for wear and damage are recommended",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Duct Area Safety Nets",
    subtitle: "Protection for open shafts",
    description:
      "Made-to-measure netting for building ducts and utility shafts to help restrict bird entry and protect selected exposed openings.",
    points: [
      "Options for apartment duct areas",
      "Custom measurements for different shaft sizes",
      "Helps discourage birds from entering",
      "Installation planned around site access",
      "Options for residential and selected commercial buildings",
    ],
  },
  {
    icon: <FaHome />,
    title: "Terrace Safety Nets",
    subtitle: "Protection for open areas",
    description:
      "Netting options for suitable terraces and rooftop spaces, with materials selected to suit the environment and intended use.",
    points: [
      "Custom coverage for selected terrace areas",
      "Options for homes and apartment buildings",
      "Netting chosen according to exposure and usage",
      "Installation planning based on the site",
      "Regular inspection is recommended for outdoor nets",
    ],
  },
  {
    icon: <FaFeatherAlt />,
    title: "Anti-Bird Netting",
    subtitle: "Cleaner ledges and open spaces",
    description:
      "Bird-exclusion netting for selected ledges, building openings, balconies and other areas where birds frequently gather.",
    points: [
      "Helps discourage birds from entering covered areas",
      "Options for ledges and building openings",
      "Custom net dimensions for different locations",
      "Can help reduce nesting and cleaning problems",
      "Site inspection helps determine a suitable solution",
    ],
  },
  {
    icon: <FaTools />,
    title: "Bird Spikes & Pigeon Control",
    subtitle: "Discourage unwanted perching",
    description:
      "Bird-control options for suitable parapets, ledges and air-conditioning areas where pigeons frequently perch.",
    points: [
      "Options for suitable narrow ledges",
      "Helps discourage birds from landing in treated areas",
      "Placement planned around the building surface",
      "Can complement netting in selected locations",
      "The right solution depends on the site and bird activity",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Terrace Shed Covering Nets",
    subtitle: "Covering for selected open structures",
    description:
      "Netting options for terrace sheds and suitable covered structures where additional bird control or area protection is needed.",
    points: [
      "Made-to-measure coverage options",
      "Materials selected for site conditions",
      "Helps discourage bird entry into covered areas",
      "Installation planned around the structure",
      "Measurements required before estimating the work",
    ],
  },
  {
    icon: <FaTools />,
    title: "Warehouse & Industrial Nets",
    subtitle: "Netting for larger spaces",
    description:
      "Netting options for warehouses, godowns and selected commercial buildings that need bird exclusion or protection for high-level openings.",
    points: [
      "Options for larger and higher openings",
      "Site-specific measurements and planning",
      "Helps restrict bird entry into selected areas",
      "Mesh selected for the intended purpose",
      "Installation depends on access and site conditions",
    ],
  },
  {
    icon: <FaFutbol />,
    title: "Sports Nets",
    subtitle: "Made for practice and play",
    description:
      "Sports netting for suitable cricket practice areas, schools, academies, playgrounds and recreational spaces.",
    points: [
      "Options for cricket and other sports",
      "Custom dimensions for your playing area",
      "Mesh selection based on the sport",
      "Suitable for selected indoor and outdoor spaces",
      "Installation planned around the layout and usage",
    ],
  },
];

const reasons = [
  {
    icon: <FaRulerCombined />,
    title: "Custom Measurements",
    description:
      "We consider your opening size, building layout and intended use when discussing suitable options.",
  },
  {
    icon: <FaTools />,
    title: "Installation Support",
    description:
      "Careful planning helps create a tidy finish that suits your property's appearance.",
  },
  {
    icon: <FaUsers />,
    title: "Personal Assistance",
    description:
      "Discuss your requirements directly with our team before choosing a service.",
  },
  {
    icon: <FaClock />,
    title: "Easy Enquiry",
    description:
      "Call or message us to ask about materials, site measurements and estimated costs.",
  },
];

const highlights = [
  "Balcony safety netting",
  "Invisible grill options",
  "Pigeon and bird control",
  "Child and pet protection",
  "Duct and terrace netting",
  "Sports and commercial netting",
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("vn-about-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("vn-about-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vn-about-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);

  const message = `Hello Venkat Safety Nets, I am interested in ${service.title}. Please share the available options and estimated cost.`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className={`vn-about-service ${expanded ? "is-expanded" : ""}`}>
      <div className="vn-about-service-content">
        <div className="vn-about-service-icon">{service.icon}</div>

        <span className="vn-about-service-kicker">VENKAT SAFETY NETS</span>

        <h3>{service.title}</h3>
        <div className="vn-about-service-subtitle">{service.subtitle}</div>
        <p className="vn-about-service-description">{service.description}</p>

        <button
          type="button"
          className="vn-about-service-toggle"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
        >
          <span>
            {expanded ? "Show Less" : `View ${service.title}`}
          </span>
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>

        <div
          className={`vn-about-service-expand ${
            expanded ? "vn-about-service-expand-open" : ""
          }`}
          aria-hidden={!expanded}
        >
          <div className="vn-about-service-expand-inner">
            <h4>What this service offers</h4>
            <ul>
              {service.points.map((point) => (
                <li key={point}>
                  <FaCheckCircle />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="vn-about-service-note">
              Contact us to discuss your site, material options and
              installation requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="vn-about-service-actions">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="vn-about-btn vn-about-btn-whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href={`tel:+91${PHONE_NUMBER}`}
          className="vn-about-btn vn-about-btn-gold"
        >
          <FaPhoneAlt /> Call Now
        </a>
      </div>
    </article>
  );
}

export default function About() {
  return (
    <main className="vn-about-page">
      <style>{`
        .vn-about-page {
          --gold: #bd8b32;
          --gold-dark: #98691d;
          --gold-pale: #fbf5e9;
          --ink: #202b39;
          --body: #667080;
          --border: #eee8de;
          background: #fff;
          color: var(--ink);
          font-family: inherit;
          overflow: hidden;
        }

        .vn-about-page *,
        .vn-about-page *::before,
        .vn-about-page *::after {
          box-sizing: border-box;
        }

        .vn-about-container {
          width: min(1160px, calc(100% - 44px));
          margin: 0 auto;
        }

        .vn-about-section { padding: 88px 0; }
        .vn-about-section-soft { background: #fcfaf6; }

        .vn-about-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .vn-about-reveal.vn-about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vn-about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--gold-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.25px;
          text-transform: uppercase;
        }

        .vn-about-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--gold);
        }

        .vn-about-heading {
          margin: 18px 0;
          color: var(--ink);
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.15;
          letter-spacing: -1.6px;
          font-weight: 850;
        }

        .vn-about-heading span { color: var(--gold-dark); }

        .vn-about-lead {
          max-width: 750px;
          color: var(--body);
          font-size: 15px;
          line-height: 1.95;
          margin: 0;
        }

        .vn-about-center {
          max-width: 760px;
          text-align: center;
          margin: 0 auto 44px;
        }

        .vn-about-center .vn-about-eyebrow { justify-content: center; }
        .vn-about-center .vn-about-lead { margin: 0 auto; }

        .vn-about-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          min-height: 47px;
          padding: 13px 21px;
          border: 1px solid transparent;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          transition: background .25s, color .25s, transform .25s, box-shadow .25s;
        }

        .vn-about-btn:hover { transform: translateY(-3px); }

        .vn-about-btn-gold {
          color: #fff;
          background: var(--gold);
          box-shadow: 0 7px 17px rgba(189,139,50,.13);
        }

        .vn-about-btn-gold:hover {
          color: #fff;
          background: var(--gold-dark);
          box-shadow: 0 10px 22px rgba(189,139,50,.22);
        }

        .vn-about-btn-outline {
          color: var(--ink);
          background: #fff;
          border-color: #e8e1d5;
        }

        .vn-about-btn-outline:hover {
          color: var(--gold-dark);
          border-color: var(--gold);
        }

        .vn-about-btn-whatsapp { color: #fff; background: #20ae63; }
        .vn-about-btn-whatsapp:hover {
          color: #fff;
          background: #168e4e;
          box-shadow: 0 8px 18px rgba(32,174,99,.18);
        }

        /* Hero */

        .vn-about-hero {
          position: relative;
          padding: 80px 0 78px;
          background: #fff;
        }

        .vn-about-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(189,139,50,.09), transparent 70%);
          pointer-events: none;
        }

        .vn-about-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 58px;
          position: relative;
          z-index: 1;
        }

        .vn-about-hero-copy { animation: vnAboutIntro .8s ease both; }

        .vn-about-hero h1 {
          margin: 21px 0 20px;
          color: var(--ink);
          font-size: clamp(40px, 5vw, 63px);
          font-weight: 900;
          line-height: 1.09;
          letter-spacing: -2.2px;
        }

        .vn-about-hero h1 span {
          display: block;
          color: var(--gold-dark);
        }

        .vn-about-hero-copy > p {
          margin: 0 0 17px;
          max-width: 600px;
          color: var(--body);
          font-size: 15px;
          line-height: 2;
        }

        .vn-about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px 20px;
          margin: 26px 0 31px;
          padding: 0;
          list-style: none;
        }

        .vn-about-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #46505d;
          font-size: 13px;
          line-height: 1.65;
        }

        .vn-about-highlights svg {
          flex: 0 0 auto;
          color: var(--gold-dark);
          margin-top: 3px;
        }

        .vn-about-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .vn-about-hero-visual {
          position: relative;
          padding: 0 0 25px 25px;
          animation: vnAboutIntro .9s .12s ease both;
        }

        .vn-about-hero-image {
          min-height: 445px;
          border-radius: 15px;
          background:
            linear-gradient(180deg, rgba(25,28,31,.02), rgba(25,28,31,.10)),
            url("images/balcony.webp")
            center/cover no-repeat;
          box-shadow: 0 20px 55px rgba(25,35,45,.12);
        }

        .vn-about-image-card {
          position: absolute;
          bottom: 0;
          left: 0;
          width: min(285px, 85%);
          padding: 21px;
          border: 1px solid #f0e9de;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 12px 34px rgba(25,35,45,.10);
        }

        .vn-about-image-card-icon {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          margin-bottom: 13px;
          border-radius: 10px;
          color: var(--gold-dark);
          background: var(--gold-pale);
          font-size: 19px;
        }

        .vn-about-image-card strong {
          display: block;
          margin-bottom: 6px;
          color: var(--ink);
          font-size: 16px;
        }

        .vn-about-image-card span {
          color: var(--body);
          font-size: 12px;
          line-height: 1.7;
        }

        /* Trust strip */

        .vn-about-trust { padding: 0 0 30px; background: #fff; }

        .vn-about-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border);
          border-radius: 13px;
          overflow: hidden;
          background: #fff;
        }

        .vn-about-trust-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 24px 20px;
          border-right: 1px solid var(--border);
        }

        .vn-about-trust-item:last-child { border-right: 0; }

        .vn-about-trust-icon {
          display: grid;
          place-items: center;
          flex: 0 0 43px;
          width: 43px;
          height: 43px;
          border-radius: 10px;
          background: var(--gold-pale);
          color: var(--gold-dark);
          font-size: 18px;
        }

        .vn-about-trust-item strong {
          display: block;
          color: var(--ink);
          font-size: 16px;
        }

        .vn-about-trust-item span {
          display: block;
          margin-top: 4px;
          color: var(--body);
          font-size: 11px;
          line-height: 1.5;
        }

        /* About story */

        .vn-about-story-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 58px;
        }

        .vn-about-story-image {
          position: relative;
          min-height: 470px;
          border-radius: 15px;
          background:
            url("images/building.webp")
            center/cover no-repeat;
        }

        .vn-about-story-caption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 17px;
          border-radius: 10px;
          background: rgba(255,255,255,.97);
          color: var(--ink);
          font-size: 13px;
          font-weight: 750;
          line-height: 1.6;
          box-shadow: 0 8px 22px rgba(20,25,30,.08);
        }

        .vn-about-story-caption svg {
          flex: 0 0 auto;
          color: var(--gold-dark);
          font-size: 20px;
        }

        .vn-about-story-copy > p {
          color: var(--body);
          font-size: 14px;
          line-height: 2;
          margin: 0 0 16px;
        }

        .vn-about-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px 18px;
          margin: 25px 0 29px;
          padding: 0;
          list-style: none;
        }

        .vn-about-checks li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #46505d;
          font-size: 12px;
          line-height: 1.7;
        }

        .vn-about-checks svg {
          color: var(--gold-dark);
          flex: 0 0 auto;
          margin-top: 3px;
        }

        /* Reasons */

        .vn-about-reasons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 19px;
        }

        .vn-about-reason-card {
          padding: 28px 23px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 13px;
          transition: transform .3s, border-color .3s, box-shadow .3s;
        }

        .vn-about-reason-card:hover {
          transform: translateY(-6px);
          border-color: #ddc69d;
          box-shadow: 0 15px 32px rgba(35,30,20,.06);
        }

        .vn-about-reason-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
          border-radius: 11px;
          background: var(--gold-pale);
          color: var(--gold-dark);
          font-size: 20px;
        }

        .vn-about-reason-card h3 {
          margin: 0 0 11px;
          color: var(--ink);
          font-size: 17px;
          line-height: 1.4;
        }

        .vn-about-reason-card p {
          margin: 0;
          color: var(--body);
          font-size: 12px;
          line-height: 1.9;
        }

        /* Service cards */

        .vn-about-service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 23px;
          align-items: start;
        }

        .vn-about-service {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: #fff;
          transition: transform .3s, box-shadow .3s, border-color .3s;
        }

        .vn-about-service:hover {
          transform: translateY(-5px);
          border-color: #ddc69d;
          box-shadow: 0 16px 35px rgba(35,30,20,.07);
        }

        .vn-about-service.is-expanded {
          border-color: #d9bb81;
          box-shadow: 0 15px 36px rgba(35,30,20,.07);
        }

        .vn-about-service-content { padding: 26px 24px 0; }

        .vn-about-service-icon {
          display: grid;
          place-items: center;
          width: 51px;
          height: 51px;
          margin-bottom: 18px;
          border-radius: 12px;
          color: var(--gold-dark);
          background: var(--gold-pale);
          font-size: 22px;
          transition: transform .3s;
        }

        .vn-about-service:hover .vn-about-service-icon { transform: scale(1.06); }

        .vn-about-service-kicker {
          display: block;
          margin-bottom: 8px;
          color: var(--gold-dark);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.15px;
        }

        .vn-about-service h3 {
          margin: 0 0 8px;
          color: var(--ink);
          font-size: 21px;
          line-height: 1.35;
          letter-spacing: -.35px;
        }

        .vn-about-service-subtitle {
          margin-bottom: 13px;
          color: var(--gold-dark);
          font-size: 12px;
          font-weight: 750;
          line-height: 1.6;
        }

        .vn-about-service-description {
          min-height: 95px;
          margin: 0;
          color: var(--body);
          font-size: 12px;
          line-height: 1.9;
        }

        .vn-about-service-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          margin-top: 21px;
          padding: 16px 24px;
          border: 0;
          border-top: 1px solid var(--border);
          background: #fffdf9;
          color: var(--ink);
          text-align: left;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: background .25s, color .25s;
        }

        .vn-about-service-toggle:hover {
          background: var(--gold-pale);
          color: var(--gold-dark);
        }

        .vn-about-service-toggle > svg {
          color: var(--gold-dark);
          font-size: 13px;
          flex: 0 0 auto;
        }

        .vn-about-service-expand {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows .38s ease, opacity .3s ease;
          background: #fffdf9;
        }

        .vn-about-service-expand-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .vn-about-service-expand-inner {
          min-height: 0;
          overflow: hidden;
          padding: 0 24px;
        }

        .vn-about-service-expand-open .vn-about-service-expand-inner {
          padding-bottom: 19px;
        }

        .vn-about-service-expand h4 {
          margin: 2px 0 12px;
          color: var(--ink);
          font-size: 13px;
        }

        .vn-about-service-expand ul {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vn-about-service-expand li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--body);
          font-size: 11px;
          line-height: 1.75;
        }

        .vn-about-service-expand li svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: var(--gold-dark);
          font-size: 12px;
        }

        .vn-about-service-note {
          margin: 15px 0 0;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          color: var(--body);
          font-size: 11px;
          line-height: 1.8;
        }

        .vn-about-service-actions {
          display: flex;
          gap: 9px;
          padding: 17px 24px 23px;
          background: #fff;
        }

        .vn-about-service-actions .vn-about-btn {
          flex: 1;
          min-width: 0;
          min-height: 43px;
          padding: 11px 9px;
          border-radius: 8px;
          font-size: 11px;
        }

        /* Bottom CTA */

        .vn-about-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 43px;
          border: 1px solid #eee4d3;
          border-radius: 15px;
          background:
            radial-gradient(circle at 95% 0%, rgba(189,139,50,.12), transparent 35%),
            #fff;
        }

        .vn-about-cta-copy { max-width: 700px; }

        .vn-about-cta h2 {
          margin: 0 0 13px;
          color: var(--ink);
          font-size: clamp(27px, 3vw, 38px);
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .vn-about-cta h2 span { color: var(--gold-dark); }

        .vn-about-cta p {
          margin: 0;
          color: var(--body);
          font-size: 13px;
          line-height: 1.9;
        }

        .vn-about-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          flex: 0 0 auto;
        }

        @keyframes vnAboutIntro {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .vn-about-page *,
          .vn-about-page *::before,
          .vn-about-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
          .vn-about-reveal { opacity: 1; transform: none; }
        }

        @media (max-width: 1050px) {
          .vn-about-hero-grid, .vn-about-story-grid { gap: 35px; }

          .vn-about-trust-grid { grid-template-columns: repeat(2, 1fr); }

          .vn-about-trust-item:nth-child(2) { border-right: 0; }

          .vn-about-trust-item:nth-child(-n+2) {
            border-bottom: 1px solid var(--border);
          }

          .vn-about-reasons { grid-template-columns: repeat(2, 1fr); }

          .vn-about-service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 760px) {
          .vn-about-container { width: calc(100% - 34px); }
          .vn-about-section { padding: 65px 0; }
          .vn-about-hero { padding: 57px 0 52px; }

          .vn-about-hero-grid, .vn-about-story-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .vn-about-hero h1 {
            font-size: clamp(39px, 9vw, 53px);
            letter-spacing: -1.7px;
          }

          .vn-about-hero-copy > p { font-size: 14px; }

          .vn-about-hero-visual { margin-left: 12px; }

          .vn-about-hero-image { min-height: 350px; }
          .vn-about-story-image { min-height: 350px; }

          .vn-about-trust { padding-bottom: 12px; }

          .vn-about-cta {
            align-items: flex-start;
            flex-direction: column;
            padding: 29px 23px;
          }
        }

        @media (max-width: 520px) {
          .vn-about-container { width: calc(100% - 28px); }

          .vn-about-heading { font-size: 34px; letter-spacing: -1px; }

          .vn-about-highlights { gap: 13px 10px; }
          .vn-about-highlights li { font-size: 11px; }

          .vn-about-hero-actions { display: grid; grid-template-columns: 1fr; }
          .vn-about-hero-actions .vn-about-btn { width: 100%; }

          .vn-about-hero-image { min-height: 290px; }
          .vn-about-image-card { padding: 16px; }

          .vn-about-trust-item { gap: 9px; padding: 16px 10px; }

          .vn-about-trust-icon {
            flex-basis: 35px;
            width: 35px;
            height: 35px;
            font-size: 15px;
          }

          .vn-about-trust-item strong { font-size: 13px; }
          .vn-about-trust-item span { font-size: 10px; }

          .vn-about-checks { grid-template-columns: 1fr; }
          .vn-about-reasons, .vn-about-service-grid { grid-template-columns: 1fr; }

          .vn-about-service-description { min-height: 0; }
          .vn-about-service-content { padding: 23px 21px 0; }
          .vn-about-service-toggle { padding: 15px 21px; }

          .vn-about-service-expand-inner {
            padding-left: 21px;
            padding-right: 21px;
          }

          .vn-about-service-actions { padding: 15px 21px 21px; }
          .vn-about-center { margin-bottom: 32px; }
          .vn-about-cta-actions { width: 100%; }

          .vn-about-cta-actions .vn-about-btn {
            flex: 1;
            padding: 12px 10px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="vn-about-hero">
        <div className="vn-about-container vn-about-hero-grid">
          <div className="vn-about-hero-copy">
            <span className="vn-about-eyebrow">
              Welcome to Venkat Safety Nets
            </span>

            <h1>
              A Safer Space.
              <span>A Better Everyday.</span>
            </h1>

            <p>
              Venkat Safety Nets offers a range of netting and grill
              solutions for balconies, terraces, ducts and other suitable
              openings. We help customers explore options for bird control,
              child safety, pet protection and selected commercial uses.
            </p>

            <p>
              Every site is different. Share your requirements, measurements
              and location so we can discuss suitable materials and an
              installation approach for your space.
            </p>

            <ul className="vn-about-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="vn-about-hero-actions">
              <a href="#vn-about-services" className="vn-about-btn vn-about-btn-gold">
                Explore Our Services <FaArrowRight />
              </a>

              <a href={`tel:+91${PHONE_NUMBER}`} className="vn-about-btn vn-about-btn-outline">
                <FaPhoneAlt /> Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="vn-about-hero-visual">
            <div
              className="vn-about-hero-image"
              role="img"
              aria-label="Modern residential balcony"
            />

            <div className="vn-about-image-card">
              <div className="vn-about-image-card-icon"><FaShieldAlt /></div>
              <strong>Protection for Everyday Living</strong>
              <span>
                Practical safety netting and grill options for your property.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="vn-about-trust">
        <div className="vn-about-container">
          <div className="vn-about-trust-grid">
            <div className="vn-about-trust-item">
              <div className="vn-about-trust-icon"><FaHome /></div>
              <div><strong>Residential</strong><span>Home safety solutions</span></div>
            </div>

            <div className="vn-about-trust-item">
              <div className="vn-about-trust-icon"><FaRulerCombined /></div>
              <div><strong>Custom Fit</strong><span>Options for your space</span></div>
            </div>

            <div className="vn-about-trust-item">
              <div className="vn-about-trust-icon"><FaTools /></div>
              <div><strong>Multiple Services</strong><span>Nets and grill solutions</span></div>
            </div>

            <div className="vn-about-trust-item">
              <div className="vn-about-trust-icon"><FaWhatsapp /></div>
              <div><strong>Direct Enquiry</strong><span>Phone and WhatsApp</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT VENKAT SAFETY NETS */}
      <section className="vn-about-section">
        <div className="vn-about-container vn-about-story-grid">
          <Reveal>
            <div
              className="vn-about-story-image"
              role="img"
              aria-label="Modern home interior"
            >
              <div className="vn-about-story-caption">
                <FaShieldAlt />
                <span>Thoughtful solutions for homes and selected commercial spaces</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="vn-about-story-copy">
              <span className="vn-about-eyebrow">About Our Company</span>

              <h2 className="vn-about-heading">
                Safety That Fits Your Space.
                <span> Service That Fits Your Needs.</span>
              </h2>

              <p>
                Venkat Safety Nets provides netting and grill options for
                balconies, windows, terraces, ducts and other suitable
                openings. We help customers understand the available
                solutions and choose an approach based on the property and
                its requirements.
              </p>

              <p>
                From bird-control netting to invisible grills and sports
                nets, our aim is to make the enquiry and installation
                process straightforward. Contact us to discuss the materials,
                measurements, fitting method and quotation for your project.
              </p>

              <ul className="vn-about-checks">
                {highlights.map((item) => (
                  <li key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="vn-about-btn vn-about-btn-gold">
                Discuss Your Requirements <FaArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="vn-about-section vn-about-section-soft">
        <div className="vn-about-container">
          <Reveal className="vn-about-center">
            <span className="vn-about-eyebrow">Why Choose Us</span>
            <h2 className="vn-about-heading">
              Practical Solutions.
              <span> Personal Attention.</span>
            </h2>
            <p className="vn-about-lead">
              Choosing the right net or grill starts with understanding
              your space. We help you discuss suitable options before
              proceeding with the work.
            </p>
          </Reveal>

          <div className="vn-about-reasons">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 90}>
                <article className="vn-about-reason-card">
                  <div className="vn-about-reason-icon">{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="vn-about-section" id="vn-about-services">
        <div className="vn-about-container">
          <Reveal className="vn-about-center">
            <span className="vn-about-eyebrow">Our Services</span>
            <h2 className="vn-about-heading">
              Safety Nets &amp; Grill Solutions
              <span> For Your Space</span>
            </h2>
            <p className="vn-about-lead">
              Explore our services below. Select “View” on any card to
              expand the details, see the available options and contact us
              directly about that specific service.
            </p>
          </Reveal>

          <div className="vn-about-service-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 75}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="vn-about-section vn-about-section-soft">
        <div className="vn-about-container">
          <Reveal>
            <div className="vn-about-cta">
              <div className="vn-about-cta-copy">
                <span className="vn-about-eyebrow">Let's Get Started</span>
                <h2>
                  Need a Safer Space?
                  <span> Let's Talk.</span>
                </h2>
                <p>
                  Tell us about your balcony, terrace, duct or other
                  installation requirements. Contact us to discuss suitable
                  options and request a quotation.
                </p>
              </div>

              <div className="vn-about-cta-actions">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vn-about-btn vn-about-btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>

                <a
                  href={`tel:+91${PHONE_NUMBER}`}
                  className="vn-about-btn vn-about-btn-gold"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
