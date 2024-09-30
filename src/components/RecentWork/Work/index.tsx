import { FC } from "react";
import "./style.css";
import Button from "./Button";
const index: FC<Project> = ({ name, roles, link }) => {
  return (
    <div className="workItem-container">
      <div className="work-information">
        <div className="work-title">{name}</div>
        <div className="project-roles">
          {roles.map((role, index) => (
            <>
              <span key={index}>{role}</span>
              {index < roles.length - 1 && <span>-</span>}
            </>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Button link={link} />
      </div>
    </div>
  );
};

export default index;
