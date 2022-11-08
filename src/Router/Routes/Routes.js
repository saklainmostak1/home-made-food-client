import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ServiceAllDescription from "../../Pages/ServiceAllDescription/ServiceAllDescription";
import Services from "../../Pages/Services/Services";
import ServicesAdd from "../../Pages/ServicesAdd/ServicesAdd";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/foodAdd',
                element: <ServicesAdd></ServicesAdd>,
                loader: () => fetch('http://localhost:5000/allFoods')
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <ServiceAllDescription></ServiceAllDescription>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '*',
                element: <div>Not Found!!!</div>
            },
        ]
    }

])