function yes() {
    alert('Yes. You are right <3');
}
function getNumberRandom(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function no() {
   const btnNo = document.getElementById('btn_no');
   const top = getNumberRandom(500,50);
   const left = getNumberRandom(800,50);
   btnNo.style.top = top + 'px';
   btnNo.style.left = left + 'px';
}