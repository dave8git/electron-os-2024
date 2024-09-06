const os = require('os');

window.onload = function () {
  const osPlatform = document.querySelector("#osPlatform");
  const osArchitecture = document.querySelector("#osArchitecture");

  osPlatform.innerHTML = `Platform: <strong>${os.platform()}</strong>`;
  osArchitecture.innerHTML = `Architecture: <strong>${os.arch()}</strong>`;
};