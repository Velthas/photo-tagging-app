
# <img src="hhttps://cdn-icons-png.flaticon.com/512/5764/5764648.png" height="100px" width="100px"> </img>Tag Em All  <img src="https://cdn-icons-png.flaticon.com/512/5764/5764648.png" height="100px" width="100px"> </img>

**Live at:** https://tag-em-all.web.app/

### Overview

Tag Em All is a photo tagging game. To win, one must identify a set of three characters on a large scale, maze-like poster with hundreds of characters from all corners of pop culture. 

Tag Em All is a full stack project, relying on React to create the front-end and Firebase for the back-end. As per specification, character positions are validated on the server, and a database is used to store users submissions. 
### Functionality
  
When opening the page, the user is redirected to the home page of the project. From here, they will be able to read an introduction detailing the origin of the game, and proceed to level selection by clicking on 'Play' on their level of choice.

Depending on what level they have chosen, a route containing the chosen level will load up and characters to be found will be displayed on top of the screen. To mark a character as found once you have discovered them, click on any point of the picture to display a dropdown menu with the options, then click on the option of the character you have found. If the location is right, the character will be grayed out and not appear on the dropdown list anymore. 

As you are in the process of finding characters, your time will be recorded using a timer, displayed near the characters to be found. The timer takes a reference to the current time in ms, and then subtracts that to a new reference calculated every 10 ms.

Once all characters are found, you will be prompted to input your username to store your score into the database. You have three options here:

 - **Submit:** if the username passes validation (done via regex and swear word filter), you can send your score to the database using the submit button. Once you click, you will automatically be moved to the relevant portion of the scoreboard. 
 - **Retry:** if not satisfied with your current score, you can dust off and try again to get a faster time by clicking this option. 
 - **Level Selection:** lastly, if you wish to try other levels aswell, you can click here to go back to the homepage and play the next stage!

### Technologies

 - HTML, CSS, JavaScript
 - React
 - React Router Dom
 - Styled Components
 - PropTypes
 - Firebase (Hosting/Firestore)
 - Profanity (JavaScript Swear Word Filter)

### Credits
**Fonts Used:** 
 - **Blender Pro Bold**: Nik Thoenen

**Images:**

 - **Level Posters**: all level posters are drawn from [Egor Klyuchnyk](https://www.artstation.com/chekavo) 
 - **Pixel Art**: from miscellaneous artists, sadly could not keep tab.
 - **Black and Yellow Separators/Button Background**: CD Projekt RED (Cyberpunk 2077 Website)
 - **README Icon**: SmashIcon - FlatIcon

### Sabbo Memorial
You should know that whenever I am done developing things, I always ask my friends to give the project a whirl and see if they can find any bugs. 

Before implementing the regex to check names, I had some lightweight checks for length and swear words, but 'side from that, pretty much anything would pass. Little did I know one of them thought some flames would really let my project shine. 

I will have since deleted these entries, but I'll store an image here as a keepsake for my future self.
![Sabbo's Work](https://i.imgur.com/zfUVZoR.png)

