function fizzbuzz(){
	for (i = 0; i < 100; i = i + 1){
		if(i % 15 == 0){
			console.log("FIZZ BUZZ");
		} else if (i % 3 == 0){
			console.log("FIZZ");
		} else if (i % 5 == 0){
			console.log("BUZZ");
		} else {
			console.log(i);
		}
	}
}