import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./assets/coding.css";

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
              <strong>2022.05 - 2025.04</strong> <br />{" "}
              <em>Frontend developer, Webdesigner</em> <br /> ONEPEACE Co., Ltd.
              (Hyogo, Japan)
            </p>
            <h3>Education</h3>
            <p>
              <h2>Ongoing:</h2>
            </p>
            <p>
              <em>Frontend Development</em> <br />
              at IT-Högskolan (Gothenburg, Sweden) <br />
              (2 year education including an internship)
            </p>

            <p>
              <h2>Finished:</h2>
            </p>
            <p>
              <em>Web Development with HTML and CSS</em> <br /> at University
              West
              <br />
              (Course)
            </p>
            <p>
              <em>Basic Programming(C#)</em> <br /> at Luleå University of
              Technology
              <br />
              (Course)
            </p>
          </TabPanel>
          <TabPanel>
            <h3>Skills/Educational Content</h3>
            <h2>Languages</h2>
            <p>Typescript, C#, Javascript, PHP, HTML5, CSS(Sass)</p>
            <h2>Frontend frameworks</h2>
            <p>React, Vue.js, Node.js</p>
            <h2>Backend technology</h2>
            <p>.NET, Node.js, Express</p>
            <h2>Databases</h2>
            <p>SQL</p>
            <h2>Content Management</h2>
            <p>CMS</p>
            <h2>UX/UI & Accessibility</h2>
            <p>Figma, User-Centered Design, WCAG</p>
            <h2>Tools & Processes</h2>
            <p>Git, Scrum</p>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default Coding;
