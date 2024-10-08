// Your code here
const DODGER = document.getElementById('dodger');
function moveDodgerLeft() {
    const leftNumbers = DODGER.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      DODGER.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const leftNumbers = DODGER.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left <180) {
        DODGER.style.left = `${left + 1}px`;
      }
  }