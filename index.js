function checkLinkHovering() {
  // For <a>, both methods are working
  const isHovering1 = $('#link').is(':hover');
  const isHovering2 = $('#link:hover').length > 0;
  console.log('Link is hovering:', isHovering1, isHovering2);
}

function checkDivHovering() {
  // For <div>, only method2 is working
  const isHovering1 = $('#div').is(':hover');
  const isHovering2 = $('#div:hover').length > 0;
  console.log('Div is hovering:', isHovering1, isHovering2);
}

$('body').on('click', () => {
  checkLinkHovering();
  checkDivHovering();
});
