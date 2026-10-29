
import React from "react";

const Footer = () => {
  const phone = "+918722277643";
  const whatsapp = "918722277643";

  const instagramUrl =
    "https://www.instagram.com/venkatsafetynetsbangalore/";

  const facebookUrl =
    "https://www.facebook.com/p/Venkat-Safety-Nets-100064090416004/";

  const serviceAreas = [
    "Marathahalli",
    "Munnekollal",
    "Kundalahalli",
    "Brookefield",
    "AECS Layout",
    "Doddanekundi",
    "Kartik Nagar",
    "Panathur",
    "Kadubeesanahalli",
    "Bellandur",
    "Devarabeesanahalli",
    "Yemalur",
    "Varthur",
    "Whitefield",
    "ITPL",
    "Hoodi",
    "Mahadevapura",
    "Garudachar Palya",
    "KR Puram",
    "Ramamurthy Nagar",
    "Basavanagar",
    "Vignan Nagar",
    "Kaggadasapura",
    "CV Raman Nagar",
    "GM Palya",
    "Thippasandra",
    "HAL",
    "Old Airport Road",
    "Murugeshpalya",
    "Domlur",
    "Indiranagar",
    "Jeevan Bima Nagar",
    "Kodihalli",
    "Koramangala",
    "HSR Layout",
    "Sarjapur Road",
    "Kaikondrahalli",
    "Kasavanahalli",
    "Haralur",
    "Harlur Road",
    "Agara",
    "Iblur",
    "Ibbalur",
    "HSR Layout Sector 1",
    "HSR Layout Sector 2",
    "HSR Layout Sector 3",
    "HSR Layout Sector 4",
    "HSR Layout Sector 5",
    "HSR Layout Sector 6",
    "HSR Layout Sector 7",
    "HSR Layout Sector 8",
    "Bommanahalli",
    "BTM Layout",
    "Madiwala",
    "Ejipura",
    "Vivek Nagar",
    "Austin Town",
    "Richmond Town",
    "Shantinagar",
    "Brigade Road",
    "MG Road",
    "Ulsoor",
    "Frazer Town",
    "Banaswadi",
    "Horamavu",
    "Kalyan Nagar",
    "Hennur",
    "Jakkur",
    "Hebbal",
    "Yelahanka",
    "Thanisandra",
    "Nagawara",
    "HBR Layout",
    "Hennur Road",
    "Jayanagar",
  ];

  const servicesColumn1 = [
    "Balcony Safety Nets",
    "Terrace Top Nets",
    "Building Safety Nets",
    "Children Safety Nets",
    "Construction Safety Nets",
    "Staircase Safety Nets",
    "Coconut Tree Safety Nets",
  ];

  const servicesColumn2 = [
    "Pets Safety Nets",
    "Industrial Safety Nets",
    "Duct Area Safety Nets",
    "Monkey Safety Nets",
    "Swimming Pool Safety Nets",
    "Car Parking Safety Nets",
    "Pigeon Nets",
    "Pigeon Nets Installation",
    "Bird Protection Nets",
    "Pigeon Nets for Balconies",
    "Anti Seagull Nets",
  ];

  const servicesColumn3 = [
    "Sports Ball Stop Nets",
    "Terrace Cricket Net",
    "All Sports Nets",
    "Pigeon Safety Nets",
    "Bird Spikes",
    "Anti Bird Nets",
    "Sparrow Protection Nets",
    "Cricket Practice Nets",
    "Football Ball Stop Netting",
    "Sports Nets Installation",
  ];

  const ServiceList = ({ items }) => (
    <ul className="vs-footer-service-list">
      {items.map((service) => (
        <li key={service}>
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
              `Hello Venkat Safety Nets, I need information about ${service}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="vs-footer-arrow">›</span>
            {service}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <footer className="vs-footer">
        <div className="vs-footer-glow vs-footer-glow-one" />
        <div className="vs-footer-glow vs-footer-glow-two" />

        <div className="vs-footer-container">
          {/* Brand and Contact */}
          <div className="vs-footer-brand">
            <a
              href="/"
              className="vs-footer-logo-link"
              aria-label="Venkat Safety Nets Home"
            >
              <img
                src="/logo.png"
                alt="Venkat Safety Nets"
                className="vs-footer-logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </a>

            <h2>
              VENKAT <span>SAFETY NETS</span>
            </h2>

            <p className="vs-footer-description">
              Reliable safety net solutions for homes, apartments,
              buildings, industries, and sports facilities. Quality
              installation and dependable service you can trust.
            </p>

            <div className="vs-footer-contact-list">
              <div className="vs-footer-contact-item">
                <span className="vs-footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.3" />
                  </svg>
                </span>
                <div>
                  <h4>Our Branch</h4>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>

              <a href={`tel:${phone}`} className="vs-footer-contact-item">
                <span className="vs-footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 3h4l2 5-2.5 1.8a15 15 0 0 0 5.7 5.7L16 13l5 2v4a2 2 0 0 1-2 2C9.6 20.5 3.5 14.4 3 5a2 2 0 0 1 2-2Z" />
                  </svg>
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 87222 77643</p>
                </div>
              </a>

              <a
                href="mailto:jpjohnpeter22288@gmail.com"
                className="vs-footer-contact-item"
              >
                <span className="vs-footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p>jpjohnpeter22288@gmail.com</p>
                </div>
              </a>
            </div>

            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Hello Venkat Safety Nets, I would like to enquire about your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="vs-footer-whatsapp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
                <path d="M8.5 8.2c.4-.6.7-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4-.1.6l-.7.8c-.2.2-.2.4 0 .7.6 1 1.5 1.8 2.5 2.3.2.1.4.1.6-.1l.9-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.5.5-1.2.7-2 .5-1-.2-2.3-.7-3.8-2-1.2-1-2.1-2.4-2.4-3.3-.4-.9-.1-1.7.1-2.1Z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="vs-footer-socials">
              <h4>Follow Us</h4>
              <div className="vs-footer-social-links">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Venkat Safety Nets on Instagram"
                  className="vs-footer-social instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" className="vs-social-dot" />
                  </svg>
                  Instagram
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Venkat Safety Nets on Facebook"
                  className="vs-footer-social facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.3 1.3 16.3 1.2 15 1.2c-3.3 0-5 2-5 5.4V9H7v4h3v8Z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="vs-footer-services">
            <div className="vs-footer-heading">
              <span className="vs-footer-heading-line" />
              <h3>Our Services</h3>
            </div>
            <ServiceList items={servicesColumn1} />
          </div>

          <div className="vs-footer-services">
            <div className="vs-footer-heading">
              <span className="vs-footer-heading-line" />
              <h3>More Services</h3>
            </div>
            <ServiceList items={servicesColumn2} />
          </div>

          <div className="vs-footer-services">
            <div className="vs-footer-heading">
              <span className="vs-footer-heading-line" />
              <h3>Sports &amp; Bird Nets</h3>
            </div>
            <ServiceList items={servicesColumn3} />
          </div>
        </div>

        {/* Bangalore Service Coverage Areas */}
        <section
          className="vs-footer-coverage"
          aria-labelledby="vs-footer-coverage-title"
        >
          <div className="vs-footer-coverage-inner">
            <div className="vs-footer-coverage-heading">
              <span className="vs-footer-coverage-pin" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <h3 id="vs-footer-coverage-title">
                Service Coverage Areas in Bangalore
              </h3>
            </div>

            <p className="vs-footer-coverage-description">
              Providing safety net installation services across Bangalore
              and nearby residential and commercial areas.
            </p>

            <div className="vs-footer-area-list">
              {serviceAreas.map((area) => (
                <a
                  key={area}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${area}, Bangalore, Karnataka, India`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vs-footer-area-tag"
                  aria-label={`Find ${area}, Bangalore on Google Maps`}
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <div className="vs-footer-map-section">
          <div className="vs-footer-map-heading">
            <span className="vs-footer-heading-line" />
            <h3>Find Us on Google Maps</h3>
          </div>

          <p>Visit Venkat Balcony Safety Nets in Bangalore.</p>

          <div className="vs-footer-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.665284443863!2d77.70708201032086!3d12.956448315158264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123ea5f871b7%3A0xc83ad071126533cb!2sVenkat%20Balcony%20Safety%20Nets%20Bangalore!5e1!3m2!1sen!2sin!4v1793268435645!5m2!1sen!2sin"
              title="Venkat Balcony Safety Nets Bangalore Google Maps"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <a
            className="vs-footer-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Venkat+Balcony+Safety+Nets+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Location in Google Maps →
          </a>
        </div>

        {/* Copyright */}
        <div className="vs-footer-bottom">
          <div className="vs-footer-bottom-inner">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="vs-footer-gold">Venkat Safety Nets.</span>{" "}
              All Rights Reserved.
            </p>

            <p className="vs-footer-credit">
              Developed by{" "}
              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMYVISION TECHNOLOGIES website"
              >
                SMYVISION TECHNOLOGIES
                <span className="vs-footer-credit-underline" />
              </a>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .vs-footer {
          --vs-gold: #d6ad55;
          --vs-gold-light: #f4d891;
          --vs-muted: #aaa9a5;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: #090909;
          color: #f4f1e9;
          font-family: inherit;
          border-top: 1px solid rgba(214,173,85,.35);
        }

        .vs-footer *,
        .vs-footer *::before,
        .vs-footer *::after {
          box-sizing: border-box;
        }

        .vs-footer a {
          -webkit-tap-highlight-color: transparent;
        }

        .vs-footer-glow {
          position: absolute;
          z-index: -1;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(214,173,85,.055);
          filter: blur(75px);
          pointer-events: none;
        }

        .vs-footer-glow-one {
          top: 30px;
          left: -170px;
        }

        .vs-footer-glow-two {
          right: -180px;
          bottom: 0;
        }

        .vs-footer-container {
          width: min(1440px, 100%);
          margin: 0 auto;
          padding: 76px 6% 64px;
          display: grid;
          grid-template-columns: 1.45fr 1fr 1fr 1fr;
          gap: 42px;
          position: relative;
        }

        .vs-footer-brand,
        .vs-footer-services {
          min-width: 0;
        }

        .vs-footer-logo-link {
          display: inline-flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 5px;
          border-radius: 5px;
          background: #fff;
        }

        .vs-footer-logo {
          display: block;
          width: 190px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .vs-footer-brand h2 {
          margin: 0 0 15px;
          color: #fff;
          font-size: clamp(19px,1.6vw,25px);
          font-weight: 800;
          letter-spacing: 1.2px;
          line-height: 1.4;
        }

        .vs-footer-brand h2 span {
          display: block;
          color: var(--vs-gold);
          letter-spacing: 2.4px;
          font-size: .82em;
        }

        .vs-footer-description {
          max-width: 370px;
          margin: 0 0 26px;
          color: var(--vs-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .vs-footer-contact-list {
          display: grid;
          gap: 19px;
        }

        .vs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          min-width: 0;
          color: inherit;
          text-decoration: none;
        }

        .vs-footer-icon {
          flex: 0 0 39px;
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(214,173,85,.4);
          border-radius: 10px;
          background: rgba(214,173,85,.07);
          transition: background .25s ease, transform .25s ease;
        }

        .vs-footer-contact-item:hover .vs-footer-icon {
          background: rgba(214,173,85,.18);
          transform: translateY(-2px);
        }

        .vs-footer-icon svg {
          width: 19px;
          height: 19px;
          fill: none;
          stroke: var(--vs-gold-light);
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vs-footer-contact-item h4 {
          margin: 0 0 5px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .vs-footer-contact-item p {
          margin: 0;
          color: var(--vs-muted);
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: anywhere;
          transition: color .2s ease;
        }

        .vs-footer-contact-item:hover p {
          color: var(--vs-gold-light);
        }

        .vs-footer-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: fit-content;
          max-width: 100%;
          margin-top: 25px;
          padding: 12px 17px;
          border: 1px solid var(--vs-gold);
          border-radius: 7px;
          background: var(--vs-gold);
          color: #101010;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          transition: background .25s ease, color .25s ease,
            transform .25s ease, box-shadow .25s ease;
        }

        .vs-footer-whatsapp:hover {
          background: transparent;
          color: var(--vs-gold-light);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(214,173,85,.12);
        }

        .vs-footer-whatsapp svg {
          width: 19px;
          height: 19px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vs-footer-socials {
          margin-top: 28px;
        }

        .vs-footer-socials > h4 {
          margin: 0 0 13px;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
        }

        .vs-footer-social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .vs-footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 40px;
          padding: 9px 12px;
          border: 1px solid rgba(214,173,85,.38);
          border-radius: 7px;
          color: var(--vs-gold-light);
          background: rgba(255,255,255,.025);
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: background .25s ease, color .25s ease,
            transform .25s ease;
        }

        .vs-footer-social:hover {
          background: var(--vs-gold);
          color: #111;
          transform: translateY(-2px);
        }

        .vs-footer-social svg {
          width: 17px;
          height: 17px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vs-footer-social.facebook svg {
          fill: currentColor;
          stroke: none;
        }

        .vs-footer-heading {
          display: flex;
          align-items: center;
          gap: 11px;
          margin: 7px 0 27px;
        }

        .vs-footer-heading-line {
          display: block;
          flex: 0 0 4px;
          width: 4px;
          height: 25px;
          border-radius: 5px;
          background: var(--vs-gold);
        }

        .vs-footer-heading h3 {
          margin: 0;
          color: #fff;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: .3px;
        }

        .vs-footer-service-list {
          display: grid;
          gap: 13px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .vs-footer-service-list li {
          margin: 0;
          padding: 0;
        }

        .vs-footer-service-list a {
          display: inline-flex;
          align-items: flex-start;
          gap: 9px;
          color: #aaa9a5;
          font-size: 13px;
          line-height: 1.6;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color .22s ease, transform .22s ease;
        }

        .vs-footer-service-list a:hover {
          color: var(--vs-gold-light);
          transform: translateX(3px);
        }

        .vs-footer-arrow {
          flex: 0 0 auto;
          color: var(--vs-gold);
          font-size: 19px;
          font-weight: 700;
          line-height: 1.1;
        }

        /* Service Coverage Areas */
        .vs-footer-coverage {
          position: relative;
          width: min(1440px, calc(100% - 48px));
          margin: 0 auto 54px;
          padding: 30px;
          overflow: hidden;
          border: 1px solid rgba(214,173,85,.25);
          border-radius: 16px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(214,173,85,.07),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              rgba(255,255,255,.045),
              rgba(255,255,255,.015)
            );
        }

        .vs-footer-coverage-inner {
          position: relative;
          z-index: 1;
        }

        .vs-footer-coverage-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 12px;
        }

        .vs-footer-coverage-pin {
          flex: 0 0 24px;
          display: grid;
          place-items: center;
          width: 24px;
          height: 28px;
          color: var(--vs-gold-light);
        }

        .vs-footer-coverage-pin svg {
          display: block;
          width: 23px;
          height: 23px;
          fill: var(--vs-gold-light);
          stroke: var(--vs-gold-light);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vs-footer-coverage-pin circle {
          fill: #090909;
          stroke: #090909;
        }

        .vs-footer-coverage-heading h3 {
          margin: 0;
          color: #fff;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 800;
          line-height: 1.45;
        }

        .vs-footer-coverage-description {
          margin: 0 0 22px 37px;
          color: var(--vs-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .vs-footer-area-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 11px;
        }

        .vs-footer-area-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 10px 15px;
          border: 1px solid rgba(188,205,217,.2);
          border-radius: 9px;
          background: rgba(255,255,255,.045);
          color: #d3dce2;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.35;
          text-align: center;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition:
            color .22s ease,
            border-color .22s ease,
            background .22s ease,
            transform .22s ease,
            box-shadow .22s ease;
        }

        .vs-footer-area-tag:hover,
        .vs-footer-area-tag:focus-visible {
          color: var(--vs-gold-light);
          border-color: rgba(214,173,85,.75);
          background: rgba(214,173,85,.1);
          transform: translateY(-2px);
          box-shadow: 0 5px 16px rgba(0,0,0,.12);
          outline: none;
        }

        .vs-footer-area-tag:focus-visible {
          outline: 2px solid var(--vs-gold-light);
          outline-offset: 3px;
        }

        /* Google Maps */
        .vs-footer-map-section {
          width: min(1320px, 88%);
          margin: 0 auto;
          padding: 0 0 60px;
        }

        .vs-footer-map-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .vs-footer-map-heading h3 {
          margin: 0;
          color: #fff;
          font-size: clamp(19px,2vw,25px);
          font-weight: 800;
        }

        .vs-footer-map-section > p {
          margin: 0 0 22px 16px;
          color: var(--vs-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .vs-footer-map-frame {
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(214,173,85,.55);
          border-radius: 12px;
          background: #171717;
          box-shadow: 0 12px 35px rgba(0,0,0,.3);
        }

        .vs-footer-map-frame iframe {
          display: block;
          width: 100%;
          height: 400px;
        }

        .vs-footer-map-link {
          display: inline-flex;
          align-items: center;
          margin-top: 17px;
          padding: 11px 16px;
          border: 1px solid var(--vs-gold);
          border-radius: 6px;
          color: var(--vs-gold-light);
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          transition: background .2s ease, color .2s ease;
        }

        .vs-footer-map-link:hover {
          background: var(--vs-gold);
          color: #111;
        }

        .vs-footer-bottom {
          position: relative;
          border-top: 1px solid rgba(255,255,255,.09);
          background: rgba(0,0,0,.35);
        }

        .vs-footer-bottom-inner {
          width: min(1440px,100%);
          margin: 0 auto;
          padding: 22px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px 25px;
        }

        .vs-footer-bottom-inner > p {
          margin: 0;
          color: #92918d;
          font-size: 12px;
          line-height: 1.8;
        }

        .vs-footer-gold {
          color: var(--vs-gold-light);
          font-weight: 700;
        }

        .vs-footer-credit {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5px;
        }

        .vs-footer-credit a {
          position: relative;
          display: inline-block;
          color: var(--vs-gold-light);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .65px;
          text-decoration: none;
          transition: color .25s ease, text-shadow .25s ease;
        }

        .vs-footer-credit a:hover {
          color: #fff;
          text-shadow: 0 0 15px rgba(214,173,85,.4);
        }

        .vs-footer-credit-underline {
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background: var(--vs-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }

        .vs-footer-credit a:hover .vs-footer-credit-underline {
          transform: scaleX(1);
        }

        @media (max-width: 1200px) {
          .vs-footer-container {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 48px 55px;
            padding-top: 65px;
            padding-bottom: 55px;
          }

          .vs-footer-brand {
            max-width: 500px;
          }
        }

        @media (max-width: 640px) {
          .vs-footer-container {
            grid-template-columns: minmax(0,1fr);
            gap: 38px;
            padding: 48px 23px 42px;
          }

          .vs-footer-brand {
            max-width: none;
          }

          .vs-footer-logo {
            width: 180px;
          }

          .vs-footer-description {
            max-width: 450px;
          }

          .vs-footer-heading {
            margin-top: 0;
            margin-bottom: 20px;
          }

          .vs-footer-service-list {
            gap: 12px;
          }

          .vs-footer-coverage {
            width: calc(100% - 32px);
            margin-bottom: 38px;
            padding: 23px 18px;
            border-radius: 12px;
          }

          .vs-footer-coverage-heading {
            align-items: flex-start;
            gap: 10px;
          }

          .vs-footer-coverage-heading h3 {
            font-size: 18px;
          }

          .vs-footer-coverage-description {
            margin-left: 0;
            margin-bottom: 18px;
          }

          .vs-footer-area-list {
            gap: 8px;
          }

          .vs-footer-area-tag {
            min-height: 38px;
            padding: 9px 11px;
            border-radius: 8px;
            font-size: 12px;
          }

          .vs-footer-map-section {
            width: calc(100% - 36px);
            padding-bottom: 40px;
          }

          .vs-footer-map-frame iframe {
            height: 320px;
          }

          .vs-footer-bottom-inner {
            padding: 20px 23px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-footer *,
          .vs-footer *::before,
          .vs-footer *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
