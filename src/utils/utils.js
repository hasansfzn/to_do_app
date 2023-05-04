const utils = {};

utils.saveDataToLocal = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

utils.getDataFromLocal = () => {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  }
  return [];
};

export default utils;
