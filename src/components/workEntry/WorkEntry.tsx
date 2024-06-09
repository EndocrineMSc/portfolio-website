import './WorkEntry.css';
import { motion, Variants } from 'framer-motion';

interface EntryProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const imageVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};

const WorkEntry = ({
  image,
  title,
  description,
  link,
  linkText,
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
      <div className="description">{description}</div>
      <a href={link}>{linkText}</a>
    </div>
  );
};

export default WorkEntry;
