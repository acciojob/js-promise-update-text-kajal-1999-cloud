//your JS code here. If required.
function test(){
	let prom = new prom((resolve) => {
		setTimeOut(() => {
			resolve("hello world");
		}, 1000)
	});

	promise.then((data) => {
		let output = document.getElementById("output");
		output.textContent = data ;
	})
}