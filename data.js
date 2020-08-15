function calcWidth(height, width) {
  return (48 * width)/height;   
}
//calcWidth(img5.style.height,img5.style.width).toString().concat('px')


function createItem(text,image_path,links){
	var item = document.createElement('div');
	item.appendChild(document.createTextNode(text));
	if(image_path != "0"){
		item.appendChild(document.createElement('br'));
		var img = document.createElement('img');
		img.src = image_path;
	//INNECESARIO SI GUARDAMOS IMG CONVERTIDAS
	//img.style.width = calcWidth(img.style.height,img.style.width).toString().concat('px');
	//img.style.height = '48px';
	//HASTA ACA
		item.appendChild(img)
	}
	if(links.length > 1){
		for (var i = 0; i < links.length; i++) {
			var a = document.createElement('a');
			a.setAttribute('href',links[i]);
			a.innerHTML = "Trabajo ("+ (i+1).toString() + ")";
			item.appendChild(document.createElement('br'));
			item.appendChild(a);
		}
	}else{
		var a = document.createElement('a');
		a.setAttribute('href',links[i]);
		a.innerHTML = "Trabajo";
		item.appendChild(document.createElement('br'));
		item.appendChild(a);
	}
	return item;
}