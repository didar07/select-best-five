const playerCart = []

function display(totalPlayer) {

    const tableBody = document.getElementById('call-player')
    tableBody.innerHTML = ''

    for (let i = 0; i < totalPlayer.length; i++) {
        if (totalPlayer.length > 5) {
            alert('opps you already selected 5 players')
        }
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

function disableBtn() {
    document.getElementById('btn-1').disabled = true;
}
function disableBtn2() {
    document.getElementById('btn-2').disabled = true;
}
function disableBtn3() {
    document.getElementById('btn-3').disabled = true;
}
function disableBtn4() {
    document.getElementById('btn-4').disabled = true;
}
function disableBtn5() {
    document.getElementById('btn-5').disabled = true;
}
function disableBtn6() {
    document.getElementById('btn-6').disabled = true;
}
