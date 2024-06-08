import './WorkEntry.css';

interface EntryProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

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
      <div className="image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="description">{description}</div>
      <a href={link}>{linkText}</a>
    </div>
  );
};

export default WorkEntry;
