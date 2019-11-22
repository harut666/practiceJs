let btn1,btn2,btn3,modal;

btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('#btn2');
btn3 = document.querySelector('#btn3');

modal = document.querySelector('.modal');

btn1.onclick = show;
btn2.onclick = hide;
btn3.onclick = border;

hide();
function show() {
	modal.hidden = false;
}
function hide() {
	modal.hidden =true;
}
function border(){
	modal.style.border = '15px solid green';
	modal.style.borderRadius='20px';
}
