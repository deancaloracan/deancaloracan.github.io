import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillHtml5,
} from "react-icons/ai";
import Image from "next/image";
import dean from "../../public/dean.jpg";
import Card from "./cards";

import {
  FaCode,
  FaCodeBranch,
  FaViber,
  FaRProject,
  FaCss3Alt,
} from "react-icons/fa";
import { DiPython } from "react-icons/di";
import {
  SiAngularjs,
  SiPowerapps,
  SiPowerautomate,
  SiJavascript,
  SiReact,
  SiCsharp,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiGmail,
  SiTableau,
  SiMui,
  SiPowerbi,
  SiMysql,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandOffice, TbBrandTailwind } from "react-icons/tb";

export default function Home() {
  return (
    <main className="bg-white px-10 text-black">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-lg font-bold">dean</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-orange-400 to-rose-400 text-white px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/file/d/1uiPkICXh5K2d4reRxGUmKoZleeCS0_L8"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-bold text-orange-400">
              Deanna Jeanne Caloracan
            </h2>
            <h3 className="text-2xl py-2">Computer Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lagi&apos;t lagi para sa Pilipino.
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 hover:font-bold">
              <a href="https://www.linkedin.com/in/deancaloracan/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/deancaloracan">
                <AiFillGithub />
              </a>
              <a href="viber://add?number=639279530040">
                <FaViber />
              </a>
              <a href="mailto:dean.caloracan@gmail.com">
                <SiGmail />
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={dean} alt="deancaloracan" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-10 bg-gradient-to-r from-orange-400 to-rose-400">
        <div>
          <h3 className="text-3xl py-1 dark:text-white font-bold">
            Services I can offer
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a developer and data analyst, I
            have done work for government agencies, for startups and
            collaborated with many leaders and innovators to create digital
            products and solutions.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including project management,
            data management and analysis, programming and teaching.
          </p>
        </div>

        <section className="py-4">
          <h3 className="text-3xl py-1 dark:text-white font-bold">
            Tools I Know and Use
          </h3>
          <div className="grid grid-cols-2 gap-4 dark:text-white">
            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Data Visualization and BI tools
              </h3>
              <ul>
                <li>Microsoft Power BI</li>
                <li>Tableau</li>
              </ul>
              <div className="flex gap-2">
                <SiPowerbi className="text-4xl mt-4" />
                <SiTableau className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Database Administration
              </h3>
              <ul>
                <li>SQL (MySQL, MSSQL)</li>
                <li>NoSQL (MongoDB, Firestore)</li>
              </ul>
              <div className="flex gap-2">
                <SiMysql className="text-4xl mt-4" />
                <SiMicrosoftsqlserver className="text-4xl mt-4" />
              </div>
            </div>
            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Programming Languages
              </h3>
              <ul>
                <li>Python</li>
                <li>R</li>
                <li>C#</li>
                <li>C++</li>
                <li>Bash Scripting</li>
              </ul>
              <div className="flex gap-2">
                <DiPython className="text-4xl mt-4" />
                <FaRProject className="text-4xl mt-4" />
                <SiCsharp className="text-4xl mt-4" />
                <FaCode className="text-4xl mt-4" />
              </div>
            </div>
            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Web Development and Design
              </h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>PHP</li>
              </ul>
              <div className="flex gap-2">
                <AiFillHtml5 className="text-4xl mt-4" />
                <FaCss3Alt className="text-4xl mt-4" />
                <SiJavascript className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                UI Frameworks
              </h3>
              <ul>
                <li>Next.js</li>
                <li>AngularJS</li>
                <li>ReactJS</li>
              </ul>
              <div className="flex gap-2">
                <TbBrandNextjs className="text-4xl mt-4" />
                <SiAngularjs className="text-4xl mt-4" />
                <SiReact className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Styling
              </h3>
              <ul>
                <li>TailwindCSS</li>
                <li>MUI</li>
              </ul>
              <div className="flex gap-2">
                <TbBrandTailwind className="text-4xl mt-4" />
                <SiMui className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Productivity Tools
              </h3>
              <ul>
                <li>Microsoft Office</li>
                <li>Google Workspace Applications</li>
                <li>Canva</li>
              </ul>
              <div className="flex gap-2">
                <SiCanva className="text-4xl mt-4" />
                <TbBrandOffice className="text-4xl mt-4" />
                <AiFillGoogleCircle className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Automation Tools
              </h3>
              <ul>
                <li>Apps Script</li>
                <li>Microsoft PowerApps</li>
                <li>Power Automate</li>
              </ul>
              <div className="flex gap-2">
                <SiPowerapps className="text-4xl mt-4" />
                <SiPowerautomate className="text-4xl mt-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl py-1 dark:text-white font-bold">
                Multimedia Tools
              </h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere</li>
              </ul>
              <div className="flex gap-2">
                <SiAdobephotoshop className="text-4xl mt-4" />
                <SiAdobepremierepro className="text-4xl mt-4" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <h3 className="text-3xl py-3 dark:text-white font-bold">
            Projects I Managed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
            <Card
              imageSrc="/chemistry.svg"
              title="UP Kapnayan"
              subtitle="Card Subtitle"
              link="#"
            />
            <Card
              imageSrc="/cc.jpg"
              title="Coding Challenge"
              subtitle="Card Subtitle"
              link="#"
            />
            <Card
              imageSrc="/dapo.jpg"
              title="Project DAPO"
              subtitle="Card Subtitle"
              link="https://apkcombo.com/dapo-data-analytics-on-patho/com.vlct.dapo_app/"
            />
            <Card
              imageSrc="/enroll.jpg"
              title="Stack Enroll"
              subtitle="Card Subtitle"
              link="https://enroll.xsn.edu.ph/"
            />
            <Card
              imageSrc="/ids.jpg"
              title="Stack ID System"
              subtitle="Card Subtitle"
              link="#"
            />
            <Card
              imageSrc="/gradebook.jpg"
              title="Stack Gradebook"
              subtitle="Card Subtitle"
              link="https://gradebook.xsn.edu.ph"
            />
          </div>

          <h3 className="text-3xl py-4 dark:text-white font-bold">
            Projects I Developed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
            <Card
              imageSrc="/ireach.jpg"
              title="iReach"
              subtitle="Card Subtitle"
              link="https://institutional-repository-8251c.web.app/"
            />
            <Card
              imageSrc="/deetz.jpg"
              title="Deetz"
              subtitle="Card Subtitle"
              link="https://www.deetz.events/"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
