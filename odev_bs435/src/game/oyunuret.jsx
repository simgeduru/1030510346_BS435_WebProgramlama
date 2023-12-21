import React, { useState, useEffect } from 'react';
import {OyunModlari, rastgeleSayiUret} from "./tahminolustur";

export const SayiTahminOyunu = () => {
    const [hedefSayi, setHedefSayi] = useState(0);
    const [kullaniciTahmini, setKullaniciTahmini] = useState('');
    const [tahminSayisi, setTahminSayisi] = useState(0);
    const [oyunModu, setOyunModu] = useState(OyunModlari.KOLAY);
    const [oyunBitti, setOyunBitti] = useState(false);
    const [bildiri, setBildiri] = useState('');
    const [hakSayisi, setHakSayisi] = useState(3);

    useEffect(() => {
        oyunuSifirla();
    }, [oyunModu]);

    const oyunuSifirla = () => {
        const min = 1;
        const max = 100;
        const yeniHedefSayi = rastgeleSayiUret(min, max);
        setHedefSayi(yeniHedefSayi);
        setKullaniciTahmini('');
        setTahminSayisi(0);
        setOyunBitti(false);
        setBildiri('');
        setHakSayisi(oyunModu === OyunModlari.ZOR ? 3 : 7);
    };

    const inputDegisti = (event) => {
        const girilenSayi = parseInt(event.target.value, 10);

        if (isNaN(girilenSayi) || girilenSayi < 1 || girilenSayi > 100) {
            setBildiri('Lütfen 1 ile 100 arasında bir sayı girin.');
        } else {
            setBildiri('');
        }

        setKullaniciTahmini(girilenSayi.toString());
    };

    const tahminKontrol = () => {
        const tahmin = parseInt(kullaniciTahmini, 10);

        if (isNaN(tahmin) || tahmin < 1 || tahmin > 100) {
            setBildiri('Lütfen 1 ile 100 arasında bir sayı girin.');
            return;
        }

        setTahminSayisi(tahminSayisi + 1);

        if (tahmin === hedefSayi) {
            setBildiri(`Tebrikler! ${tahminSayisi} denemede doğru sayıyı buldunuz.`);
            setOyunBitti(true);
        } else {

            const uzaklik = Math.abs(hedefSayi - tahmin);
            let mesaj = '';
            if (uzaklik <= 3) {
                mesaj = 'Çok yaklaştınız!';
            } else {
                mesaj = 'Uzak kaldınız, biraz daha deneyin.';
            }

            setBildiri(mesaj);
            if (tahminSayisi >= hakSayisi) {
                setBildiri(`Üzgünüz! ${hakSayisi} hakkınız bitti.`);
                setOyunBitti(true);
            }
        }
    };

    const zorModaGec = () => {
        setOyunModu(OyunModlari.ZOR);
        oyunuSifirla();
    };

    const kolayModaGec = () => {
        setOyunModu(OyunModlari.KOLAY);
        oyunuSifirla();
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
            <div>
                <h2>Oyun Modu: {oyunModu}</h2>
                <p>Deneme Sayısı: {tahminSayisi}</p>
                <p>{bildiri}</p>
            </div>
        </div>
    );
};
