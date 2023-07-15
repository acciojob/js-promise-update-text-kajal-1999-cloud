//your JS code here. If required.
function test(){
	let prom = new prom((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}

function updateElement(){
	test().then((data) => {
		const output= document.getElementById("output");
		output.textContent = data ;
	});
}
updateElement();