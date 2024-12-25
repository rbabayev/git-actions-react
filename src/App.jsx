import app from "./script";
import React, { useState } from "react";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
  let [tasksArray, setTasks] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "tasks");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
      setTasks(Object.values(data));
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Show Data</button>
      <ul>
        {tasksArray.map((item, index) => {
          <li key={index}>
            {item.taskname}:{item.point}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Read;
