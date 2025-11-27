export default function Section({ label, title, lead, children }) {
  return (
    <section className="section">
      {label && <p className="section-label">{label}</p>}
      {title && <h1 className="section-title">{title}</h1>}
      {lead && <p className="section-lead">{lead}</p>}
      {children}
    </section>
  );
}
