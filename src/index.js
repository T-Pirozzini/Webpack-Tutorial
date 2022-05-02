import _ from "lodash";
// import myName from './myName';
import './style.css';
import Icon from './spuddy_1.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // use your function!
  // element.textContent = myName('Travis');
  // return element;

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon); 
  
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());