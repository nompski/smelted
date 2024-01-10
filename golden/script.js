var styleChars = function () {
	var myText = document.getElementById("myText");
	
	for(var i=0; i<myText.childNodes.length; i++) {
		var toBeStyled = myText.childNodes[i];
		
		if (toBeStyled.className == "styleChars") {
			var chars = toBeStyled.firstChild.nodeValue.split("");
			
			var nodeStr = "";
			for (var j=0; j<chars.length; j++) {
				nodeStr += '<span class="c_' + chars[j] + '">' + chars[j] + '</span>';
			};
			
			toBeStyled.innerHTML = nodeStr;
		}
	};
	
};

window.onload = styleChars;