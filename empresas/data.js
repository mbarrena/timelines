var alllinks = new Map();
var linklist = [];

function checkImage(imageSrc, width_img) {
    var img = new Image();
    img.onload = function(){ console.debug(`Loaded image ${imageSrc}`); }; 
    img.onerror = function(){ console.error(`Could not load image in path ${imageSrc}`); }; 
    img.style.width = (width_img).toString()+"px";
	img.style.height = "48px";
	img.src = imageSrc;
	return img
}

function createItem(text,image_path,width_img,links){
	var item = document.createElement('div');
	if(image_path != "0"){
		/* DELETE IF NEW CODE WORKS
		var img = document.createElement('img');
		img.style.width = (width_img).toString()+"px";
		img.style.height = "48px";
		img.src = image_path;
		*/
		var img = checkImage(image_path, width_img);
		item.appendChild(img);
		//item.appendChild(document.createElement('br'));
	}
	//item.appendChild(document.createTextNode(text));
	if(links.length > 1){
		for (var i = 0; i < links.length; i++) {
			var a = document.createElement('a');
			a.setAttribute('target',"_parent")
			a.setAttribute('href',links[i]);
			a.innerHTML = "Trabajo ("+ (i+1).toString() + ")";
			if (i==0) { a.innerHTML = text; }
			item.appendChild(document.createElement('br'));
			item.appendChild(a);
		}
	}else{
		var a = document.createElement('a');
		a.setAttribute('target',"_parent")
		a.setAttribute('href',links[0]);
		a.innerHTML = text;
		item.appendChild(document.createElement('br'));
		item.appendChild(a);
	}

	alllinks.set(text,links);
	linklist = linklist.concat(links);
	console.debug(`Link list for ${text}: ${linklist}`);

	return item;
}