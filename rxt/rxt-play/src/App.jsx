// styles
import './styles/index.css';

// components
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import EmployeesPage from './pages/EmployeesPage';

// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


// Define the router
const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="employees" element={<EmployeesPage />} />
      {/* ... etc. */}
    </Route>
  )
]);


export default function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //   <Header>
    //     <EmployeesPage />
    //   </Header>
    // </>
  )
}
