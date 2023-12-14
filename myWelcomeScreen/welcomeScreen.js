window.onload = function () {
  let myNameDom = document.querySelector("#myName");
  let name = prompt("Adınınız Nedir? ", "");
  myNameDom.innerHTML = name;
  console.log("Merhaba " + name);

  let dateTimeDOM = document.querySelector("#myClock");

  function showTime() {
    var dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let day = dateTime.getDay();

    let days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    let dayName = days[day];

    dateTimeDOM.innerHTML = `${dayName} ${hours}:${minutes}:${seconds}`;
  }
  showTime();
  setInterval(showTime, 1000);
};
