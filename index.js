function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  
  function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }
  