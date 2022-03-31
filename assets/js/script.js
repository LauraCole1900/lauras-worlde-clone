$(function () {

  const wordBank = ["ossia", "masse", "brass", "basie", "stage", "triad", "still", "indie", "notes", "major", "satie", "sotto", "scale", "conga", "faure", "prima", "trill", "bizet", "genre", "piano", "combo", "elgar", "grave", "cover", "dukas", "tenor", "recit", "elvis", "pitch", "liszt", "elton", "pulse", "segue", "march", "dylan", "rondo", "hasse", "baton", "senza", "davis", "stops", "dolce", "drive", "miles", "rests", "sharp", "tozan", "elegy", "mosso", "etude", "lenny", "music", "verdi", "tempo", "bugle", "weber", "beats", "biebl", "snare", "choir", "gould", "parte", "tutti", "moses", "legno", "sarti", "break", "slide", "samba", "forza", "sousa", "stand", "click", "cello", "muddy", "audio", "lento", "aaron", "front", "janis", "tonic", "breve", "glass", "meter", "range", "basso", "holst", "count", "bruce", "motet", "carol", "tasto", "clara", "waltz", "blues", "modal", "rumba", "dolly", "dance", "chant", "ringo", "strum", "chord", "gluck", "chops", "largo", "grieg", "canon", "viola", "clefs", "suite", "pyotr", "remix", "beard", "molto", "forte", "julie", "staff", "tonal", "fosse", "motif", "segno", "ditty", "block", "verse", "haydn", "sopra", "fugue", "corda", "valve", "drone", "sixth", "gliss", "flute", "keith", "shred", "opera", "swing", "quasi", "berry", "banjo", "third", "lyric", "ravel", "reeds", "mezzo", "house", "canto", "track", "duple", "intro", "garth", "altos", "score", "drums", "fifth", "lully", "sitar", "theme", "vocal", "kazoo", "polka", "pedal", "pluck", "tuner", "organ", "louis", "whole", "shake", "neume", "voice", "chuck", "minor", "tacet", "octet", "hogan"];

  const keyboardChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];

  let letterEl;
  let guessEl;
  let word = "";
  const modal = $("#myModal");
  let userGuess = {
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
  };
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
        case userGuess.guess1.letters.length < 5 && !userGuess.guess1.submit:
          guessIdx = userGuess.guess1.letters.length;
          userGuess.guess1.letters.push(letter);
          $(`#el-0-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess.guess2.letters.length < 5 && userGuess.guess1.submit && !userGuess.guess2.submit:
          guessIdx = userGuess.guess2.letters.length;
          userGuess.guess2.letters.push(letter);
          $(`#el-1-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess.guess3.letters.length < 5 && userGuess.guess2.submit && userGuess.guess1.submit && !userGuess.guess3.submit:
          guessIdx = userGuess.guess3.letters.length;
          userGuess.guess3.letters.push(letter);
          $(`#el-2-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess.guess4.letters.length < 5 && userGuess.guess3.submit && userGuess.guess2.submit && userGuess.guess1.submit && !userGuess.guess4.submit:
          guessIdx = userGuess.guess4.letters.length;
          userGuess.guess4.letters.push(letter);
          $(`#el-3-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess.guess5.letters.length < 5 && userGuess.guess4.submit && userGuess.guess3.submit && userGuess.guess2.submit && userGuess.guess1.submit && !userGuess.guess5.submit:
          guessIdx = userGuess.guess5.letters.length;
          userGuess.guess5.letters.push(letter);
          $(`#el-4-${guessIdx}`).text(letter.toUpperCase());
          break;
        case userGuess.guess6.letters.length < 5 && userGuess.guess5.submit && userGuess.guess4.submit && userGuess.guess3.submit && userGuess.guess2.submit && userGuess.guess1.submit && !userGuess.guess6.submit:
          guessIdx = userGuess.guess6.letters.length;
          userGuess.guess6.letters.push(letter);
          $(`#el-5-${guessIdx}`).text(letter.toUpperCase());
          break;
        default:
          return false;
      }
    }
  }

  function handleBackspace() {
    switch (true) {
      case !userGuess.guess6.submit && userGuess.guess5.submit && userGuess.guess6.letters.length > 0:
        $(`#el-5-${userGuess.guess6.letters.length - 1}`).text("");
        userGuess.guess6.letters.pop();
        break;
      case !userGuess.guess5.submit && userGuess.guess4.submit && userGuess.guess5.letters.length > 0:
        $(`#el-4-${userGuess.guess5.letters.length - 1}`).text("");
        userGuess.guess5.letters.pop();
        break;
      case !userGuess.guess4.submit && userGuess.guess3.submit && userGuess.guess4.letters.length > 0:
        $(`#el-3-${userGuess.guess4.letters.length - 1}`).text("");
        userGuess.guess4.letters.pop();
        break;
      case !userGuess.guess3.submit && userGuess.guess2.submit && userGuess.guess3.letters.length > 0:
        $(`#el-2-${userGuess.guess3.letters.length - 1}`).text("");
        userGuess.guess3.letters.pop();
        break;
      case !userGuess.guess2.submit && userGuess.guess1.submit && userGuess.guess2.letters.length > 0:
        $(`#el-1-${userGuess.guess2.letters.length - 1}`).text("");
        userGuess.guess2.letters.pop();
        break;
      case !userGuess.guess1.submit && userGuess.guess1.letters.length > 0:
        $(`#el-0-${userGuess.guess1.letters.length - 1}`).text("");
        userGuess.guess1.letters.pop();
        break;
      default:
        return false;
    }
  }

  async function handleSubmit() {
    const firstGuess = userGuess.guess1;
    const secondGuess = userGuess.guess2;
    const thirdGuess = userGuess.guess3;
    const fourthGuess = userGuess.guess4;
    const fifthGuess = userGuess.guess5;
    const sixthGuess = userGuess.guess6;
    let wordGuessed = "";
    let validate = false;
    switch (true) {
      case !firstGuess.submit:
        for (let i = 0; i < firstGuess.letters.length; i++) {
          wordGuessed = wordGuessed.concat(firstGuess.letters[i]);
        }
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordGuessed}`)
          .then(function (response) {
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
          }
          winGame();
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-0-${i}`).addClass("positionCorrect");
                continue;
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-0-${i}`).addClass("letterCorrect");
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
          }
          winGame();
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
          }
          winGame();
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
          }
          winGame();
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
          }
          winGame();
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
          }
          winGame();
        } else if (validate && wordGuessed !== word) {
          for (let i = 0; i < wordGuessed.length; i++) {
            for (let j = 0; j < word.length; j++) {
              if (wordGuessed[i] === word[i]) {
                $(`#el-5-${i}`).addClass("positionCorrect");
              } else if (word.includes(wordGuessed[i])) {
                $(`#el-5-${i}`).addClass("letterCorrect");
              }
            }
          }
          loseGame();
        }
        break;
    }
  }

  function closeModal() {
    $("#modalContent").empty();
    modal.css("display", "none");
  }

  function notWord() {
    const notWordMsg = $("<h2>Word not found. Try again</h2>");
    const okBtn = $("<button type='button' class='btn'>OK</button>")
    okBtn.on("click", closeModal);
    $("#modalContent").append(notWordMsg).append(okBtn);
    modal.css("display", "block");
  }

  function winGame() {
    let winMsg = "";
    let count = 0;
    for (const key in userGuess) {
      console.log({ key });
      if (userGuess[key].submit) {
        ++count;
        console.log(userGuess[key].submit);
        console.log({ count });
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
  }

  function loseGame() {
    const loseMsg = $(`<h2>Looks like we need to take it to the woodshed. The word is '${word.toUpperCase()}'</h2>`);
    const okBtn = $("<button type='button' class='btn'>OK</button>")
    okBtn.on("click", closeModal);
    $("#modalContent").append(loseMsg).append(okBtn);
    modal.css("display", "block");
  }

})