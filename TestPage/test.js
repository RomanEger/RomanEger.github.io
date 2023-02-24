function Main()
{
  let iteration = 1;
  Question(iteration);
  iteration++;
}

function Question(iteration)
{
  const myArray = ["Вопрос 1", "Вопрос 2", "Вопрос 3"];
  var quest = myArray[iteration];
  document.getElementById("Question")?.innerHTML = quest;
}