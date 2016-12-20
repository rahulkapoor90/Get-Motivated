'use strict';

var nicePhrases = [
  "As long as you think your past is bad you must be improving.",
  "Some people are crushed by misfortune, Others grow because of it.",
  "Bad day, not a bad life. There is always some good in a bad day.",
  "Don't cling to a mistake just because you spent a lot of time making it.",
  "If you can survive disappointment then nothing can beat you.",
  "A river cuts through rock, not because of its power, but because of its persistence.",
  "Work Hard in silence, let Success be your NOISE",
  "You will never lose. You will either win or learn.",
  "You know, sometimes all you need is 20 seconds of insane courage.",
  "Everything will be okay in the end. If it's not okay. it's not the end.",
  "these mountains that you are carrying, you were only supposed to climb.",
  "Work until you no longer have to Introduce Yourself",
  "The less you respond to negative people, the more peaceful your life will become.",
  "If we wait untill we're ready, we'll be waiting for the rest of our lives.",
  "If you get tired learn to rest, not to QUIT.",
  "If there is no wind, row.",
  "The World is against you. It wouldn't be fair otherwise.",
  "You can fail in life doing the things you hate so you might as well take a chance doing what you love",
  "Take the bricks your enemies throw at you and build a fucking castle.",
  "Do Something that your future self will thank you for",
  "Life is like a photograph you need the negatives to develop",
  "Once you've accepted your flaws, no one can use them against you.",
  "A comfort zone is a beautiful place, but nothing ever grows there.",
  "Sometimes when things are falling apart they may actually be falling into place.",
  "The bad news is time flies. The good news is you're the pilot.",
  "Your future self is watching you right now through your memories.",
  "Listen. I wish i could tell you it gets better. But, it doesn't get better. You get Better.",
  "You did not wake up today to be mediocre",
  "We cannot become what we need to be by remaining what we are.",
  "No such thing as free time. All you got is life time. Go.",
  "There is no elevator to success. You have to take the stairs.",
  "Some people die at 25 and aren't buried until 75.",
  "The trouble with most of us is that we would rather be ruined by praise than saved by criticism.",
  "The trouble is, you think you have time - Buddha",
  "Eight Per Cent of success is showing up.",
  "The greatest pleasure in life is doing what people say you cannot do.",
  "They tried to bury us. They didn't know we were seeds.",
  "I've had a lot of worries in my life, most of which never happened",
  "Listen, smile, agree, and then do whatever the fuck you were gonna do anyway.",
  "If it's not impossible, there must be a way to do it.",
  "Forgive others not because they deserve forgiveness but because you deserve peace.",
  "Do not believe the things you tell yourself when you are sad and lonely.",
  "Be willing to walk alone. Many who started with you won't finish with you."
];

// Get random phrase
var random = nicePhrases[Math.floor(Math.random() * nicePhrases.length)];
// console.log(random);

document.getElementById("rathernice").textContent = random.toString();
