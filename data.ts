export type Report = {
  id: number;
  desc: string;
  username: string;
  location: string;
  date: string;
  imgEmoji: string;
};

export const REPORTS: Report[] = [
  {
    id: 1,
    desc: "Problema con el alumbrado público en mi calle.",
    username: "Ana García",
    location: "Centro de la Ciudad",
    date: "2023-01-01",
    imgEmoji: "💡",
  },
  {
    id: 2,
    desc: "Basura acumulada en los contenedores del parque.",
    username: "Carlos Mendoza",
    location: "Parque Central",
    date: "2023-01-02",
    imgEmoji: "🗑️",
  },
];
