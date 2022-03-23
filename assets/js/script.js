$(function () {

  const wordBank = ["meter", "blues", "drums", "voice", "vocal", "choir", "viola", "baton", "verdi", "haydn", "basie", "elvis", "notes", "beats", "piano", "organ", "flute", "tenor", "altos", "genre", "pedal", "motif", "motet", "conga", "dance", "cello", "music", "whole", "forte", "mezzo", "largo", "lento", "tempo", "mosso", "segno", "ossia", "tacet", "tutti", "rests", "dolce", "senza", "staff", "clefs", "canon", "sharp", "grave", "minor", "major", "modal", "rondo", "trill", "tonal", "basso", "lyric", "elegy", "etude", "fugue", "legno", "octet", "pitch", "scale", "third", "fifth", "sixth", "banjo", "bugle", "carol", "chord", "tonic", "drone", "duple", "chant", "kazoo", "march", "opera", "pluck", "strum", "pulse", "range", "brass", "reeds", "score", "sitar", "snare", "swing", "theme", "triad", "verse", "waltz", "polka", "suite", "tuner", "indie", "liszt", "ravel", "satie", "elgar", "grieg", "bizet", "davis", "louis", "sousa", "ditty", "dylan", "berry", "samba", "rumba", "slide", "gliss", "canto", "parte", "prima", "segue", "count", "audio", "forza", "stand", "intro", "molto", "recit", "quasi", "breve", "shake", "sopra", "sotto", "tasto", "corda", "break", "chops", "track", "click", "combo", "cover", "drive", "stage", "house", "front", "valve", "remix", "shred"]

  const keyboardChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

  keyboardChar.map((char, i) => {
    letterEl = $("<div>").text(char.toUpperCase()).addClass("letterKey centered").attr("id", char).on("click", addLetter)
    if (i === 10) {
      letterEl.addClass("newRow")
    }
    $("#keyboard").append(letterEl);
  })

  function addLetter(e) {
    console.log(e.target.id);
  }

})