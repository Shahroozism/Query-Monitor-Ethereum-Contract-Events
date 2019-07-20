contract.events.Transfer()
.on('data', (event) => {
	console.log(event);
});
.on('error', console.error);