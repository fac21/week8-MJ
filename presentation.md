# Project Week 8

## "Interactive game-like thing"

Jo and Mariya

---

## Concept

---

<!-- This week, we discovered about VS Code's collaboration tool, *Live Share*. When sharing an editor in a collaboration session for the first time, I exclaimed "there's a ghost in my code!". And thus the project's idea was born! :baby_chick:  -->

"There's a ghost in my code!"

![](https://i.imgur.com/7FsTZcG.png)

---

Inspired by that 1980 classic arcade game, Pac-Man, this is…

---

###  :ghost: VS Code Live *Scare* !! :ghost: 

---

## Initial Design - Figma
![](https://i.imgur.com/To6jRBR.png)

---

![](https://i.imgur.com/VgXOOkd.png)

---

## Project Features

- Query Github API
- Animated Ghosts 
- Score - form of persistent state
- Deployed to Netlify
- Changed the Domain name
- Favicon

---

## Project Board

https://github.com/fac21/week8-MJ/projects/2

---

<div style="font-size: 2.5rem;">

| Story | Estimate | Actual |
| --- | --- | --- |
| Persistent state/interactivity | 2 | 2 |
| CSS| 2 | 2 |
| Static assets | 2 | 1 |
| Design | 2 | 1 |
| Server setup | 2 | 1 |
| Code outline | 2 | 1 |
| Deploy on Netlify | 2 | 2 |
| Accept user input | 2 | 3 |
| Use API data in UI | 2 | 3 |
| Query API | 2 | 3 |
| --- | --- | --- |
| TOTAL | 20 | 18 |

</div>

---

## Demo

<!-- Pick a voluntare -->

Our deployed site: [boo-lean-said-the-ghost.netlify.app](https://boo-lean-said-the-ghost.netlify.app)

---

<div style="font-size: 3rem;">


## What We Learned

- **REACT!**
    - Game states
    - Passing props around
- **FIGMA**
    - Thank you @Ephie!! :star:
        - Wire framing
        - Exporting SVGs
        - Iconify plug-in
- Glow CSS
    - Thank you @Shaya!! :star:
    - ![](https://i.imgur.com/dCML5H6.png)

</div>

---

## Challenges

---
- Knowing how to start...
![](https://media.giphy.com/media/MB6mmz21wDPZc2827I/giphy.gif)

---

- Internet issues :computer: :broken_heart: 
- Absences:
    - Mariya - 3.30-4pm
    - Jo - 3.00 - 3.30pm

---

## Deployment challenges

- Nested folders were a problem!
    - We added:
        - `npm run build` to the build command field
        - `dist` to the publish directory field
        - `./mj-app` to the base directory field

---

![netlify settings](https://i.imgur.com/tfwtE56.png)

---

## Specific Code Challenges

- Incrementing the score (we needed to pass a function to setScore)

![](https://i.imgur.com/ksKJ4bb.png)

**NOT**

![](https://i.imgur.com/G9J9vxE.png)

---

## Specific Code Challenges

- Keeping track of score state during the game
    - This is needed, to move the game to end-game state.

`console.log(gameState)`

`console.log(props.currentScore, numberNeededToWin)`

---

![](https://i.imgur.com/mVhT80D.png)

---

![I quit](https://media.giphy.com/media/RUvOXSFXVMFe8/giphy.gif)

---

## Stretch Goals

- Glow for ghosts
- Make end game screen work
- Different levels for ghost difficulty
- Refactor to make React-y

---

![so fun](https://media.giphy.com/media/xT0BKiK5sOCVdBUhiM/giphy.gif)

---


# THANKS!!
