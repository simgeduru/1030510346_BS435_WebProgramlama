import React, { useState, useEffect } from 'react';
import {OyunModlari} from "./tahminolustur";



export const SayiTahminOyunu = () => {
    const [hedefSayi, setHedefSayi] = useState(0);
    const [kullaniciTahmini, setKullaniciTahmini] = useState('');
    const [tahminSayisi, setTahminSayisi] = useState(0);
    const [oyunModu, setOyunModu] = useState(OyunModlari.KOLAY);
    const [oyunBitti, setOyunBitti] = useState(false);

    useEffect(() => {
        oyunuSifirla();
    }, [oyunModu]);

    const oyunuSifirla = () => {
        const min = oyunModu === OyunModlari.KOLAY ? 1 : 1;
        const max = oyunModu === OyunModlari.KOLAY ? 10 : 100;
        const yeniHedefSayi = rastgeleSayiUret(min, max);
        setHedefSayi(yeniHedefSayi);
        setKullaniciTahmini('');
        setTahminSayisi(0);
        setOyunBitti(false);
    };

    const inputDegisti = (event) => {
        setKullaniciTahmini(event.target.value);
    };

    const tahminKontrol = () => {
        const tahmin = parseInt(kullaniciTahmini, 10);

        if (isNaN(tahmin)) {
            alert('Lütfen geçerli bir sayı girin.');
            return;
        }

        setTahminSayisi(tahminSayisi + 1);

        if (tahmin === hedefSayi) {
            alert(`Tebrikler! ${tahminSayisi} denemede doğru sayıyı buldunuz.`);
            setOyunBitti(true);
        } else {
            alert('Yanlış tahmin. Tekrar deneyin.');
        }
    };

    const zorModaGec = () => {
        setOyunModu(OyunModlari.ZOR);
    };

    const kolayModaGec = () => {
        setOyunModu(OyunModlari.KOLAY);
    };

    return (
        <div>
            <h1>Sayı Tahmin Oyunu</h1>
            <label>
                Tahmininiz:
                <input
                    type="number"
                    value={kullaniciTahmini}
                    onChange={inputDegisti}
                    disabled={oyunBitti}
                />
            </label>
            <button onClick={tahminKontrol} disabled={oyunBitti}>
                Tahmin Et
            </button>
            <button onClick={oyunuSifirla}>Yeniden Başla</button>
            <button onClick={zorModaGec} disabled={oyunBitti}>
                ZOR Moduna Geç
            </button>
            <button onClick={kolayModaGec} disabled={oyunBitti}>
                KOLAY Moduna Geç
            </button>
            <div>
                <h2>Oyun Modu: {oyunModu}</h2>
                <p>Hedef Sayı: {hedefSayi}</p>
                <p>Deneme Sayısı: {tahminSayisi}</p>
            </div>
        </div>
    );
};

