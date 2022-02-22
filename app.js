
//const words = ['hello', 'random', 'hannah', 'rewind']
const btn = document.getElementById('randomBtn')




btn.addEventListener('click', function random(){
//onst random = Math.floor(Math.random()* 6)
//quote.innerHTML = words[random]
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => {
    const adviceId = document.getElementById('adviceId')
    const quote = document.getElementById('quote')
    adviceId.innerHTML = data.slip.id
    quote.innerHTML = data.slip.advice
})
.catch(err=>{
    console.log(err)
})
})