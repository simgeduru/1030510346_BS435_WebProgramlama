import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h2>Tahmin Oyunu</h2>
            <p className="welcome-text">
                Anasayfaya Hoş geldin. 1 ile 100 arasında bir sayı tahmin edeceksin.
                Kolay modda 7, Zor modda ise 3 hakkın var.
                Yönlendirmelerini takip et!
                Tahmin oyununa Kolay Moddan Başlayacaksın, zor moda geçmek için butona tıklayalirsin.
            </p>
            <div className="action">
                <Link to={"/oyun"} className="play">Oyna</Link>
            </div>
        </div>
    );
}