function HeroSection() {
  return (
    <section className="hero_section container_fluid">
      <div className="container">
        <div className="left_item">
          <h1>Corporate & Business Site Template By Ayro UI.</h1>
          <p className="paragraph">
            We are a digital agency that helps brands to achieve their business
            outcomes. We see technology as a tool to create amazing things.
          </p>
          <div className="hero_btn_group">
            <button className="get_started">Get started</button>
            <button className="play_btn">
              <i className="fa-solid fa-play"></i>
            </button>
            <a href="#">Watch Intro</a>
          </div>
        </div>
        <div className="right_item">
          <img src="./assets/images/header/hero-image.jpg" alt="Error" />
        </div>
      </div>

    </section>
  );
}
export default HeroSection;
