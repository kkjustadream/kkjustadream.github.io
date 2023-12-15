import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {/* map over skills */}
        {/* ?. is an optional chaining operator, which means that JS will only 
        try to access skills if data exists, and only try to call map if skills exists.  */}
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
          {/* contains 2 div child(for img and for content) */}
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
