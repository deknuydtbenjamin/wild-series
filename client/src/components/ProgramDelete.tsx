import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ProgramDeleteProps = {
  id: number;
  children: ReactNode;
};

const ProgramDelete = ({ id, children }: ProgramDeleteProps) => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/api/program/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/program");
          }
        });
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
};

export default ProgramDelete;
