import { useEffect, useState } from "react";
import "./TechCategory.scss";

import Tech from "../tech/Tech";
import TechFilter from "../techFilter/TechFilter";

const OPT_POP = 1;
const OPT_FRONT = 2;
const OPT_BACK = 3;
const OPT_MOBILE = 4;
const OPT_ETC = 5;
const OPT_ALL = 6;

function TechCategory(props) {
  const [techCategory, setTechCategory] = useState(OPT_POP);
  const [techList, setTechList] = useState([]);
  const [techFilter, setTechFilter] = useState([]);

  useEffect(() => {
    fetch(`/mock/langList${techCategory}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setTechList(res.data));
  }, [techCategory]);

  const handleTechCategory = (opt) => {
    setTechCategory(opt);
  };

  const handleTechFilter = (tech) => {
    if (techFilter.includes(tech)) {
      setTechFilter(techFilter.filter((prev) => prev !== tech));
    } else {
      setTechFilter((prev) => [...prev, tech]);
    }
  };

  const handleTechFilterRemove = (techStack) => {
    setTechFilter(techFilter.filter((tech) => tech !== techStack));
  };

  const handleTechFilterRemoveAll = () => {
    setTechFilter([]);
  };

  return (
    <div className="tech-container">
      <div className="tech-category-menu">
        <div
          className="menu-item"
          style={techCategory === OPT_POP ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_POP)}
        >
          인기
        </div>
        <div
          className="menu-item"
          style={techCategory === OPT_FRONT ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_FRONT)}
        >
          프론트엔드
        </div>
        <div
          className="menu-item"
          style={techCategory === OPT_BACK ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_BACK)}
        >
          백엔드
        </div>
        <div
          className="menu-item"
          style={techCategory === OPT_MOBILE ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_MOBILE)}
        >
          모바일
        </div>
        <div
          className="menu-item"
          style={techCategory === OPT_ETC ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_ETC)}
        >
          기타
        </div>
        <div
          className="menu-item"
          style={techCategory === OPT_ALL ? { opacity: "100%" } : { opacity: "40%" }}
          onClick={() => handleTechCategory(OPT_ALL)}
        >
          모두보기
        </div>
      </div>
      <div className="tech-list">
        {techList &&
          techList.map((techStack) => {
            return <Tech key={techStack.id} data={techStack} filters={techFilter} handleTechFilter={handleTechFilter} />;
          })}
      </div>
      <div>
        <div className="tech-filter-container">
          {techFilter &&
            techFilter.map((techStack) => {
              return <TechFilter name={techStack} handleTechFilterRemove={handleTechFilterRemove} />;
            })}
          {techFilter.length !== 0 && (
            <div className="init-filter" onClick={handleTechFilterRemoveAll}>
              필터 초기화
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechCategory;
