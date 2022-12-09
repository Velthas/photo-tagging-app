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
    getChars: () => chars.concat([]).map((char) => ({ ...char })),
    getImg: () => img.slice(),
  }; // these deep copy the data

  const level = Object.create(methods);
  return level;
};

const levelData = (() => {
  // Level 1
  const firstLevelName = 'Universe 113';
  const firstLevelDescr = 'When you got your ticket for Universe 113 you thought you had finally put your life on the right path. Shame those travel officers did not care enough to mention the horrors that inhabit its depths, right? Ah, no worries, did you have better plans anyway?';
  const firstLevelChars = [
    { name: 'Iron Giant', picture: irongiant, found: false },
    { name: 'Waldo', picture: waldo, found: false },
    { name: 'GLaDOS', picture: glados, found: false },
  ];
  const firstLevel = Level(firstLevelName, firstLevelDescr, firstLevelChars, firstLevelImg);

  // Level 2
  const secondLevelName = 'The Loc Nar';
  const secondLevelDescr = "Welcome to Loc Nar, an extraordinary cyberpunk city bustling with life, and of course, violence. Like for any city worth its salt, it's amazing verticality reflects the heights one can soar to, or crash down from. For you, what will it be?";
  const secondLevelChars = [
    { name: 'Edward', picture: edward, found: false },
    { name: 'Ryuk', picture: ryuk, found: false },
    { name: 'Vash', picture: vash, found: false },
  ];
  const secondLevel = Level(secondLevelName, secondLevelDescr, secondLevelChars, secondLevelImg);

  // Level 3
  const thirdLevelName = 'Robocity';
  const thirdLevelDescr = "After years of exploitation and abuse, it comes as no surprise that the machine would create a safe haven to protect their own. Depending on how desentisized you are, you might find 'safe' is a bit of a stretch for this metal maze, but you'll want to leave feelings at the door for this one. ";
  const thirdLevelChars = [
    { name: 'Denji', picture: denji, found: false },
    { name: 'Lady D', picture: ladyd, found: false },
    { name: 'Biomachine', picture: biomachine, found: false },
  ];
  const thirdLevel = Level(thirdLevelName, thirdLevelDescr, thirdLevelChars, thirdLevelImg);

  // Level 4
  const fourthLevelName = 'Space Battle';
  const fourthLevelDescr = "This is really it. You can't believe you avoided eating the last cheeto off the XL bag you bought yesterday. To think you had even almost seriously thought about getting a gym membership! Oh well, might as well roll with the lasers, unless you plan on becoming space mush, that is.";
  const fourthLevelChars = [
    { name: 'Master Chief', picture: chief, found: false },
    { name: 'Claptrap', picture: claptrap, found: false },
    { name: 'Cuphead', picture: cuphead, found: false },
  ];
  const fourthLevel = Level(fourthLevelName, fourthLevelDescr, fourthLevelChars, fourthLevelImg);

  const levels = [firstLevel, secondLevel, thirdLevel, fourthLevel];

  const getLevelName = (level) => levels[level].getName();
  const getLevelDescr = (level) => levels[level].getDescr();
  const getLevelPicture = (level) => levels[level].getImg();
  const getLevelCharacters = (level) => levels[level].getChars();
  const getAll = () => levels;

  return {
    getLevelName, getLevelDescr, getLevelPicture, getLevelCharacters, getAll,
  };
})();

export default levelData;
