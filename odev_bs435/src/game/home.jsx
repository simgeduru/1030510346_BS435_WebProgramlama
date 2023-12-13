import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h2>Tahmin Oyunu</h2>
            <p className="welcome-text">
                Anasayfaya Hoş geldin.
                Tahmin oyununa Kolay Moddan Başlayacaksın, zor moda geçmek için butona tıklayailirsin.
            </p>
            <div className="action">
                <Link to={"/oyun"} className="play">Oyna</Link>
            </div>
        </div>
    );
}