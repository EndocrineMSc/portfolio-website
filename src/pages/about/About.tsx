import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t('about.header')}</h1>
      <p>{t('about.p1')}</p>
      <p>{t('about.p2')}</p>
      <p>{t('about.p3')}</p>
      <p>{t('about.p4')}</p>
      <p>{t('about.p5')}</p>
      <p>{t('about.p6')}</p>
      <p>
        {t('about.signage')}
        <br />
        Sebastian Schulz
      </p>
    </div>
  );
};

export default About;
