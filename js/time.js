window.startTime = (new Date).getTime();
window.addEventListener('load', function () {
    let par = document.getElementById('timeLoading');
    par.innerHTML = (((new Date).getTime() - window.startTime)) + 'ms';
});
