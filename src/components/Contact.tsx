import { useState, type ChangeEvent, type FormEvent } from "react";
import "./Contact.css";
import portfolioData from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Obfuscated contact resolver
const _0xc = () => {
  const _a = import.meta.env.VITE_WA_P1 || "NjI4MTI=";
  const _b = import.meta.env.VITE_WA_P2 || "MzQ1Njc=";
  const _c = import.meta.env.VITE_WA_P3 || "NTkw";
  const _d = [_a, _b, _c].map((p) => atob(p)).join("");
  return _d;
};

const Contact = () => {
  const { personal, contact } = portfolioData;
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format message for WhatsApp (plain text, no emoji to avoid encoding issues)
    const waMessage = `Halo, saya *${formData.name}*
Email: ${formData.email}
Subjek: ${formData.subject}
Pesan:
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(waMessage);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${_0xc()}?text=${encodedMessage}`, "_blank");

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">{t(contact.title)}</h2>
        <p className="section-subtitle">{t(contact.subtitle)}</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t(contact.connectTitle)}</h3>
            <p>{t(contact.introText)}</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>{t(contact.labels?.email) || "Email"}</h4>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>{t(contact.labels?.phone) || "Phone"}</h4>
                  <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>{personal.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>{t(contact.labels?.location) || "Location"}</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                </a>
              )}
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t(contact.form?.nameLabel) || "Name"}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={t(contact.form?.namePlaceholder)} />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t(contact.form?.emailLabel) || "Email"}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t(contact.form?.emailPlaceholder)} />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t(contact.form?.subjectLabel) || "Subject"}</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder={t(contact.form?.subjectPlaceholder)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t(contact.form?.messageLabel) || "Message"}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder={t(contact.form?.messagePlaceholder)}></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span className="wa-icon">💬</span> {t(contact.form?.submitButton)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
