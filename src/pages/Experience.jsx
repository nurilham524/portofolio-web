import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdOutlineScience } from "react-icons/md";
import { MdPhonelink } from "react-icons/md";
import { BiLogoFlutter } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Experience() {
  return (
    <>
    <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={< MdOutlineScience/>}
          >
            <h3 className="vertical-timeline-element-title">Head of Youth Scientific Group</h3>
            <h4 className="vertical-timeline-element-subtitle">SMAN 1 Pinrang - Pinrang, Indonesia</h4>
            <p>
            • Created a management guidebook
            • Wrote and published a school poetry book
            • Served as the President, coordinating all members
            • Assisted teachers in writing scientific papers
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<MdPhonelink />
            }
          >
            <h3 className="vertical-timeline-element-title">Head of Information and Communication Division</h3>
            <h4 className="vertical-timeline-element-subtitle">Pinrang Student Association Yogyakarta - Yogyakarta, Indonesia</h4>
            <p>
            • Managed all social media accounts of IPMAPI Sul-Sel DIY
            • Developed and managed the website of IPMAPI Sul-Sel DIY
            • Served as the Head of the Committee for the IPMAPI Sul-Sel DIY General Assembly
            • Coordinated members of the Information and Communication Division
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<BiLogoFlutter />
            }
          >
            <h3 className="vertical-timeline-element-title">board of directors of the institution</h3>
            <h4 className="vertical-timeline-element-subtitle">Informatics Department Student Association - Yogyakarta, Indonesia</h4>
            <p>
            • Board of Advisors of the Organization (2023 - Present)
            • Conducted social services in the field of Networking
            • Served as the Head of the Committee for the General Assembly of the Association
            • Coordinated members of the Networking Division
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiMysql />
            }
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Experience