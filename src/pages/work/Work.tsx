import './Work.css';
import WorkEntry from '../../components/workEntry/WorkEntry';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="headers">
        <h1>
          <div>SEBASTIAN</div>
          <div>SCHULZ</div>
        </h1>
        <h2>{t('work.job')}</h2>
      </div>
      <WorkEntry
        image="/majinko.png"
        title={t('work.majinko.title')}
        description={t('work.majinko.description')}
        link="https://endocrine-bamsc.itch.io/majinko"
        linkText={t('work.majinko.linkText')}
      />
      <WorkEntry
        image="/pokegame.png"
        title={t('work.pokegame.title')}
        description={t('work.pokegame.description')}
        link="https://poke-memory-game-kappa.vercel.app/"
        linkText={t('work.pokegame.linkText')}
      />
      <WorkEntry
        image="/odincalc.png"
        title={t('work.calc.title')}
        description={t('work.calc.description')}
        link="https://endocrinemsc.github.io/odin-calculator/"
        linkText={t('work.calc.linkText')}
      />
    </div>
  );
};

export default Work;
