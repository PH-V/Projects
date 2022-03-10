const coinmarketcap = new Coinmarketcap
const ui = new UI
const ls = new LS
const cryptoName = document.getElementById('cryptoName')
let index = ls.CheckIndex()


document.addEventListener('DOMContentLoaded', ls.getTableFromLocalStorage())


class Crypto {
    constructor(index, data) {
        this.index = index
        this.symbol = data.symbol
        this.name = data.name
        this.price = Math.round(data.quote.USD.price) + "$"
        this.maxSupply = Math.round(data.max_supply)
        this.totalSupply = Math.round(data.total_supply)
        this.delete = '<td><a href="#" class="delete">X</a></td>'
    }
}

coinmarketcap.getCrypto()
         .then( info => {
            ui.selectCrypto(info.data,ls.CheckName())
         })


const AddCrypto = (evt) => {
    const select = document.getElementById('selcet-crypto');
    const id = select[select.selectedIndex].id

    if(select.value != "ignore"){
        coinmarketcap.getCryptoForTable(id)
         .then( info => {

            const crypto = new Crypto(index, info.data[id])

            ls.storeTableInLocalStorage(crypto)
            ui.showCrypto(crypto)
         })

        select.remove(select.selectedIndex)
        index++
    }

    evt.preventDefault()
}

document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
        AddCrypto(e)
})

document.getElementById('add-crypto').addEventListener('click', (e) => {
    AddCrypto(e)
})


document.getElementById('table-body').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        let currIndex = parseInt(e.target.parentElement.parentElement.children[0].innerText)
        e.target.parentElement.parentElement.remove()
        ui.showAlert('Crypto Removed!', 'success')
        ls.removeTaskFromLocalStorage(currIndex)
        console.log("all " + index)
        console.log("current " + currIndex)

        ui.updateTable(currIndex, index-1)
        index--
        // console.log(e.target.parentElement.parentElement.children[2].innerText)
    }
    e.preventDefault()
})