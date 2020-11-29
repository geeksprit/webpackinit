import _ from 'lodash';
import './style.css';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello3', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me to consolelog!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());