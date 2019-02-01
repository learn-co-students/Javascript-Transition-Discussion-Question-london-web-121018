// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}

const saveLincolnButton = document.querySelector('#save_lincoln');

saveLincolnButton.addEventListener('click', event => {
  saveLincoln(parseInt($('#interval').val()));
})
