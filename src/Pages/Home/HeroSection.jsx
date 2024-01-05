import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Kevin</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Currently a master's student at the University of Southern
            <br />
            California studying Computer Science.
          </p>
        </div>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-primary btn-get-in-touch"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img_1.jpg" />
      </div>
    </section>
  );
}
