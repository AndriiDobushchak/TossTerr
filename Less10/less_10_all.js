// ---- Task 1 ---- //
	// let arr = ["Tom", "Sam", "Ray", "Bob"];
	// let [x,y,,...z] = arr;
	// console.log(x); // "Tom"
	// console.log(y); // "Sam"
	// console.log(z); // [Bob]

// ---- Task 2 ---- //

	// let data = {
	// 	names: ["Sam", "Tom", "Ray", "Bob"],
	// 	ages: [20, 24, 22, 26],
	// };
	// let {names: [name1,name2,name3,name4], ages:[age1,age2,age3,age4]} = data;
	// console.log(name2); // "Tom"
	// console.log(age2); // 24
	// console.log(name4); // "Bob"
	// console.log(age4); // 26
 
// ---- Task 3 ---- //	

	// function mul(...curr) {
	// 	let sum = 0;
	// 	for (tmp of curr) {
	// 		if (typeof(tmp)==="number"){
	// 			sum = sum + tmp;
	// 		}
	// 	} 
	// return sum;
	// }
	// console.log(mul(1, "str", 2, 3, true)); // 6
	// console.log(mul(null, "str", false, true)); // 0

// ---- Task 4 ---- //

	// let server = {
	// 			data: 0,
	// 			convertToString: (callback) => {
	// 				callback( () => {
	// 					return server.data + "";
	// 				});
	// 			}
	// 		};

	// let client = {
	// 		server: server,
	// 		result: "",
	// 		calc:(data_var) => {
	// 			server.data = data_var;
	// 			server.convertToString(client.notification());
	// 			},
	// 		notification: () => {
	// 			return (callback) => {
	// 				client.result = callback();
	// 				}
	// 			}
	// 	};

	// 	client.calc(123);
	// 	console.log(client.result); // "123"
	// 	console.log(typeof client.result); // "string"

// ---- Task 5 ---- //

	// function mapBuilder (keysArray, valuesArrays){
	// 	let map = new Map();
	// 	for (i = 0; i <= keysArray.length - 1; i++) {
	// 		map.set(keysArray[i],valuesArrays[i])
	// 	}
	// 	return map;
	// }

	// let keys = [1, 2, 3, 4];
	// let values = ["div", "span", "b", "i"];
	// let map = mapBuilder(keys, values);
	// console.log(map.size); // 4
	// console.log(map.get(2)); // "span"




	
	
 