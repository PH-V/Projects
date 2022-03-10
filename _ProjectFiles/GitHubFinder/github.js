class Github {
    constructor() {
        this.client_id = 'f95d4e2a8bea9ccd9861'
        this.client_secret = '2c9c285ccd121dd02fbcf1e383bbab18ddcefaa1'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
  
        const profile = await profileResponse.json()

        return {
            profile
        }
    }
}