import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledProjectDetailsPage } from './styled';
import leftbg from '../../assets/Images/jungle.jpg';
import Button from '../../components/UI/Button';
import { useTranslation } from 'react-i18next';

interface Project {
  id: string;
  heading: string;
  text: string;
  details?: string;
}

const projectData: Project[] = [
  {
    id: '0',
    heading: 'გარემოს დაცვა',
    text: 'ეროვნული გარემოსდაცვითი კანონმდებლობის და საერთაშორისო საფინანსო ორგანიზაციების რეგულაცების შესაბამისი გარემოსდაცვითი დოკუმენტაციბის მომზადება.',
    details: `
      გარემოს ზემოქმედების შეფასების ანგარიშის მომზადება
      სტრატეგიული გარემოსდაცვითი ანგარიშის მომზადება
      ზურმუხტის ქსელზე ზემოქმედების შეფასების ანგარიში
      ბიომრავალფეროვნების დეტალური კვლევა, შერბილების და მონიტორინგის გეგმის მომზადება
      კონსულტაციები გარემოსდაცვითი გადაწყვეტილების პირობების შესრულების მიზნით
      ზღრულად დასაშვები ჩაშვების (ზდჩ) ნორმების პროექტის მომზადება
      ზღრულად დასაშვები გაფრქვევის (ზდგ) ნორმების პროექტის მომზადება
      გარემოსდაცვითი მართვის გეგმის და გარემოსდაცვითი გეგმის მომზადება
      ნარჩენების მართვის გეგმის მომზადება
    `
  },
  {
    id: '1',
    heading: 'შრომის უსაფრთხოება',
    text: 'Develop Health and Safety manegment system and risk assesment. ჯანმრთელობისა და უსაფრთხოების მართვის სისტემის და რისკის შეფასების შემუშავება.',
    details: `
    Policy and Commitment
    Planning
    Implementation and Operation
    Performance Evaluation
    Management Review
    Risk Assessment
  `,
  },
  {
    id: '2',
    heading: 'სოციალური საკითხები',
    text: 'დეტალური აზომვთი კვლევა,',
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [t] = useTranslation('global');
  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Check if project.details exists before accessing
  const detailsList = project.details
    ? project.details
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item !== '')
    : [];

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
          <ul>
            {detailsList.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <Link to="/projects">
            <Button text={t('Home.projects')} />
          </Link>
        </div>
      </StyledProjectDetailsPage>
    </>
  );
};

export default ProjectDetailPage;
