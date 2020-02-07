// ---- Task 1 ---- //

	console.log("T A S K - 1");
	function upperCase(my_string){
		let my_reg_exp = /^[A-Z]/;
		if (my_reg_exp.test(my_string)){
			console.log("String's starts with uppercase character");
		}
		else {
			console.log("String's not starts with uppercase character");
		}
	}
	upperCase("regexp");
	upperCase("RegExp");
	upperCase("regExp");

// ---- Task 2 ---- //
	
	console.log("T A S K - 2");
	function emailCheck(email){
		let myRegExp = /^\w+@\w+\.\w+/;
		console.log(myRegExp.test(email));
	}

	emailCheck("qwert@qwe.com");
	emailCheck("Qwert@qwe.qwe");
	emailCheck("1qwert@qwe.qwe");
	emailCheck("qwert#qwe.com");
	emailCheck("qwert@qwecom");
	emailCheck("qwert@qwe.com.qwe.net");

// ---- Task 3 ---- //

	console.log("T A S K - 3");
	console.log(/d(b+)(d)/ig.exec("cdbBdbsbz"));

// ---- Task 4 ---- //
	
	console.log("T A S K - 4");
	console.log("Java Script".replace(/(\w+) (\w+)/i, "$2, $1"));

// ---- Task 5 ---- //

	console.log("T A S K - 5");
	function cardNumberValid(cardNumber){
		if (/\d{4}-\d{4}-\d{4}-\d{4}/.test(cardNumber)){console.log("Number is correct.")}
		else{console.log("Number is not correct!")}
	}

	cardNumberValid("1234-1235-1231-1212");
	cardNumberValid("1A34-1234-1234-1234");
	cardNumberValid("1234-12345-1234-123");

// ---- Task 6 ---- //

	console.log("T A S K - 6");
	function checkMail(my_mail){
		let myMailRegExp = /^[A-Za-z0-9]\w+-?\w+@\w+\.\w+/g;
		if (myMailRegExp.test(my_mail)){console.log("Email is correct !");}
			else{console.log("Email is not correct");}
	}

	checkMail("qwert@qwe.qwe");
	checkMail("#qwer@asd.qwe");
	checkMail("_ada@adas.qweq");
	checkMail("asdf-asdf-asd@qawqr.aqdsas");
	checkMail("qwer-qwer@qwe-qwe.dasd");
	checkMail("asdf_qwer-qwe@asd.qwer");

// ---- Task 7 ---- //
	
	console.log("T A S K - 7");
	function loginCheck (login) {
	let loginRegExp = /^[A-Z][a-z0-9\.0-9]{1,7}$/i;
	console.log(loginRegExp.test(login));
	console.log(login.match(/(\d+)\.{0,}\d{0,}/g));
		
	}

	loginCheck("1qwert");
	loginCheck("qwert");
	loginCheck("qwer5qw");
	loginCheck("qwer123456aaa");
	loginCheck("q3e");
	loginCheck("q");
	loginCheck("qwe3.1qw");
	loginCheck("qw1q2.3")




	








