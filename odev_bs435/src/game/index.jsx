import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {Home} from "./home";
import {SayiTahminOyunu} from "./oyunuret";



const notFound = () => {
    return (
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/oyun",
        element: <SayiTahminOyunu/>
    }
]);

const App = () => {

    return (
        <RouterProvider router={router}/>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
