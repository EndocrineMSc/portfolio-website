import './WorkEntry.css';
import { motion, Variants } from 'framer-motion';

interface EntryProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  liveLinkText: string;
  gitLink: string;
}

const imageVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [0, 0, 0, 1],
      bounce: 0.2,
      duration: 1,
    },
  },
};

const WorkEntry = ({
  image,
  title,
  description,
  liveLink,
  liveLinkText,
  gitLink,
}: EntryProps) => {
  return (
    <div className="workentry">
      <h3>{title}</h3>
      <motion.div
        className="image-wrap"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={imageVariants}
      >
        <img src={image} alt={title} />
      </motion.div>
      <div className="entry-text">
        <div className="description">{description}</div>
        <div className="links">
          <a href={liveLink}>{liveLinkText}</a>
          <a href={gitLink}>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default WorkEntry;
