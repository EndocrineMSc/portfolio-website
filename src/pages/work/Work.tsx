import './Work.css';
import WorkEntry from '../../components/workEntry/WorkEntry';

const Work = () => {
  return (
    <div className="container">
      <div className="headers">
        <h1>
          <div>SEBASTIAN</div>
          <div>SCHULZ</div>
        </h1>
        <h2>Web-Developer</h2>
      </div>
      <WorkEntry
        image="/majinko.png"
        title="Majinko"
        description="A larger prototype of a pajinko-like deckbuilder made in Unity using C#. All code was written by me. While working on this passion project, I was able to learn a lot about object-oriented programming."
        link="https://endocrine-bamsc.itch.io/majinko"
        linkText="itch.io project"
      />
      <WorkEntry
        image="/pokegame.png"
        title="Poké Memory"
        description="A small project made during the course of the ODIN project. The aim of the project was to learn about the usage of (REST) Apis."
        link="https://poke-memory-game-kappa.vercel.app/"
        linkText="live game"
      />
    </div>
  );
};

export default Work;
