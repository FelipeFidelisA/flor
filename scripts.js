onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  var moveButton = document.querySelector("button:nth-child(2)");
  var correctlyButton = document.querySelector("button:first-child");
  
  moveButton.addEventListener("click", function () {
    var maxVertical = window.innerWidth - moveButton.offsetWidth;
    var maxHorizontal = window.innerHeight - moveButton.offsetHeight;
    
    var vertical = Math.floor(Math.random() * maxVertical);
    var horizontal = Math.floor(Math.random() * maxHorizontal);
    
    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
  });
  
  correctlyButton.addEventListener("click", function () {
    alert("Resposta correta! Vamo comer um empadão");
  });