const StorageInput = document.querySelector('.input')
const Text = document.querySelector('.text')
const SaveButton = document.querySelector('button')

StorageInput.addEventListener('input', written => {
    Text.textContent = written.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('plainText', Text.textContent)
}

SaveButton.addEventListener('click', saveToLocalStorage)

const plainText = localStorage.getItem('plainText')

if (plainText !== null){
 Text.textContent = plainText
} else{
    console.log('nothing found in local storage')
}