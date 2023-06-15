function showKeyCode (e) {
    const insert = document.getElementById('insert')

    insert.innerHTML = ''





    const keycodes = {
        'e.key' : e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    for (let key in keycodes){
        const div = document.createElement('div')
        div.className = 'key'
        const small = document.createElement('small')

        const keyText = document.createTextNode(key)
        const value = document.createTextNode(keycodes[key])

        small.appendChild(keyText)
        div.appendChild(value)
        div.appendChild(small)

        insert.appendChild(div)
    }
}

window.addEventListener('keydown',showKeyCode)