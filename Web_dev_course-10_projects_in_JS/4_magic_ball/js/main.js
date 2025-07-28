const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const ball = document.querySelector('img')

const answersArr = ['Yes', 'No', 'Maybe', 'Definitely', 'Ask again later', 'Absolutely not', 'Without a doubt', 'It is certain', 'Very doubtful', 'Most likely', 'My sources say no', 'Outlook not so good', 'Yes, in due time']

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '') {
		error.textContent = ''
		getRandomAnswer()
	} else {
		answer.innerHTML = ''
		error.textContent = 'Please ask a question'
	}
	ball.classList.remove('shake-animation')
}

const getRandomAnswer = () => {
	const randomIndex = Math.floor(Math.random() * answersArr.length)
	answer.innerHTML = `<span>Answer:</span> ${answersArr[randomIndex]}`
}

ball.addEventListener('click', shakeBall)
