const playerCart = []

function display(totalPlayer) {

    const tableBody = document.getElementById('call-player')
    tableBody.innerHTML = ''

    for (let i = 0; i < totalPlayer.length; i++) {
        const name = playerCart[i].playerName

        const tr = document.createElement("tr")
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `
        tableBody.appendChild(tr)
    }
}

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText

    const playerObj = { playerName: playerName }
    playerCart.push(playerObj)

    document.getElementById('total-added-player').innerText = playerCart.length
    display(playerCart)

}