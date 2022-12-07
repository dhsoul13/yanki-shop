import React from 'react';
import { footer, footerEnd } from '../../../helpers/content';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__contant">
          {footer.map((el, id) => (
            <div
              className="footer__elem"
              key={id}
            >
              <h2 className="footer__title">{el.title}</h2>
              <div className="footer__elem-src">
                {el.src.map((elem, id) => (
                  <div
                    className="footer__src"
                    key={id}
                  >
                    <h3>{elem.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {footerEnd.map((el, id) => (
            <div
              className="footer__elem"
              key={id}
            >
              <h2 className="footer__title">{el.title}</h2>
              <div className="footer__elem-src">
                <div className="footer__src">
                  <div className="footer__social">
                    {el.src.map((elem, id) => (
                      <div
                        className="footer__src"
                        key={id}
                      >
                        <h3>{elem.text}</h3>
                      </div>
                    ))}
                  </div>
                  <h3>{el.phone}</h3>
                </div>
                <div className="footer__src">
                  <h3>{el.email}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
