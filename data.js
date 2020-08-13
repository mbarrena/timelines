//const jsonString = require('trabajos.json')
//var imported = JSON.parse(require('fs').readFileSync('.\\trabajos.json') + '');
//const fs = require(‘fs’)

function calcWidth(height, width) {
  return (48 * width)/height;   
}
//calcWidth(img5.style.height,img5.style.width).toString().concat('px')


function createItem(text,image_path,links){
	var item = document.createElement('div');
	item.appendChild(document.createTextNode(text));
	item.appendChild(document.createElement('br'));
	var img = document.createElement('img');
	img.src = image_path;
	//BORRAR TODO
	img.style.width = calcWidth(img.style.height,img.style.width).toString().concat('px');
	img.style.height = '48px';
	//HASTA ACA
	item.appendChild(img)
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

/*
var items = [];
const trabajos = JSON.parse(jsonString)
for (var i = 0; i < trabajos.length; i++) {
	var trabajo = trabajos[i];
	items.push(createItem(trabajo.text,trabajo.image_path,trabajo.links));
}

item5 = items[0];
*/
var item5 = createItem("item 5",'./img/swift.jpg',["https://makobot-prod.github.io/timelines/","blabla"])

var items = new vis.DataSet([
{id: 1, content: 'item 1', start: '2014-04-20'},
{id: 2, content: 'item 2', start: '2014-04-14'},
{id: 3, content: 'item 3', start: '2014-04-18'},
{id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
{id: 5, content:  item5  , start: '2014-04-25'},
{id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
]);
