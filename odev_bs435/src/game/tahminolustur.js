export const rastgeleSayiUret = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//delay ekle
export const OyunModlari = {
    KOLAY: 'kolay',
    ZOR: 'zor',
};