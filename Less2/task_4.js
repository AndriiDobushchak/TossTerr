let a = prompt("Введіть довжину сторони а трикутника АВС",);
a = +a;			// Перетворення змінної в число
let b = prompt("Введіть довжину сторони b трикутника АВС",);
b = +b;			// Перетворення змінної в число
let c = prompt("Введіть довжину сторони c трикутника АВС",);
c = Number(c);	// Перетворення змінної в число
if (a<=0||b<=0||c<=0) {
	alert("Incorrect data")
}
 else {
	let p = (a+b+c)/2; 					//півпериметр трикутника
	let s2 = p*(p-a)*(p-b)*(p-c); 		//площа трикутника в квадраті
	let s1 = s2**(1/2);					//площа трикутника
	let s = (Math.round(s1*1000))/1000; // Округлюємо до трьох знаків після коми
		
 		console.log(s);
 		//Перевірка чи трикутник прямокутний
 		if (a**2===b**2+c**2||b**2===a**2+c**2||c**2===a**2+b**2)
 			{
 			console.log("Трикутник прямокутний");
 			}
 	 	}