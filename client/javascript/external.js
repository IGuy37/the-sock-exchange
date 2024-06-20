let currentPage = 1;

function updateHTML(socks) {
	console.log(socks);
	document.getElementById("data").innerHTML=""; //Clear table before adding new data
	for (const sock of socks) {
		let sockRow = document.createElement('tr');
		let sockDetail = sock["sockDetails"];
		console.log(sockDetail);
		for(sockProperty in sockDetail){
			sockRow.innerHTML += `<td>${sockDetail[sockProperty]}</td>`
		}
		document.getElementById('data').appendChild(sockRow);
	}
}

async function getData(potentialPage = 1) {
    // Use fetch to retrieve data over the network from an API endpoint
	const url = `https://ecs.the-sock-exchange.com/api/socks/${potentialPage}/10`
	console.log(url);
	const socks = await fetch(url)
							.then(res => res.json())
							.catch((error) => {
								alert("An error has occured whilst retrieving the data.");
								console.log(error);
							});
	if(!socks) return;
	if(socks.length === 0){
		alert("No more data!")
		getData();
		return;
	} else {
		currentPage = potentialPage;	
		updateHTML(socks);  // Update HTML after data is fetched
	}
	document.getElementById("pageNumber").innerHTML=`<h3>You are on page ${currentPage}</h3>`;	
};

function changePage(deltaPages) {
	const potentialPage = currentPage + deltaPages;
	getData(potentialPage);
}



// Call the function to fetch and update data
getData();

