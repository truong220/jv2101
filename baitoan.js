// const numbers=[10,3,-7,9,100,3,-21,0,33];
// console.log(numbers)
// // tim phan tu nho nhat va lon nhat
// let min=numbers[0];
// let max=numbers[0];
// for(let number of numbers){
//     if(number<min){
//         min=number;
//     }
//     if(number>max){
//         max=number;
//     }
// }console.log('max = ',max);
// console.log('min = ',min);
// //tinh tong 
// let sum=0;
// for (let number of numbers){
//     sum=sum+number;
// }console.log('sum : ',sum);
// // tinh trung binh cong 
// const avg=sum/numbers.length
// // Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
// // for (let number of numbers) {
// // 	if (number % 3 === 0) {
// // 		console.log('Phần tử đầu tiên chia hết cho 3 là: ', number);
// // 		break;
// // 	}
// // }

// // Tìm các phần tử là số nguyên tố trong mảng.
// for (let number of numbers) {
// 	console.log(number);
// 	// Kiểm tra xem có số nguyên tố không
// 	let count = 0;
// 	for (let i = 1; i <= number; i++) {
// 		if (number % i === 0) {
// 			count = count + 1;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number, ' là số nguyên tố');
// 	}
// }