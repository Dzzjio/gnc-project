import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledProjectDetailsPage } from './styled';

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
        <h1>{project.heading}</h1>
        <p>{project.text}</p>
        <p>Price: ${project.price}</p>
      </StyledProjectDetailsPage>
    </>
  );
};

export default ProjectDetailPage;