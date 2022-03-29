$(function () {

  const wordBank = ["ossia", "masse", "brass", "basie", "stage", "triad", "still", "indie", "notes", "major", "satie", "sotto", "scale", "conga", "faure", "prima", "trill", "bizet", "genre", "piano", "combo", "elgar", "grave", "cover", "dukas", "tenor", "recit", "elvis", "pitch", "liszt", "elton", "pulse", "segue", "march", "dylan", "rondo", "hasse", "baton", "senza", "davis", "stops", "dolce", "drive", "miles", "rests", "sharp", "tozan", "elegy", "mosso", "etude", "lenny", "music", "verdi", "tempo", "bugle", "weber", "beats", "biebl", "snare", "choir", "gould", "parte", "tutti", "moses", "legno", "sarti", "break", "slide", "samba", "forza", "sousa", "stand", "click", "cello", "muddy", "audio", "lento", "aaron", "front", "janis", "tonic", "breve", "glass", "meter", "range", "basso", "holst", "count", "bruce", "motet", "carol", "tasto", "clara", "waltz", "blues", "modal", "rumba", "dolly", "dance", "chant", "ringo", "strum", "chord", "gluck", "chops", "largo", "grieg", "canon", "viola", "clefs", "suite", "pyotr", "remix", "beard", "molto", "forte", "julie", "staff", "tonal", "fosse", "motif", "segno", "ditty", "block", "verse", "haydn", "sopra", "fugue", "corda", "valve", "drone", "sixth", "gliss", "flute", "keith", "shred", "opera", "swing", "quasi", "berry", "banjo", "third", "lyric", "ravel", "reeds", "mezzo", "house", "canto", "track", "duple", "intro", "garth", "altos", "score", "drums", "fifth", "lully", "sitar", "theme", "vocal", "kazoo", "polka", "pedal", "pluck", "tuner", "organ", "louis", "whole", "shake", "neume", "voice", "chuck", "minor", "tacet", "octet", "hogan"];

  const keyboardChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];

  let letterEl;
  let guessEl;
  let word = "";
  let userGuess = [{
    guess1: {
      letters: [],
      submit: false
    },
    guess2: {
      letters: [],
      submit: false
    },
    guess3: {
      letters: [],
      submit: false
    },
    guess4: {
      letters: [],
      submit: false
    },
    guess5: {
      letters: [],
      submit: false
    },
    guess6: {
      letters: [],
      submit: false
    }
  }];
  const startDate = new Date("3/29/2022");
  getWord(startDate);

  function getWord(date) {
    const todayDate = Date.now();
    const timeDiff = todayDate - date.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    word = wordBank.at(dayDiff);
    console.log({ word });
  }

  keyboardChar.map((char, i) => {
    letterEl = $("<div>").text(char.toUpperCase()).addClass("letterKey centered").attr("id", char)
    if (i < 10) {
      letterEl.on("click", addLetter);
      $("#row1").append(letterEl);
    } else if (i >= 10 && i < 19) {
      letterEl.on("click", addLetter)
      $("#row2").append(letterEl);
    } else {
      if (char === "Enter") {
        letterEl.on("click", handleSubmit);
        $("#row3").append(letterEl);
      } else if (char === "Backspace") {
        letterEl.on("click", handleBackspace);
        $("#row3").append(letterEl);
      } else {
        letterEl.on("click", addLetter);
        $("#row3").append(letterEl);
      }
    }
  });

  const guessElArr = [$("#firstGuess"), $("#secondGuess"), $("#thirdGuess"), $("#fourthGuess"), $("#fifthGuess"), $("#sixthGuess")]

  guessElArr.forEach((el, i) => {
    for (let j = 0; j < 5; j++) {
      guessEl = $("<div>").addClass("letterGuess centered").attr("id", `el-${i}-${j}`);
      el.append(guessEl);
    }
  })

  function addLetter(e) {
    if (!["Enter", "Backspace"].includes(e.target.id)) {
      const letter = e.target.id;
      switch (true) {
        case userGuess[0].guess1.letters.length < 5:
          guessIdx = userGuess[0].guess1.letters.length;
          userGuess[0].guess1.letters.push(letter);
          $(`#el-0-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess[0].guess2.letters.length < 5 && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess2.letters.length;
          userGuess[0].guess2.letters.push(letter);
          $(`#el-1-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess[0].guess3.letters.length < 5 && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess3.letters.length;
          userGuess[0].guess3.letters.push(letter);
          $(`#el-2-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess[0].guess4.letters.length < 5 && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess4.letters.length;
          userGuess[0].guess4.letters.push(letter);
          $(`#el-3-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess[0].guess5.letters.length < 5 && userGuess[0].guess4.submit && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess5.letters.length;
          userGuess[0].guess5.letters.push(letter);
          $(`#el-4-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess[0].guess6.letters.length < 5 && userGuess[0].guess5.submit && userGuess[0].guess4.submit && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess6.letters.length;
          userGuess[0].guess6.letters.push(letter);
          $(`#el-5-${guessIdx}`).text(letter.toUpperCase());
          break;
        default:
          return false;
      }
    }
  }

  function handleBackspace() {
    switch (true) {
      case userGuess[0].guess1.letters.length > 0:
        $(`#el-0-${userGuess[0].guess1.letters.length - 1}`).text("");
        userGuess[0].guess1.letters.pop();
        break;
      case userGuess[0].guess1.submit && userGuess[0].guess2.letters.length > 0:
        $(`#el-1-${userGuess[0].guess2.letters.length - 1}`).text("");
        userGuess[0].guess2.letters.pop();
        break;
      case userGuess[0].guess2.submit && userGuess[0].guess3.letters.length > 0:
        $(`#el-2-${userGuess[0].guess3.letters.length - 1}`).text("");
        userGuess[0].guess3.letters.pop();
        break;
      case userGuess[0].guess3.submit && userGuess[0].guess4.letters.length > 0:
        $(`#el-3-${userGuess[0].guess4.letters.length - 1}`).text("");
        userGuess[0].guess4.letters.pop();
        break;
      case userGuess[0].guess4.submit && userGuess[0].guess5.letters.length > 0:
        $(`#el-4-${userGuess[0].guess5.letters.length - 1}`).text("");
        userGuess[0].guess5.letters.pop();
        break;
      case userGuess[0].guess5.submit && userGuess[0].guess6.letters.length > 0:
        $(`#el-5-${userGuess[0].guess6.letters.length - 1}`).text("");
        userGuess[0].guess6.letters.pop();
        break;
      default:
        return false;
    }
  }

  async function handleSubmit() {
    const firstGuess = userGuess[0].guess1;
    const secondGuess = userGuess[0].guess2;
    const thirdGuess = userGuess[0].guess3;
    const fourthGuess = userGuess[0].guess4;
    const fifthGuess = userGuess[0].guess5;
    const sixthGuess = userGuess[0].guess6;
    let wordGuessed = "";
    let validate = false;
    switch (true) {
      case !firstGuess.submit:
        for (let i = 0; i < firstGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(firstGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            console.log({ response });
            if (response.ok) {
              validate = true;
              firstGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          firstGuess.submit = true;
        }
        if (validate === false) {
          firstGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-0-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-0-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-0-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-0-${i}`).addClass("letterCorrect");
                continue;
              } else {
                continue;
              }
            }
          }
        }
        break;
      case firstGuess.submit && !secondGuess.submit:
        for (let i = 0; i < secondGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(secondGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            if (response.ok) {
              validate = true;
              secondGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          secondGuess.submit = true;
        }
        if (validate === false) {
          secondGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-1-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-1-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-1-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-1-${i}`).addClass("letterCorrect");
                continue;
              } else {
                continue;
              }
            }
          }
        }
        break;
      case firstGuess.submit && secondGuess.submit && !thirdGuess.submit:
        for (let i = 0; i < thirdGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(thirdGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            if (response.ok) {
              validate = true;
              thirdGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          thirdGuess.submit = true;
        }
        if (validate === false) {
          thirdGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-2-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-2-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-2-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-2-${i}`).addClass("letterCorrect");
                continue;
              } else {
                continue;
              }
            }
          }
        }
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && !fourthGuess.submit:
        for (let i = 0; i < fourthGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(fourthGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            if (response.ok) {
              validate = true;
              fourthGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          fourthGuess.submit = true;
        }
        if (validate === false) {
          fourthGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-3-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-3-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-3-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-3-${i}`).addClass("letterCorrect");
                continue;
              } else {
                continue;
              }
            }
          }
        }
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && fourthGuess.submit && !fifthGuess.submit:
        for (let i = 0; i < fifthGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(fifthGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            if (response.ok) {
              validate = true;
              fifthGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          fifthGuess.submit = true;
        }
        if (validate === false) {
          fifthGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-4-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-4-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-4-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-4-${i}`).addClass("letterCorrect");
                continue;
              } else {
                continue;
              }
            }
          }
        }
        break;
      case firstGuess.submit && secondGuess.submit && thirdGuess.submit && fourthGuess.submit && fifthGuess.submit && !sixthGuess.submit:
        for (let i = 0; i < sixthGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(sixthGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
            if (response.ok) {
              validate = true;
              sixthGuess.submit = true;
            } else {
              validate = false;
            }
          });
        if (wordBank.includes(wordGuessed)) {
          validate = true;
          sixthGuess.submit = true;
        }
        if (validate === false) {
          sixthGuess.letters = [];
          for (let i = 0; i < 5; i++) {
            $(`#el-5-${i}`).text("");
          }
          notWord();
        }
        if (validate && wordGuessed === word) {
          for (let i = 0; i < 5; i++) {
            $(`#el-5-${i}`).addClass("positionCorrect");
            winGame();
          }
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-5-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-5-${i}`).addClass("letterCorrect");
                loseGame();
              } else {
                loseGame();
              }
            }
          }
        }
        break;
    }
  }

  function notWord() {

  }

  function winGame() {

  }

  function loseGame() {

  }

})