export class UI {
    constructor() {}
  
 
    showQuestion(text) {
      const questionTitle = document.getElementById("question");
      questionTitle.innerHTML = text;
    }
  
    showChoices(choices, callback) {
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = "";
  
      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(choices[i]));
        button.className = "button";
        button.innerText = choices[i];
  
        choicesContainer.append(button);
      }
    }
  
    showScores(score) {
      const gameOverHTML = `
        <h1 class="hresultado" >Resultado</h1>
        <h2 class="hresultadoxy "id="score">${score} / 10</h2>
        `;
      const element = document.getElementById("quiz");
      element.innerHTML = gameOverHTML;
    }
  
// X out of Y

    showProgress(currentIndex, total) {
      var element = document.getElementById("progress");
      element.innerHTML = ` ${currentIndex} de ${total}`;
    }
  }
  
//Resultado
