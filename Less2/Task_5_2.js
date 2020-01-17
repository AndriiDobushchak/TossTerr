let todayDate = new Date(); // Об'єкт Date для доступу до його методів (getHours)
let time = todayDate.getHours();
//console.log(time);
			switch (time) {
				case 0 :
				case 1 :
				case 2 :
				case 3 :
				case 4 :
				case 5 :
				alert("Доброї ночі");
					break;
				case 6 :
				case 7 :
				case 8 :
				case 9 :
				case 10 :	
				case 11 :
				alert("Доброго ранку");
					break;
				case 12 :
				case 13 :
				case 14 :
				case 15 :
				case 16 :
				case 17 :
				alert("Доброго дня");
					break;
				case 18 :
				case 19 :
				case 20 :
				case 21 :
				case 22 :
				case 23 :
				alert("Доброго вечора");
					break;
				} 