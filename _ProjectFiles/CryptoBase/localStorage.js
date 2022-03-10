class LS {
    constructor(){
        this.tableBody = document.getElementById('table-body')
    }

    storeTableInLocalStorage(crypto) {
        let tableitems = []
        let table
        let name;
        let index;

        if (localStorage.getItem('table') === null) {
            table = []
        } else {
            table = JSON.parse(localStorage.getItem('table'))
        }

        localStorage.getItem('index') === null ? index
        : index = JSON.parse(localStorage.getItem('index'))
        
        localStorage.getItem('name') === null ? name = []
        : name = JSON.parse(localStorage.getItem('name'))
    
        tableitems.push(crypto.index)
        tableitems.push(crypto.symbol)
        tableitems.push(crypto.name)
        tableitems.push(crypto.price)
        tableitems.push(crypto.maxSupply)
        tableitems.push(crypto.totalSupply)
        tableitems.push(crypto.delete)
        table.push(tableitems)

        name.push(crypto.name)
        index = crypto.index

        localStorage.setItem('table', JSON.stringify(table));

        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('name', JSON.stringify(name));
    }

    getTableFromLocalStorage() {
        let table

        if(localStorage.getItem('table') === null) {
            table = [];
        } else {
            table = JSON.parse(localStorage.getItem('table'));
        }

        table.forEach(info => {
            const row = document.createElement('tr')
            for(let i = 0; i < 7; i ++){
                const td = document.createElement('td')
                if(i == 0) {
                    td.appendChild(document.createTextNode(info[i]))
                    td.setAttribute('id', 'index')
                }
                else if(i == 6) {
                    td.innerHTML = info[i]
                } 
                else {
                    td.appendChild(document.createTextNode(info[i]))
                }
                row.appendChild(td)
            }
            this.tableBody.appendChild(row);
        });
    }


    removeTaskFromLocalStorage(target) {
        let table
        let name
        let index
        let indexToDel = target - 1
        if (localStorage.getItem('table') === null) {
            table = []
        } else {
            table = JSON.parse(localStorage.getItem('table'))
        }

        localStorage.getItem('index') === null ? index
        : index = JSON.parse(localStorage.getItem('index'))
        
        localStorage.getItem('name') === null ? name = []
        : name = JSON.parse(localStorage.getItem('name'))

        table.splice(indexToDel, 1)
        index--
        name.splice(indexToDel, 1)

        localStorage.setItem('table', JSON.stringify(table));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('name', JSON.stringify(name));
    }

    CheckName(){
        let name

        localStorage.getItem('name') === null ? name = []
        : name = JSON.parse(localStorage.getItem('name'))

        return name
    }

    CheckIndex(){
        let index

        localStorage.getItem('index') === null ? index = 0
        : index = JSON.parse(localStorage.getItem('index'))

        return index
    }

    updateIndex(index, newIndex){
        let table

        if (localStorage.getItem('table') === null) {
            table = []
        } else {
            table = JSON.parse(localStorage.getItem('table'))
        }

        table[index].splice(0,1)

        table[index].splice(0, 0, newIndex)

        localStorage.setItem('table', JSON.stringify(table));
    }

}