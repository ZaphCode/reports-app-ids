export type Report = {
  id: number;
  desc: string;
  username: string;
  location: string;
  date: string;
  imgUrl?: string;
};

export const INITIAL_REPORTS: Report[] = [
  {
    id: 1,
    desc: "Problema con el alumbrado público en mi calle.",
    username: "Ana García",
    location: "Centro de la Ciudad",
    date: "2023-01-01",
    imgUrl:
      "https://blob.posta.com.mx/images/2024/06/21/alumbrado-focus-0-0-1479-828.webp",
  },
  {
    id: 2,
    desc: "Basura acumulada en los contenedores del parque.",
    username: "Carlos Mendoza",
    location: "Parque Central",
    date: "2023-01-02",
    imgUrl:
      "https://www.shutterstock.com/image-photo/pile-black-garbage-bags-overflowing-600nw-2511961701.jpg",
  },
];
