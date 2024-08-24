import React, {lazy,Suspense} from "react";
import { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider  } from "react-redux";
import appStore from "./utils/appStore";
//Do not import Grocery like this
//import Grocery from "./components/Grocery";


//Lazy loading || Chunking || Code Splitting || Dynamic Bundling || On demand loading => App.js will not load the component, it will be loaded when we click on that component it will make our app lighter and fast

//Import grocery like this
const Grocery = lazy(() => import("./components/Grocery"));


 
const AppLayout = () => {

  const [userName,setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name:"Shikhar",
    };
    setUserName(data.name);
  }, []);
    return (
      <Provider store={appStore}>
      <UserContext.Provider value = {{loggedInUser : userName}}>
        <div className="app">
           <Header/> 
           <Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
       
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contactUS",
        element: <ContactUs/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}> <Grocery/> </Suspense>)
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement:<Error/>,
  },
  
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);