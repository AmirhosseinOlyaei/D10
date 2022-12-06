function bold() {
    document.getElementById('textarea1').style.fontWeight='bold'
}
function italic() {
    document.getElementById('textarea1').style.fontStyle='italic'
}
function tal() {
    document.getElementById('textarea1').style.textAlign='left'
}
function tac() {
    document.getElementById('textarea1').style.textAlign='center'
}
function tar() {
    document.getElementById('textarea1').style.textAlign='right'
}
function uppc() {
    document.getElementById('textarea1').style.textTransform='uppercase'
}
function lowc() {
    document.getElementById('textarea1').style.textTransform='lowercase'
}
function cap() {
    document.getElementById('textarea1').style.textTransform='Capitalize'
}
function clr() {
    document.getElementById('textarea1').value='';
    document.getElementById('textarea1').style.fontWeight='normal';
    document.getElementById('textarea1').style.fontWeight='non-italic';
    document.getElementById('textarea1').style.fontstyle='normal';
    document.getElementById('textarea1').style.textAlign='left';
    document.getElementById('textarea1').style.textTransform='initial';
    document.getElementById('textarea1').style.textColor='black';
}
function clean() {
    document.getElementById('textarea1').value='';
}