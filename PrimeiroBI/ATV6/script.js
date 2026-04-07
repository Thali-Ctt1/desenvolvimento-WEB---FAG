const input = document.getElementById("tarefaInput");
const botao = document.getElementById("addButton");
const lista = document.getElementById("listaTarefas");
const clearBtn = document.getElementById("clearButton");

botao.onclick = () => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = input.value;

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);

    input.value = "";
};

lista.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
        const span = e.target.nextElementSibling;
        span.classList.toggle("concluida");
    }

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

clearBtn.onclick = () => {
    lista.innerHTML = "";
};