import { Link } from 'react-router-dom';
import Button from './UI/Button';

interface ProjectCardProps {
  heading: string;
  text: string;
  price: number;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ heading, text, price, link }) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">{heading}</span>
          </h4>
          <div className="card__details">
            <p>{text}</p>
            {/* <Link to={link}>
              <Button text="Learn More!" />
            </Link> */}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              {/* <p className="card__price-only">Only</p> */}
              {/* <p className="card__price-value">${price}</p> */}
            </div>
            <Link to={link}>
              <Button text="Learn More!" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
