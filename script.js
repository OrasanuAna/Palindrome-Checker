function palindromeChecker() {
  const inputElement = document.getElementById("text-input");
  const value = inputElement.value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const reversedValue = value.split("").reverse().join("");

  // Afișează un mesaj de alertă dacă nu există input
  if (value === "") {
    alert("Please enter a word or phrase.");
    return;
  }

  // Determină și afișează rezultatul
  const resultElement = document.getElementById("result");
  const historyElement = document.getElementById("history");

  if (value === reversedValue) {
    resultElement.innerHTML = `<b>${inputElement.value}</b> is a palindrome!`;
    resultElement.classList.add("green");
    resultElement.classList.remove("red");
  } else {
    resultElement.innerHTML = `<b>${inputElement.value}</b> is not a palindrome.`;
    resultElement.classList.add("red");
    resultElement.classList.remove("green");
  }

  // Adaugă rezultatul în istoricul de verificări
  const historyItem = document.createElement("li");
  historyItem.textContent = `${inputElement.value} - ${
    value === reversedValue ? "Palindrome" : "Not a palindrome"
  }`;
  historyElement.appendChild(historyItem);

  // Resetează câmpul de input
  inputElement.value = "";
}
