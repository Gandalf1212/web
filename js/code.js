  /*timeStart();
  function timeStart() {
    if (document.readyState == "loading"){
      console.log('start');
      console.time();
      document.addEvenListener("DonContetntLoaded", timeStart);
    }
    else {
      console.log('end');
      concole.timeEnd();
    }
  }

  window.onbeforeunload = function() {
    return false;
  }*/

timeCalc()

function timeCalc() {
  console.log(window.performance.timing);
  let a = window.performance.unloadEventEnd;
  console.log(a);
  console.log(window.performance.unloadEventEnd - window.performance.navigationStart);
}
