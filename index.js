btn = document.getElementById("btn");
backgr = document.getElementById("background");
h1Text = document.getElementById("h1-text");
h3Text = document.getElementById("h3-text");

//btn.addEventListener("click", () => (backgr.style.background = "yellow"));
function random_bg_color() {
  //   var x = Math.floor(Math.random() * 256);
  //   var y = Math.floor(Math.random() * 256);
  //   var z = Math.floor(Math.random() * 256);
  //   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  //   console.log(bgColor);

  let color = ["red", "green", "blue", "yellow", "lightblue", "blue", "grey"];

  let colorFinal = Math.floor(Math.random() * color.length);

  let colorElegido = color[colorFinal];

  console.log(colorElegido);
  if (colorElegido == "yellow") {
    backgr.style.background = colorElegido;
    h1Text.style.color = "red";
    h3Text.style.color = "red";
  } else if (colorElegido == "lightblue") {
    h1Text.style.color = "red";
    h3Text.style.color = "red";
    backgr.style.background = colorElegido;
  } else if (colorElegido == "grey") {
    h1Text.style.color = "darkorange";
    h3Text.style.color = "darkorange";
    backgr.style.background = colorElegido;
  } else {
    h1Text.style.color = "white";
    h3Text.style.color = "white";
    backgr.style.background = colorElegido;
  }
}

random_bg_color();

btn.addEventListener("click", () => random_bg_color());
// let ver = typeof colorElegido;
// let ver2 = typeof "colorElegido";

// console.log(ver);
