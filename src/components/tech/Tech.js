import "./Tech.scss";

function Tech(props) {
  const tech = props.data;

  return (
    <div
      className="tech"
      style={props.filters.length === 0 || props.filters.includes(tech.lang) ? { opacity: "100%" } : { opacity: "40%" }}
      onClick={() => props.handleTechFilter(tech.lang)}
    >
      <img className="tech-image" src={tech.langIcon} alt="#!" />
      <span>{tech.lang}</span>
    </div>
  );
}

export default Tech;
