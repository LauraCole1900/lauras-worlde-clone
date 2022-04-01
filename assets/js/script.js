$(function () {

  const wordBank = ["ossia", "masse", "brass", "basie", "stage", "triad", "still", "indie", "notes", "major", "satie", "sotto", "scale", "conga", "faure", "prima", "trill", "bizet", "genre", "piano", "combo", "elgar", "grave", "cover", "dukas", "tenor", "recit", "elvis", "pitch", "liszt", "elton", "pulse", "segue", "march", "dylan", "rondo", "hasse", "baton", "senza", "davis", "stops", "dolce", "drive", "miles", "rests", "sharp", "tozan", "elegy", "mosso", "etude", "lenny", "music", "verdi", "tempo", "bugle", "weber", "beats", "biebl", "snare", "choir", "gould", "parte", "tutti", "moses", "legno", "sarti", "break", "slide", "samba", "forza", "sousa", "stand", "click", "cello", "muddy", "audio", "lento", "aaron", "front", "janis", "tonic", "breve", "glass", "meter", "range", "basso", "holst", "count", "bruce", "motet", "carol", "tasto", "clara", "waltz", "blues", "modal", "rumba", "dolly", "dance", "chant", "ringo", "strum", "chord", "gluck", "chops", "largo", "grieg", "canon", "viola", "clefs", "suite", "pyotr", "remix", "beard", "molto", "forte", "julie", "staff", "tonal", "fosse", "motif", "segno", "ditty", "block", "verse", "haydn", "sopra", "fugue", "corda", "valve", "drone", "sixth", "gliss", "flute", "keith", "shred", "opera", "swing", "quasi", "berry", "banjo", "third", "lyric", "ravel", "reeds", "mezzo", "house", "canto", "track", "duple", "intro", "garth", "altos", "score", "drums", "fifth", "lully", "sitar", "theme", "vocal", "kazoo", "polka", "pedal", "pluck", "tuner", "organ", "louis", "whole", "shake", "neume", "voice", "chuck", "minor", "tacet", "octet", "hogan"];

  const keyboardChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];

  let letterEl;
  let guessEl;
  let word = "";
  const modal = $("#myModal");
  let validate = false;
  let userGuess = {
    guess1: {
      letters: [],
      submit: false,
      idx: 0
    },
    guess2: {
      letters: [],
      submit: false,
      idx: 1
    },
    guess3: {
      letters: [],
      submit: false,
      idx: 2
    },
    guess4: {
      letters: [],
      submit: false,
      idx: 3
    },
    guess5: {
      letters: [],
      submit: false,
      idx: 4
    },
    guess6: {
      letters: [],
      submit: false,
      idx: 5
    }
  };
  const firstGuess = userGuess.guess1;
  const secondGuess = userGuess.guess2;
  const thirdGuess = userGuess.guess3;
  const fourthGuess = userGuess.guess4;
  const fifthGuess = userGuess.guess5;
  const sixthGuess = userGuess.guess6;
  const startDate = new Date("4/1/2022");

  keyboardChar.map((char, i) => {
    letterEl = $("<div>").text(char.toUpperCase()).addClass("letterKey centered").attr("id", char)
    if (i < 10) {
      letterEl.on("click", addLetterCase);
      $("#row1").append(letterEl);
    } else if (i >= 10 && i < 19) {
      letterEl.on("click", addLetterCase)
      $("#row2").append(letterEl);
    } else {
      if (char === "Enter") {
        letterEl.on("click", handleSubmit);
        $("#row3").append(letterEl);
      } else if (char === "Backspace") {
        letterEl.on("click", handleBackspaceCase);
        $("#row3").append(letterEl);
      } else {
        letterEl.on("click", addLetterCase);
        $("#row3").append(letterEl);
      }
    }
  });

  const guessElArr = [$("#firstGuess"), $("#secondGuess"), $("#thirdGuess"), $("#fourthGuess"), $("#fifthGuess"), $("#sixthGuess")];

  guessElArr.forEach((el, i) => {
    for (let j = 0; j < 5; j++) {
      guessEl = $("<div>").addClass("letterGuess centered").attr("id", `el-${i}-${j}`);
      el.append(guessEl);
    }
  });

  function getWord(date) {
    const todayDate = Date.now();
    const timeDiff = todayDate - date.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    word = wordBank.at(dayDiff);
  };

  function addLetter(ltr, guess) {
    guessIdx = guess.letters.length;
    guess.letters.push(ltr);
    $(`#el-${guess.idx}-${guessIdx}`).text(ltr.toUpperCase());
  }

  function addLetterCase(e) {
    if (!["Enter", "Backspace"].includes(e.target.id)) {
      const letter = e.target.id;
      switch (true) {
        case firstGuess.letters.length < 5 && !firstGuess.submit:
          addLetter(letter, firstGuess);
          break;
        case secondGuess.letters.length < 5 && firstGuess.submit && !secondGuess.submit:
          addLetter(letter, secondGuess);
          break;
        case thirdGuess.letters.length < 5 && secondGuess.submit && firstGuess.submit && !thirdGuess.submit:
          addLetter(letter, thirdGuess);
          break;
        case fourthGuess.letters.length < 5 && thirdGuess.submit && secondGuess.submit && firstGuess.submit && !fourthGuess.submit:
          addLetter(letter, fourthGuess);
          break;
        case fifthGuess.letters.length < 5 && fourthGuess.submit && thirdGuess.submit && secondGuess.submit && firstGuess.submit && !fifthGuess.submit:
          addLetter(letter, fifthGuess);
          break;
        case sixthGuess.letters.length < 5 && fifthGuess.submit && fourthGuess.submit && thirdGuess.submit && secondGuess.submit && firstGuess.submit && !sixthGuess.submit:
          addLetter(letter, sixthGuess);
          break;
        default:
          return false;
      }
    }
  };

  function handleBackspace(guess) {
    $(`#el-${guess.idx}-${guess.letters.length - 1}`).text("");
    guess.letters.pop();
  }

  function handleBackspaceCase() {
    switch (true) {
      case !sixthGuess.submit && fifthGuess.submit && sixthGuess.letters.length > 0:
        handleBackspace(sixthGuess);
        break;
      case !fifthGuess.submit && fourthGuess.submit && fifthGuess.letters.length > 0:
        handleBackspace(fifthGuess);
        break;
      case !fourthGuess.submit && thirdGuess.submit && fourthGuess.letters.length > 0:
        handleBackspace(fourthGuess);
        break;
      case !thirdGuess.submit && secondGuess.submit && thirdGuess.letters.length > 0:
        handleBackspace(thirdGuess);
        break;
      case !secondGuess.submit && firstGuess.submit && secondGuess.letters.length > 0:
        handleBackspace(secondGuess);
        break;
      case !firstGuess.submit && firstGuess.letters.length > 0:
        handleBackspace(firstGuess);
        break;
      default:
        return false;
    }
  };

  async function wordFetch(currWord, guess) {
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currWord}`)
      .then(function (response) {
        if (response.ok) {
          validate = true;
          guess.submit = true;
        } else {
          validate = false;
        }
      });
  };

  function notWord(guess) {
    guess.letters = [];
    for (let i = 0; i < 5; i++) {
      $(`#el-${guess.idx}-${i}`).text("");
    }
    const notWordMsg = $("<h2>Word not found. Try again</h2>");
    const okBtn = $("<button type='button' class='btn'>OK</button>")
    okBtn.on("click", closeModal);
    $("#modalContent").append(notWordMsg).append(okBtn);
    modal.css("display", "block");
  };

  function closeModal() {
    $("#modalContent").empty();
    modal.css("display", "none");
  };

  function winGame(guess) {
    for (let i = 0; i < 5; i++) {
      $(`#el-${guess.idx}-${i}`).addClass("positionCorrect");
    }
    let winMsg = "";
    let count = 0;
    for (const key in userGuess) {
      if (userGuess[key].submit) {
        ++count;
      } else {
        userGuess[key].submit = true;
      }
    }
    switch (count) {
      case 1:
        winMsg = $(`<h2>Sublime</h2><p>You won in ${count}</p>`);
        break;
      case 2:
        winMsg = $(`<h2>You are one cool cat, Jack</h2><p>You won in ${count}</p>`);
        break;
      case 3:
        winMsg = $(`<h2>Not bad, not bad ... room for improvement</h2><p>You won in ${count}</p>`);
        break;
      case 4:
        winMsg = $(`<h2>Don't be timid on your entrances!</h2><p>You won in ${count}</p>`);
        break;
      case 5:
        winMsg = $(`<h2>Your releases are spongey!</h2><p>You won in ${count}</p>`);
        break;
      default:
        winMsg = $(`<h2>That was either the most divine pianissimo I've ever heard or you forgot to come in</h2><p>You won in ${count}</p>`)
    }
    const okBtn = $("<button type='button' class='btn'>OK</button>")
    okBtn.on("click", closeModal);
    $("#modalContent").append(winMsg).append(okBtn);
    modal.css("display", "block");
  };

  function loseGame() {
    const loseMsg = $(`<h2>Looks like we need to take it to the woodshed. The word is '${word.toUpperCase()}'</h2>`);
    const okBtn = $("<button type='button' class='btn'>OK</button>")
    okBtn.on("click", closeModal);
    $("#modalContent").append(loseMsg).append(okBtn);
    modal.css("display", "block");
  };

  function continueGame(currWord, guess) {
    for (let i = 0; i < currWord.length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (currWord[i] === word[i]) {
          $(`#el-${guess.idx}-${i}`).addClass("positionCorrect");
          continue;
        } else if (word.includes(currWord[i])) {
          $(`#el-${guess.idx}-${i}`).addClass("letterCorrect");
        }
      }
    }
    if (guess === sixthGuess) {
      loseGame();
    }
  };

  async function playGame(whichGuess) {
    let wordGuessed = "";
    for (let i = 0; i < whichGuess.letters.length; i++) {
      wordGuessed = wordGuessed.concat(whichGuess.letters[i]);
    }
    await wordFetch(wordGuessed, whichGuess)
    if (wordBank.includes(wordGuessed)) {
      validate = true;
      whichGuess.submit = true;
    }
    if (validate === false) {
      notWord(whichGuess);
    }
    if (validate && wordGuessed === word) {
      winGame(whichGuess);
    } else if (validate && wordGuessed !== word) {
      continueGame(wordGuessed, whichGuess);
    }
  };

  async function handleSubmit() {
    switch (true) {
      case !firstGuess.submit:
        await playGame(firstGuess);
        break;
      case firstGuess.submit && !secondGuess.submit:
        await playGame(secondGuess);
        break;
      case firstGuess.submit && secondGuess.submit && !thirdGuess.submit:
        await playGame(thirdGuess);
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && !fourthGuess.submit:
        await playGame(fourthGuess);
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && fourthGuess.submit && !fifthGuess.submit:
        await playGame(fifthGuess);
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && fourthGuess.submit && fifthGuess.submit && !sixthGuess.submit:
        await playGame(sixthGuess);
        break;
      default:
        return false;
    }
  };


  getWord(startDate);
});