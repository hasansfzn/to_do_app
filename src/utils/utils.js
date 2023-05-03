const utils = {};

utils.saveDataToLocal = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default utils;
