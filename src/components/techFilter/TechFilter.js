import "./TechFilter.scss";

function TechFilter(props) {
  return (
    <>
      <div className="tech-filter" onClick={() => props.handleTechFilterRemove(props.name)}>
        <span>{props.name}</span>
        <img src="https://holaworld.io/images/info/delete.svg" alt="#!" />
      </div>
    </>
  );
}

export default TechFilter;
