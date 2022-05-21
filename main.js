const CARD = [
    {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        11 : 10,
        12 : 10,
        13 : 10,
        14 : 11
    },
    {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        11 : 10,
        12 : 10,
        13 : 10,
        14 : 11
    },
    {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        11 : 10,
        12 : 10,
        13 : 10,
        14 : 11
    },
    {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        11 : 10,
        12 : 10,
        13 : 10,
        14 : 11
    },
]

let player = 0
let bot = 5



const hit = () => {
    player = player + CARD[Math.floor(Math.random() * 3)][Math.floor(Math.random() * (14 - 2)) + 2]
    document.getElementById("player-count").innerHTML = player
    count()
}

const count = () => {
    if (bot > 21 || player === 21) {
        document.getElementById("player-count").innerHTML = player
        document.getElementById("bot-count").innerHTML = bot
        alert("you win")
    }
    if (player > 21 || bot === 21) {
        document.getElementById("player-count").innerHTML = player
        document.getElementById("bot-count").innerHTML = bot
        alert("you lose")
    } else {
        console.log(player)
        document.getElementById("player-count").innerHTML = player
        document.getElementById("bot-count").innerHTML = bot
    }
}

count()