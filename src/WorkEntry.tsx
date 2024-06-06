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
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <a href={link}>{linkText}</a>
    </>
  );
};

export default WorkEntry;
