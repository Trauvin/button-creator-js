const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  color(value) {
    this.element.style.color = value;
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  texto(value) {
    this.element.innerText = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  }
}

function handleeChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  // saveValues(name, value);
  showCss()

}

// function saveValues(name, value) {
//   localStorage[name] = value;
// }

// function setValues() {
//   const properties = Object.keys(localStorage);
//   properties.forEach((propertie) => {
//     if (propertie !== 'selected-theme' && propertie !== 'selected-icon') {
//       controles.elements[propertie] = localStorage[propertie];
//     }
//     console.log(propertie)
//   });
// }
 
setValues();

function showCss() {
  cssText.innerHTML ="<span>" + btn.style.cssText.split("; ").join("</span><span>");
}
controles.addEventListener('change', handleeChange);
