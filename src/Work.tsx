import './Work.css';
import WorkEntry from './WorkEntry';

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
    </div>
  );
};

export default Work;
