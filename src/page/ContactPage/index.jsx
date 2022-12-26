import React from 'react';
import AlertCustome from '../../component/common/Alert';
import BreadCrumbs from '../../component/common/breadСrumbs';
import FormSubscription from '../../component/FormSubscription';
import { contactInfo } from '../../helpers/content';

const ContactPage = ({ value, valueChange, onSubmit, alert }) => {
  return (
    <>
      <div className="contact">
        <div className="contact__container container">
          <div className="contact__content">
            <BreadCrumbs />

            <h2 className="contact__title">Связаться с нами</h2>
            <div className="contact__info">
              {contactInfo.map((el) => (
                <div
                  key={el.id}
                  className="contact__elemnt"
                >
                  <div className={`contact__elemnt-title`}>{el.title}</div>
                  <div
                    className={`contact__elemnt-info ${
                      el.id === 1 ? 'unicle' : ''
                    }`}
                  >
                    {el.info.map((elem, index) => (
                      <div
                        key={elem.id}
                        className={`contact__elemnt-contant ${
                          elem?.src ? 'elemnt-src' : ''
                        }`}
                      >
                        {elem.content}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="contact__form">
              <AlertCustome alert={alert} />
              <FormSubscription
                value={value}
                valueChange={valueChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
