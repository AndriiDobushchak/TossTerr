// ---- Task 1 ---- //
		console.log("Task 1");
		let mentor = {	// some object
				course: "JS Core",
				duration: 12,
				direction: "web-development",
				group: "Lv-476.JS Core"
			}

		function propsCount(mentor){	// function return length of the object 'mentor'
			let arrayMentor = Object.keys(mentor); // transform in to array
			return arrayMentor.length;
		}	
		console.log(propsCount(mentor));

// ---- Task 2 ---- //
		console.log("Task 2");
		let gun = {
				type: "rifle",
				action: "bolt-action",
				caliber: ".308win",
				weight: 5.5,
				length: 1.1
			}

		function showProps(gun){
			let arrayGunKeys = Object.keys(gun); 
			let arrayGunProps = Object.values(gun);
			console.log("Keys",arrayGunKeys);
			console.log("Properties",arrayGunProps);
			return ;
		}
		showProps(gun);
	
// ---- Task 3 ---- //
		console.log("Task 3");
		class Worker{										
				constructor(fullName,dayRate,workingDays){	// with 3 properties
					this.fullName = fullName;
					this.dayRate = dayRate;
					this.workingDays = workingDays	
				}
				#experience = 1.2;							//Приватне поле "досвід"
				showSalary(){								//До 1).Метод розрахунку зарплати
					return this.workingDays * this.dayRate;			
				}
										
				showSalaryWithExperience(){					// Зарплата з досвідом
					return this.workingDays * this.dayRate * this.#experience;
				}
				get setExp(){
				 	//this.#experience = 1.5;				//Зміна експи за допомогою геттера
				 	return this.#experience;
				}	
				set setExp(value_1){	//Встановлюєм новий досвід. Наприклад worker2.setExp = 1.5
					this.#experience = value_1;
				}

				showSalaryWithNewExperience(){				//Зарплата з новим досвідом
					return this.workingDays * this.dayRate * this.#experience;
				}
				showExp(){
					return this.#experience;
				}	
		}

			let worker1 = new Worker("Jack White",40,30);

			console.log(worker1.fullName);
			console.log("Salary = "+ worker1.showSalary());
			console.log("Experience = "+ worker1.setExp);
			console.log("Salary with experience = "+ worker1.showSalaryWithExperience());
			worker1.setExp = 1.5;
			console.log("New experience = "+worker1.showExp());
			console.log("Salary with new experience = "+ worker1.showSalaryWithNewExperience());
	
			console.log(worker1);
	
			let worker2 = new Worker("John Smith", 30,30);
			worker2.setExp = 1.5
			console.log(worker2);
	
			let worker3 = new Worker("Bob Woo", 26,20);
			console.log(worker3);

		
		// масив імен і зарплат 
		let employee = [		
			worker1.fullName, worker1.showSalaryWithNewExperience(),
			worker2.fullName, worker2.showSalaryWithNewExperience(),
			worker3.fullName, worker3.showSalaryWithNewExperience(),
			]
			console.log(employee); // виводим масив імен і зарплат (не сортований)

				for (let i = 1; i < employee.length - 1; i = i + 2) {
				for (let j = 1; j < employee.length - 1; j = j + 2) {
					if(employee [j] > employee [j + 2]) {
						tmp = employee [j];
						employee [j] = employee [j+2];
						employee [j + 2] = tmp;
					}
				}
			}
				
			console.log(employee); // Сортовий по зростанню зарплати масив

				for (i=0; i < employee.length -1; i = i + 2) { // Виводим список 
					console.log(employee[i] + ":" + employee[i+1]);
				}

		// Не красивий і громіздкий, але робочий =) спосіб сортування по зарплаті...
		
			// 	console.log("Sort by salary (if)")
			// let w1 = worker1.showSalaryWithNewExperience(); // Зарплатай 1-го працівника
			// let w2 = worker2.showSalaryWithNewExperience();
			// let w3 = worker3.showSalaryWithNewExperience();	
			// if ((w1 < w2) && (w2 < w3)) { // w1 < w2 < w3
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	}
			// if ((w1 < w2) && (w3 < w2)) { // w1 < w3 < w2
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	}
			// if ((w2 < w1) && (w1 < w3)) { // w2 < w1 < w3
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	}
			// if ((w2 < w3) && (w3 < w1))  { // w2 < w3 < w1
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	}
			// if ((w3 < w1) && (w1 < w2))  { // w3 < w1 < w2
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	}
			// if ((w3 < w1) && (w2 < w1))  { // w3 < w2 < w1
			// 	console.log(worker3.fullName + " salary : " + w3);
			// 	console.log(worker2.fullName + " salary : " + w2);
			// 	console.log(worker1.fullName + " salary : " + w1);
			// 	}

//---- Task 4 ---- //
		console.log("Task 4");

		class Person{
			constructor (name, surname){
				this.firstName = name;
				this.secondName = surname;
			}
			showFullName(){							//метод повертає ім'я та прізвище
					return this.firstName + " " + this.secondName;
			}
		}
		
				let hobbit = new Person("Frodo","Baggins");
				console.log(hobbit) 
				console.log("Hobbit :" + hobbit.showFullName());

		class Student extends Person{
			constructor(name,surname,year){
				super (name,surname);			//Отримуєм доступ до параметрів Person
				this.year = year;				//Рік втупу до ВУЗ
			}
			showFullName(midleName){			// Додаєм по батькові
				return this.firstName +  " " + midleName + " " + this.secondName;
			}
			showCourse(){						// Визначаємо поточний курс студента
				let curretYear = new Date();
				return curretYear.getFullYear() - this.year;
			}
		}

			let stud1 = new Student("Piter", "Pen", 2017);
			console.log("Student : " + stud1.showFullName("Pencil"));
			console.log("Current course: " + stud1.showCourse()); //Current course: 3

//---- Task 5 ----//
		console.log("Task 5");
		const PI = 3.14;

		class GeometricFigure {

				getArea() {
					return 0;
				}
				toString() {
	     			return Object.getPrototypeOf(this).constructor.name;
				}
	     }

				class Triangle extends GeometricFigure{

					constructor(a,b,c){
						super ()
						this.side_a = a;
						this.side_b = b;
						this.side_c = c;
					}

					getArea(side_a,side_b,side_c){	// Рахуєм площу трикутника за трьома сторонами
						let p = (side_a + side_b + side_c)/2; // Півпериметр
						let areaTriangle = (p * (p - side_a) * (p - side_b) * (p - side_c))**(1/2);
						return areaTriangle;
					}
				}

			    class Square extends GeometricFigure{

			    	constructor(figures){
						super (figures);
						this.squareSide = figures;
					}

			     	getArea(squareSide) {		// Рахуєм і повертаєм площу квадрата
			     		let areaSquare = squareSide*squareSide;
			     		return areaSquare;
			     	}
			    }

				class Circle extends GeometricFigure{

					constructor(figures){
						super (figures);
						this.radius = figures;
					}

					getArea(radius){			//Рахуєм і повертаєм площу круга
						let  areaCircle = PI * radius * radius;
						return areaCircle;
					}
				}


			    function handleFigures(figures){
	 			
	 			// Обробка об'єкту трикутник triangle

			    	let triangleZ = new Triangle();
			    	let side_a = Object.values(figures[0])[0];
					let side_b = Object.values(figures[0])[1];
					let side_c = Object.values(figures[0])[2];
					let triangleZArea = triangleZ.getArea(side_a,side_b,side_c);
			    	console.log("Geometric figure: Triangle - area: " + triangleZArea)

				// Обробка об'єкту квадрат square

						let squareZ = new Square();	 
				    	//console.log(figures[1]);					// Контрольна точка
				    	//console.log(Object.values(figures[1]));	// Контрольна точка
				    	let sideZ = Object.values(figures[1])[0]; 	// sideZ (аргумет площі квадрата) = першому [0] елементу МАСИВА значень обєкта squareZ (можне не писати індекс масива)
				    	//console.log(sideZ); 						// Контрольна точка
				    	//console.log(squareZ.getArea(sideZ));		// Контрольна точка
				    	let squareZArea = squareZ.getArea(sideZ); 	// Площа квадрата
				    	console.log("Geometric figure: Square - area: " + squareZArea);

				// Обробка об'єкту круг circle

			    	let circleZ = new Circle(); 
			    	let radiusZ = Object.values(figures[2]);
			    	let circleZArea = circleZ.getArea(radiusZ);
			    	console.log("Geometric figure: Circle - area: " + circleZArea);
				
					console.log("Total area : " 
						+ (triangleZ.getArea(side_a,side_b,side_c) 
						+ squareZ.getArea(sideZ) 
						+ circleZ.getArea(radiusZ))); //Сумарна площа
			     	
						//console.log(figures); // вихідні дані для перевірки
			     	return;
			    }

			    // Ручний режим обчислення площі відповідного об'єкта-фігури
					    let square1 = new Square();
					    console.log(square1.getArea(5));
					    console.log(square1.toString());

					    let triangle1 = new Triangle();
					    console.log(triangle1.getArea(4,5,3));
					    console.log(triangle1.toString());

					    let circle1 = new Circle();
					    console.log(circle1.getArea(10));
					    console.log(circle1.toString());

					    console.log(square1 instanceof Square); // Перевірка спадковості об'єкта
	    				console.log(triangle1 instanceof Triangle);
	   					console.log(circle1 instanceof Circle);

					    console.log("P A U S E ... ");

				// Ружим функції handleFigures

				console.log("Polymorph function method");
				console.log("const figures = [ new Triangle(5,3,4), new Square(20), new Circle(15)]");
				console.log("handleFigures(figures);");

			    const figures = [ new Triangle(5,3,4), new Square(20), new Circle(15)];
			    handleFigures(figures);
		
			    
