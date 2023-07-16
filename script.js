//your JS code here. If required.
function test(){

	return new prom((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}

function updateElement(){
	test().then((data) => {
		let output= document.getElementById("output");
		output.textContent = data ;
	});

}
updateElement();