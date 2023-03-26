// JavaScript code
function search_event() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('event');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

const event = [
	{
		title: "Raj and DK Filmmaking workshop"	
	},
	{
		title: "Karoke and silent disco"	
	},
	{
		title: "Mood indigo got talent"	
	},
	{
		title: "Salsa and garba workshop"
	},
	{
		title: "Chereonite"
	},
	{
		title
	}
]
setTimeout(() => {
	for (let i=0;i< event.lenth;i++){
		addEvent(event[i])
	}
},0);
