import levelOne from '../assets/images/level1.jpg';
import waldo from '../assets/images/level-1/waldo.png'
import glados from '../assets/images/level-1/glados.png'
import irongiant from '../assets/images/level-1/irongiant.png'

const levelImages = [levelOne];
const levelChar = [
  [
  {name: 'Iron Giant', picture: irongiant, x: {min: 31.1, max: 35.23}, y: { min: 40.20, max: 41.70 }, found: false},
  {name: 'Waldo', picture: waldo, x: {min: 6.70, max: 9.30 }, y: { min: 57.58, max: 59.23 }, found: false},
  {name: 'GLaDOS', picture: glados, x: {min: 77.31, max: 84.31 }, y: { min: 63.81, max: 67.00 }, found: false},
  ],
]


export { levelImages, levelChar }
