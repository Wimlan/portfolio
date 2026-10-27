import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./assets/coding.css";

const courses = [
  {
    id: 1,
    title: "Fullstack Development focused on Frontend",
    institution: "IT-Högskolan (Gothenburg, Sweden)",
    status: "Ongoing",
    duration: "2 years full-time including an internship",
  },
  {
    id: 2,
    title: "Cybersecurity - Fundamentals and Awareness",
    institution: "Linköping University",
    status: "Finished",
    duration: "Course",
  },
  {
    id: 3,
    title: "Basic Programming(C#)",
    institution: "Luleå University of Technology",
    status: "Finished",
    duration: "Course",
  },
  {
    id: 4,
    title: "Web Development with HTML and CSS",
    institution: "University West",
    status: "Finished",
    duration: "Course",
  },
];

function Coding() {
  return (
    <>
      <section className="coding-page">
        <Tabs>
          <TabList>
            <Tab>Background</Tab>
            <Tab>Skill List</Tab>
          </TabList>

          <TabPanel>
            <h3>Work experience</h3>
            <p>
              <strong>2026.08 - 2027.05</strong> <br />{" "}
              <em>Software developer intern</em> <br /> Fellowmind (Gothenburg,
              Sweden)
            </p>
            <p>
              <strong>2022.05 - 2025.04</strong> <br />{" "}
              <em>Frontend developer, Webdesigner</em> <br /> ONEPEACE Co., Ltd.
              (Hyogo, Japan)
            </p>
            <h3>Education</h3>

            <h2>Ongoing:</h2>
            {courses
              .filter((course) => course.status === "Ongoing")
              .map((course) => (
                <p key={course.id}>
                  <em>{course.title}</em> <br /> at {course.institution}
                  <br />({course.duration})
                </p>
              ))}

            <h2>Finished:</h2>

            {courses
              .filter((course) => course.status === "Finished")
              .map((course) => (
                <p key={course.id}>
                  <em>{course.title}</em> <br /> at {course.institution}
                  <br />({course.duration})
                </p>
              ))}
          </TabPanel>
          <TabPanel>
            <h3>Skills/Educational Content</h3>
            <h2>Languages</h2>
            <p>TypeScript, C#, JavaScript, PHP, HTML5, CSS(Sass)</p>
            <h2>Frontend frameworks</h2>
            <p>React, Vue.js, Tailwind CSS</p>
            <h2>Backend technology</h2>
            <p>.NET, Node.js, Express</p>
            <h2>Databases</h2>
            <p>PostgreSQL, SQLite</p>
            <h2>Cloud (Azure)</h2>
            <p>
              Azure DevOps, Azure Portal, Azure Storage Explorer, Microsoft
              Entra(coursework)
            </p>
            <h2>UX/UI & Accessibility</h2>
            <p>Figma, User-Centered Design, WCAG</p>
            <h2>Tools & Processes</h2>
            <p>Git, Trello, Agile</p>
            <h2>Security & Compliance</h2>
            <p>
              GDPR, Password hashing, Cybersecurity fundamentals(coursework)
            </p>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default Coding;
