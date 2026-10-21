import "./assets/Aboutme.css";

function Aboutme() {
  return (
    <>
      <div id="aboutme"></div>
      <div data-aos="fade-left" className="aboutme-page">
        <div className="description">
          <h2>About Me</h2>
          <h3>Wilma Yasuda</h3>
          <p>
            I'm a fullstack student with focus on frontend at IT-Högskolan in
            Gothenburg. Before I became a student I worked with frontend
            development, graphic design, and UX/UI design in Japan for about 7
            years.
            <br /> <br />
            I'm specializing in TypeScript and C#, with experience in Azure. I
            have completed coursework in cybersecurity and am currently
            expanding my knowledge in this area.
          </p>
        </div>
        <img
          className="aboutme-img"
          width="400px"
          height="auto"
          src="assets/img/aboutme-wilma.jpg"
          alt="portrait of wilma"
        />
      </div>
    </>
  );
}

export default Aboutme;
