const correctAnswers = ["B", "C", "A", "C", "C" ]
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const span = result.querySelector("span")
const h2 = document.querySelector(".text-plus")

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) score += 20;
    })
    scrollTo(0,0)
    
    result.classList.remove("d-none")
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if(output === 0)
        h2.textContent = "Let's try again, shall we?"
        else if(output === 20)
        h2.textContent = "Don't give up, let's give it another try!"
        else if(output === 40)
        h2.textContent = "Not great, not terrible..."
        else if(output === 60)
        h2.textContent = "You are on the right track, keep it up!"
        else if(output === 80)
        h2.textContent = "You only missed one question, good job!"
        else if(output === 100)
        h2.textContent = "Congratulations, you have answered all the questions correctly"
        if(output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 20)
})