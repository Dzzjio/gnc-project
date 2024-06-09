import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledProjectDetailsPage } from './styled';
import leftbg from '../../assets/Images/jungle.jpg';
import Button from '../../components/UI/Button';
import { useTranslation } from 'react-i18next';

const projectData = [
  {
    id: '0',
    heading: 'The Sea Explorer',
    text: 'Detailed description of The Sea Explorer.',
    price: 100,
  },
  {
    id: '1',
    heading: 'The Forest Hiker',
    text: 'Detailed description of The Forest Hiker.',
    price: 478,
  },
  {
    id: '2',
    heading: 'The Snow Adventurer',
    text: 'Detailed description of The Snow Adventurer.',
    price: 615,
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === id);
  const [t] = useTranslation('global');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{project.heading}</title>
        <meta name="description" content={project.text} />
        <link rel="canonical" href={`/projects/${id}`} />
      </Helmet>
      <StyledProjectDetailsPage>
        <div>
          <img src={leftbg} alt="left-bg" />
        </div>
        <div>
          <h1>{project.heading}</h1>
          <p>{project.text}</p>
          <p>Price: ${project.price}</p>
        <Link to="/projects">
          <Button text={t('Home.projects')} />
        </Link>
        </div>
      </StyledProjectDetailsPage>
    </>
  );
};

export default ProjectDetailPage;