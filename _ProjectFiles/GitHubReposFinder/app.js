const github = new Github
const ui = new UI
const repoName = document.getElementById('repoName')

document.getElementById('searchRepo').addEventListener('click', (e) => {
    if(repoName.value !== '') {
        ui.clearShowRepos()
        github.getRepo(repoName.value)
            .then( data => {
                ui.showRpos(data.items)
            }) 
    } else {
        ui.emptyField()
    }

    repoName.value = ''

    e.preventDefault()
})
