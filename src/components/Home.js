
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle,
  FaFeatherAlt,
  FaChild,
  FaPaw,
  FaHome,
  FaBuilding,
  FaFutbol,
  FaLeaf,
  FaTools,
  FaStar,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaClock,
  FaAward,
  FaQuoteRight,
} from "react-icons/fa";

const PHONE = "8722277643";
const WHATSAPP = "918722277643";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}`;

const heroSlides = [
  {
    image:
      "images/banner1.webp",
    eyebrow: "Welcome to Venkat Safety Nets Bangalore",
    title: "Balcony Safety Nets &",
    highlight: "Invisible Grills",
    ending: "in Bangalore",
    description:
      "Experts in Balcony Safety Nets, Anti Bird Nets, Pigeon Nets, Children Safety Nets, Duct Area Nets in Bangalore",
  },
  {
    image:
      "images/banner2.webp",
    eyebrow: "Welcome to Venkat Safety Nets Bangalore",
    title: "Make Your Home",
    highlight: "Safer & Smarter",
    ending: "Every Day",
    description:
      "Discover practical netting solutions for balconies, windows, children, pets and suitable residential spaces.",
  },
  {
    image:
      "images/banner3.webp",
    eyebrow: "Welcome to Venkat Safety Nets Bangalore",
    title: "Protection That",
    highlight: "Fits Your Space",
    ending: "Custom Solutions",
    description:
      "From apartment balconies to commercial buildings, discuss your measurements and explore suitable safety netting options.",
  },
  {
    image:
      "images/grill.webp",
    eyebrow: "Welcome to Venkat Safety Nets Bangalore",
    title: "Explore Our",
    highlight: "Netting Solutions",
    ending: "For Every Space",
    description:
      "Contact us about pigeon control, invisible grills, terrace netting, sports nets and other installation requirements.",
  },
];

const services = [
  {
    id: "balcony",
    title: "Balcony Safety Nets",
    category: "HOME SAFETY",
    icon: FaShieldAlt,
    image:
      "images/balcony.webp",
    description:
      "Balcony safety nets provide an additional protective barrier for children, adults, pets, and belongings around balconies, terraces, windows, doors, stairs, and other elevated areas.",
    points: [
      "Suitable for apartments and independent homes",
      "Helps reduce the risk of accidental falls",
      "Options for children and pet safety",
      "Custom measurements for different balconies",
      "Designed to maintain ventilation and natural light",
    ],
    ideal: "Balconies, terraces, windows, and residential spaces.",
  },
  {
    id: "pigeon",
    title: "Pigeon Safety Nets",
    category: "BIRD CONTROL",
    icon: FaFeatherAlt,
    image:
      "images/pigeon.webp",
    description:
      "Pigeon safety nets help prevent pigeons and other birds from entering balconies and selected building spaces, reducing nesting, droppings, and unwanted mess.",
    points: [
      "Helps restrict pigeon entry",
      "Suitable for balconies and windows",
      "Options for apartments, hotels, and factories",
      "Custom netting for different openings",
      "Helps keep protected areas cleaner",
    ],
    ideal: "Balconies, apartments, hotels, factories, and open corridors.",
  },
  {
    id: "children",
    title: "Children Safety Nets",
    category: "FAMILY SAFETY",
    icon: FaChild,
    image:
      "images/child.webp",
    description:
      "Children safety nets create an additional barrier around suitable open spaces to help reduce the risk of accidental falls at home, in schools, and in other child-friendly environments.",
    points: [
      "Options for balconies and windows",
      "Suitable for selected staircases",
      "Custom sizing for different openings",
      "Helps reduce access to exposed edges",
      "Installation planned around site conditions",
    ],
    ideal: "Family homes, apartments, schools, and suitable staircases.",
  },
  {
    id: "pets",
    title: "Pet Safety Nets",
    category: "PET PROTECTION",
    icon: FaPaw,
    image:
      "images/pet.webp",
    description:
      "Pet safety nets provide an additional barrier around suitable balconies and windows, helping protect cats, dogs, and other pets while maintaining airflow and visibility.",
    points: [
      "Options for homes with cats and dogs",
      "Helps limit access to open balcony edges",
      "Custom fitting for suitable openings",
      "Net selection based on pet behaviour",
      "Regular checks of nets and fixings are important",
    ],
    ideal: "Pet-friendly homes, balconies, and suitable windows.",
  },
  {
    id: "building",
    title: "Building Safety Nets",
    category: "BUILDING PROTECTION",
    icon: FaBuilding,
    image:
      "images/building.webp",
    description:
      "Building safety netting offers a protective barrier for suitable building exteriors and exposed areas. The right net and fixing system depend on the structure and intended application.",
    points: [
      "Options for selected building exteriors",
      "Solutions planned around the structure",
      "Custom measurements for suitable areas",
      "Material selection based on application",
      "Installation requirements assessed on site",
    ],
    ideal: "Commercial buildings, residential complexes, and selected exteriors.",
  },
  {
    id: "terrace",
    title: "Terrace Top Nets",
    category: "TERRACE SOLUTIONS",
    icon: FaHome,
    image:
      "images/terrace.webp",
    description:
      "Terrace top nets help create protected outdoor spaces and can be used for suitable rooftop areas, sports spaces, and selected open structures.",
    points: [
      "Options for suitable terrace structures",
      "Helps keep balls within designated spaces",
      "Custom sizing for different rooftops",
      "Options for residential and recreational areas",
      "Installation depends on structure and exposure",
    ],
    ideal: "Terraces, rooftops, compounds, and recreational spaces.",
  },
  {
    id: "duct",
    title: "Duct Area Safety Nets",
    category: "BUILDING PROTECTION",
    icon: FaShieldAlt,
    image:
      "images/doct.webp",
    description:
      "Duct area safety nets help cover suitable open gaps between building blocks and restrict bird access to selected utility and duct spaces.",
    points: [
      "Custom measurements for duct openings",
      "Helps restrict bird entry into selected areas",
      "Options for apartment and commercial buildings",
      "Installation planned around available access",
      "Fixing methods selected for site conditions",
    ],
    ideal: "Building ducts, ventilation openings, and utility shafts.",
  },
  {
    id: "staircase",
    title: "Staircase Safety Nets",
    category: "FAMILY SAFETY",
    icon: FaChild,
    image:
      "images/stair.webp",
    description:
      "Staircase safety nets provide an additional barrier around suitable staircase openings, helping reduce the risk of children or objects falling through exposed gaps.",
    points: [
      "Options for selected staircase openings",
      "Suitable for homes and schools",
      "Custom measurements for staircase layouts",
      "Helps cover exposed gaps",
      "Installation assessed for each structure",
    ],
    ideal: "Homes, schools, kindergartens, and suitable staircases.",
  },
  {
    id: "shade",
    title: "Shade Nets",
    category: "OUTDOOR SOLUTIONS",
    icon: FaLeaf,
    image:
      "images/shade.webp",
    description:
      "Shade nets provide a practical covering option for selected outdoor areas, helping control sunlight exposure according to the chosen material and installation.",
    points: [
      "Options for outdoor shade applications",
      "Suitable for selected terraces and open spaces",
      "Custom sizes for different structures",
      "Material choices for outdoor conditions",
      "Installation planned around the area",
    ],
    ideal: "Terraces, gardens, outdoor spaces, and suitable structures.",
  },
  {
    id: "construction",
    title: "Construction Safety Nets",
    category: "CONSTRUCTION SAFETY",
    icon: FaTools,
    image:
      "images/cons.webp",
    description:
      "Construction safety nets are used on suitable building sites to help protect workers and reduce the risk of falling materials. The net system must match the site safety requirements.",
    points: [
      "Options for residential and commercial projects",
      "Helps contain selected falling materials",
      "Suitable systems selected for the application",
      "Planning based on site conditions",
      "Installation must follow relevant safety requirements",
    ],
    ideal: "Construction sites, building projects, and renovation work.",
  },
  {
    id: "bird-spikes",
    title: "Bird Spikes",
    category: "BIRD DETERRENTS",
    icon: FaFeatherAlt,
    image:
      "images/spike.webp",
    description:
      "Bird spikes help discourage pigeons and other birds from perching on suitable ledges and surfaces without the need to enclose the entire area with netting.",
    points: [
      "Options for suitable ledges and parapets",
      "Helps discourage birds from perching",
      "Suitable for selected building surfaces",
      "Installation depends on surface and access",
      "Bird-friendly deterrent options available",
    ],
    ideal: "Ledges, parapets, rooftops, and suitable building surfaces.",
  },
  {
    id: "cricket",
    title: "Cricket Practice Nets",
    category: "SPORTS & RECREATION",
    icon: FaFutbol,
    image:
      "images/cp.webp",
    description:
      "Cricket practice nets help create a defined practice area and keep balls within the designated space, making them useful for training and recreational cricket.",
    points: [
      "Options for cricket practice areas",
      "Custom sizing for different playing spaces",
      "Suitable for schools and academies",
      "Options for indoor and outdoor practice areas",
      "Net specifications based on intended use",
    ],
    ideal: "Cricket academies, schools, clubs, and practice grounds.",
  },
  {
    id: "monkey",
    title: "Monkey Safety Nets",
    category: "SPECIAL APPLICATIONS",
    icon: FaShieldAlt,
    image:
      "images/monkey.webp",
    description:
      "Monkey safety nets provide a barrier for selected exposed spaces where monkeys frequently enter. The netting and fixings should be selected according to the site and expected loads.",
    points: [
      "Options for suitable balconies and terraces",
      "Site assessment before installation",
      "Net and fixing choices based on requirements",
      "Solutions planned around the building structure",
      "Material specifications confirmed before installation",
    ],
    ideal: "Suitable balconies, terraces, and exposed building openings.",
  },
  {
    id: "car-parking",
    title: "Car Parking Safety Nets",
    category: "PARKING SOLUTIONS",
    icon: FaBuilding,
    image:
      "images/car.webp",
    description:
      "Car parking safety nets can help separate selected parking areas and provide a barrier where required. The installation depends on the layout and intended use of the space.",
    points: [
      "Options for selected parking areas",
      "Suitable for commercial and residential properties",
      "Custom sizing according to the layout",
      "Planning based on vehicle and pedestrian access",
      "Installation assessed for site requirements",
    ],
    ideal: "Parking lots, garages, commercial buildings, and residential complexes.",
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool Safety Nets",
    category: "POOL SAFETY",
    icon: FaShieldAlt,
    image:
      "images/swim.webp",
    description:
      "Swimming pool safety nets or covers may provide an additional barrier when a pool is not in use. The product must be specifically designed and rated for the intended pool-safety application.",
    points: [
      "Options for suitable pool sizes",
      "Helps restrict access when correctly installed",
      "Material and fixing requirements assessed",
      "Designed for the specific pool layout",
      "Must not replace active supervision around water",
    ],
    ideal: "Residential pools, resorts, and suitable swimming facilities.",
  },
];

const reasons = [
  {
    icon: FaShieldAlt,
    title: "Safety-Focused Options",
    text: "Explore netting and grill options based on the space you want to protect.",
  },
  {
    icon: FaTools,
    title: "Custom Measurements",
    text: "Discuss your opening size, building layout and installation requirements.",
  },
  {
    icon: FaClock,
    title: "Convenient Enquiry",
    text: "Contact us by phone or WhatsApp to discuss your requirements.",
  },
  {
    icon: FaAward,
    title: "Multiple Services",
    text: "Explore solutions for homes, apartments, commercial properties and sports spaces.",
  },
];

const gallery = [
  {
    title: "Modern Balcony Spaces",
    image:
      "images/balcony.webp",
  },
  {
    title: "Apartment Protection",
    image:
      "images/building.webp",
  },
  {
    title: "Residential Solutions",
    image:
      "images/cons.webp",
  },
  {
    title: "Sports",
    image:
      "images/cp.webp",
  },
];

// Replace these sample cards with genuine customer reviews before publishing.
const customerReviews = [
  {
    name: "Aaliya Ahquar",
    location: "Residential Installation",
    rating: 5,
    initials: "AA",
    text:
      "I found them on Google and decided to give them a call for balcony safety nets as I have cats at home! They were quick and the very next day they sent someone to get the work done! Installing and net charges were also reasonable! Had to leave this review cause the work is beautifully done and my cats are very happy!!",
  },
  {
    name: "Prabharan",
    location: "Balcony Safety Nets",
    rating: 5,
    initials: "PA",
    text:
      "Very reasonable price. Quality materials and quality work. Venkat is very kind and professional.",
  },
  {
    name: "Subhashini Acharya",
    location: "Pigeon Netting",
    rating: 5,
    initials: "SA",
    text:
      "Very prompt fast service. They are super responsive which I appreciated. Also when I asked them to come and fix when the net had come off, venkat sent his team the same day! Thank you",
  },
  {
    name: "Gaurav Anand",
    location: "Invisible Grills",
    rating: 5,
    initials: "GA",
    text:
      "I am extremely pleased with the pigeon net installation service. The team worked efficiently, and the installation was completed promptly. The nets are doing an excellent job of keeping the pigeons away, and my balcony is now a peaceful space. Highly recommended!",
  },
];

const faqs = [
  {
    question: "How much does balcony safety net installation cost?",
    answer:
      "The price depends on the opening size, floor height, net material, fixing method and site conditions. Contact us with your location and approximate measurements for a quotation.",
  },
  {
    question: "What is the difference between safety nets and invisible grills?",
    answer:
      "Safety nets use a mesh barrier, while invisible grills generally use tensioned cables. The right option depends on the opening, intended use, property layout and installation requirements.",
  },
  {
    question: "Can pigeon nets be installed on balconies and ducts?",
    answer:
      "Netting may be suitable for many balcony and duct openings. Measurements, access, fixing surfaces and ventilation requirements should be assessed before installation.",
  },
  {
    question: "Are safety nets suitable for children and pets?",
    answer:
      "Suitable netting can provide an additional barrier, but no net should be treated as completely fall-proof. Choose the right specification for the intended use and inspect it regularly.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Call or WhatsApp us with your name, area, required service and approximate dimensions. Photos of the installation area can help us understand your initial requirements.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time depends on the size of the area, access, fixing conditions and type of service. The estimated time can be discussed after reviewing the site requirements.",
  },
];

function whatsappMessage(message) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: services[0].title,
    location: "",
    message: "",
  });

  // Reveal sections as the user scrolls.
  useEffect(() => {
    const elements = document.querySelectorAll(".vn-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("vn-visible")
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vn-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Hero image carousel: automatically advances every 5.5 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  // Customer reviews carousel: automatically advances every 6 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview(
        (current) => (current + 1) % customerReviews.length
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  // Scroll to the expanded service card.
  useEffect(() => {
    if (!expandedService) return undefined;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(
        `service-${expandedService}`
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [expandedService]);

  const toggleService = (id) => {
    setExpandedService((current) =>
      current === id ? null : id
    );
  };

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    const message = [
      "Hello Venkat Safety Nets,",
      "",
      "I would like to request a quotation.",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `Location: ${form.location}`,
      `Service: ${form.service}`,
      `Requirements: ${form.message || "Please contact me with details."}`,
    ].join("\n");

    window.open(
      whatsappMessage(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const enquiryFor = (service) =>
    whatsappMessage(
      `Hello Venkat Safety Nets,\nI am interested in ${service.title}.\nPlease share the details and quotation.\nMy location: `
    );

  const previousHero = () => {
    setActiveHero(
      (current) =>
        (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextHero = () => {
    setActiveHero((current) => (current + 1) % heroSlides.length);
  };

  const previousReview = () => {
    setActiveReview(
      (current) =>
        (current - 1 + customerReviews.length) %
        customerReviews.length
    );
  };

  const nextReview = () => {
    setActiveReview(
      (current) => (current + 1) % customerReviews.length
    );
  };

  const currentSlide = heroSlides[activeHero];
  const currentReview = customerReviews[activeReview];

  return (
    <main className="vn-home">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .vn-home {
          --vn-gold: #bd8b35;
          --vn-gold-dark: #8e641d;
          --vn-gold-light: #f3dfb1;
          --vn-ink: #1c2a3b;
          --vn-muted: #687587;
          --vn-cream: #faf8f3;
          --vn-line: #e8e4db;
          --vn-green: #16834b;
          color: var(--vn-ink);
          background: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
        }

        .vn-home * { box-sizing: border-box; }
        .vn-home img { max-width: 100%; }
        .vn-home a { text-decoration: none; }
        .vn-home button, .vn-home input,
        .vn-home textarea, .vn-home select { font: inherit; }

        .vn-container {
          width: min(1200px, calc(100% - 44px));
          margin: 0 auto;
        }

        .vn-section { padding: 85px 0; }
        .vn-cream { background: var(--vn-cream); }
        .vn-white { background: #fff; }
        .vn-pale { background: #f1f5f8; }

        .vn-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .vn-reveal.vn-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vn-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--vn-gold-dark);
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .vn-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--vn-gold);
        }

        .vn-title {
          font-family: 'Manrope', sans-serif;
          color: var(--vn-ink);
          font-size: clamp(30px, 4vw, 47px);
          line-height: 1.18;
          font-weight: 800;
          letter-spacing: -1.4px;
          margin: 16px 0;
        }

        .vn-title span { color: var(--vn-gold-dark); }

        .vn-lead {
          max-width: 740px;
          color: var(--vn-muted);
          font-size: 13px;
          line-height: 1.95;
        }

        .vn-center { text-align: center; }
        .vn-center .vn-lead { margin-left: auto; margin-right: auto; }

        .vn-section-head {
          max-width: 800px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .vn-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          min-height: 47px;
          padding: 12px 19px;
          border: 1px solid transparent;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: transform .22s ease, box-shadow .22s ease,
            background .22s ease;
        }

        .vn-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 19px rgba(25,35,47,.12);
        }

        .vn-btn-gold { background: var(--vn-gold); color: #fff; }
        .vn-btn-gold:hover { background: var(--vn-gold-dark); }
        .vn-btn-white { background: #fff; color: var(--vn-ink); border-color: #e2e6eb; }
        .vn-btn-whatsapp { background: var(--vn-green); color: #fff; }
        .vn-btn-whatsapp:hover { background: #106b3b; }
        .vn-btn-call { color: var(--vn-ink); background: #fff; border-color: #dfe3e8; }

        /* HERO IMAGE CAROUSEL */
        .vn-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 650px;
          background: #182b3e;
          isolation: isolate;
          overflow: hidden;
        }

        .vn-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity .65s ease, transform 6s ease;
          animation: vnHeroZoom 8s ease-in-out infinite alternate;
        }

        .vn-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(12,27,43,.91) 0%,
              rgba(12,27,43,.75) 48%, rgba(12,27,43,.28) 100%),
            linear-gradient(0deg, rgba(12,27,43,.35), transparent 60%);
        }

        .vn-hero-content {
  max-width: 760px;
  padding: 100px 0 110px;
  animation: vnHeroEnter .65s ease both;
}

       .vn-welcome-pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #fff;
  background: rgba(25, 45, 78, .92);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 100px;
  padding: 7px 14px;
  font-size: 11px;
  letter-spacing: 1.1px;
  font-weight: 800;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

        .vn-welcome-pill i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--vn-gold-light);
          box-shadow: 0 0 0 5px rgba(243,223,177,.12);
        }

        .vn-hero h1 {
  margin: 17px 0 16px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(36px, 5.5vw, 54px);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -1.8px;
}

.vn-hero h1 span {
  display: block;
  background: linear-gradient(
    90deg,
    #273d65 0%,
    #e96572 38%,
    #ff9363 70%,
    #ffd65b 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

        .vn-hero-copy {
          max-width: 680px;
          color: #eef2f6;
          font-size: 16px;
          line-height: 1.5;
          margin: 0 0 29px;
        }

        .vn-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .vn-hero-actions .vn-btn {
  min-height: 48px;
  padding: 13px 30px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 800;
}

       .vn-hero-proof {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 29px;
  color: #f5f7fa;
  font-size: 11px;
  font-weight: 600;
}

.vn-hero-proof span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.vn-hero-proof svg {
  color: #f3cb7a;
}

        .vn-hero-arrow {
          position: absolute;
          top: 50%;
          z-index: 3;
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          padding: 0;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 50%;
          color: #fff;
          background: rgba(14,29,45,.42);
          backdrop-filter: blur(7px);
          cursor: pointer;
          transform: translateY(-50%);
          transition: background .2s, transform .2s;
        }

        .vn-hero-arrow:hover {
          background: var(--vn-gold);
          transform: translateY(-50%) scale(1.06);
        }

        .vn-hero-arrow-left { left: 22px; }
        .vn-hero-arrow-right { right: 22px; }

        .vn-hero-indicators {
          position: absolute;
          z-index: 3;
          bottom: 29px;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 9px;
          transform: translateX(-50%);
        }

        .vn-hero-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 1px solid rgba(255,255,255,.9);
          border-radius: 20px;
          background: rgba(255,255,255,.35);
          cursor: pointer;
          transition: width .25s, background .25s;
        }

        .vn-hero-dot.active {
          width: 29px;
          background: var(--vn-gold-light);
          border-color: var(--vn-gold-light);
        }

        .vn-hero-count {
          position: absolute;
          right: 30px;
          bottom: 25px;
          color: #fff;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .vn-hero-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--vn-gold), #f8e2ae, var(--vn-gold));
        }

        /* TRUST STRIP */
        .vn-trust-strip {
          background: #fff;
          border-bottom: 1px solid var(--vn-line);
          box-shadow: 0 8px 30px rgba(29,42,58,.035);
        }

        .vn-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }

        .vn-trust-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 23px 17px;
          border-right: 1px solid var(--vn-line);
        }

        .vn-trust-item:last-child { border-right: 0; }

        .vn-trust-icon {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border-radius: 12px;
          background: #fbf2df;
          color: var(--vn-gold-dark);
          font-size: 18px;
        }

        .vn-trust-item strong { display: block; font-size: 11px; line-height: 1.6; }
        .vn-trust-item small { display: block; margin-top: 4px; color: var(--vn-muted); font-size: 10px; line-height: 1.6; }

        /* ABOUT */
        .vn-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .vn-about-visual { position: relative; padding: 0 18px 23px 0; }

        .vn-about-visual > img {
          display: block;
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 20px 50px rgba(27,42,57,.14);
        }

        .vn-floating-note {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 220px;
          padding: 20px;
          background: #fff;
          border: 1px solid #ece7dc;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(20,30,40,.13);
        }

        .vn-floating-note strong { display: block; font-size: 14px; line-height: 1.6; }
        .vn-floating-note span { display: block; color: var(--vn-muted); font-size: 11px; line-height: 1.7; margin-top: 5px; }
        .vn-about-copy > p { color: var(--vn-muted); font-size: 13px; line-height: 2; }

        .vn-bullet-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
          margin: 24px 0 28px;
        }

        .vn-bullet { display: flex; gap: 9px; align-items: flex-start; color: #344153; font-size: 11px; line-height: 1.7; }
        .vn-bullet svg { flex-shrink: 0; margin-top: 3px; color: var(--vn-gold-dark); }

        /* REASONS */
        .vn-reasons-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }

        .vn-reason-card {
          background: #fff;
          padding: 26px 22px;
          border: 1px solid #e9e7e1;
          border-radius: 12px;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .vn-reason-card:hover { transform: translateY(-5px); border-color: #d8bb7d; box-shadow: 0 18px 35px rgba(28,42,59,.08); }
        .vn-reason-icon { display: grid; place-items: center; width: 48px; height: 48px; margin-bottom: 18px; border-radius: 13px; background: #f9f0dc; color: var(--vn-gold-dark); font-size: 20px; }
        .vn-reason-card h3 { margin: 0 0 10px; font-size: 14px; line-height: 1.55; }
        .vn-reason-card p { margin: 0; color: var(--vn-muted); font-size: 11px; line-height: 1.9; }

        /* SERVICE CARDS */
        .vn-services-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 23px; }

        .vn-service-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e6e5df;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 8px 25px rgba(27,42,57,.045);
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .vn-service-card:hover { transform: translateY(-5px); border-color: #d8bb7d; box-shadow: 0 22px 45px rgba(27,42,57,.1); }
        .vn-service-image-wrap { height: 215px; position: relative; overflow: hidden; background: #e9e8e2; }
        .vn-service-image { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
        .vn-service-card:hover .vn-service-image { transform: scale(1.05); }

        .vn-service-image-wrap::after {
          content: "";
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(12,27,43,.45));
        }

        .vn-service-tag { position: absolute; z-index: 1; top: 14px; left: 14px; padding: 8px 10px; border-radius: 5px; color: #273246; background: rgba(255,255,255,.95); font-size: 9px; font-weight: 800; letter-spacing: .8px; }
        .vn-service-icon { position: absolute; z-index: 1; bottom: 14px; left: 16px; display: grid; place-items: center; width: 45px; height: 45px; color: #fff; background: var(--vn-gold); border: 3px solid #fff; border-radius: 12px; font-size: 19px; }

        .vn-service-content { display: flex; flex-direction: column; flex: 1; padding: 22px 20px 19px; }
        .vn-service-content h3 { margin: 0 0 10px; font-family: 'Manrope', sans-serif; font-size: 18px; line-height: 1.45; font-weight: 800; color: #203047; }
        .vn-service-description { color: var(--vn-muted); font-size: 11px; line-height: 1.9; margin: 0 0 16px; }
        .vn-service-preview, .vn-expanded-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .vn-service-preview { margin-bottom: 20px; }
        .vn-service-preview li, .vn-expanded-list li { display: flex; align-items: flex-start; gap: 9px; color: #435164; font-size: 11px; line-height: 1.75; }
        .vn-service-preview svg, .vn-expanded-list svg { color: var(--vn-gold-dark); flex-shrink: 0; margin-top: 3px; }

        .vn-service-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: auto; }
        .vn-service-actions .vn-btn { min-width: 0; min-height: 42px; padding: 10px 7px; font-size: 10px; white-space: nowrap; }
        .vn-view-btn { width: 100%; min-height: 43px; margin-top: 10px; background: #fff; color: #253247; border: 1px solid #e0d4b8; }
        .vn-view-btn:hover { color: #fff; background: var(--vn-ink); border-color: var(--vn-ink); }
        .vn-view-arrow { margin-left: auto; transition: transform .2s; }
        .vn-view-btn[aria-expanded="true"] .vn-view-arrow { transform: rotate(180deg); }

        .vn-service-expanded { margin-top: 17px; padding: 16px 13px; border-radius: 8px; background: #f7f8fa; border: 1px solid #e8ebef; animation: vnExpand .3s ease both; }
        .vn-service-expanded h4 { margin: 0 0 13px; color: #233249; font-size: 12px; }
        .vn-expanded-list li { font-size: 10px; }
        .vn-ideal { padding: 12px; margin-top: 15px; border-radius: 6px; background: #fff; border-left: 3px solid var(--vn-gold); color: #687587; font-size: 10px; line-height: 1.8; }
        .vn-ideal strong { color: #27364a; display: block; margin-bottom: 4px; }

        /* SHOWCASE */
        .vn-showcase-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .vn-showcase-card { padding: 26px; border-radius: 12px; background: #fff; border: 1px solid var(--vn-line); transition: transform .25s, box-shadow .25s; }
        .vn-showcase-card:hover { transform: translateY(-4px); box-shadow: 0 17px 38px rgba(28,42,59,.08); }
        .vn-showcase-art { display: grid; place-items: center; height: 130px; margin-bottom: 22px; color: var(--vn-gold-dark); background: linear-gradient(135deg, #f8f1e1, #f0f4f8); border-radius: 9px; font-size: 36px; }
        .vn-showcase-card h3 { font-size: 16px; margin: 0 0 10px; }
        .vn-showcase-card p { margin: 0; color: var(--vn-muted); font-size: 11px; line-height: 1.9; }
        .vn-showcase-link { display: inline-flex; gap: 9px; align-items: center; margin-top: 18px; color: var(--vn-gold-dark); font-size: 11px; font-weight: 800; }

        /* GALLERY */
        .vn-gallery-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 15px; }
        .vn-gallery-item { height: 230px; overflow: hidden; position: relative; border-radius: 10px; background: #e6e9ec; }
        .vn-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s; }
        .vn-gallery-item:hover img { transform: scale(1.07); }
        .vn-gallery-item::after { content: ""; position: absolute; inset: 30% 0 0; background: linear-gradient(transparent, rgba(16,31,48,.86)); }
        .vn-gallery-caption { position: absolute; z-index: 1; bottom: 16px; left: 13px; right: 13px; color: #fff; font-size: 11px; font-weight: 800; line-height: 1.6; }

        /* FAQ */
        .vn-faq-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 50px; align-items: start; }
        .vn-faq-intro .vn-lead { margin-bottom: 23px; }
        .vn-faq-list { display: grid; gap: 11px; }
        .vn-faq-item { border: 1px solid #e4e7eb; border-radius: 9px; overflow: hidden; background: #fff; }
        .vn-faq-item:has(.vn-faq-question[aria-expanded="true"]) { border-color: #d9c18d; box-shadow: 0 7px 20px rgba(25,38,53,.04); }
        .vn-faq-question { display: flex; align-items: center; justify-content: space-between; gap: 18px; width: 100%; padding: 18px; border: 0; background: #fff; color: #243248; text-align: left; font-size: 11px; font-weight: 800; cursor: pointer; }
        .vn-faq-question svg { color: var(--vn-gold-dark); flex-shrink: 0; transition: transform .2s; }
        .vn-faq-question[aria-expanded="true"] svg { transform: rotate(180deg); }
        .vn-faq-answer { padding: 0 18px 18px; color: var(--vn-muted); font-size: 11px; line-height: 1.9; animation: vnExpand .25s ease both; }

        /* CUSTOMER REVIEWS CAROUSEL */
        .vn-reviews-section { background: linear-gradient(140deg, #f9f6ef, #f1f5f8); }

        .vn-reviews-wrap {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
        }

        .vn-review-card {
          position: relative;
          min-height: 300px;
          padding: 40px 55px;
          text-align: center;
          background: #fff;
          border: 1px solid #e9e2d4;
          border-radius: 17px;
          box-shadow: 0 20px 55px rgba(28,42,59,.07);
          animation: vnReviewEnter .45s ease both;
        }

        .vn-review-quote {
          display: grid;
          place-items: center;
          width: 53px;
          height: 53px;
          margin: 0 auto 18px;
          border-radius: 15px;
          background: #f9f0dc;
          color: var(--vn-gold-dark);
          font-size: 23px;
        }

        .vn-review-stars {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 20px;
          color: #d49a2f;
          font-size: 17px;
        }

        .vn-review-text {
          max-width: 660px;
          margin: 0 auto 25px;
          color: #455367;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          font-weight: 600;
          line-height: 1.9;
        }

        .vn-review-person {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .vn-review-avatar {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #24364b;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
        }

        .vn-review-person-info { text-align: left; }
        .vn-review-person-info strong { display: block; font-size: 12px; }
        .vn-review-person-info span { display: block; margin-top: 4px; color: var(--vn-muted); font-size: 10px; }

        .vn-review-arrow {
          position: absolute;
          top: 50%;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid #e7dfcf;
          border-radius: 50%;
          background: #fff;
          color: #27364a;
          cursor: pointer;
          box-shadow: 0 5px 16px rgba(28,42,59,.08);
          transform: translateY(-50%);
          transition: background .2s, color .2s;
        }

        .vn-review-arrow:hover { background: var(--vn-gold); color: #fff; }
        .vn-review-arrow-left { left: -21px; }
        .vn-review-arrow-right { right: -21px; }

        .vn-review-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
        }

        .vn-review-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #d5d8dc;
          cursor: pointer;
          transition: width .2s, background .2s;
        }

        .vn-review-dot.active {
          width: 25px;
          border-radius: 10px;
          background: var(--vn-gold);
        }

        .vn-review-note {
          max-width: 650px;
          margin: 24px auto 0;
          text-align: center;
          color: #7a8593;
          font-size: 10px;
          line-height: 1.8;
        }

        /* CONTACT FORM */
        .vn-contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 45px; align-items: start; }
        .vn-contact-copy > p { color: var(--vn-muted); font-size: 12px; line-height: 1.95; }

        .vn-contact-point { display: flex; align-items: flex-start; gap: 13px; margin-top: 23px; }
        .vn-contact-point-icon { display: grid; place-items: center; width: 43px; height: 43px; flex-shrink: 0; border-radius: 10px; background: #f9f0dc; color: var(--vn-gold-dark); font-size: 17px; }
        .vn-contact-point strong { display: block; margin: 2px 0 5px; font-size: 11px; }
        .vn-contact-point span { display: block; color: var(--vn-muted); font-size: 11px; line-height: 1.7; }

        .vn-form { padding: 30px; background: #fff; border: 1px solid #e5e7e9; border-radius: 13px; box-shadow: 0 18px 50px rgba(28,42,59,.07); }
        .vn-form h3 { margin: 0 0 8px; font-size: 23px; font-weight: 800; letter-spacing: -.5px; }
        .vn-form > p { color: var(--vn-muted); font-size: 11px; line-height: 1.8; margin: 0 0 23px; }
        .vn-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .vn-field { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
        .vn-field-full { grid-column: 1 / -1; }
        .vn-field label { color: #334155; font-size: 10px; font-weight: 800; }
        .vn-field input, .vn-field select, .vn-field textarea { width: 100%; min-width: 0; padding: 12px; color: #263449; background: #fff; border: 1px solid #dfe4e9; border-radius: 6px; outline: none; font-size: 11px; }
        .vn-field input:focus, .vn-field select:focus, .vn-field textarea:focus { border-color: var(--vn-gold); box-shadow: 0 0 0 3px rgba(189,139,53,.12); }
        .vn-field textarea { min-height: 100px; resize: vertical; }
        .vn-submit { width: 100%; margin-top: 18px; border: 0; }
        .vn-form-note { margin-top: 12px; text-align: center; color: #7a8593; font-size: 10px; line-height: 1.7; }

        /* FINAL CTA */
        .vn-final-cta { padding: 60px 0; color: #fff; background: radial-gradient(circle at 85% 15%, rgba(243,223,177,.22), transparent 30%), linear-gradient(115deg, #1c2a3b, #31445a); }
        .vn-final-inner { display: flex; align-items: center; justify-content: space-between; gap: 28px; }
        .vn-final-inner .vn-eyebrow { color: #f1d7a0; }
        .vn-final-inner h2 { margin: 13px 0; max-width: 720px; color: #fff; font-family: 'Manrope', sans-serif; font-size: clamp(28px, 3.8vw, 42px); line-height: 1.2; letter-spacing: -1px; }
        .vn-final-inner p { max-width: 680px; margin: 0; color: #e0e7ef; font-size: 11px; line-height: 1.9; }
        .vn-final-actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }

        @keyframes vnHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        @keyframes vnHeroEnter {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes vnExpand {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes vnReviewEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1020px) {
          .vn-trust-grid { grid-template-columns: repeat(2, 1fr); }
          .vn-trust-item:nth-child(2) { border-right: 0; }
          .vn-trust-item:nth-child(-n+2) { border-bottom: 1px solid var(--vn-line); }
          .vn-services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vn-reasons-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vn-about-grid { gap: 32px; }
          .vn-faq-layout, .vn-contact-grid { gap: 28px; }
          .vn-gallery-item { height: 200px; }
          .vn-hero-arrow-left { left: 12px; }
          .vn-hero-arrow-right { right: 12px; }
        }

        @media (max-width: 700px) {
          .vn-container { width: calc(100% - 30px); }
          .vn-section { padding: 60px 0; }
          .vn-hero {
  min-height: 600px;
}

.vn-hero-content {
  padding: 75px 0 100px;
}

.vn-hero::before {
  background: linear-gradient(
    90deg,
    rgba(12,27,43,.91),
    rgba(12,27,43,.70)
  );
}

.vn-welcome-pill {
  font-size: 9px;
  letter-spacing: .6px;
  padding: 8px 11px;
  gap: 7px;
}

.vn-hero h1 {
  font-size: clamp(32px, 8vw, 43px);
  line-height: 1.06;
  letter-spacing: -1.2px;
  margin: 19px 0 16px;
}

.vn-hero-copy {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.vn-hero-actions {
  flex-direction: column;
  align-items: stretch;
  gap: 11px;
}

.vn-hero-actions .vn-btn {
  width: 100%;
  min-height: 48px;
  font-size: 13px;
  padding: 13px 20px;
}

.vn-hero-proof {
  gap: 9px;
  font-size: 9px;
  line-height: 1.6;
}
          .vn-hero-proof { gap: 10px; font-size: 9px; }
          .vn-hero-arrow { top: auto; bottom: 18px; width: 38px; height: 38px; transform: none; }
          .vn-hero-arrow:hover { transform: scale(1.04); }
          .vn-hero-arrow-left { left: 16px; }
          .vn-hero-arrow-right { right: 16px; }
          .vn-hero-indicators { bottom: 33px; }
          .vn-hero-count { display: none; }

          .vn-trust-item { padding: 17px 9px; gap: 9px; }
          .vn-trust-icon { width: 35px; height: 35px; font-size: 15px; }
          .vn-trust-item strong { font-size: 10px; }
          .vn-trust-item small { font-size: 9px; }

          .vn-about-grid { grid-template-columns: 1fr; gap: 38px; }
          .vn-about-visual { padding-right: 8px; }
          .vn-about-visual > img { height: 320px; }
          .vn-floating-note { width: 185px; padding: 15px; }
          .vn-bullet-list { grid-template-columns: 1fr; }

          .vn-reasons-grid { grid-template-columns: 1fr 1fr; gap: 11px; }
          .vn-reason-card { padding: 18px 14px; }
          .vn-reason-icon { width: 40px; height: 40px; font-size: 17px; }
          .vn-reason-card h3 { font-size: 12px; }
          .vn-reason-card p { font-size: 10px; }

          .vn-services-grid { grid-template-columns: 1fr; gap: 18px; }
          .vn-service-image-wrap { height: 230px; }
          .vn-service-content { padding: 21px 18px 18px; }
          .vn-service-content h3 { font-size: 19px; }
          .vn-service-description, .vn-service-preview li { font-size: 11px; }
          .vn-service-actions .vn-btn { font-size: 11px; }

          .vn-showcase-grid { grid-template-columns: 1fr; gap: 14px; }
          .vn-showcase-card { padding: 21px; }
          .vn-showcase-art { height: 115px; }

          .vn-gallery-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .vn-gallery-item { height: 165px; }
          .vn-gallery-caption { font-size: 10px; left: 9px; right: 9px; bottom: 10px; }

          .vn-faq-layout, .vn-contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .vn-faq-question { padding: 16px 13px; font-size: 10px; }
          .vn-faq-answer { padding: 0 13px 16px; }

          .vn-review-card { min-height: 320px; padding: 29px 23px; }
          .vn-review-text { font-size: 13px; }
          .vn-review-arrow { top: auto; bottom: -21px; transform: none; width: 38px; height: 38px; }
          .vn-review-arrow:hover { transform: none; }
          .vn-review-arrow-left { left: calc(50% - 49px); }
          .vn-review-arrow-right { right: calc(50% - 49px); }
          .vn-review-indicators { margin-top: 40px; }

          .vn-form { padding: 22px 16px; }
          .vn-form-grid { grid-template-columns: 1fr; }
          .vn-field-full { grid-column: auto; }

          .vn-final-inner { flex-direction: column; align-items: flex-start; }
          .vn-final-actions { width: 100%; }
          .vn-final-actions .vn-btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vn-home *, .vn-home *::before, .vn-home *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* HERO IMAGE CAROUSEL */}
      <section className="vn-hero">
        <img
          key={currentSlide.image}
          className="vn-hero-bg"
          src={currentSlide.image}
          alt={`${currentSlide.highlight} - Venkat Safety Nets`}
          fetchPriority="high"
        />

        <div className="vn-container">
          <div className="vn-hero-content" key={activeHero}>
            <div className="vn-welcome-pill">
              <i />
              {currentSlide.eyebrow}
            </div>

            <h1>
              {currentSlide.title}
              <span>{currentSlide.highlight}</span>
              {currentSlide.ending}
            </h1>

            <p className="vn-hero-copy">{currentSlide.description}</p>

            <div className="vn-hero-actions">
              <a
                className="vn-btn vn-btn-gold"
                href={whatsappMessage(
                  "Hello Venkat Safety Nets, I would like to request a quotation for your services."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={18} />
                Get a Free Quote
                <FaArrowRight />
              </a>

              <a className="vn-btn vn-btn-white" href={`tel:${PHONE}`}>
                <FaPhoneAlt />
                Call: 8722277643
              </a>
            </div>

            <div className="vn-hero-proof">
              <span><FaStar /> Personalised Service</span>
              <span>•</span>
              <span>Residential &amp; Commercial</span>
              <span>•</span>
              <span>WhatsApp Enquiries</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="vn-hero-arrow vn-hero-arrow-left"
          onClick={previousHero}
          aria-label="Previous hero slide"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="vn-hero-arrow vn-hero-arrow-right"
          onClick={nextHero}
          aria-label="Next hero slide"
        >
          <FaChevronRight />
        </button>

        <div className="vn-hero-indicators">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={`vn-hero-dot ${activeHero === index ? "active" : ""}`}
              onClick={() => setActiveHero(index)}
              aria-label={`Show hero slide ${index + 1}`}
              aria-current={activeHero === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="vn-hero-count">
          {String(activeHero + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>

        <div className="vn-hero-bottom" />
      </section>

      {/* TRUST STRIP */}
      <section className="vn-trust-strip">
        <div className="vn-container vn-trust-grid">
          {[
            { icon: FaMapMarkerAlt, title: "Service Enquiries", text: "Tell us your area" },
            { icon: FaShieldAlt, title: "Safety Options", text: "Nets and invisible grills" },
            { icon: FaTools, title: "Custom Requirements", text: "Discuss your space" },
            { icon: FaWhatsapp, title: "Quick Contact", text: "Phone and WhatsApp" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div className="vn-trust-item" key={item.title}>
                <div className="vn-trust-icon"><Icon /></div>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="vn-section vn-white">
        <div className="vn-container vn-about-grid">
          <div className="vn-about-visual vn-reveal">
            <img
              src="images/about.webp"
              alt="Modern residential space"
              loading="lazy"
            />
            <div className="vn-floating-note">
              <strong>Protection that fits your space</strong>
              <span>Discuss your requirements and suitable installation options.</span>
            </div>
          </div>

          <div className="vn-about-copy vn-reveal">
            <span className="vn-eyebrow">About Venkat Safety Nets</span>
            <h2 className="vn-title">
              A Safer Space.
              <br />
              <span>A Better Everyday.</span>
            </h2>

            <p>
              Venkat Safety Nets offers netting and grill solutions for
              balconies, windows, terraces, ducts and other suitable openings.
              Explore options for bird control, child safety, pet protection
              and selected commercial uses.
            </p>

            <p>
              Every site is different. Share your requirements, measurements
              and location so the appropriate material and installation
              approach can be discussed before work begins.
            </p>

            <div className="vn-bullet-list">
              {[
                "Balcony Safety Nets Installation Bangalore",
                "Invisible Grills Installation Services",
                "Pigeon and Bird Control Nets",
                "Children and Pet Protection Nets",
                "Duct and Building Covering Nets",
                "Cricket Practice Nets Installation",
              ].map((item) => (
                <div className="vn-bullet" key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a className="vn-btn vn-btn-gold" href="#vn-services">
              Explore Our Services <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="vn-section vn-cream">
        <div className="vn-container">
          <div className="vn-section-head vn-reveal">
            <span className="vn-eyebrow">Why Choose Us</span>
            <h2 className="vn-title">
              Practical Solutions for <span>Your Property</span>
            </h2>
            <p className="vn-lead">
              Explore the options, discuss the site requirements and choose a
              solution that suits the intended use of your space.
            </p>
          </div>

          <div className="vn-reasons-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="vn-reason-card vn-reveal" key={reason.title}>
                  <div className="vn-reason-icon"><Icon /></div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="vn-section vn-pale" id="vn-services">
        <div className="vn-container">
          <div className="vn-section-head vn-reveal">
            <span className="vn-eyebrow">Our Services</span>
            <h2 className="vn-title">
              Explore Our <span>Safety Net Solutions</span>
            </h2>
            <p className="vn-lead">
              Select View Service to read more details, then contact us by
              WhatsApp or phone to discuss your requirements.
            </p>
          </div>

          <div className="vn-services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <article
                  className="vn-service-card vn-reveal"
                  id={`service-${service.id}`}
                  key={service.id}
                >
                  <div className="vn-service-image-wrap">
                    <img
                      className="vn-service-image"
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                    <span className="vn-service-tag">{service.category}</span>
                    <div className="vn-service-icon"><Icon /></div>
                  </div>

                  <div className="vn-service-content">
                    <h3>{service.title}</h3>
                    <p className="vn-service-description">{service.description}</p>

                    <ul className="vn-service-preview">
                      {service.points.slice(0, 3).map((point) => (
                        <li key={point}>
                          <FaCheckCircle />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="vn-service-actions">
                      <a
                        className="vn-btn vn-btn-whatsapp"
                        href={enquiryFor(service)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp enquiry for ${service.title}`}
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>

                      <a
                        className="vn-btn vn-btn-call"
                        href={`tel:${PHONE}`}
                        aria-label={`Call about ${service.title}`}
                      >
                        <FaPhoneAlt /> Call Now
                      </a>
                    </div>

                    <button
                      type="button"
                      className="vn-btn vn-view-btn"
                      onClick={() => toggleService(service.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`details-${service.id}`}
                    >
                      <FaEye />
                      {isExpanded ? "Show Less" : `View ${service.title}`}
                      <FaChevronDown className="vn-view-arrow" />
                    </button>

                    {isExpanded && (
                      <div
                        className="vn-service-expanded"
                        id={`details-${service.id}`}
                      >
                        <h4>Service Details &amp; Key Points</h4>
                        <ul className="vn-expanded-list">
                          {service.points.map((point) => (
                            <li key={point}>
                              <FaCheckCircle />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="vn-ideal">
                          <strong>Common applications</strong>
                          {service.ideal}
                        </div>

                        <div className="vn-service-actions" style={{ marginTop: 15 }}>
                          <a
                            className="vn-btn vn-btn-whatsapp"
                            href={enquiryFor(service)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp /> Enquire Now
                          </a>
                          <a className="vn-btn vn-btn-call" href={`tel:${PHONE}`}>
                            <FaPhoneAlt /> Call Us
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SHOWCASE */}
      <section className="vn-section vn-white">
        <div className="vn-container">
          <div className="vn-section-head vn-reveal">
            <span className="vn-eyebrow">Explore Our Solutions</span>
            <h2 className="vn-title">
              The Right Option for <span>Different Needs</span>
            </h2>
            <p className="vn-lead">
              Learn about our solutions and contact us to discuss your
              installation requirements.
            </p>
          </div>

          <div className="vn-showcase-grid">
            {[
              {
                title: "Invisible Grill Solutions",
                text: "Explore cable-grill options for suitable residential openings.",
                icon: FaBuilding,
              },
              {
                title: "Balcony & Pigeon Netting",
                text: "See options for bird control and additional balcony protection.",
                icon: FaFeatherAlt,
              },
              {
                title: "Custom Safety Applications",
                text: "Discuss measurements and installation needs for your property.",
                icon: FaTools,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article className="vn-showcase-card vn-reveal" key={item.title}>
                  <div className="vn-showcase-art"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="vn-showcase-link" href="/our-balcony-pigeon-safety-nets-hsrlayout-bangalore">
                    Explore services <FaArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="vn-section vn-cream">
        <div className="vn-container">
          <div className="vn-section-head vn-reveal">
            <span className="vn-eyebrow">Gallery</span>
            <h2 className="vn-title">
              Ideas for Your <span>Home &amp; Property</span>
            </h2>
            <p className="vn-lead">
              These are illustrative images. Replace them with your actual
              installation photos to create a genuine project gallery.
            </p>
          </div>

          <div className="vn-gallery-grid">
            {gallery.map((item) => (
              <div className="vn-gallery-item vn-reveal" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="vn-gallery-caption">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vn-section vn-white">
        <div className="vn-container vn-faq-layout">
          <div className="vn-faq-intro vn-reveal">
            <span className="vn-eyebrow">FAQs</span>
            <h2 className="vn-title">
              Common Questions, <span>Clear Answers</span>
            </h2>
            <p className="vn-lead">
              Find out more about safety nets, invisible grills, bird control
              and the quotation process.
            </p>
            <a
              className="vn-btn vn-btn-gold"
              href={whatsappMessage(
                "Hello Venkat Safety Nets, I have a question about your services."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Ask a Question
            </a>
          </div>

          <div className="vn-faq-list vn-reveal">
            {faqs.map((faq, index) => {
              const open = activeFaq === index;

              return (
                <div className="vn-faq-item" key={faq.question}>
                  <button
                    className="vn-faq-question"
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActiveFaq(open ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown />
                  </button>

                  {open && (
                    <div className="vn-faq-answer">{faq.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS CAROUSEL - AFTER FAQ */}
      <section className="vn-section vn-reviews-section">
        <div className="vn-container">
          <div className="vn-section-head vn-reveal">
            <span className="vn-eyebrow">Customer Feedback</span>
            <h2 className="vn-title">
              What Customers <span>Say About Us</span>
            </h2>
            <p className="vn-lead">
              Customer feedback helps others understand the service experience.
              Replace these sample cards with genuine customer reviews.
            </p>
          </div>

          <div className="vn-reviews-wrap vn-reveal">
            <article className="vn-review-card" key={activeReview}>
              <div className="vn-review-quote">
                <FaQuoteRight />
              </div>

              <div
                className="vn-review-stars"
                aria-label={`${currentReview.rating} out of 5 stars`}
              >
                {Array.from({ length: currentReview.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="vn-review-text">
                “{currentReview.text}”
              </p>

              <div className="vn-review-person">
                <div className="vn-review-avatar">
                  {currentReview.initials}
                </div>
                <div className="vn-review-person-info">
                  <strong>{currentReview.name}</strong>
                  <span>{currentReview.location}</span>
                </div>
              </div>
            </article>

            <button
              type="button"
              className="vn-review-arrow vn-review-arrow-left"
              onClick={previousReview}
              aria-label="Previous customer review"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="vn-review-arrow vn-review-arrow-right"
              onClick={nextReview}
              aria-label="Next customer review"
            >
              <FaChevronRight />
            </button>

            <div className="vn-review-indicators">
              {customerReviews.map((review, index) => (
                <button
                  key={review.location}
                  type="button"
                  className={`vn-review-dot ${activeReview === index ? "active" : ""}`}
                  onClick={() => setActiveReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={activeReview === index ? "true" : undefined}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="vn-section vn-pale" id="vn-contact">
        <div className="vn-container vn-contact-grid">
          <div className="vn-contact-copy vn-reveal">
            <span className="vn-eyebrow">Get a Quotation</span>
            <h2 className="vn-title">
              Let's Discuss <span>Your Requirements</span>
            </h2>
            <p>
              Tell us which service you need and where you want it installed.
              Your enquiry will open in WhatsApp, where you can review it
              before sending.
            </p>

            <div className="vn-contact-point">
              <div className="vn-contact-point-icon"><FaPhoneAlt /></div>
              <div>
                <strong>Call Venkat Safety Nets</strong>
                <span>+91 87222 77643</span>
              </div>
            </div>

            <div className="vn-contact-point">
              <div className="vn-contact-point-icon"><FaWhatsapp /></div>
              <div>
                <strong>WhatsApp Enquiry</strong>
                <span>Share your requirements and photos of the site.</span>
              </div>
            </div>

            <div className="vn-contact-point">
              <div className="vn-contact-point-icon"><FaMapMarkerAlt /></div>
              <div>
                <strong>Share Your Location</strong>
                <span>Provide your area so service availability can be discussed.</span>
              </div>
            </div>
          </div>

          <form className="vn-form vn-reveal" onSubmit={submitForm}>
            <h3>Request a Callback</h3>
            <p>Complete the details below to prepare your WhatsApp enquiry.</p>

            <div className="vn-form-grid">
              <div className="vn-field">
                <label htmlFor="vn-name">Name *</label>
                <input
                  id="vn-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={updateForm}
                  required
                />
              </div>

              <div className="vn-field">
                <label htmlFor="vn-mobile">Mobile Number *</label>
                <input
                  id="vn-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+() -]{8,18}"
                  placeholder="Your mobile number"
                  value={form.mobile}
                  onChange={updateForm}
                  required
                />
              </div>

              <div className="vn-field vn-field-full">
                <label htmlFor="vn-location">Location / Area *</label>
                <input
                  id="vn-location"
                  name="location"
                  type="text"
                  placeholder="Enter your area or city"
                  value={form.location}
                  onChange={updateForm}
                  required
                />
              </div>

              <div className="vn-field vn-field-full">
                <label htmlFor="vn-service-select">Choose Service *</label>
                <select
                  id="vn-service-select"
                  name="service"
                  value={form.service}
                  onChange={updateForm}
                  required
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="vn-field vn-field-full">
                <label htmlFor="vn-message">Message</label>
                <textarea
                  id="vn-message"
                  name="message"
                  placeholder="Describe your requirements, approximate size or any questions"
                  value={form.message}
                  onChange={updateForm}
                />
              </div>
            </div>

            <button type="submit" className="vn-btn vn-btn-whatsapp vn-submit">
              <FaWhatsapp size={18} /> Submit Enquiry on WhatsApp
            </button>

            <div className="vn-form-note">
              Your enquiry will be prepared in WhatsApp for you to review and send.
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA - NO FOOTER */}
      <section className="vn-final-cta">
        <div className="vn-container vn-final-inner">
          <div>
            <span className="vn-eyebrow">Venkat Safety Nets</span>
            <h2>Looking for Safety Nets or Invisible Grills?</h2>
            <p>
              Contact us to discuss your property, explore suitable options
              and request a quotation for your requirements.
            </p>
          </div>

          <div className="vn-final-actions">
            <a
              className="vn-btn vn-btn-whatsapp"
              href={whatsappMessage(
                "Hello Venkat Safety Nets, I would like to discuss your services and request a quotation."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={18} /> WhatsApp Now
            </a>
            <a className="vn-btn vn-btn-white" href={`tel:${PHONE}`}>
              <FaPhoneAlt /> Call 8722277643
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
