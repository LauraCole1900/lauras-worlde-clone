$(function () {

  const wordBank = ["ossia", "brass", "basie", "stage", "triad", "indie", "notes", "major", "satie", "sotto", "scale", "conga", "prima", "trill", "bizet", "genre", "piano", "combo", "elgar", "grave", "cover", "tenor", "recit", "elvis", "pitch", "liszt", "pulse", "segue", "march", "dylan", "rondo", "baton", "senza", "davis", "dolce", "drive", "miles", "rests", "sharp", "elegy", "mosso", "etude", "music", "verdi", "tempo", "bugle", "beats", "snare", "choir", "parte", "tutti", "legno", "break", "slide", "samba", "forza", "sousa", "stand", "click", "cello", "audio", "lento", "front", "tonic", "breve", "meter", "range", "basso", "count", "motet", "carol", "tasto", "waltz", "blues", "modal", "rumba", "dance", "chant", "strum", "chord", "chops", "largo", "grieg", "canon", "viola", "clefs", "suite", "remix", "molto", "forte", "staff", "tonal", "motif", "segno", "ditty", "block", "verse", "haydn", "sopra", "fugue", "corda", "valve", "drone", "sixth", "gliss", "flute", "shred", "opera", "swing", "quasi", "berry", "banjo", "third", "lyric", "ravel", "reeds", "mezzo", "house", "canto", "track", "duple", "intro", "altos", "score", "drums", "fifth", "sitar", "theme", "vocal", "kazoo", "polka", "pedal", "pluck", "tuner", "organ", "louis", "whole", "shake", "neume", "voice", "chuck", "minor", "tacet", "octet", "hogan"];

  const keyboardChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];

  let letterEl;
  let guessEl;
  let word = "";
  let userGuess1 = {
    letters: [],
    submit: false
  };
  let userGuess2 = {
    letters: [],
    submit: false
  };
  let userGuess3 = {
    letters: [],
    submit: false
  };
  let userGuess4 = {
    letters: [],
    submit: false
  };
  let userGuess5 = {
    letters: [],
    submit: false
  };
  let userGuess6 = {
    letters: [],
    submit: false
  };
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
    letterEl = $("<div>").text(char.toUpperCase()).addClass("letterKey centered").attr("id", char).on("click", addLetter)
    if (i < 10) {
      $("#row1").append(letterEl);
    } else if (i >= 10 && i < 19) {
      $("#row2").append(letterEl);
    } else {
      $("#row3").append(letterEl);
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
      switch (true) {
        case userGuess1.length < 5:
          guessIdx = userGuess1.length;
          userGuess1.push(letter);
          console.log({ userGuess1 });
          $(`#el-0-${guessIdx}`).text(letter);
          break;
        case userGuess2.length < 5:
          guessIdx = userGuess2.length;
          userGuess2.push(letter);
          $(`#el-1-${guessIdx}`).text(letter);
          console.log({ userGuess2 });
          break;
        case userGuess3.length < 5:
          guessIdx = userGuess3.length;
          userGuess3.push(letter);
          $(`#el-2-${guessIdx}`).text(letter);
          console.log({ userGuess3 });
          break;
        case userGuess4.length < 5:
          guessIdx = userGuess4.length;
          userGuess4.push(letter);
          $(`#el-3-${guessIdx}`).text(letter);
          console.log({ userGuess4 });
          break;
        case userGuess5.length < 5:
          guessIdx = userGuess5.length;
          userGuess5.push(letter);
          $(`#el-4-${guessIdx}`).text(letter);
          console.log({ userGuess5 });
          break;
        case userGuess6.length < 5:
          guessIdx = userGuess6.length;
          userGuess6.push(letter);
          $(`#el-5-${guessIdx}`).text(letter);
          console.log({ userGuess6 });
          break;
      }
    }
  }

})