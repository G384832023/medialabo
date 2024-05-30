let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075,
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather[0].description);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.name);

let div = document.querySelector('div#result');

let h1 = document.createElement('h1');
h1.textContent = "世界の天気";
div.insertAdjacentElement('beforeend',h1); 
let h2 = document.createElement('h2');
h2.textContent = "検索結果1件";
h1.insertAdjacentElement('afterend',h2); 
let li1 = document.createElement('li');
li1.textContent = "緯度: " + data.coord.lon;
h2.insertAdjacentElement('afterend',li1); 
let li2 = document.createElement('li');
li2.textContent = "経度: " + data.coord.lat;
li1.insertAdjacentElement('afterend',li2); 
let li3 = document.createElement('li');
li3.textContent = "天気: " + data.weather[0].description;
li2.insertAdjacentElement('afterend',li3); 
let li4 = document.createElement('li');
li4.textContent = "最低気温: " + data.main.temp_min;
li3.insertAdjacentElement('afterend',li4); 
let li5 = document.createElement('li');
li5.textContent = "最高気温: " + data.main.temp_max;
li4.insertAdjacentElement('afterend',li5); 
let li6 = document.createElement('li');
li6.textContent = "湿度: " + data.main.humidity;
li5.insertAdjacentElement('afterend',li6); 
let li7 = document.createElement('li');
li7.textContent = "風速: " + data.wind.speed;
li6.insertAdjacentElement('afterend',li7); 
let li8 = document.createElement('li');
li8.textContent = "風向: " + data.wind.deg;
li7.insertAdjacentElement('afterend',li8); 
let li9 = document.createElement('li');
li9.textContent = "都市名: " + data.name;
li8.insertAdjacentElement('afterend',li9); 