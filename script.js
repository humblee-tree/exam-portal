async function loadQuestions() {
  const res = await fetch('questions.json');
  const data = await res.json();
  const container = document.getElementById('questions');
  data.forEach((q, idx) => {
    let html = `<div><p>${idx+1}. ${q.question}</p>`;
    q.options.forEach(opt => {
      html += `<label><input type='radio' name='q${idx}' value='${opt}'> ${opt}</label><br>`;
    });
    html += '</div><br>';
    container.innerHTML += html;
  });
}
function submitExam() {
  alert('Exam submitted! (Demo)');
}
loadQuestions();