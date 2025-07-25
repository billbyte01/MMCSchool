// const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL)
// .then(res => console.log(res))
// .catch(err => console.error(err))

// btn.addEventListener('click', () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute('src', data.message))
		.catch((err) => console.error(err))
// })

// using async/await istead of .then/.catch
async function test() {
	try {
		const res = await fetch(URL)
		const data = await res.json()
		console.log(data);
	} catch {
		console.error('error')
	}
}
test()