function createItem(text,image_path,width_img,links){
	var item = document.createElement('div');
	if(image_path != "0"){
		var img = document.createElement('img');
		//img.style.vertical-align="middle"
		img.style.width = "40px";
		img.style.height = "40px";
		img.src = image_path;
		item.appendChild(img)
		//item.appendChild(document.createElement('br'));
	}
	//item.appendChild(document.createTextNode(text));
	if(links.length > 1){
		for (var i = 0; i < links.length; i++) {
			var a = document.createElement('a');
			a.setAttribute('target',"_parent")
			a.setAttribute('href',links[i]);
			a.innerHTML = "Referencia ("+ (i+1).toString() + ")";
			item.appendChild(document.createElement('br'));
			item.appendChild(a);
		}
	}else{
		var a = document.createElement('a');
		a.setAttribute('target',"_parent")
		a.setAttribute('href',links[0]);
		a.innerHTML = text;
		//item.appendChild(document.createElement('br'));
		item.appendChild(a);
	}
	return item;
}