import "./assets/coding.css";

const projects = [
  {
    title: "The Theatre Library",
    link: "https://thetheatrelibrary.onrender.com",
    languages: [
      "Vue.js/Javascript",
      ".NET/C#",
      "Sass",
      "PostgreSQL",
      "Cypress",
    ],
    img: "assets/img/thetheatrelibrary-banner.png",
    repo: [
      {
        link: "https://github.com/Wimlan/TheatreStreamingSite.git",
        name: "Vue.js Frontend",
      },
      {
        link: "https://github.com/Wimlan/TheatreShowsAPI.git",
        name: "ASP.NET Core API",
      },
    ],
    description:
      "A mock streaming site for theatre productions, allowing users to browse, watch, and manage their favorite shows. Frontend built with Vue.js and Sass, with end-to-end testing using Cypress. It uses a RESTful ASP.NET Core API for browsing theatre productions, with title and genre filtering and detailed show information backed by PostgreSQL.",
  },
  {
    title: "My Bookshelf",
    link: "https://mybookshelf-gd5p.onrender.com",
    languages: [
      "React.js/TypeScript",
      "Express/TypeScript",
      "CSS Tailwind",
      "PostgreSQL",
    ],
    img: "assets/img/mybookshelf-banner.png",
    repo: [
      {
        link: "https://github.com/Wimlan/MyBookshelf.git",
        name: "Fullstack Project",
      },
    ],
    description:
      "Designed and developed a modern, responsive homepage for seeing the books you own, and keeping track of their reading status. Implemented the frontend using React and Tailwind CSS, with a backend powered by Express and PostgreSQL.",
  },
  {
    title: "Rock Paper Monsters",
    link: "https://wilmayasuda.se/projects/rockpapermonstersintro.html",
    languages: ["Javascript", "HTML5", "Sass"],
    img: "assets/img/monsterprojectsimg.jpg",
    repo: [
      {
        link: "https://github.com/Wimlan/RockPaperMonsters.git",
        name: "Rock Paper Monsters Frontend",
      },
    ],
    description:
      "Won shared first place for the Junior Dev Sverige's Halloween competition 2025. This simple but fun twist on the classic Rock Paper Scissors game, challenges the player to survive against monsters in a style reminiscent of text-based RPGs.",
  },
];

function Projects() {
  return (
    <>
      <div id="projects"></div>
      <div data-aos="fade-left" id="projects-page">
        <aside
          className="projects-notice"
          aria-labelledby="projects-notice-title"
        >
          <h3 id="projects-notice-title">The projects might be sleeping!</h3>
          <p>
            If you disturb them in their nap, they might need a little time to
            wake. Please treat them with patience.
          </p>
        </aside>
        <h2>Projects</h2>

        <div id="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>
                <a target="_blank" href={project.link}>
                  {project.title}
                </a>
                {" >"}
              </h3>

              <h4>
                {"["}
                {project.languages.join(", ")}
                {"]"}
              </h4>

              <img
                src={project.img}
                alt={project.title}
                style={{ width: "600px" }}
              />

              {project.repo.length > 0 && (
                <>
                  <h4 className="information-label">REPOSITORY</h4>
                  <ul>
                    {project.repo.map((repo, repoIndex) => (
                      <li key={repoIndex}>
                        <a target="_blank" href={repo.link}>
                          {repo.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="information-label">DESCRIPTION</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
