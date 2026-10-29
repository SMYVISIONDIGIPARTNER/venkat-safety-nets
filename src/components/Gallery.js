import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const PHONE_NUMBER = "8722277643";
const WHATSAPP_NUMBER = "918722277643";

const galleryItems = [
  {
    title: "Balcony Safety Nets",
    category: "Safety Nets",
    image: "images/balcony.webp",
    alt: "Balcony safety nets",
  },
  {
    title: "Pigeon Safety Nets",
    category: "Bird Protection",
    image: "images/pigeon.webp",
    alt: "Pigeon safety nets",
  },
  {
    title: "Children Safety Nets",
    category: "Safety Nets",
    image: "images/child.webp",
    alt: "Children safety nets",
  },
  {
    title: "Pet Safety Nets",
    category: "Safety Nets",
    image: "images/pet.webp",
    alt: "Pet safety nets",
  },
  {
    title: "Invisible Grill Options",
    category: "Invisible Grills",
    image: "images/grill.webp",
    alt: "Invisible grills",
  },
  {
    title: "Terrace Safety Nets",
    category: "Safety Nets",
    image: "images/terrace.webp",
    alt: "Terrace safety nets",
  },
  {
    title: "Duct Area Netting",
    category: "Bird Protection",
    image: "images/doct.webp",
    alt: "Duct area netting",
  },
  {
    title: "Building Safety Nets",
    category: "Commercial",
    image: "images/building.webp",
    alt: "Building safety nets",
  },
  {
    title: "Construction Safety Nets",
    category: "Commercial",
    image: "images/cons.webp",
    alt: "Construction safety nets",
  },
  {
    title: "Cricket Practice Nets",
    category: "Sports Nets",
    image: "images/cp.webp",
    alt: "Cricket practice nets",
  },
  {
    title: "Car Parking Netting",
    category: "Commercial",
    image: "images/car.webp",
    alt: "Car parking netting",
  },
  {
    title: "Outdoor Shade Nets",
    category: "Other Solutions",
    image: "images/shade.webp",
    alt: "Outdoor shade nets",
  },
];

const categories = [
  "All",
  "Safety Nets",
  "Bird Protection",
  "Invisible Grills",
  "Sports Nets",
  "Commercial",
  "Other Solutions",
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("vg-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("vg-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vg-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(
            (item) => item.category === activeCategory
          ),
    [activeCategory]
  );

  const openImage = useCallback((item) => {
    setSelectedImage(item);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (!selectedImage || filteredItems.length === 0) return;

    const index = filteredItems.findIndex(
      (item) => item.title === selectedImage.title
    );

    if (index === -1) return;

    setSelectedImage(
      filteredItems[
        (index - 1 + filteredItems.length) % filteredItems.length
      ]
    );
  }, [selectedImage, filteredItems]);

  const showNext = useCallback(() => {
    if (!selectedImage || filteredItems.length === 0) return;

    const index = filteredItems.findIndex(
      (item) => item.title === selectedImage.title
    );

    if (index === -1) return;

    setSelectedImage(
      filteredItems[(index + 1) % filteredItems.length]
    );
  }, [selectedImage, filteredItems]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage, closeImage, showPrevious, showNext]);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Venkat Safety Nets, I would like to enquire about your installation services. Please share the details."
  )}`;

  const imageUrl = (path) => `${process.env.PUBLIC_URL}/${path}`;

  const handleImageError = (key) => {
    setFailedImages((previous) => ({
      ...previous,
      [key]: true,
    }));
  };

  return (
    <main className="vg-page">
      <style>{`
        .vg-page {
          --vg-gold: #bd8b32;
          --vg-gold-dark: #98691d;
          --vg-gold-soft: #fbf5e9;
          --vg-ink: #202b39;
          --vg-body: #687384;
          --vg-border: #eee8de;
          background: #fff;
          color: var(--vg-ink);
          font-family: inherit;
          overflow: hidden;
        }

        .vg-page *,
        .vg-page *::before,
        .vg-page *::after {
          box-sizing: border-box;
        }

        .vg-container {
          width: min(1160px, calc(100% - 42px));
          margin: 0 auto;
        }

        .vg-section {
          padding: 78px 0;
        }

        .vg-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .vg-reveal.vg-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--vg-gold-dark);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .vg-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--vg-gold);
        }

        .vg-heading {
          margin: 15px 0;
          color: var(--vg-ink);
          font-size: clamp(34px, 4.4vw, 49px);
          font-weight: 900;
          letter-spacing: -1.6px;
          line-height: 1.15;
        }

        .vg-heading span {
          color: var(--vg-gold-dark);
        }

        .vg-description {
          max-width: 720px;
          margin: 0 auto;
          color: var(--vg-body);
          font-size: 14px;
          line-height: 1.95;
        }

        .vg-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          min-height: 45px;
          padding: 12px 18px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .25s ease, background .25s ease;
        }

        .vg-btn:hover {
          transform: translateY(-2px);
        }

        .vg-btn-gold {
          background: var(--vg-gold);
          color: #fff;
        }

        .vg-btn-gold:hover {
          background: var(--vg-gold-dark);
          color: #fff;
        }

        .vg-btn-white {
          border-color: var(--vg-border);
          background: #fff;
          color: var(--vg-ink);
        }

        .vg-btn-white:hover {
          border-color: var(--vg-gold);
          color: var(--vg-gold-dark);
        }

        /* Hero section */

        .vg-hero {
          position: relative;
          padding: 74px 0 60px;
          background:
            radial-gradient(
              ellipse at 90% 0%,
              rgba(189,139,50,.12),
              transparent 36%
            ),
            #fff;
        }

        .vg-hero-grid {
          display: grid;
          grid-template-columns: 1fr .85fr;
          align-items: center;
          gap: 48px;
        }

        .vg-hero-copy {
          animation: vg-enter .75s ease both;
        }

        .vg-hero h1 {
          margin: 18px 0;
          font-size: clamp(40px, 5vw, 61px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .vg-hero h1 span {
          display: block;
          color: var(--vg-gold-dark);
        }

        .vg-hero-copy p {
          max-width: 600px;
          color: var(--vg-body);
          font-size: 14px;
          line-height: 2;
        }

        .vg-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 23px;
        }

        .vg-hero-photo {
          position: relative;
          min-height: 370px;
          overflow: hidden;
          border-radius: 14px;
          background: #f5efe4;
          box-shadow: 0 20px 50px rgba(30,35,40,.1);
        }

        .vg-hero-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* No text overlay on the hero image */

        /* Gallery */

        .vg-gallery-section {
          background: #fcfaf6;
        }

        .vg-intro {
          margin-bottom: 34px;
          text-align: center;
        }

        .vg-intro .vg-eyebrow {
          justify-content: center;
        }

        .vg-filter-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin: 30px 0 36px;
        }

        .vg-filter {
          padding: 11px 16px;
          border: 1px solid #e9e2d6;
          border-radius: 30px;
          background: #fff;
          color: #566170;
          font-family: inherit;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
          transition: all .25s;
        }

        .vg-filter:hover {
          transform: translateY(-2px);
          border-color: var(--vg-gold);
        }

        .vg-filter-active {
          border-color: var(--vg-gold);
          background: var(--vg-gold);
          color: #fff;
        }

        /* Image-only cards */

        .vg-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .vg-card {
          overflow: hidden;
          border: 1px solid var(--vg-border);
          border-radius: 12px;
          background: #fff;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .vg-card:hover {
          transform: translateY(-5px);
          border-color: #ddc89f;
          box-shadow: 0 16px 38px rgba(35,30,20,.08);
        }

        .vg-card-image {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #f0e8db;
          cursor: pointer;
        }

        .vg-card-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .55s ease;
        }

        .vg-card:hover .vg-card-image img {
          transform: scale(1.055);
        }

        /* Hide all image overlays and labels */

        .vg-card-image::after,
        .vg-expand-icon,
        .vg-card-category,
        .vg-card-content {
          display: none !important;
        }

        .vg-image-fallback {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          color: #687384;
          background: #f0e8db;
          font-size: 12px;
        }

        /* Lightbox */

        .vg-lightbox {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(20,25,32,.94);
          animation: vg-fade .2s ease both;
        }

        .vg-lightbox-content {
          position: relative;
          display: flex;
          flex-direction: column;
          width: min(100%, 1050px);
          max-height: 92vh;
          overflow: hidden;
          border-radius: 12px;
          background: transparent;
          animation: vg-pop .25s ease both;
        }

        .vg-lightbox-image-wrap {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 180px;
          height: min(78vh, 750px);
          background: transparent;
        }

        .vg-lightbox-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .vg-lightbox-close,
        .vg-lightbox-arrow {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.7);
          border-radius: 50%;
          background: rgba(255,255,255,.96);
          color: var(--vg-ink);
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .vg-lightbox-close:hover,
        .vg-lightbox-arrow:hover {
          transform: scale(1.06);
          background: var(--vg-gold-soft);
        }

        .vg-lightbox-close {
          top: 14px;
          right: 14px;
          width: 42px;
          height: 42px;
          font-size: 17px;
        }

        .vg-lightbox-arrow {
          top: 50%;
          width: 45px;
          height: 45px;
          font-size: 15px;
          transform: translateY(-50%);
        }

        .vg-lightbox-arrow:hover {
          transform: translateY(-50%) scale(1.06);
        }

        .vg-lightbox-prev {
          left: 14px;
        }

        .vg-lightbox-next {
          right: 14px;
        }

        /* Remove all text from the lightbox */

        .vg-lightbox-caption {
          display: none !important;
        }

        @keyframes vg-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes vg-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes vg-pop {
          from {
            opacity: 0;
            transform: translateY(10px) scale(.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vg-page *,
          .vg-page *::before,
          .vg-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }

          .vg-reveal {
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 1000px) {
          .vg-hero-grid {
            gap: 28px;
          }

          .vg-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .vg-container {
            width: calc(100% - 32px);
          }

          .vg-section {
            padding: 58px 0;
          }

          .vg-hero {
            padding: 54px 0 42px;
          }

          .vg-hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vg-hero h1 {
            font-size: clamp(38px, 9vw, 52px);
          }

          .vg-hero-photo {
            min-height: 310px;
          }

          .vg-card-image {
            height: 230px;
          }

          .vg-lightbox {
            padding: 12px;
          }

          .vg-lightbox-image-wrap {
            height: 70vh;
          }
        }

        @media (max-width: 520px) {
          .vg-container {
            width: calc(100% - 28px);
          }

          .vg-hero h1 {
            letter-spacing: -1.4px;
          }

          .vg-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .vg-hero-actions .vg-btn {
            width: 100%;
          }

          .vg-filter-row {
            gap: 7px;
          }

          .vg-filter {
            padding: 10px 12px;
            font-size: 10px;
          }

          .vg-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .vg-card {
            border-radius: 7px;
          }

          .vg-card-image {
            height: 170px;
          }

          .vg-lightbox-arrow {
            width: 38px;
            height: 38px;
          }

          .vg-lightbox-prev {
            left: 6px;
          }

          .vg-lightbox-next {
            right: 6px;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="vg-hero">
        <div className="vg-container vg-hero-grid">
          <div className="vg-hero-copy">
            <span className="vg-eyebrow">
              Venkat Safety Nets Gallery
            </span>

            <h1>
              Safety in Every Detail.
              <span>Quality in Every Corner.</span>
            </h1>

            <p>
              Explore our collection of safety netting, bird protection,
              invisible grill and sports netting ideas. Discover options
              for residential spaces, terraces, apartments and selected
              commercial properties.
            </p>

            <p>
              Have a specific requirement? Contact us to discuss the right
              solution for your property.
            </p>

            <div className="vg-hero-actions">
              <a href="#venkat-gallery" className="vg-btn vg-btn-gold">
                <FaImages />
                Explore Gallery
                <FaArrowRight />
              </a>

              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="vg-btn vg-btn-white"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          <div className="vg-hero-photo">
            <img
              src={`${process.env.PUBLIC_URL}/images/stair.webp`}
              alt="Safety installation gallery preview"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}

      <section
        className="vg-section vg-gallery-section"
        id="venkat-gallery"
      >
        <div className="vg-container">
          <Reveal className="vg-intro">
            <span className="vg-eyebrow">Our Gallery</span>

            <h2 className="vg-heading">
              Explore Our <span>Safety Solutions</span>
            </h2>

            <p className="vg-description">
              Browse our collection of safety net and grill images.
              Select any image to view it in a larger preview.
            </p>
          </Reveal>

          <Reveal>
            <div
              className="vg-filter-row"
              aria-label="Filter gallery by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`vg-filter ${
                    activeCategory === category
                      ? "vg-filter-active"
                      : ""
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedImage(null);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="vg-grid">
            {filteredItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 65}
              >
                <article className="vg-card">
                  <div
                    className="vg-card-image"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.alt}`}
                    onClick={() => openImage(item)}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        openImage(item);
                      }
                    }}
                  >
                    {failedImages[item.image] ? (
                      <div className="vg-image-fallback">
                        Image unavailable
                      </div>
                    ) : (
                      <img
                        src={imageUrl(item.image)}
                        alt={item.alt}
                        loading="lazy"
                        onError={() => handleImageError(item.image)}
                      />
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="vg-section">
        <div className="vg-container">
          <Reveal>
            <div className="vg-cta">
              <div>
                <span className="vg-eyebrow">
                  Need a Safety Solution?
                </span>

                <h2>
                  Let's Make Your Space
                  <span> Safer and More Secure.</span>
                </h2>

                <p>
                  Contact Venkat Safety Nets to discuss your requirements,
                  measurements and installation quotation.
                </p>
              </div>

              <div className="vg-cta-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vg-btn"
                  style={{
                    background: "#20ae63",
                    color: "#fff",
                  }}
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href={`tel:+91${PHONE_NUMBER}`}
                  className="vg-btn vg-btn-gold"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}

      {selectedImage && (
        <div
          className="vg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeImage();
            }
          }}
        >
          <div className="vg-lightbox-content">
            <button
              type="button"
              className="vg-lightbox-close"
              aria-label="Close image preview"
              onClick={closeImage}
            >
              <FaTimes />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  className="vg-lightbox-arrow vg-lightbox-prev"
                  aria-label="Previous image"
                  onClick={showPrevious}
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  className="vg-lightbox-arrow vg-lightbox-next"
                  aria-label="Next image"
                  onClick={showNext}
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="vg-lightbox-image-wrap">
              <img
                src={imageUrl(selectedImage.image)}
                alt={selectedImage.alt}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}