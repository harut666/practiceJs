let btn1,btn2,modal;

btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('#btn2');

modal = document.querySelector('.modal');

btn1.onclick = show;
btn2.onclick = hide;

function show() {
	modal.hidden = false;
}
function hide() {
	modal.hidden =true;
}
