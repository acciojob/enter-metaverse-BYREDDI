//your JS code here. If required.
function myFunction()
	{
		let btnele=document.getElementById("enterBtn");
		let reqele=btnele.previousElementSibling;
		reqele.remove();
		let h1ele=document.createElement("h1");
		h1ele.innerHTML="Entered Metaverse";
		let bodyele=document.getElementsByTagName("body")[0];
		console.log(bodyele);
		bodyele.insertBefore(h1ele,btnele);
		
	}