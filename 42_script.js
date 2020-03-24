//*** printReverse() ***

function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1, 2, 3, 4]);

//*** isUniform() ***
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}

//*** sumArray() ***
function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

//*** max() ***
function max(arr) {
	arr.forEach(function(element) {
		return Math.max(arr);
	});
}

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}


//-----------PASS A FUNCTION TO AN ARGUMENT / AS AN ARGUMENT---------------------------------------------------
function soma(a,b) {
	return a +b;
}

function subtrai(a,b) {
	return a -b;
}

function multiplica(a,b) {
	return a*b;
}


function chamaFun(funn, a , b){
	console.log("Chamando funcao " + funn);
	var resultado = funn(a,b);
	resutado = resultado + 10;	
	console.log(resultado);
}

// chamaFun(soma);


// console.log("Chamando funcao" + soma);
// var res = soma(4,5);
// res = res + 10;
// console.log(res);


chamaFun(soma, 5,6);

// console.log("Chamando funcao" + subtrai);
// console.log(subtrai(4,5));



chamaFun(subtrai, 7, 9);


// console.log("Chamando funcao" + subtrai);
// console.log(subtrai(4,5));
chamaFun();


// console.log("Chamando funcao" + multiplica);
// console.log(multiplica(4,5));
chamaFun(multiplica);

// console.log("Chamando funcao" + soma);
// console.log(soma(4,5));
chamaFun(soma);

// console.log("Chamando funcao" + subtrai);
// console.log(subtrai(4,5));
chamaFun(subtrai);

// console.log("Chamando funcao" + multiplica);
// console.log(multiplica(4,5));
chamaFun(multiplica);



