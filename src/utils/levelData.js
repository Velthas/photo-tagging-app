import firstLevelImg from '../assets/images/level1.jpg';
import waldo from '../assets/images/level-1/waldo.png';
import glados from '../assets/images/level-1/glados.png';
import irongiant from '../assets/images/level-1/irongiant.png';

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
    {name: 'GLaDOS', picture: glados, x: {min: 77.31, max: 84.31 }, y: { min: 63.81, max: 67.00 }, found: false}
  ];
  const firstLevel = Level(firstLevelName, firstLevelDescr, firstLevelChars, firstLevelImg)

  // Level 2
  const secondLevelName = "The Loc Nar";
  const secondLevelDescr = "Welcome to Loc Nar, an extraordinary cyberpunk city bustling with life, and of course, violence. Like for any city worth its salt, it's amazing verticality reflects the heights one can soar to, or crash down from. For you, what will it be?";
  const secondLevelChars = [];

  const levels = [firstLevel]

  const getLevelName = (level) => levels[level].getName();
  const getLevelDescr = (level) => levels[level].getDescr();
  const getLevelPicture = (level) => levels[level].getImg();
  const getLevelCharacters = (level) => levels[level].getChars();
  const getAll = () => { return levels }

  return {getLevelName, getLevelDescr, getLevelPicture, getLevelCharacters, getAll}
})();


export default levelData;
