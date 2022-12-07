import firstLevelImg from '../assets/images/level-1/level1.jpg';
import waldo from '../assets/images/level-1/waldo.png';
import glados from '../assets/images/level-1/glados.png';
import irongiant from '../assets/images/level-1/irongiant.png';

import secondLevelImg from '../assets/images/level-2/level2.jpg';
import edward from '../assets/images/level-2/edward.png';
import ryuk from '../assets/images/level-2/ryuk.png';
import vash from '../assets/images/level-2/vash.png';

import thirdLevelImg from '../assets/images/level-3/level3.jpg';
import denji from '../assets/images/level-3/denji.png';
import ladyd from '../assets/images/level-3/ladyd.png';
import biomachine from '../assets/images/level-3/biomachine.png';

import fourthLevelImg from '../assets/images/level-4/level4.jpg';
import chief from '../assets/images/level-4/masterchief.png';
import claptrap from '../assets/images/level-4/claptrap.png';
import cuphead from '../assets/images/level-4/cuphead.png';

const Level = (pname, pdescr, pchars, pimg) => {
  const name = pname;
  const descr = pdescr;
  const chars = pchars;
  const img = pimg;

  const methods = {
    getName: () => name.slice(),
    getDescr: () => descr.slice(), 
    getChars: () => chars.concat([]).map(char => {return {...char}}),
    getImg: () => img.slice(),
  } // these deep copy the data

  const level = Object.create(methods);
  return level;
}

const levelData = (() => {
  // Level 1
  const firstLevelName = "Universe 113";
  const firstLevelDescr = "When you got your ticket for Universe 113 you thought you had finally put your life on the right path. Shame those travel officers did not care enough to mention the horrors that inhabit its depths, right? Ah, no worries, did you have better plans anyway?";
  const firstLevelChars = [
    {name: 'Iron Giant', picture: irongiant, x: {min: 31.1, max: 35.23}, y: { min: 40.20, max: 41.70 }, found: false},
    {name: 'Waldo', picture: waldo, x: {min: 6.70, max: 9.30 }, y: { min: 57.58, max: 59.23 }, found: false},
    {name: 'GLaDOS', picture: glados, x: {min: 77.31, max: 84.31 }, y: { min: 63.81, max: 67.00 }, found: false},
  ];
  const firstLevel = Level(firstLevelName, firstLevelDescr, firstLevelChars, firstLevelImg);

  // Level 2
  const secondLevelName = "The Loc Nar";
  const secondLevelDescr = "Welcome to Loc Nar, an extraordinary cyberpunk city bustling with life, and of course, violence. Like for any city worth its salt, it's amazing verticality reflects the heights one can soar to, or crash down from. For you, what will it be?";
  const secondLevelChars = [
    {name: 'Edward', picture: edward, x: {min: 57.60, max: 61.40}, y: { min: 90.90, max: 91.70 }, found: false},
    {name: 'Ryuk', picture: ryuk, x: {min: 15, max: 20 }, y: { min: 45.30, max: 47.30 }, found: false},
    {name: 'Vash', picture: vash, x: {min: 1, max: 5.2 }, y: { min: 93.40, max: 95.30 }, found: false},
];
const secondLevel = Level(secondLevelName, secondLevelDescr, secondLevelChars, secondLevelImg);

  // Level 3
  const thirdLevelName = "Robocity";
  const thirdLevelDescr = "After years of exploitation and abuse, it comes as no surprise that the machine would create a safe haven to protect their own. Depending on how desentisized you are, you might find 'safe' is a bit of a stretch for this metal maze, but you'll want to leave feelings at the door for this one. ";
  const thirdLevelChars = [
    {name: 'Denji', picture: denji, x: {min: 65.60, max: 69.15}, y: { min: 62, max: 66.70 }, found: false},
    {name: 'Lady D', picture: ladyd, x: {min: 68.50, max: 74 }, y: { min: 32.15, max: 37.26 }, found: false},
    {name: 'Biomachine', picture: biomachine, x: {min: 13.00, max: 15.20 }, y: { min: 59, max: 61.40 }, found: false},
  ];
  const thirdLevel = Level(thirdLevelName, thirdLevelDescr, thirdLevelChars, thirdLevelImg);

  // Level 4
  const fourthLevelName = "Space Battle";
  const fourthLevelDescr = "This is it. You can't believe you avoided eating the last cheeto off the XL bag you bought yesterday. To think you had even almost seriously thought about getting a gym membership! Oh well, might as well roll with the lasers.";
  const fourthLevelChars = [
    {name: 'Master Chief', picture: chief, x: {min: 5.70, max: 8.90}, y: { min: 54.53, max: 58.13 }, found: false},
    {name: 'Claptrap', picture: claptrap, x: {min: 24, max: 28.30 }, y: { min: 76.27, max: 79.30 }, found: false},
    {name: 'Cuphead', picture: cuphead, x: {min: 50.67, max: 53.51 }, y: { min: 55.64, max: 57.76 }, found: false},
  ];
  const fourthLevel = Level(fourthLevelName, fourthLevelDescr, fourthLevelChars, fourthLevelImg);

  const levels = [firstLevel, secondLevel, thirdLevel, fourthLevel]

  const getLevelName = (level) => levels[level].getName();
  const getLevelDescr = (level) => levels[level].getDescr();
  const getLevelPicture = (level) => levels[level].getImg();
  const getLevelCharacters = (level) => levels[level].getChars();
  const getAll = () => { return levels }

  return {getLevelName, getLevelDescr, getLevelPicture, getLevelCharacters, getAll}
})();

export default levelData;
