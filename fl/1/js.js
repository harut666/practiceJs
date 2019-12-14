let btn1,btn2,btn3,btn4,btnRu,btnEng,modal; //сщздание переменных

//присвоение переменным кнопок
btn1   = document.querySelector('#btn1');
btn2   = document.querySelector('#btn2');
btn3   = document.querySelector('#btn3');
btn4   = document.querySelector('#btn4');
btnRu  = document.querySelector('#btnRu');
btnEng = document.querySelector('#btnEng');

modal  = document.querySelector('.modal');
//функция ктороя запускается по нажатию
btn1.onclick   = show;
btn2.onclick   = hide;
btn3.onclick   = border;
btn4.onclick   = closeBorderColor;
btnRu.onclick  = ruWord;
btnEng.onclick = engWord;

hide();//функция скрывающая изначально окно

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
function closeBorderColor() {
	modal.style.border = "";
	modal.style.borderRadius="";
}
function ruWord() {
	var div = document.createElement("div");
	div.innerHTML = "Some text with <b>bold text</b>";


}
function engWord() {

}
