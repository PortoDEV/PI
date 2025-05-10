document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('movimentacoesChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [{
                label: 'Movimentações',
                data: [5, 9, 7, 8, 6],
                backgroundColor: '#1e1449',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });

    const ctx2 = document.getElementById('estoqueChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Categoria A', 'Categoria B', 'Categoria C'],
            datasets: [{
                label: 'Composição do Estoque',
                data: [40, 30, 30],
                backgroundColor: ['#1e1449', '#3b2a7d', '#575fcf'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });
});