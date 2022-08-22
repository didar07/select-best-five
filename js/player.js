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

// --------- Button disable ---------//

function disableBtn1() {
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

function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText
    const playerObj = { playerName: playerName }
    playerCart.push(playerObj)

    if (playerCart.length > 5) {
        alert("opps!! you have already selected 5 player")
        tableBody.removeChild(tableBody.lastChild)
    }

    document.getElementById('total-added-player').innerText = playerCart.length
    display(playerCart)

}

// -----------calculating player cost--------//

document.getElementById('btn-calculate').addEventListener('click', function () {

    const playerCostString = document.getElementById('player-cost')
    const playerCost = parseFloat(playerCostString.value)

    const totalPlayerCost = playerCost * playerCart.length

    const playerExpenses = document.getElementById('player-expense')
    playerExpenses.innerText = totalPlayerCost

    // --------Calculating Total Cost ------------//

    document.getElementById('total-calculate').addEventListener('click', function () {
        const managerCostString = document.getElementById('manager-cost')
        const managerCost = parseFloat(managerCostString.value)

        const coachCostString = document.getElementById('coach-cost')
        const coachCost = parseFloat(coachCostString.value)

        const totalCost = totalPlayerCost + managerCost + coachCost

        const totalExpense = document.getElementById('total-expense')

        totalExpense.innerText = totalCost
    })
})

