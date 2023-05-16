import React from 'react';
import './Footer.css';

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from '@material-ui/core/Chip';

// IMPORTING REACT ICONS
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiFiverr,
  SiInstagram,
} from 'react-icons/si';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <>
    <div className='font'>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1 style={{ textDecoration: 'none' }}>SP-HOTEL</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: '1.5rem',
                      height: '2.5rem',
                      marginTop: '.2rem',
                    }}
                    label="CONTACT US & ADVANCED BOOKING"
                  />
                </div>
                <div style={{ marginTop: 'calc(1.5vh + 1.5vw)' }}>
                  <a
                    className="icons"
                    target="blank"
                    href="https://github.com/"
                  >
                    <SiGithub className="contactIcons " />
                  </a>
                  <a
                    className="icons"
                    target="blank"
                    href="https://www.linkedin.com/in/Sonuofficial"
                  >
                    <SiLinkedin className="contactIcons ml-3" />
                  </a>

                  <a
                    className="icons"
                    target="blank"
                    href="https://twitter.com/Officia1sonu"
                  >
                    <SiTwitter className="contactIcons ml-3" />
                  </a>
                  <a
                    className="icons"
                    target="blank"
                    href="https://www.fiverr.com/officialsonu"
                  >
                    <SiFiverr className="contactIcons ml-3" />
                  </a>
                  <a
                    className="icons"
                    target="blank"
                    href="https://www.instagram.com/it's_official_sonu/"
                  >
                    <SiInstagram className="contactIcons ml-3" />
                  </a>
                  <a className="icons" href="mailto:sonusaini6280@gmail.com">
                    <FiMail className="contactIcons ml-3" />
                  </a>
                  <a className="icons" href="tel:6280689565">
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h5 text-center text-white m-5">
            ©2023 All Rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
      </div>
    </>
  );
};

export default Footer;