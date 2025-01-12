import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ProgramType } from "../lib/definitions";

export default function ProgramIndex() {
  const [program, setProgram] = useState([] as ProgramType[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/program`)
      .then((response) => response.json())
      .then((data: ProgramType[]) => {
        setProgram(data);
      });
  }, []);

  return (
    <>
      <Link to={"/program/new"}>Ajouter</Link>
      <ul>
        {program.map((p) => (
          <li key={p.id}>
            <Link to={`/program/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
