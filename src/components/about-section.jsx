function AboutSection() {
  // function ka name Capital letter se hi start hoga.
  return (
  
    <section
      id="about_section"
      className="container_fluid about_section section_bg_gray"
    >
      <div className="container">
        <div className="left_item">
          <img src="./assets/images/about/about-img1.jpg"  alt="" />
        </div>
        <div className="right_item">
          <h4>
            <hr /> &nbsp; Our Story
          </h4>
          <h3 className="mb-30 h3-heading">
            Our team comes with the experience and knowledge
          </h3>
          <div class="btn_group">
            <button className="btn">Who We Are</button>
            <button className="btn">Our Vision</button>
            <button className="btn">Our History</button>
          </div>
          <p className="paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, look like readable English. <br /> <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have in some form, by injected humour.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;

