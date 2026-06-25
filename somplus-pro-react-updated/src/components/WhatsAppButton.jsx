export default function WhatsAppButton() {
  const phoneNumber = '252612345678';
  const message = encodeURIComponent('Hello SomPlus Digital, I want to start a project.');

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SomPlus Digital on WhatsApp"
    >
      <span>WhatsApp</span>
      <strong>☘</strong>
    </a>
  );
}
