import { Question } from "./Question.js";
import { enunciadosyrespuestas } from "./enunciadosyrespuestas.js";

export const questions = enunciadosyrespuestas.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

