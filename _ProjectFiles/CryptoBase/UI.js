class UI {
    constructor(){
        this.tableBody = document.getElementById('table-body')
        this.selcetCrypto = document.getElementById('selcet-crypto')
    }

    selectCrypto(data,storedNames) {
        let add = false
        data.forEach(element => {

            if(storedNames.length > 0){
                for(let i = 0; i < storedNames.length; i++){
                    if(storedNames[i] == element.name){
                        storedNames.splice(i,1)
                        add = false
                        break
                    } else {
                        add = true
                    }
                }
            } else {
                add = true
            }

            if(add){
                const option = document.createElement('option');
                option.value = element.name
                option.text = element.name
                option.id = element.id
                this.selcetCrypto.appendChild(option)
            }
        });
    }

    showAlert(message, className) {
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container')
        const form = document.querySelector('.navbar-nav')

        container.insertBefore(div, form)

        if(document.querySelectorAll('.alert').length > 1) {
            document.querySelector('.alert').remove()
        }
        else {
            setTimeout(function(){
                document.querySelector('.alert').remove()
            }, 3000)
        }
    }

    showCrypto(crypto) {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td id="index">${crypto.index}</td>
        <td>${crypto.symbol}</td>
        <td>${crypto.name}</td>
        <td>${crypto.price}</td>
        <td>${crypto.maxSupply}</td>
        <td>${crypto.totalSupply}</td>
        <td><a href="#" class="delete">X</a></td>
    `
        this.tableBody.appendChild(row)
    }

    updateTable(index, nOfCr) {
        const ls = new LS
        const toChange = document.querySelectorAll('#index')
        for(let i = index - 1; i < nOfCr; i++) {
            toChange[i].innerHTML--
            ls.updateIndex(i, toChange[i].innerHTML)
        }
    }

}