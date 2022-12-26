import React from 'react';
import BreadCrumbs from '../../component/common/breadСrumbs';

const AboutPage = () => {
  console.log();
  return (
    <div className="about">
      <div className="about__container container">
        <div className="about__content">
          <BreadCrumbs />
          <div className="about__info">
            <div className="about__title">О нас</div>
            <div className="about__text">
              <div className="about__subtitle">
                Наши офисы: <span className="about__line"></span>
              </div>

              <ul className="about__locations">
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
                <li className="about__location">Нижний Новгород</li>
                <li className="about__location">Москва</li>
                <li className="about__location">Казань</li>
              </ul>
            </div>
            <div className="about__map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0cce86ddf76062fb5f45457e56b2d8c7e9315211662221eedd5cb5b485a19453&amp;source=constructor"
                width="100%"
                height="400"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
