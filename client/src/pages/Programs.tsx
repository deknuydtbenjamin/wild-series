import { useLoaderData } from "react-router-dom";

import type { ProgramType } from "../lib/definitions";
import style from "../pages/programs.module.css";

export default function Programs() {
  const data = useLoaderData() as ProgramType[];

  return (
    <div>
      <h1 className={style.title}> Programmes</h1>
      <ul className={style.card}>
        {data.map((p) => (
          <li key={p.id} className={style.contenaire}>
            <h2>{p.title}</h2>
            <p>
              {p.country} {p.year}
            </p>
            <img src={p.poster} alt={p.title} />
            <p> {p.synopsis} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
