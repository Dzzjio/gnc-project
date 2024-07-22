import { Helmet } from 'react-helmet-async';
import ProjectCard from '../../components/ProjectCard';
import AboutPageSlider from '../../components/Slider';

const projects = [
  { id: '0', heading: 'გარემოს დაცვა', text: 'ეროვნული გარემოსდაცვითი კანონმდებლობის და საერთაშორისო საფინანსო ორგანიზაციების რეგულაცების შესაბამისი გარემოსდაცვითი დოკუმენტაციბის მომზადება.', price: 100 },
  { id: '1', heading: 'შრომის უსაფრთხოება', text: 'Develop Health and Safety manegment systemand risk assesment.', price: 478 },
  { id: '2', heading: 'სოციალური მომსახურეობა', text: 'დეტალური აზომვთი კვლევა,', price: 615 },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>GNC - Projects</title>
        <meta name="description" content="Project Page GNC." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <section className="section-tours" id="section-tours">
        <h2 className="heading-secondary">ძირითადი მიმართულებები</h2>
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