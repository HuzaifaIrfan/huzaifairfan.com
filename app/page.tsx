
'use client';

import Image from "next/image";

import '../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEllipsis } from '@fortawesome/free-solid-svg-icons';



import WaveBackground from '@/components/WaveBackground';
import SocialButtons from '@/components/SocialButtons';

import useSound from 'use-sound';


export default function Home() {


  const [play] = useSound('/sounds/mixkit-select-click-1109.wav');
  return (

    <main className="relative min-h-screen flex items-center justify-center ">

      <WaveBackground />


      <div className="wrapper">
        
        <div className="img-area">
          <div className="inner-area">
            <img src="img/profile.jpg" alt="" />
          </div>
        </div>
        <div className="icon arrow" onClick={() => {play();}}><FontAwesomeIcon icon={faHome} /></div>
        <div className="icon dots" onClick={() => {play();}}><FontAwesomeIcon icon={faEllipsis} /></div>
        <div className="name">Huzaifa Irfan</div>

        <div className="about">フザイファ</div>
        <div className="about">(Web | IoT | Automation)</div>

        <SocialButtons />

      </div>

    </main>
  );
}
