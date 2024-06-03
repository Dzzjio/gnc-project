import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/About/About'
import ContactPage from '../pages/Contact/Contact'
import ProjectsPage from '../pages/Projects/Projects'
import ProjectDetailPage from '../pages/Projects/projectsDetails'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetailPage />,
      },
    ],
  },
]);

export default Router
