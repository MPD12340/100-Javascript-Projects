import { taskItemType } from "../types/TaskTypes";
export const saveTasks = (tasks: taskItemType[]): void => {
    localStorage.setItem("mytasks", JSON.stringify(tasks));
  };
  
  export const getTasks = (): taskItemType[] => {
    const tasks = localStorage.getItem("mytasks");
    return tasks ? JSON.parse(tasks) : [];
  };