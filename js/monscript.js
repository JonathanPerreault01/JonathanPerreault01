
$('.grosimg').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({'transform' : 'scale(1.1)'});
}
function returnToOriginalSize() {
    $(this).css({'transform': 'scale(1.0'});
}