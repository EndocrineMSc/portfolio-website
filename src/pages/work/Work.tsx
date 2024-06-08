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
        description="A larger prototype of a Pajinko-like deckbuilder made in Unity using C#. 
          All code was written by me. While working on this passion project, I was able to learn a lot about object-oriented programming. 
          Hosted on itch.io. Besides this larger project I participated in 12 Game Jams to date, the results of which can be found on my itch.io profile."
        link="https://endocrine-bamsc.itch.io/majinko"
        linkText="game on itch.io"
      />
      <WorkEntry
        image="/pokegame.png"
        title="Poké Memory"
        description="A small browser game made during the course of the ODIN project. The aim of the game project was to learn about the usage of (REST) APIs. Hosted through vercel."
        link="https://poke-memory-game-kappa.vercel.app/"
        linkText="live game"
      />
      <WorkEntry
        image="/odincalc.png"
        title="ODIN Calculator"
        description="A very simplistic calculator made with basic Javascript, HTML and CSS during the course of the ODIN project basic curriculum. Hosted through GitHub Pages.
          I have learned a lot since writing this early project."
        link="https://endocrinemsc.github.io/odin-calculator/"
        linkText="live calculator"
      />
    </div>
  );
};

export default Work;
