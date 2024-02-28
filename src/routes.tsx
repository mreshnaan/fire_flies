import {
    createBrowserRouter,
  } from "react-router-dom";

  import App from './App.tsx'
import ErrorPage from "./error-page.tsx";
import { PrivacyPolicy } from "./lib/PrivacyPolicy.tsx";

  
 export const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,
            errorElement: <ErrorPage/>
        },
        {
          path:'/privacy-policy',
          element: <PrivacyPolicy/>,
          errorElement: <ErrorPage/>
      }
  ]);