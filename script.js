let correctAnswers = {
    1: "J",
    2: "A",
    3: "N",
    4: "G",
    5: "K",
    6: "R",
    7: "I",
    8: "K",
    11: "E",
    13: "A",
    15: "O",
    21: "R",
    23: "S",
    24: "A",
    25: "L",
    26: "E",
    27: "P",
    31: "A",
    33: "I",
    37: "O",
    39: "K",
    42: "C",
    45: "C",
    46: "A",
    47: "C",
    48: "I",
    49: "N",
    50: "G",
    51: "C",
    52: "A",
    53: "S",
    54: "I",
    55: "O",
    57: "O",
    59: "A",
    62: "B",
    65: "V",
    66: "A",
    67: "N",
    68: "I",
    69: "L",
    70: "A",
    72: "A",
    75: "E",
    77: "G",
    79: "P",
    81: "B",
    82: "I",
    83: "B",
    84: "I",
    85: "R",
    89: "O",
    97: "K",
    98: "A",
    99: "T",
    100: "A",
  };
  
  function submitTTS() {
    let score = 0;
    let totalCorrect = 0;
    let totalCells = 0; // Hanya menghitung kotak yang aktif (tidak disabled)
  
    for (let key in correctAnswers) {
      let inputElement = document.getElementById(key);
  
      // Abaikan kotak yang disabled
      if (!inputElement.disabled) {
        totalCells++;
        let input = inputElement.value.toUpperCase();
        if (input === correctAnswers[key]) {
          totalCorrect++;
          inputElement.style.backgroundColor = "#a8e6cf"; // Highlight correct answer
        } else {
          inputElement.style.backgroundColor = "#ff8b94"; // Highlight wrong answer
        }
      }
    }
  
    score = (totalCorrect / totalCells) * 100;
    document.getElementById("score").innerText = `Skor: ${score.toFixed(2)}`;
    document.getElementById("result").innerText =
      totalCorrect === totalCells
        ? "Selamat! Semua jawaban benar!"
        : "Masih ada yang salah, coba lagi!";
  }
  
  function showAnswers() {
    for (let key in correctAnswers) {
      let inputElement = document.getElementById(key);
      if (!inputElement.disabled) {
        inputElement.value = correctAnswers[key]; // Tampilkan jawaban
      }
    }
  }
  