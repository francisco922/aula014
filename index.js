//IEEE 754-2008.
let num1 = 0.7;
let num2 = 0.1;

//num1 += num2;// 0.8
//num1 += num2;// 0.9
//num1 +=num2; // 1.0
//num1 = ((num1 * 100 )+ (num2 * 100)) / 100 ;//0.8
//num1 = ((num1 * 100 )+ (num2 * 100)) / 100 ;// 0.9
//num1 = ((num1 * 100 )+ (num2 * 100)) / 100 ;//1,0
num1 = Number(num1.toFixed(2))

/*num1 += num2;// 1.1
num1 += num2;// 1.2
num1 += num2;//1.3
num1 += num2;//1.4
num1 += num2;//1.5
num1 += num2;//1.6
num1 += num2;//1.7
num1 += num2;//1.8
num1 += num2;// 1.9
num1 += num2;//2.0*/


num1=parseFloat(num1.toFixed(2));
//ou pode usar:num1 = parseFloat(num1.tofixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1);
//console.log(num2);
//console.log(num1 + num2);


//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); // REPRESENTAÇÃO BINARIA DO NUMERO.
//console.log(num1.toFixed(2)); // ARREDONDAMENTO EM CASAS DECIMAIS.
//console.log(Number.isInteger(num1))//RETORNA SE INTEIRO OU NÃO.
//let temp = num1 * 'ola';
//console.log(Number.isNaN(temp));



