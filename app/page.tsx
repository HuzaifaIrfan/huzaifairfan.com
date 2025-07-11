import Image from "next/image";
import '../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEllipsis, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faWhatsapp, faUpwork } from '@fortawesome/free-brands-svg-icons';

import WaveBackground from '@/components/WaveBackground';


export default function Home() {
  return (

    <main className="relative min-h-screen flex items-center justify-center text-white">
      <WaveBackground />


      <div className="wrapper">
        <div className="img-area">
          <div className="inner-area">
            <img src="img/profile.jpg" alt="" />
          </div>
        </div>
        <div className="icon arrow"><FontAwesomeIcon icon={faHome} /></div>
        <div className="icon dots"><FontAwesomeIcon icon={faEllipsis} /></div>
        <div className="name">Huzaifa Irfan</div>

        <div className="about">フザイファ</div>
        <div className="about">(Web | IoT | Automation)</div>

        <div className="social-icons">
          <a href="HuzaifaIrfan-Resume.pdf"
            target="_blank"
            className="resume">
            <FontAwesomeIcon icon={faUser} /></a>
          <a href="https://github.com/HuzaifaIrfan/"
            target="_blank"
            className="github">
            <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://wa.me/923155691280" target="_blank" className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="mailto:contact@huzaifairfan.com" target="_blank" className="email"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://www.upwork.com/freelancers/huzaifairfan2001"
            target="_blank"
            className="upwork"><FontAwesomeIcon icon={faUpwork} />
          </a>
        </div>
      </div>

    </main>
  );
}
