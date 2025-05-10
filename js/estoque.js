const form = document.getElementById('add-item-form');
const estoqueBody = document.getElementById('estoque-body');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${produto}</td>
        <td>${quantidade}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td><button onclick="removerItem(this)">Remover</button></td>
    `;
    estoqueBody.appendChild(row);

    form.reset();
});

function removerItem(button) {
    const row = button.parentElement.parentElement;
    estoqueBody.removeChild(row);
}