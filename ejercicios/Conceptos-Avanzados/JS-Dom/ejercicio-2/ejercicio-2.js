// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement('div');
document.body.appendChild(div1);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div');
const p1 = document.createElement('p');
div2.appendChild(p1);
document.body.appendChild(div2);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement('div');
for (let i = 0; i < 6; i++){
    div3.appendChild(document.createElement('p'));
}
document.body.appendChild(div3);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p2 = document.createElement('p');
const p2Text = document.createTextNode("Soy dinámico!");
p2.appendChild(p2Text)
document.body.appendChild(p2);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector(".fn-insert-here").innerText = 'Wubba Lubba dub dub';
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const list = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    list.appendChild(document.createElement('li')).innerText = apps[i];
}
document.body.appendChild(list)
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const toRemove = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < toRemove.length; i++) {
    document.body.removeChild(toRemove[i])   
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div.fn-insert-here')
const p3 = document.createElement('p');
const p3Text = document.createTextNode("Voy en medio!");
p3.appendChild(p3Text);
document.body.insertBefore(p3,divs[1])
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
for (let i = 0; i < divs.length; i++) {
    divs[i].appendChild(document.createElement('p')).innerText = ("Voy dentro!")
}