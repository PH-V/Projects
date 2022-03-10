class UI {
    constructor(){
        this.reposList = document.getElementById('repos-list')
        this.searchButton = document.getElementById('searchRepo')
        this.searchField = document.getElementById('repoName')
    }

    showRpos(data) {
        data.forEach(item => {
            this.reposList.innerHTML += this.reposList.innerHTML = `
            <a href="${item.svn_url}" class="list-group-item list-group-item-action"><h4 class="text-info">${item.name}</h4>
            <p class="lead">${item.description}</p></a>
            ` 
        });
    }

    emptyField() {
        this.searchButton.classList.add('btn-outline-danger')
        this.searchField.classList.add('btn-outline-danger')
        setTimeout(() => {
            this.searchButton.classList.remove('btn-outline-danger')
            this.searchField.classList.remove('btn-outline-danger')
        }, 3000)
    }

    clearShowRepos() {
        this.reposList.innerHTML = ''
    }
}