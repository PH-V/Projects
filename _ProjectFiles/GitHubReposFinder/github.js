class Github {
    constructor() {
        
    }

    async getRepo(repoName) {
        const respone = await fetch(`https://api.github.com/search/repositories?q=${repoName}&sort=stars&order=desc`)
        
        repoName = respone.json()

        return repoName
    
    
    }
}