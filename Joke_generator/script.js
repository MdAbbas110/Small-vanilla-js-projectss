const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () =>{
    //we need to make a reqest
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) { //this if is to check the ready state i.e on 4 or not
            if (this.status === 200) { //this if is to check the stuts of respond is on 200 or not
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {//if status is not 200 or 4 here we can show something went wrong
                jokeEl.innerHTML = 'Something went wrong (not funny)'
            }
        }
    }
    xhr.send() // variable.send() is veryImp to call in the function
                // because we age just opening the requst send will make it display on to the page
}



jokeBtn.addEventListener('click', generateJoke)
document.addEventListener('DOMContentLoaded', generateJoke)