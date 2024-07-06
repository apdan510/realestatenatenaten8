import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div className="info-page-container p-8 bg-white flex flex-col justify-between">
      <div className="text-center mb-8">
        <h1 className="jurassic-park">NATHAN GOGOL</h1>
        <p className="subtitle">DRE # 02230219</p>
      </div>

      <div className="contact-info">
        <div className="flex justify-center items-center space-x-4">
          <a href="tel:+15103060701">
            <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
          </a>
          <a href="tel:+15103060701" className="text-xl text-black">(510) 306-6071</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="mailto:nathangogol@kw.com">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
          </a>
          <a href="mailto:nathangogol@kw.com" className="text-xl text-black">nathangogol@kw.com</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://realestaten8.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} className="w-8 h-8" />
          </a>
          <a href="https://realestaten8.com" target="_blank" rel="noopener noreferrer" className="text-xl text-black">realestaten8.com</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://instagram.com/realestatenate.kw" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/realestatenate.kw" target="_blank" rel="noopener noreferrer" className="text-xl text-black">@realestatenate.kw</a>
        </div>
      </div>

      <div className="logo-container flex justify-center items-center">
        <img src="./anchor-logo.png" alt="Anchor Logo" className="anchor-logo" />
      </div>

      <img src="/nate.png" alt="Nathan Gogol" className="fixed-image" />
      <img src="/keller-williams.png" alt="Keller Williams Watermark" className="keller-watermark" />
    </div>
  );
};

export default InfoPage;
