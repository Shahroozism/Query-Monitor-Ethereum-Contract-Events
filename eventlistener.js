contract.events.allEvents()
.on('data', (event) => {
	console.log(event);
});
.on('error', console.error);