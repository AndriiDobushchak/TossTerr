let todayDate = new Date(); // Об'єкт Date для доступу до його методів (getHours)
let time = todayDate.getHours();
//onsole.log(time);
if (time<=5) {alert("Доброї ночі");}
if (5<time&&time<=11) {alert("Доброго ранку");}
if (11<time&&time<=17) {alert("Доброго дня");}
if (17<time&&time<=23) {alert("Доброго вечора");}