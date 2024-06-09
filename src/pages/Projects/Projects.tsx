import { Helmet } from 'react-helmet-async';
import ProjectCard from '../../components/ProjectCard';
import AboutPageSlider from '../../components/Slider';

const projects = [
  { id: '0', heading: 'The Sea Explorer', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus.', price: 100 },
  { id: '1', heading: 'The Forest Hiker', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus.', price: 478 },
  { id: '2', heading: 'The Snow Adventurer', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus.', price: 615 },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Project Page GNC." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <section className="section-tours" id="section-tours">
        <h2 className="heading-secondary">Latest Projects</h2>
        <div className="row">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              heading={project.heading}
              text={project.text}
              price={project.price}
              link={`/projects/${project.id}`}
            />
          ))}
        </div>
        <h2 className="heading-secondary">Our Projects</h2>
        <AboutPageSlider />
      </section>
    </>
  );
};

export default ProjectsPage;