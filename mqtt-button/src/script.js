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
  if (value >= 50) {
    value = "Alert!"
  }
  value == "Alert!"
        ? statusCircle.classList.add("alert-circle")
        : statusCircle.classList.remove("alert-circle");
  value < 50
      ? statusCircle.classList.add("regular-circle")
      : statusCircle.classList.remove("regular-circle");
  statusCircle.innerText = value;

};


var client = new Paho.MQTT.Client("192.168.0.102", 9001, "clientId");


client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;


client.connect({onSuccess:onConnect});

function onConnect() {
  console.log("Connected to host");
  client.subscribe("house/bulb1");
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log("Value:"+message.payloadString);
  updateStatusCircle(message.payloadString);
}
createStatusCircle();

