/**
 * Создание статус-круга
 *
 * @returns {void}
 */
const createStatusCircle = () => {
  const rootNode = document.getElementById("app");
  const statusCircle = document.createElement("div");

  statusCircle.classList.add("status-circle");
  statusCircle.innerText = 0;

  rootNode.appendChild(statusCircle);
};

/**
 * Обновление статус-круга
 *
 * @param value - значение статус круга
 * @returns {void}
 */
const updateStatusCircle = (value) => {
  const statusCircle = document.getElementsByClassName("status-circle")[0];

  value >= 50
    ? statusCircle.classList.add("alert-circle")
    : statusCircle.classList.remove("alert-circle");

  value < 50
      ? statusCircle.classList.add("regular-circle")
      : statusCircle.classList.remove("regular-circle");
  statusCircle.innerText = value;
};

createStatusCircle();

updateStatusCircle(49);
