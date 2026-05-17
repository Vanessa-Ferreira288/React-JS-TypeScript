import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  let { taskId } = useParams();


  return (
    <div>
      <h2>Detalhes da Tarefa</h2>
      <p>ID da Tarefa: {taskId}</p>
    </div>
  );
};

export default TaskDetails;