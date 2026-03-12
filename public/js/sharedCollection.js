let klick = document.querySelector('.button-small');
function displayDialogBox() {
  console.log('Hej');
}
if (klick) {
  klick.addEventListener('click', displayDialogBox);
} else {
  console.error('kunde inte hitta knappen');
}
