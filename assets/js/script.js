$(function () {

  const wordBank = ["ossia", "brass", "basie", "stage", "triad", "indie", "notes", "major", "satie", "sotto", "scale", "conga", "prima", "trill", "bizet", "genre", "piano", "combo", "elgar", "grave", "cover", "tenor", "recit", "elvis", "pitch", "liszt", "pulse", "segue", "march", "dylan", "rondo", "baton", "senza", "davis", "dolce", "drive", "miles", "rests", "sharp", "elegy", "mosso", "etude", "music", "verdi", "tempo", "bugle", "beats", "snare", "choir", "parte", "tutti", "moses", "legno", "break", "slide", "samba", "forza", "sousa", "stand", "click", "cello", "audio", "lento", "front", "tonic", "breve", "meter", "range", "basso", "count", "motet", "carol", "tasto", "clara", "waltz", "blues", "modal", "rumba", "dolly", "dance", "chant", "strum", "chord", "chops", "largo", "grieg", "canon", "viola", "clefs", "suite", "remix", "molto", "forte", "staff", "tonal", "motif", "segno", "ditty", "block", "verse", "haydn", "sopra", "fugue", "corda", "valve", "drone", "sixth", "gliss", "flute", "shred", "opera", "swing", "quasi", "berry", "banjo", "third", "lyric", "ravel", "reeds", "mezzo", "house", "canto", "track", "duple", "intro", "altos", "score", "drums", "fifth", "sitar", "theme", "vocal", "kazoo", "polka", "pedal", "pluck", "tuner", "organ", "louis", "whole", "shake", "neume", "voice", "chuck", "minor", "tacet", "octet", "hogan"];

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
  const startDate = new Date("3/26/2022");
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
    console.log(e.target.id);
    if (!["Enter", "Backspace"].includes(e.target.id)) {
      const letter = e.target.id.toUpperCase();
      console.log({ userGuess });
      switch (true) {
        case userGuess[0].guess1.letters.length < 5:
          guessIdx = userGuess[0].guess1.letters.length;
          userGuess[0].guess1.letters.push(letter);
          console.log("guess1", userGuess[0].guess1.letters);
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess[0].guess2.letters.length < 5 && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess2.letters.length;
          userGuess[0].guess2.letters.push(letter);
          console.log("guess2", userGuess[0].guess2.letters);
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess[0].guess3.letters.length < 5 && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess3.letters.length;
          userGuess[0].guess3.letters.push(letter);
          console.log("guess3", userGuess[0].guess3.letters);
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess[0].guess4.letters.length < 5 && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess4.letters.length;
          userGuess[0].guess4.letters.push(letter);
          console.log("guess4", userGuess[0].guess4.letters);
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess[0].guess5.letters.length < 5 && userGuess[0].guess4.submit && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess5.letters.length;
          userGuess[0].guess5.letters.push(letter);
          console.log("guess5", userGuess[0].guess5.letters);
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess[0].guess6.letters.length < 5 && userGuess[0].guess5.submit && userGuess[0].guess4.submit && userGuess[0].guess3.submit && userGuess[0].guess2.submit && userGuess[0].guess1.submit:
          guessIdx = userGuess[0].guess6.letters.length;
          userGuess[0].guess6.letters.push(letter);
          console.log("guess6", userGuess[0].guess6.letters);
          $(`#el-0-${guessIdx}`).text(letter);
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
        console.log(userGuess[0].guess1.letters);
        break;
      case userGuess[0].guess1.submit && userGuess[0].guess2.letters.length > 0:
        $(`#el-0-${userGuess[0].guess2.letters.length - 1}`).text("");
        userGuess[0].guess2.letters.pop();
        break;
      case userGuess[0].guess2.submit && userGuess[0].guess3.letters.length > 0:
        $(`#el-0-${userGuess[0].guess3.letters.length - 1}`).text("");
        userGuess[0].guess3.letters.pop();
        break;
      case userGuess[0].guess3.submit && userGuess[0].guess4.letters.length > 0:
        $(`#el-0-${userGuess[0].guess4.letters.length - 1}`).text("");
        userGuess[0].guess4.letters.pop();
        break;
      case userGuess[0].guess4.submit && userGuess[0].guess5.letters.length > 0:
        $(`#el-0-${userGuess[0].guess5.letters.length - 1}`).text("");
        userGuess[0].guess5.letters.pop();
        break;
      case userGuess[0].guess5.submit && userGuess[0].guess6.letters.length > 0:
        $(`#el-0-${userGuess[0].guess6.letters.length - 1}`).text("");
        userGuess[0].guess6.letters.pop();
        break;
      default:
        return false;
    }
  }

  function handleSubmit() {

  }

})