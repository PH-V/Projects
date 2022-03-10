class Coinmarketcap {
    constructor() {
        this.key = '55da7fb9-8d93-43e0-955d-025d18bce3b7'
    }

    async getCrypto() {
        const respone = await fetch(`https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${this.key}`)
   
        return respone.json()
    }

    async getCryptoForTable(id) {
        const respone = await fetch(`https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/quotes/latest?id=${id}&CMC_PRO_API_KEY=${this.key}`)
   
        return respone.json()
    }
}