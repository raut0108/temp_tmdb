import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue, addTask, deleteTask } from "../redux/todoSlice";

function TodoRedux() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.todo.value);
  const todoTask = useSelector((state) => state.todo.todoTask);

  const handleChange = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div className="bg-black">
      <h2 className="text-center text-green-300 bg-sky-950 w-full font-bold h-[50px] p-2">
        {" "}
        TODO LIST{" "}
      </h2>
      <div className="text-center">
        <input
          className="border border-black h-12 rounded-md p-4 m-3"
          type="text"
          value={value}
          placeholder="add todo"
          onChange={handleChange}
        />
        <button
          onClick={() => dispatch(addTask())}
          className="bg-blue-600 p-2 m-2 rounded-md hover:bg-green-300"
        >
          Add task
        </button>
      </div>
      <div>
        <h2 className="text-center m-3 text-green-200 text-lg font-semibold">
          The listed tasks are :{" "}
        </h2>
        <div>
          <ul>
            {todoTask.map((item, index) => {
              return (
                <div key={index}>
                  <li
                    key={index}
                    className="text-center text-lg  bg-sky-900 rounded-md m-6 mb-6 text-cyan-100"
                  >
                    {item}
                    <button
                      className="bg-blue-600 p-2 m-2 rounded-md hover:bg-green-300 text-end"
                      onClick={() => dispatch(deleteTask(index))}
                    >
                      Delete Task
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoRedux;
