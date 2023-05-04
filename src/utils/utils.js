const utils = {};

utils.saveDataToLocal = (tasks) => {
  sessionStorage.setItem("tasks", JSON.stringify(tasks));
};

utils.getDataFromLocal = () => {
  if (sessionStorage.getItem("tasks")) {
    return JSON.parse(sessionStorage.getItem("tasks"));
  }
  return [];
};

export default utils;
