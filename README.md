# Frontend Mentor - Advice generator app solution

This is my solution to the [Advice generator app challenge on Frontend Mentor](https://advicegeneratorappbyayisha.netlify.app/). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![mobile version of app](./mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

I learned how to incorperate an API into my project.

```js
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => {
    const adviceId = document.getElementById('adviceId')
    const quote = document.getElementById('quote')
    adviceId.innerHTML = data.slip.id
    quote.innerHTML = data.slip.advice
})
```

## Author

- Website - [Ayishaalli.com](https://www.ayishaalli.com/)
- Frontend Mentor - [@AyishaAlli](https://www.frontendmentor.io/profile/AyishaAlli)
- Twitter - [@rtayish](https://www.twitter.com/rtayish)
  