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
        liveLink="https://endocrine-bamsc.itch.io/majinko"
        liveLinkText={t('work.majinko.linkText')}
        gitLink="https://github.com/EndocrineMSc/Majinko"
      />
      <WorkEntry
        image="/pokegame.png"
        title={t('work.pokegame.title')}
        description={t('work.pokegame.description')}
        liveLink="https://poke-memory-game-kappa.vercel.app/"
        liveLinkText={t('work.pokegame.linkText')}
        gitLink="https://github.com/EndocrineMSc/poke-memory"
      />
      <WorkEntry
        image="/odincalc.png"
        title={t('work.calc.title')}
        description={t('work.calc.description')}
        liveLink="https://endocrinemsc.github.io/odin-calculator/"
        liveLinkText={t('work.calc.linkText')}
        gitLink="https://github.com/EndocrineMSc/odin-calculator"
      />
    </div>
  );
};

export default Work;
