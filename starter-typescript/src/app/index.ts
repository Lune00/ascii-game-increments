import * as _ from 'lodash';
import './styles/style.css';
import Icon from './assets/icon.png';
import sum from './foo'


function component() {
  const element = document.createElement('div');
  
  //Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', ' !', sum(1,2)], ' ');
  element.classList.add('hello')

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
