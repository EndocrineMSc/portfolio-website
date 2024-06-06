import './Work.css';
import WorkEntry from './WorkEntry';

const Work = () => {
  return (
    <div className="container">
      <div className="menu"></div>
      <div className="headers">
        <h1>
          <div>SEBASTIAN</div>
          <div>SCHULZ</div>
        </h1>
        <h2>Web-Developer</h2>
      </div>
      <WorkEntry
        image="/test_image"
        title="Test"
        description="This is a test entry"
        link="https://itch.io"
        linkText="itch.io project"
      />
    </div>
  );
};

export default Work;
