import Image from "next/image";
import '../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEllipsis } from '@fortawesome/free-solid-svg-icons';



import WaveBackground from '@/components/WaveBackground';
import SocialButtons from '@/components/SocialButtons';

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
 <SocialButtons />

      </div>

    </main>
  );
}
