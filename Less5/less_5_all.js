// // ---- Task 1 ---- //
		console.log("Task 1");
		function testThrow(myException) {
		  	try {
		    	throw myException;
		    }
			
			catch (error) {
		    console.log("Caught " + error);
		  	}
		}

		testThrow(5);
		testThrow("Test");
		testThrow(new Error("An error happened"));

// // ---- Task 2 ---- //
		console.log("Task 2");
		function calcRectangleArea(width, height) {
											
			if (isNaN(width) || isNaN(height)) {
				throw new Error("Incorrect data. Is not a number!");
			}

			let area = width * height;
			console.log(area);
			return ;
		}

		try {
			calcRectangleArea(3,12);		// Видає площу
			calcRectangleArea("side",10);	// Видасть "Incorrect data. Is not a number!". 
											//Тому що "side" не число.
			}
										
		catch (exception) {
			console.log(exception.message);
		}

// // ---- Task 3 ---- //
		console.log("Task 3");
		function checkAge() {
			let age = prompt("Enter your age :");
			
			if (age === "") {
				throw new Error(alert("The field is empty! Please enter your age"));
			}
			if (age < 14) {
				throw new Error(alert("You are too young !"));
			}
			if (isNaN(age)){
				throw new Error(alert("Is not a number"));
			}
			else {
				alert("You have access to watching film");
			}
			return age;
		}
		try {
			let ress = checkAge();
		}
		catch (exception) {
			console.log(exception.name);
			console.log(exception.stack);
		}

// ---- Task 4 ---- //
		
		console.log("Task 4");
		class MonthException {
			constructor(message){
				this.name = message;
			}
			showMonthName(month) {
				try {
				switch (month) {
					case 1:
					console.log("January");
					break;
					case 2:
					console.log("February");
					break;
					case 3:
					console.log("March");
					break;
					case 4:
					console.log("May");
					break;
					case 5:
					console.log("June");
					break;
					case 6:
					console.log("July");
					break;
					case 7:
					console.log("July");
					break;
					case 8:
					console.log("August");
					break;
					case 9:
					console.log("September");
					break;
					case 10:
					console.log("October");
					break;
					case 11:
					console.log("November");
					break;
					case 12:
					console.log("December");
					break;
					default:
					throw new MonthException("Incorrect month number");
				}
				}
				catch (incorr) {
						console.log(incorr);
						console.log(incorr.name);
				}
			}
		}
		let calendar = new MonthException()
		calendar.showMonthName(3);
		calendar.showMonthName(17);