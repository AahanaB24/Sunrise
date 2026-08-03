const facts = [
    "I enjoy building robots.",
    "I love programming in Python and JavaScript.",
    "Artificial Intelligence is one of my favorite subjects.",
    "I enjoy creating projects that help people."
];

function showFact() {
    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[random];
}

function changeColor() {

    const colors = [
        "#FCE4EC",
        "#E3F2FD",
        "#E8F5E9",
        "#FFF3E0",
        "#F3E5F5"
    ];

    let random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
}