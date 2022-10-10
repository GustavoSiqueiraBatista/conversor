
    let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
    let result = document.querySelector('.result');
    let form = document.querySelector('.form');
    let input = document.querySelector('#valor');


    const select = document.querySelector('#select');
    const indice = select.value

    console.log(indice)
    

    async function get () {
        const response = await fetch(url)

        console.log(response)

        const data = await response.json()
        console.log(data)

        console.log(data.EURBRL.bid)
        console.log(data.USDBRL.bid)

            var valueEur = data.EURBRL.bid;
            var valueUsd = data.USDBRL.bid


        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const newValue = input.value
                console.log(newValue)
            
            if (indice == "EUR") {
                let resultedEur = valueEur * newValue
                result.innerHTML = resultedEur.toFixed(2)
            }else if (indice == "USD"){
                let resultedUsd = valueUsd * newValue
                result.innerHTML = resultedUsd.toFixed(2)
            }
        })
    }
    get()

        


