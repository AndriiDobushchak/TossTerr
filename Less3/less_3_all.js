//!!!--- Task 1 --- !!!

		console.log("Task 1 (for)");
			
		let myArray = [2,3,4,5];
		let product = 1;
		for (i = 0; i < 4; i++){
			 		product = myArray[i] * product;
			 	}
		console.log(product);
			
			// Варіант з while
		console.log("Task 1 (while)");

		product = 1;
		 let iter = 0;
		 while (iter < 4){
		 			product = myArray[iter] * product;
		 			iter++;
		 		}
		console.log(product);

// !!!--- Task 2 ---!!!

			console.log("Task 2");

			for (var it = 0; it < 16; it++) {
				if (it % 2){
					console.log(it,"is odd");
					alert(it+" is odd");
				}
				else {
					console.log(it,"is even");
					alert(it+" is even");
				}
			}

// //!!!--- Task 3 ---!!!

		console.log("Task 3");

		let randArrayLength = prompt("Input array length","5");
		randArrayLength = +randArrayLength;
		let randArray = [];
		
		function randomizer(){
			let rand_x = (Math.floor(Math.random()*500)); // рандомайзер 1- 500
			return rand_x;
		}

		for (let ik = 0; ik < randArrayLength ; ik++) {		// ik - ітерація масиву randArray
			randArray.push(randomizer());
		}
			console.log(randArray);

// //!!!--- Task 4 ---!!!

		console.log("Task 4");

		let a = prompt("Input integer number 'a'");
		a = +a;
		let b = prompt("Input integer number 'b'");
		b = +b;
		let result = 1;
		
		if (Number.isInteger(a)&&Number.isInteger(b)) { // Перевірка чи числа 'a' і 'b' не цілі

			function raiseToDogree(a,b){
				for (let i = 0; i < b; i++){
					result = result*a;
				}
				return result;
			}
			result = raiseToDogree(a,b);
			console.log(result);

		}
		else{
		console.log("not Integer");
		}

// //!!!--- Task 5 ---!!!

		console.log("Tasl 5");

		let someArrayLength = prompt("Input someArray length");
		let someArray = [];
		let x = prompt("Numrer of last elements");
		for (i = 0; i < someArrayLength; i++){
			someArray.push(prompt("Input element of someArray"));
		}

	  	function lastElem(someArray,x){  		
	  		let xArray = someArray.slice(-x);
	  		return xArray;
	  	}
	  	xArray = lastElem(someArray,x);
	  	console.log(someArray);
		console.log(xArray);
		
////!!!--- Task 6 ---!!!

		console.log("Task 6");
		
		let someString = prompt("Input some string","SoMe sTriNg");	
		someString = someString.toLowerCase();

		let rightString = someString[0].toUpperCase(); //перша буква "правильного рядка"
				
		function ToUp(someString){
			
				for (i = 1; i < someString.length; i++){ //Цикл монтує нову стрінгу посимвольно
				
					if (someString [i] === " ") {	//Якщо пробілб то переводимо наступну букву UpCase
					rightString = rightString + " " + someString [i+1].toUpperCase();
					i = i+1;
					
					} 

				else {
					rightString = rightString + someString [i];
					
				}
			}
			return rightString;
		}
		rightString = ToUp(someString);
		
		console.log(rightString);