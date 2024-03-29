// la variable items que contiene todos los items a mostrar en la línea de tiempo se encuentra en data.js

// var txtData = document.getElementById('data');
//var btnLoad = document.getElementById('load');
//var btnSave = document.getElementById('save');

// Create an empty DataSet.
// This DataSet is used for two way data binding with the Timeline.
// var items = new vis.DataSet();

// create a handlebars template
var template = Handlebars.templates.template;
// create a timeline
var screenh = window.screen.height*80/100
var container = document.getElementById('visualization');
var options = {
width: '100%',
height: screenh,
minHeight: screenh,
maxHeight: screenh,
margin: {
    item: {
    horizontal: 5,
    vertical: 5
    },
    axis: 20,
},
zoomMin: 63080000000,
template: template,
align:"left"
};

var timeline = new vis.Timeline(container, items, options);
var focus_op = {
animation: false
}

var signoayuda = document.getElementById('signoayuda');

//timeline.setWindow("1","1810");
//signoayuda.addEventListener('onmouseenter',helptext_show,false);
//signoayuda.addEventListener('onmouseleave',helptext_hide,false);
//timeline.focus("pritty");
//timeline.focus(renault_argentina,carrefour,focus_op)
//timeline.focus(id or ids [, options])

//BUSCADOR
function buscador(){
var inputVal = document.getElementById("buscador").value;
inputVal = inputVal.toLowerCase();
inputVal = inputVal.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //sacar tildes
inputVal = inputVal.replace(/ /g,"_");
console.log(inputVal)
if(inputVal!=""){
    var zoomitem = items.getIds({
    filter: function (item) {
        return (item.id.toString().includes(inputVal));
    }
    });
    timeline.focus(zoomitem,{zoom:true}); 
    timeline.setSelection(zoomitem); 
}else{
    timeline.setSelection([]);
}
}

function fadein(elemID){
document.getElementById(elemID).style.opacity="50%";
document.getElementById(elemID).style.display="initial";
setTimeout(() => {
    document.getElementById(elemID).style.opacity="75%";
    setTimeout(() => {
    document.getElementById(elemID).style.opacity="100%";
    }, 25);
}, 25);
}

function fadeout(elemID){
document.getElementById(elemID).style.opacity="75%";
    setTimeout(() => {
    document.getElementById(elemID).style.opacity="50%";
    setTimeout(() => {
        document.getElementById(elemID).style.display="none";
    }, 25);
    }, 25);
}

/*
timeline.on('select', function (properties) {
var copyText = items.get(properties.items)[0].content.toString();
document.getElementById("clipb").value = copyText;
document.getElementById("clipb").select();
document.execCommand('copy');
//alert('Copiado nombre del evento: ' + copyText);
fadein("copytext");
//wait before disappearing text
setTimeout(() => {
    fadeout("copytext");
}, 1500);
});
*/

function helptext_show(){
document.getElementById("helptext").style.display="initial";
}
function helptext_hide(){
document.getElementById("helptext").style.display="none";
}