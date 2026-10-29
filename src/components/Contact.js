
import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaArrowRight,

  FaTools,
} from "react-icons/fa";

const PHONE_NUMBER = "8722277643";
const WHATSAPP_NUMBER = "918722277643";

const services = [
  "Balcony Safety Nets",
  "Pigeon Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Building Safety Nets",
  "Terrace Top Nets",
  "Duct Area Safety Nets",
  "Staircase Safety Nets",
  "Shade Nets",
  "Construction Safety Nets",
  "Bird Spikes",
  "Cricket Practice Nets",
  "Monkey Safety Nets",
  "Car Parking Safety Nets",
  "Swimming Pool Safety Nets",
  "Invisible Grills",
  "Other Enquiry",
];

function ContactReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("vc-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("vc-visible");
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
      className={`vc-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Venkat Safety Nets, I would like to enquire about your safety net services."
  )}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFormError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const location = formData.location.trim();

    if (!name || !phone || !formData.service) {
      setFormError("Please enter your name, phone number and required service.");
      return;
    }

    const cleanPhone = phone.replace(/[\s()+-]/g, "");

    if (!/^\d{10,13}$/.test(cleanPhone)) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    const message = [
      "Hello Venkat Safety Nets!",
      "",
      "I would like to request a quotation.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Location: ${location || "Not provided"}`,
      `Required Service: ${formData.service}`,
      `Message: ${formData.message.trim() || "Please contact me with details."}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="vc-page">
      <style>{`
        .vc-page {
          --vc-gold: #bd8b32;
          --vc-gold-dark: #98691d;
          --vc-gold-pale: #fbf5e9;
          --vc-ink: #202b39;
          --vc-muted: #687384;
          --vc-border: #eee7dc;
          background: #fff;
          color: var(--vc-ink);
          font-family: inherit;
          overflow: hidden;
        }

        .vc-page *,
        .vc-page *::before,
        .vc-page *::after { box-sizing: border-box; }

        .vc-container {
          width: min(1160px, calc(100% - 42px));
          margin: 0 auto;
        }

        .vc-section { padding: 76px 0; }

        .vc-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .vc-reveal.vc-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--vc-gold-dark);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.35px;
          text-transform: uppercase;
        }

        .vc-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--vc-gold);
        }

        .vc-heading {
          margin: 15px 0;
          font-size: clamp(34px, 4.4vw, 49px);
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1.14;
        }

        .vc-heading span { color: var(--vc-gold-dark); }

        .vc-description {
          color: var(--vc-muted);
          font-size: 14px;
          line-height: 1.95;
        }

        .vc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 13px 19px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          cursor: pointer;
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .vc-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30,30,30,.08);
        }

        .vc-btn-gold { background: var(--vc-gold); color: #fff; }
        .vc-btn-gold:hover { background: var(--vc-gold-dark); color: #fff; }

        .vc-btn-white {
          border-color: var(--vc-border);
          background: #fff;
          color: var(--vc-ink);
        }

        .vc-btn-white:hover { border-color: var(--vc-gold); color: var(--vc-gold-dark); }

        .vc-btn-whatsapp { background: #20ae63; color: #fff; }
        .vc-btn-whatsapp:hover { background: #168c4d; color: #fff; }

        /* Hero */

        .vc-hero {
          position: relative;
          padding: 76px 0 66px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(189,139,50,.13), transparent 36%),
            #fff;
        }

        .vc-hero-grid {
          display: grid;
          grid-template-columns: 1fr .82fr;
          align-items: center;
          gap: 55px;
        }

        .vc-hero-copy { animation: vc-enter .75s ease both; }

        .vc-hero h1 {
          margin: 18px 0;
          font-size: clamp(40px, 5.1vw, 61px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .vc-hero h1 span { display: block; color: var(--vc-gold-dark); }

        .vc-hero-copy > p {
          max-width: 580px;
          color: var(--vc-muted);
          font-size: 14px;
          line-height: 2;
        }

        .vc-hero-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 25px; }

        .vc-hero-visual {
          position: relative;
          min-height: 380px;
          overflow: hidden;
          border: 1px solid var(--vc-border);
          border-radius: 14px;
          background: var(--vc-gold-pale);
          box-shadow: 0 20px 48px rgba(40,35,25,.09);
        }

        .vc-hero-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vc-hero-visual::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(180deg, transparent 35%, rgba(24,30,35,.55));
          pointer-events: none;
        }

        .vc-hero-label {
          position: absolute;
          z-index: 1;
          right: 18px;
          bottom: 18px;
          left: 18px;
          padding: 19px;
          border: 1px solid rgba(255,255,255,.65);
          border-radius: 9px;
          background: rgba(255,255,255,.96);
        }

        .vc-hero-label strong { display: block; font-size: 16px; }
        .vc-hero-label p { margin: 6px 0 0; color: var(--vc-muted); font-size: 12px; line-height: 1.7; }

        /* Contact details */

        .vc-info-section { background: #fcfaf6; }

        .vc-section-intro { margin-bottom: 37px; text-align: center; }
        .vc-section-intro .vc-eyebrow { justify-content: center; }
        .vc-section-intro .vc-description { max-width: 700px; margin: 0 auto; }

        .vc-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .vc-info-card {
          padding: 28px 23px;
          border: 1px solid var(--vc-border);
          border-radius: 12px;
          background: #fff;
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
        }

        .vc-info-card:hover {
          transform: translateY(-5px);
          border-color: #ddc89f;
          box-shadow: 0 15px 34px rgba(40,35,25,.07);
        }

        .vc-info-icon {
          display: grid;
          place-items: center;
          width: 49px;
          height: 49px;
          margin-bottom: 18px;
          border-radius: 10px;
          background: var(--vc-gold-pale);
          color: var(--vc-gold-dark);
          font-size: 19px;
        }

        .vc-info-card h3 { margin: 0 0 9px; font-size: 17px; }
        .vc-info-card p { min-height: 42px; margin: 0 0 17px; color: var(--vc-muted); font-size: 12px; line-height: 1.8; }
        .vc-info-card a { color: var(--vc-gold-dark); font-size: 13px; font-weight: 850; text-decoration: none; overflow-wrap: anywhere; }

        /* Form layout */

        .vc-form-section { background: #fff; }

        .vc-form-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 45px;
          align-items: start;
        }

        .vc-form-copy { padding-top: 12px; }
        .vc-form-copy .vc-heading { font-size: clamp(33px, 4vw, 46px); }

        .vc-form-copy > p {
          color: var(--vc-muted);
          font-size: 13px;
          line-height: 1.95;
        }

        .vc-benefits {
          display: grid;
          gap: 16px;
          margin-top: 27px;
        }

        .vc-benefit {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--vc-ink);
          font-size: 13px;
          font-weight: 750;
          line-height: 1.6;
        }

        .vc-benefit svg { flex-shrink: 0; margin-top: 2px; color: var(--vc-gold-dark); }

        .vc-form-card {
          padding: 31px;
          border: 1px solid var(--vc-border);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 15px 45px rgba(40,35,25,.06);
        }

        .vc-form-card h3 { margin: 0 0 8px; font-size: 23px; letter-spacing: -.4px; }
        .vc-form-subtitle { margin: 0 0 24px; color: var(--vc-muted); font-size: 12px; line-height: 1.8; }

        .vc-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 17px; }
        .vc-field { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
        .vc-field-full { grid-column: 1 / -1; }

        .vc-field label { color: var(--vc-ink); font-size: 11px; font-weight: 800; }

        .vc-field input,
        .vc-field select,
        .vc-field textarea {
          width: 100%;
          min-height: 47px;
          padding: 12px 13px;
          border: 1px solid #e8e3da;
          border-radius: 7px;
          outline: none;
          background: #fff;
          color: var(--vc-ink);
          font-family: inherit;
          font-size: 12px;
          transition: border-color .2s, box-shadow .2s;
        }

        .vc-field textarea { min-height: 110px; resize: vertical; }

        .vc-field input:focus,
        .vc-field select:focus,
        .vc-field textarea:focus {
          border-color: var(--vc-gold);
          box-shadow: 0 0 0 3px rgba(189,139,50,.12);
        }

        .vc-error {
          padding: 11px 13px;
          border: 1px solid #f2d2d2;
          border-radius: 7px;
          background: #fff5f5;
          color: #a52b2b;
          font-size: 12px;
          line-height: 1.6;
        }

        .vc-submit {
          width: 100%;
          min-height: 49px;
          grid-column: 1 / -1;
          border: 0;
        }

        .vc-privacy {
          grid-column: 1 / -1;
          margin: -4px 0 0;
          color: var(--vc-muted);
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        /* Bottom CTA */

        .vc-bottom { padding-top: 0; }

        .vc-bottom-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 35px;
          border: 1px solid #eee2cc;
          border-radius: 13px;
          background:
            radial-gradient(circle at 100% 0%, rgba(189,139,50,.12), transparent 38%),
            #fff;
        }

        .vc-bottom-card h2 { margin: 13px 0 9px; font-size: clamp(26px, 3.4vw, 36px); line-height: 1.2; }
        .vc-bottom-card h2 span { color: var(--vc-gold-dark); }
        .vc-bottom-card p { max-width: 620px; margin: 0; color: var(--vc-muted); font-size: 12px; line-height: 1.9; }
        .vc-bottom-actions { display: flex; flex-wrap: wrap; gap: 10px; }

        @keyframes vc-enter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-page *, .vc-page *::before, .vc-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
          .vc-reveal { opacity: 1; transform: none; }
        }

        @media (max-width: 950px) {
          .vc-hero-grid { gap: 30px; }
          .vc-info-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vc-form-grid { gap: 27px; }
          .vc-bottom-card { align-items: flex-start; flex-direction: column; }
        }

        @media (max-width: 700px) {
          .vc-container { width: calc(100% - 32px); }
          .vc-section { padding: 58px 0; }
          .vc-hero { padding: 52px 0 44px; }
          .vc-hero-grid, .vc-form-grid { grid-template-columns: 1fr; }
          .vc-hero h1 { font-size: clamp(39px, 9vw, 52px); }
          .vc-hero-visual { min-height: 310px; }
          .vc-form-card { padding: 24px 20px; }
          .vc-bottom-card { padding: 26px 22px; }
        }

        @media (max-width: 520px) {
          .vc-container { width: calc(100% - 28px); }
          .vc-heading { font-size: 34px; letter-spacing: -1px; }
          .vc-hero h1 { letter-spacing: -1.4px; }
          .vc-hero-actions { display: grid; grid-template-columns: 1fr; }
          .vc-hero-actions .vc-btn { width: 100%; }
          .vc-info-grid { grid-template-columns: 1fr; gap: 14px; }
          .vc-info-card p { min-height: 0; }
          .vc-form { grid-template-columns: 1fr; }
          .vc-field-full, .vc-submit, .vc-privacy { grid-column: 1; }
          .vc-bottom-actions { width: 100%; }
          .vc-bottom-actions .vc-btn { flex: 1; padding: 12px 10px; }
        }
      `}</style>

      {/* HERO */}
      <section className="vc-hero">
        <div className="vc-container vc-hero-grid">
          <div className="vc-hero-copy">
            <span className="vc-eyebrow">Contact Venkat Safety Nets</span>
            <h1>
              Let's Make Your Space
              <span>Safer Together.</span>
            </h1>
            <p>
              Looking for balcony safety nets, pigeon protection, children
              and pet safety nets, invisible grills or sports netting? Get
              in touch with Venkat Safety Nets to discuss your requirements
              and request a quotation.
            </p>
            <p>
              Share your location and the service you need. We'll help you
              take the next step towards a safer space.
            </p>

            <div className="vc-hero-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-btn vc-btn-whatsapp"
              >
                <FaWhatsapp /> WhatsApp Enquiry
              </a>
              <a href={`tel:+91${PHONE_NUMBER}`} className="vc-btn vc-btn-gold">
                <FaPhoneAlt /> Call +91 {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="vc-hero-visual">
            <img
              src="images/about.webp"
              alt="Modern residential space"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="vc-hero-label">
              <strong>Reliable Safety Net Solutions</strong>
              <p>
                Residential, outdoor and selected commercial netting
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="vc-section vc-info-section">
        <div className="vc-container">
          <ContactReveal className="vc-section-intro">
            <span className="vc-eyebrow">We're Here to Help</span>
            <h2 className="vc-heading">
              Get in <span>Touch With Us</span>
            </h2>
            <p className="vc-description">
              Contact our team with your safety net requirements. Call or
              message us to discuss the service you need.
            </p>
          </ContactReveal>

          <div className="vc-info-grid">
            <ContactReveal delay={0}>
              <article className="vc-info-card">
                <div className="vc-info-icon"><FaPhoneAlt /></div>
                <h3>Call Us</h3>
                <p>Speak to us about your requirements and installation enquiry.</p>
                <a href={`tel:+91${PHONE_NUMBER}`}>+91 {PHONE_NUMBER}</a>
              </article>
            </ContactReveal>

            <ContactReveal delay={100}>
              <article className="vc-info-card">
                <div className="vc-info-icon"><FaWhatsapp /></div>
                <h3>WhatsApp Us</h3>
                <p>Send your service details and ask for a quotation directly.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Start WhatsApp Chat <FaArrowRight />
                </a>
              </article>
            </ContactReveal>

            <ContactReveal delay={200}>
              <article className="vc-info-card">
                <div className="vc-info-icon"><FaTools /></div>
                <h3>Request a Quote</h3>
                <p>Tell us the service and location so we can understand your needs.</p>
                <a href="#vc-enquiry-form">Send Your Enquiry <FaArrowRight /></a>
              </article>
            </ContactReveal>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="vc-section vc-form-section" id="vc-enquiry-form">
        <div className="vc-container vc-form-grid">
          <ContactReveal className="vc-form-copy">
            <span className="vc-eyebrow">Free Enquiry</span>
            <h2 className="vc-heading">
              Tell Us What You <span>Need.</span>
            </h2>
            <p>
              Fill in the form with your contact details and preferred
              service. When you submit, WhatsApp will open with your
              enquiry prepared for you to send.
            </p>

            <div className="vc-benefits">
              <div className="vc-benefit">
                <FaCheckCircle />
                <span>Enquire about the safety net service you need</span>
              </div>
              <div className="vc-benefit">
                <FaCheckCircle />
                <span>Share your area and installation requirements</span>
              </div>
              <div className="vc-benefit">
                <FaCheckCircle />
                <span>Discuss suitable options and request a quotation</span>
              </div>
              <div className="vc-benefit">
                <FaCheckCircle />
                <span>Contact us directly by phone or WhatsApp</span>
              </div>
            </div>
          </ContactReveal>

          <ContactReveal delay={120}>
            <div className="vc-form-card">
              <h3>Request a Callback</h3>
              <p className="vc-form-subtitle">
                Enter your details below. Fields marked * are required.
              </p>

              <form className="vc-form" onSubmit={handleSubmit}>
                <div className="vc-field">
                  <label htmlFor="vc-name">Your Name *</label>
                  <input
                    id="vc-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="vc-field">
                  <label htmlFor="vc-phone">Mobile Number *</label>
                  <input
                    id="vc-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </div>

                <div className="vc-field vc-field-full">
                  <label htmlFor="vc-location">Your Area / Location</label>
                  <input
                    id="vc-location"
                    name="location"
                    type="text"
                    placeholder="Enter your area or city"
                    value={formData.location}
                    onChange={handleChange}
                    autoComplete="address-level2"
                  />
                </div>

                <div className="vc-field vc-field-full">
                  <label htmlFor="vc-service">Service Required *</label>
                  <select
                    id="vc-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="vc-field vc-field-full">
                  <label htmlFor="vc-message">Your Message</label>
                  <textarea
                    id="vc-message"
                    name="message"
                    placeholder="Tell us about your balcony, terrace, duct area or project..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {formError && (
                  <div className="vc-error vc-field-full" role="alert">
                    {formError}
                  </div>
                )}

                <button type="submit" className="vc-btn vc-btn-gold vc-submit">
                  <FaWhatsapp /> Submit Enquiry on WhatsApp <FaArrowRight />
                </button>

                <p className="vc-privacy">
                  Your enquiry opens in WhatsApp. Review the message and press
                  Send in WhatsApp to contact us.
                </p>
              </form>
            </div>
          </ContactReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vc-section vc-bottom">
        <div className="vc-container">
          <ContactReveal>
            <div className="vc-bottom-card">
              <div>
                <span className="vc-eyebrow">Need Help Choosing?</span>
                <h2>
                  Your Safety Is
                  <span> Worth the Call.</span>
                </h2>
                <p>
                  Contact Venkat Safety Nets to discuss your project and
                  explore suitable safety netting options.
                </p>
              </div>

              <div className="vc-bottom-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vc-btn vc-btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href={`tel:+91${PHONE_NUMBER}`} className="vc-btn vc-btn-gold">
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </ContactReveal>
        </div>
      </section>
    </main>
  );
}
