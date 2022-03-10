const imgsHolder = document.getElementById('imgsHolder');


const imgArray = [1,2,3,4,5,6]
const projects = ['Arcade', 'CryptoBase', 'Weather', 'GitHubReposFinder', 'GitHubFinder', 'TaskList']
let index = 0

const mod = (x,y) => ((x % y) + y) % y

const iter = onward => {
    if(onward)
        return imgArray[index = mod(++index, imgArray.length)]
    else
        return imgArray[index = mod(--index, imgArray.length)]
}

const delay = time => {
    return new Promise(resolve => setTimeout(resolve, time))
}

const CreateNewImg = (oldImg, animName, isLeft) => {
    const newImg = document.createElement('img')
    newImg.src = `Images/${iter(isLeft)}.png`
    newImg.classList.add('myshadow','img-fluid', 'mt-5', 'center-img', 'mainImg', animName)
    imgsHolder.appendChild(newImg)

    delay(800).then(() => oldImg.forEach(element => {
          element.remove()
    }))
}

document.querySelector('.play-btn').addEventListener('click', () => {
    if(projects[index] === 'Arcade')
        window.location.href = 'https://confident-hodgkin-33a4ea.netlify.app'
    else
        window.location.href = `_ProjectFiles/${projects[index]}/index.html`

    imgsHolder.classList.add('zoom-in')
})

document.querySelector('.next-btn').addEventListener('click', () => {
    const mainImg = document.querySelectorAll('.mainImg')

    mainImg.forEach(element => {
        element.classList.remove('fade-inRight')
        element.classList.add('fade-outLeft')
    });

    CreateNewImg(mainImg, 'fade-inLeft', true)
})

document.querySelector('.previous-btn').addEventListener('click', () => {
    const mainImg = document.querySelectorAll('.mainImg')

    mainImg.forEach(element => {
        element.classList.remove('fade-inLeft')
        element.classList.remove('fade-inRight')
        element.classList.add('fade-outRight')
    });

    CreateNewImg(mainImg, 'fade-inRight', false)
})

