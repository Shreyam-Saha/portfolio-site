//import developingLogo from '../../assets/developing.svg'
import { Timeline } from "antd";
//import collegeSvg from "../../assets/college.svg";
import "./Work.css";
function Work() {
  return (
    <div className="timeline-wrapper">
      <Timeline
        style={{
          paddingright: "170px",
          color: "white",
          minWidth: "150px",
          height: "600px",
          marginLeft: "-150px",
          textAlign: "justify",
        }}
        pending={<h3>Looking for Opportunities . .</h3>}
        reverse
        mode="left"
        items={[
          {
            color: "green",
            label: <h3 className="label-h3">{"August, 2017- July, 2021"}</h3>,
            children: (
              <>
                <h3>
                  Bachelor&apos;s Degree in Computer Science & Engineering
                </h3>
                <ul>
                  <li>
                    During my Computer Science Bachelor&apos;s degree at
                    Siliguri Institute of Technology, I actively participated in
                    tech sessions and workshops.
                  </li>
                  <li>
                    I also competed in software competitions and hackathons,
                    which honed my skills and fostered a collaborative spirit.
                  </li>
                </ul>
              </>
            ),
          },
          {
            color: "green",
            label: <h3 className="label-h3">{"Nov, 2020- Jul, 2021"}</h3>,
            children: (
              <>
                <h3>Internship @ Telaverge Communications, Bangalore</h3>
                <ul>
                  <li>
                    During my internship at Telaverge Communications, I honed my
                    skills in <b>React.js</b> and various front-end tools. I
                    contributed to developing dynamic user interfaces, enhancing
                    user experience, and collaborating with a talented team.
                  </li>
                  <li>
                    This experience significantly boosted my proficiency in
                    modern web development technologies and teamwork.
                  </li>
                </ul>
              </>
            ),
          },
          {
            label: <h3 className="label-h3">{"Aug, 2021 - Current"}</h3>,
            children: (
              <>
                <h3>Software Developer @ Amdocs, Pune</h3>
                <ul>
                  <li>
                    Leveraged <b>Kibana</b>, <b>ElasticSearchDB</b>,{" "}
                    <b>Grafana</b>, and <b>Kubernetes</b> in a cloud environment
                    using Azure to manage and monitor microservices.
                  </li>
                  <li>
                    <b>Developed a Volumetric Alerting Module</b> using Python,
                    SQL, and Elastic DB. This innovative solution provided the
                    client with a new alerting software to efficiently monitor
                    their <b>Microservices</b> architecture
                  </li>
                  <li>
                    Demonstrated strong problem-solving skills and the ability
                    to deliver practical and efficient solutions in a modern
                    tech environment.
                  </li>
                  <li>
                    Also got 2 times <b>Azure Certified</b>, and working towards
                    more . . .
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Work;
