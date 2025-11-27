export default function Section({ id, label, title, lead, children }) {
  return (
    <section className="section" id={id}>
      {label && <p className="section-label">{label}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
      {children}
    </section>
  );
}
