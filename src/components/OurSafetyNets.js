
import React, { useEffect, useRef, useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaFeatherAlt,
  FaChild,
  FaPaw,
  FaBuilding,
  FaHome,
  FaTools,
  FaFutbol,
  FaTree,
  FaCar,
  FaSwimmer,
  FaHardHat,
  FaThLarge,
  FaPlus,
  FaMinus,
  FaStar,
} from "react-icons/fa";

const PHONE_NUMBER = "8722277643";
const WHATSAPP_NUMBER = "918722277643";

const safetyServices = [
  {
    title: "Balcony and Pigeon Safety Nets",
    category: "HOME SAFETY",
    image:
      "images/balcony.webp",
    icon: <FaShieldAlt />,
    description:
      "Balcony safety nets provide an additional protective barrier for suitable balconies, terraces, windows, doors and other open areas. They can help reduce the risk of people, pets or objects accidentally falling from a height.",
    points: [
      "Options for balconies, windows and terraces",
      "Helps reduce the risk of accidental falls",
      "Solutions for homes, apartments and selected buildings",
      "Custom measurements for your opening",
      "Net selection based on the location and intended use",
    ],
  },
  {
    title: "Pigeon Safety Nets",
    category: "BIRD PROTECTION",
    image:
      "images/pigeon.webp",
    icon: <FaFeatherAlt />,
    description:
      "Pigeon safety nets help restrict birds from entering balconies, ducts, windows and other open areas. They are useful for residential apartments, hotels, hospitals and selected commercial properties.",
    points: [
      "Helps prevent pigeons from entering protected spaces",
      "Suitable for balconies and selected open shafts",
      "Helps reduce bird droppings and nesting mess",
      "Custom fitting for different opening sizes",
      "Netting selected to suit the site conditions",
    ],
  },
  {
    title: "Children Safety Nets",
    category: "FAMILY PROTECTION",
    image:
      "images/child.webp",
    icon: <FaChild />,
    description:
      "Children safety nets provide an additional barrier at suitable balconies, windows and open spaces. The installation is planned around the opening and the property's requirements.",
    points: [
      "Options for balconies and windows",
      "Custom measurements for suitable openings",
      "Helps reduce accidental fall risks",
      "Suitable material chosen for the intended use",
      "Adult supervision remains essential",
    ],
  },
  {
    title: "Pets Safety Nets",
    category: "PET PROTECTION",
    image:
      "images/pet.webp",
    icon: <FaPaw />,
    description:
      "Pet safety netting is an option for households that want to create a more secure balcony or window area for cats and other pets while retaining airflow and visibility.",
    points: [
      "Options for cat-friendly balcony spaces",
      "Suitable for selected windows and openings",
      "Custom-fitted according to your space",
      "Material selected according to pet size and behaviour",
      "Regular inspection for wear and damage is recommended",
    ],
  },
  {
    title: "Building Safety Nets",
    category: "BUILDING PROTECTION",
    image:
      "images/building.webp",
    icon: <FaBuilding />,
    description:
      "Building safety netting can be considered for selected exposed building areas, facades and construction-related applications. The appropriate design depends on the building and the type of protection required.",
    points: [
      "Options for selected building exteriors",
      "Solutions for suitable construction projects",
      "Site assessment before choosing the net type",
      "Fixing method based on the building structure",
      "Specialist assessment for high-rise installations",
    ],
  },
  {
    title: "Terrace Top Nets",
    category: "TERRACE & SPORTS",
    image:
      "images/terrace.webp",
    icon: <FaHome />,
    description:
      "Terrace top netting can help create a more contained outdoor space for suitable residential and recreational uses. Net type and installation are selected according to the terrace layout.",
    points: [
      "Options for suitable terraces and open areas",
      "Can help contain balls in recreational spaces",
      "Custom measurements for the area",
      "Material selection based on outdoor exposure",
      "Installation depends on access and fixing points",
    ],
  },
  {
    title: "Duct Area Safety Nets",
    category: "DUCT PROTECTION",
    image:
      "images/doct.webp",
    icon: <FaThLarge />,
    description:
      "Duct area safety nets are designed for suitable gaps and shafts between building sections. They help restrict bird entry and can make exposed duct areas easier to maintain.",
    points: [
      "Options for apartment duct areas",
      "Helps restrict birds from entering covered spaces",
      "Custom sizing for different shafts and gaps",
      "Suitable for selected residential buildings",
      "Site access and fixing points assessed beforehand",
    ],
  },
  {
    title: "Staircase Safety Nets",
    category: "INDOOR SAFETY",
    image:
      "images/stair.webp",
    icon: <FaShieldAlt />,
    description:
      "Staircase safety netting can provide an additional barrier for suitable stair openings and gaps in homes, schools and other properties. Each installation should be planned around the staircase design.",
    points: [
      "Options for selected staircase openings",
      "Custom measurements for gaps and railings",
      "Suitable for selected homes and institutions",
      "Net and fixing choices based on the staircase layout",
      "Must not obstruct normal access or emergency exits",
    ],
  },
  {
    title: "Shade Nets",
    category: "OUTDOOR COVERING",
    image:
      "images/shade.webp",
    icon: <FaTree />,
    description:
      "Shade netting can be used in suitable outdoor areas to provide partial shade and help reduce direct sunlight. The shade level and material depend on the space and intended application.",
    points: [
      "Options for selected terraces and outdoor spaces",
      "Can help reduce direct sunlight",
      "Different coverage options depending on requirements",
      "Measurements based on the area to be covered",
      "Suitable support and fixing arrangements are important",
    ],
  },
  {
    title: "Construction Safety Nets",
    category: "CONSTRUCTION",
    image:
      "images/cons.webp",
    icon: <FaHardHat />,
    description:
      "Construction safety netting is used on suitable building sites as part of a planned site-safety system. Net specification and installation must be appropriate for the construction work and applicable safety requirements.",
    points: [
      "Options for suitable residential and commercial projects",
      "Site-specific assessment and measurements",
      "Material selected for the intended application",
      "Installation planned around site access",
      "Must meet relevant site safety requirements",
    ],
  },
  {
    title: "Bird Spikes",
    category: "BIRD CONTROL",
    image:
      "images/spike.webp",
    icon: <FaFeatherAlt />,
    description:
      "Bird spikes can help discourage pigeons and other birds from perching on suitable ledges, parapets and selected building surfaces. Placement depends on the surface and bird activity.",
    points: [
      "Options for suitable ledges and parapets",
      "Can complement bird netting in selected areas",
      "Placement planned for the surface",
      "Helps discourage unwanted perching",
      "Appropriate products should be selected and fitted correctly",
    ],
  },
  {
    title: "Cricket Practice Nets",
    category: "SPORTS NETTING",
    image:
      "images/cp.webp",
    icon: <FaFutbol />,
    description:
      "Cricket practice nets help define a practice area and contain balls during training. They can be planned for suitable terraces, grounds, schools and sports facilities.",
    points: [
      "Options for cricket practice areas",
      "Custom dimensions for the available space",
      "Suitable mesh chosen for the intended use",
      "Options for schools and sports facilities",
      "Installation planned around the playing area",
    ],
  },
  {
    title: "Monkey Safety Nets",
    category: "ANIMAL CONTROL",
    image:
      "images/monkey.webp",
    icon: <FaShieldAlt />,
    description:
      "Monkey safety netting can help restrict access to selected balconies and exposed areas where monkeys enter from nearby trees or structures. The installation requires careful assessment of access points.",
    points: [
      "Options for suitable balconies and exposed areas",
      "Assessment of likely entry points",
      "Net strength selected for the application",
      "Custom measurements for the property",
      "Installation designed around the site and fixing points",
    ],
  },
  {
    title: "Car Parking Safety Nets",
    category: "PARKING PROTECTION",
    image:
      "images/car.webp",
    icon: <FaCar />,
    description:
      "Car parking netting can be considered for suitable parking structures and selected open areas where containment or overhead protection is required. The solution depends on the specific risk and site design.",
    points: [
      "Options for selected parking areas",
      "Site-specific planning and measurements",
      "Netting selected for the intended purpose",
      "Suitable for selected residential and commercial properties",
      "Structural and safety requirements assessed before installation",
    ],
  },
  {
    title: "Swimming Pool Safety Nets",
    category: "POOL PROTECTION",
    image:
      "images/swim.webp",
    icon: <FaSwimmer />,
    description:
      "Swimming pool safety netting may provide an additional barrier when the pool is not in use. The net must be selected for the specific pool and installed according to its intended safety application.",
    points: [
      "Options for suitable pool shapes and sizes",
      "Measurements taken for the pool area",
      "Material and fixing method selected for the application",
      "Routine checks for condition and correct fitting",
      "Never a substitute for supervision or a compliant pool barrier",
    ],
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("vsn-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("vsn-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vsn-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SafetyNetCard({ service }) {
  const [expanded, setExpanded] = useState(false);

  const enquiryMessage = `Hello Venkat Safety Nets, I would like to enquire about ${service.title}. Please share the available options, materials and quotation.`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    enquiryMessage
  )}`;

  return (
    <article className={`vsn-card ${expanded ? "vsn-card-expanded" : ""}`}>
      <div className="vsn-card-image-wrap">
        <img
          className="vsn-card-image"
          src={service.image}
          alt={`${service.title} installation`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="vsn-card-category">{service.category}</span>
      </div>

      <div className="vsn-card-content">
        <div className="vsn-card-icon">{service.icon}</div>

        <div className="vsn-card-rating" aria-label="Service enquiry">
          <span className="vsn-card-stars" aria-hidden="true">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span>
          <span>Service Enquiry</span>
        </div>

        <h3>{service.title}</h3>
        <p className="vsn-card-description">{service.description}</p>

        <button
          type="button"
          className="vsn-card-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          <span>{expanded ? "Show Less" : `View ${service.title}`}</span>
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>

        <div
          className={`vsn-card-details ${
            expanded ? "vsn-card-details-open" : ""
          }`}
          aria-hidden={!expanded}
        >
          <div className="vsn-card-details-inner">
            <h4>Service details</h4>
            <ul>
              {service.points.map((point) => (
                <li key={point}>
                  <FaCheckCircle />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="vsn-card-note">
              Need this service? Contact us to discuss your property,
              installation requirements and quotation.
            </p>
          </div>
        </div>

        <div className="vsn-card-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="vsn-btn vsn-btn-whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a href={`tel:+91${PHONE_NUMBER}`} className="vsn-btn vsn-btn-call">
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}

export default function OurSafetyNets() {
  return (
    <main className="vsn-page">
      <style>{`
        .vsn-page {
          --vsn-gold: #bd8b32;
          --vsn-gold-dark: #98691d;
          --vsn-gold-light: #fbf5e9;
          --vsn-ink: #202b39;
          --vsn-body: #667080;
          --vsn-border: #eee8de;
          color: var(--vsn-ink);
          background: #fff;
          font-family: inherit;
          overflow: hidden;
        }

        .vsn-page *,
        .vsn-page *::before,
        .vsn-page *::after { box-sizing: border-box; }

        .vsn-container {
          width: min(1160px, calc(100% - 42px));
          margin: 0 auto;
        }

        .vsn-section { padding: 82px 0; }
        .vsn-section-soft { background: #fcfaf6; }

        .vsn-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .vsn-reveal.vsn-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vsn-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--vsn-gold-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .vsn-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--vsn-gold);
        }

        .vsn-section-heading {
          margin: 16px 0;
          color: var(--vsn-ink);
          font-size: clamp(31px, 4vw, 47px);
          line-height: 1.16;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .vsn-section-heading span { color: var(--vsn-gold-dark); }

        .vsn-intro {
          max-width: 760px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .vsn-intro .vsn-eyebrow { justify-content: center; }

        .vsn-intro p {
          max-width: 730px;
          margin: 0 auto;
          color: var(--vsn-body);
          font-size: 14px;
          line-height: 1.95;
        }

        /* Hero */

        .vsn-hero {
          position: relative;
          padding: 76px 0 62px;
          background:
            radial-gradient(ellipse at 90% 10%, rgba(189,139,50,.10), transparent 38%),
            #fff;
        }

        .vsn-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 54px;
        }

        .vsn-hero-copy { animation: vsnIntro .75s ease both; }

        .vsn-hero h1 {
          margin: 19px 0;
          font-size: clamp(39px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .vsn-hero h1 span {
          display: block;
          color: var(--vsn-gold-dark);
        }

        .vsn-hero-copy > p {
          max-width: 590px;
          color: var(--vsn-body);
          font-size: 15px;
          line-height: 2;
          margin: 0 0 16px;
        }

        .vsn-hero-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 18px;
          margin: 25px 0 29px;
          padding: 0;
          list-style: none;
        }

        .vsn-hero-checks li {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #485261;
          font-size: 12px;
          line-height: 1.7;
        }

        .vsn-hero-checks svg {
          flex: 0 0 auto;
          color: var(--vsn-gold-dark);
          margin-top: 3px;
        }

        .vsn-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .vsn-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 45px;
          padding: 12px 17px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: transform .25s, background .25s, box-shadow .25s;
        }

        .vsn-btn:hover { transform: translateY(-2px); }

        .vsn-btn-gold {
          background: var(--vsn-gold);
          color: #fff;
          box-shadow: 0 7px 18px rgba(189,139,50,.16);
        }

        .vsn-btn-gold:hover { background: var(--vsn-gold-dark); color: #fff; }

        .vsn-btn-outline {
          background: #fff;
          border-color: var(--vsn-border);
          color: var(--vsn-ink);
        }

        .vsn-btn-outline:hover { border-color: var(--vsn-gold); color: var(--vsn-gold-dark); }

        .vsn-hero-visual {
          position: relative;
          padding: 0 0 25px 25px;
          animation: vsnIntro .8s .1s ease both;
        }

        .vsn-hero-photo {
          min-height: 440px;
          border-radius: 15px;
          background:
            linear-gradient(180deg, rgba(20,25,30,.01), rgba(20,25,30,.08)),
            url("images/terrace.webp")
            center/cover no-repeat;
          box-shadow: 0 20px 55px rgba(30,35,40,.11);
        }

        .vsn-hero-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          width: min(290px, 85%);
          padding: 20px;
          background: #fff;
          border: 1px solid var(--vsn-border);
          border-radius: 11px;
          box-shadow: 0 12px 32px rgba(30,35,40,.09);
        }

        .vsn-hero-badge-icon {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          margin-bottom: 12px;
          border-radius: 10px;
          background: var(--vsn-gold-light);
          color: var(--vsn-gold-dark);
          font-size: 19px;
        }

        .vsn-hero-badge strong {
          display: block;
          margin-bottom: 6px;
          font-size: 16px;
        }

        .vsn-hero-badge p {
          margin: 0;
          color: var(--vsn-body);
          font-size: 12px;
          line-height: 1.8;
        }

        /* Trust strip */

        .vsn-trust { padding: 0 0 30px; }

        .vsn-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--vsn-border);
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }

        .vsn-trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 22px 17px;
          border-right: 1px solid var(--vsn-border);
        }

        .vsn-trust-item:last-child { border-right: 0; }

        .vsn-trust-icon {
          display: grid;
          place-items: center;
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--vsn-gold-light);
          color: var(--vsn-gold-dark);
          font-size: 18px;
        }

        .vsn-trust-item strong { display: block; font-size: 14px; }

        .vsn-trust-item span {
          display: block;
          margin-top: 4px;
          color: var(--vsn-body);
          font-size: 11px;
          line-height: 1.5;
        }

        /* Cards */

        .vsn-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: start;
          gap: 23px;
        }

        .vsn-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--vsn-border);
          border-radius: 13px;
          background: #fff;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .vsn-card:hover {
          transform: translateY(-5px);
          border-color: #dec79f;
          box-shadow: 0 16px 36px rgba(35,30,20,.07);
        }

        .vsn-card-expanded {
          border-color: #d8b97c;
          box-shadow: 0 15px 36px rgba(35,30,20,.07);
        }

        .vsn-card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #f3eee5;
        }

        .vsn-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .55s ease;
        }

        .vsn-card:hover .vsn-card-image { transform: scale(1.045); }

        .vsn-card-category {
          position: absolute;
          left: 15px;
          bottom: 14px;
          padding: 8px 11px;
          border: 1px solid rgba(255,255,255,.7);
          border-radius: 5px;
          background: rgba(255,255,255,.95);
          color: var(--vsn-gold-dark);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .8px;
        }

        .vsn-card-content { padding: 22px 22px 0; }

        .vsn-card-icon {
          display: grid;
          place-items: center;
          width: 47px;
          height: 47px;
          margin-bottom: 14px;
          border-radius: 10px;
          background: var(--vsn-gold-light);
          color: var(--vsn-gold-dark);
          font-size: 20px;
        }

        .vsn-card-rating {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
          color: var(--vsn-body);
          font-size: 10px;
        }

        .vsn-card-stars {
          display: inline-flex;
          gap: 2px;
          color: var(--vsn-gold);
          font-size: 10px;
        }

        .vsn-card h3 {
          margin: 0 0 12px;
          color: var(--vsn-ink);
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: -.35px;
        }

        .vsn-card-description {
          min-height: 145px;
          margin: 0;
          color: var(--vsn-body);
          font-size: 12px;
          line-height: 1.9;
        }

        .vsn-card-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          width: calc(100% + 44px);
          margin: 21px -22px 0;
          padding: 16px 22px;
          border: 0;
          border-top: 1px solid var(--vsn-border);
          background: #fffdf9;
          color: var(--vsn-ink);
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
          transition: background .25s, color .25s;
        }

        .vsn-card-toggle:hover {
          background: var(--vsn-gold-light);
          color: var(--vsn-gold-dark);
        }

        .vsn-card-toggle svg { color: var(--vsn-gold-dark); flex-shrink: 0; }

        .vsn-card-details {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          background: #fffdf9;
          transition: grid-template-rows .38s ease, opacity .3s ease;
        }

        .vsn-card-details-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .vsn-card-details-inner {
          min-height: 0;
          overflow: hidden;
          padding: 0 22px;
        }

        .vsn-card-details-open .vsn-card-details-inner { padding-bottom: 20px; }

        .vsn-card-details h4 {
          margin: 2px 0 13px;
          font-size: 13px;
          color: var(--vsn-ink);
        }

        .vsn-card-details ul {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vsn-card-details li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--vsn-body);
          font-size: 11px;
          line-height: 1.8;
        }

        .vsn-card-details li svg {
          flex: 0 0 auto;
          margin-top: 4px;
          color: var(--vsn-gold-dark);
          font-size: 11px;
        }

        .vsn-card-note {
          margin: 15px 0 0;
          padding-top: 12px;
          border-top: 1px solid var(--vsn-border);
          color: var(--vsn-body);
          font-size: 11px;
          line-height: 1.8;
        }

        .vsn-card-actions {
          display: flex;
          gap: 9px;
          padding: 17px 22px 22px;
          background: #fff;
        }

        .vsn-card-actions .vsn-btn {
          flex: 1;
          min-width: 0;
          min-height: 42px;
          padding: 10px 8px;
          font-size: 11px;
        }

        .vsn-btn-whatsapp { background: #20ae63; color: #fff; }
        .vsn-btn-whatsapp:hover { background: #168e4e; color: #fff; }

        .vsn-btn-call {
          background: var(--vsn-gold);
          color: #fff;
        }

        .vsn-btn-call:hover { background: var(--vsn-gold-dark); color: #fff; }

        /* Final CTA */

        .vsn-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 40px;
          border: 1px solid #eee3d0;
          border-radius: 14px;
          background:
            radial-gradient(circle at 95% 0%, rgba(189,139,50,.13), transparent 35%),
            #fff;
        }

        .vsn-cta-copy { max-width: 700px; }

        .vsn-cta h2 {
          margin: 15px 0 12px;
          color: var(--vsn-ink);
          font-size: clamp(28px, 3.5vw, 40px);
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .vsn-cta h2 span { color: var(--vsn-gold-dark); }

        .vsn-cta p {
          margin: 0;
          color: var(--vsn-body);
          font-size: 13px;
          line-height: 1.9;
        }

        .vsn-cta-actions { display: flex; flex-wrap: wrap; gap: 10px; }

        @keyframes vsnIntro {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .vsn-page *, .vsn-page *::before, .vsn-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
          .vsn-reveal { opacity: 1; transform: none; }
        }

        @media (max-width: 1050px) {
          .vsn-hero-grid { gap: 32px; }
          .vsn-trust-grid { grid-template-columns: repeat(2, 1fr); }
          .vsn-trust-item:nth-child(2) { border-right: 0; }
          .vsn-trust-item:nth-child(-n+2) { border-bottom: 1px solid var(--vsn-border); }
          .vsn-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 740px) {
          .vsn-container { width: calc(100% - 32px); }
          .vsn-section { padding: 62px 0; }
          .vsn-hero { padding: 55px 0 45px; }
          .vsn-hero-grid { grid-template-columns: 1fr; gap: 35px; }
          .vsn-hero h1 { font-size: clamp(38px, 9vw, 52px); }
          .vsn-hero-visual { margin-left: 12px; }
          .vsn-hero-photo { min-height: 340px; }
          .vsn-card-image-wrap { height: 205px; }
          .vsn-cta { align-items: flex-start; flex-direction: column; padding: 29px 23px; }
        }

        @media (max-width: 520px) {
          .vsn-container { width: calc(100% - 28px); }
          .vsn-section-heading { font-size: 33px; letter-spacing: -1px; }
          .vsn-hero h1 { letter-spacing: -1.4px; }
          .vsn-hero-checks { gap: 12px 9px; }
          .vsn-hero-checks li { font-size: 11px; }
          .vsn-hero-actions { display: grid; grid-template-columns: 1fr; }
          .vsn-hero-actions .vsn-btn { width: 100%; }
          .vsn-hero-photo { min-height: 280px; }
          .vsn-trust-item { gap: 9px; padding: 15px 10px; }
          .vsn-trust-icon { flex-basis: 34px; width: 34px; height: 34px; font-size: 15px; }
          .vsn-trust-item strong { font-size: 12px; }
          .vsn-trust-item span { font-size: 10px; }
          .vsn-grid { grid-template-columns: 1fr; gap: 20px; }
          .vsn-card-image-wrap { height: 230px; }
          .vsn-card-content { padding: 21px 20px 0; }
          .vsn-card-description { min-height: 0; }
          .vsn-card-toggle { width: calc(100% + 40px); margin-left: -20px; margin-right: -20px; padding-left: 20px; padding-right: 20px; }
          .vsn-card-details-inner { padding-left: 20px; padding-right: 20px; }
          .vsn-card-actions { padding: 16px 20px 20px; }
          .vsn-intro { margin-bottom: 30px; }
          .vsn-cta-actions { width: 100%; }
          .vsn-cta-actions .vsn-btn { flex: 1; padding: 12px 10px; }
        }
      `}</style>

      {/* HERO */}
      <section className="vsn-hero">
        <div className="vsn-container vsn-hero-grid">
          <div className="vsn-hero-copy">
            <span className="vsn-eyebrow">Welcome to Venkat Safety Nets</span>

            <h1>
              A Safer Space.
              <span>A Better Everyday.</span>
            </h1>

            <p>
              Discover practical safety netting and grill solutions for
              balconies, terraces, windows, ducts, buildings and sports
              spaces. We help you explore options for family protection,
              bird control and selected commercial applications.
            </p>

            <p>
              Every property is different. Contact us to discuss your
              requirements, suitable materials, measurements and quotation.
            </p>

            <ul className="vsn-hero-checks">
              <li><FaCheckCircle /> Balcony and child safety</li>
              <li><FaCheckCircle /> Invisible grill options</li>
              <li><FaCheckCircle /> Pigeon and bird control</li>
              <li><FaCheckCircle /> Pet and animal protection</li>
              <li><FaCheckCircle /> Terrace and duct netting</li>
              <li><FaCheckCircle /> Sports and commercial nets</li>
            </ul>

            <div className="vsn-hero-actions">
              <a href="#our-safety-net-services" className="vsn-btn vsn-btn-gold">
                Explore Our Services <FaArrowRight />
              </a>
              <a href={`tel:+91${PHONE_NUMBER}`} className="vsn-btn vsn-btn-outline">
                <FaPhoneAlt /> Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="vsn-hero-visual">
            <div className="vsn-hero-photo" role="img" aria-label="Modern residential balcony" />
            <div className="vsn-hero-badge">
              <div className="vsn-hero-badge-icon"><FaShieldAlt /></div>
              <strong>Safety for Your Space</strong>
              <p>
                Explore netting options for residential, recreational and
                selected commercial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="vsn-trust">
        <div className="vsn-container">
          <div className="vsn-trust-grid">
            <div className="vsn-trust-item">
              <div className="vsn-trust-icon"><FaHome /></div>
              <div><strong>Home Safety</strong><span>Solutions for suitable openings</span></div>
            </div>
            <div className="vsn-trust-item">
              <div className="vsn-trust-icon"><FaFeatherAlt /></div>
              <div><strong>Bird Control</strong><span>Options for bird-prone areas</span></div>
            </div>
            <div className="vsn-trust-item">
              <div className="vsn-trust-icon"><FaTools /></div>
              <div><strong>Custom Options</strong><span>Discuss your site requirements</span></div>
            </div>
            <div className="vsn-trust-item">
              <div className="vsn-trust-icon"><FaWhatsapp /></div>
              <div><strong>Easy Enquiry</strong><span>Call or message our team</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL SAFETY NET SERVICES */}
      <section className="vsn-section" id="our-safety-net-services">
        <div className="vsn-container">
          <Reveal className="vsn-intro">
            <span className="vsn-eyebrow">Our Safety Nets</span>
            <h2 className="vsn-section-heading">
              Complete Safety Netting
              <span> Solutions for Your Needs</span>
            </h2>
            <p>
              Browse our safety net services below. Click “View” on any
              service card to expand the information and see the main
              features. Each card includes direct WhatsApp enquiry and call
              options.
            </p>
          </Reveal>

          <div className="vsn-grid">
            {safetyServices.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 70}>
                <SafetyNetCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vsn-section vsn-section-soft">
        <div className="vsn-container">
          <Reveal>
            <div className="vsn-cta">
              <div className="vsn-cta-copy">
                <span className="vsn-eyebrow">Contact Venkat Safety Nets</span>
                <h2>
                  Looking for the Right Net?
                  <span> Let's Discuss.</span>
                </h2>
                <p>
                  Tell us which area you need to protect. We can discuss
                  suitable netting options, site measurements and an
                  estimated quotation for your requirements.
                </p>
              </div>

              <div className="vsn-cta-actions">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Venkat Safety Nets, I would like to enquire about your safety net services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vsn-btn vsn-btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a href={`tel:+91${PHONE_NUMBER}`} className="vsn-btn vsn-btn-call">
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
