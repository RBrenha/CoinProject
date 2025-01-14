// Gráfico de Pizza (Token Allocation)
const allocationChart = new Chart(document.getElementById('allocationChart'), {
    type: 'pie',
    data: {
        labels: ['Community', 'Team', 'Liquidity', 'Marketing'],
        datasets: [{
            data: [50, 20, 20, 10],
            backgroundColor: ['#4caf50', '#2196f3', '#ff5722', '#ffc107'],
            borderColor: '#1a1a1a',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const percentage = tooltipItem.raw;
                        return `${tooltipItem.label}: ${percentage}%`;
                    }
                }
            }
        }
    }
});

// Gráfico de Linha (Price Evolution)
const priceChart = new Chart(document.getElementById('priceChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Price (USD)',
            data: [0.10, 0.15, 0.20, 0.25, 0.22, 0.30, 0.35],
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Price: $${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Gráfico de Barras (Monthly Transactions)
const transactionsChart = new Chart(document.getElementById('transactionsChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Transactions',
            data: [5000, 8000, 7000, 10000, 9500, 12000, 15000],
            backgroundColor: '#ff5722',
            borderColor: '#1a1a1a',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Transactions: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#444'
                }
            },
            x: {
                grid: {
                    color: '#444'
                }
            }
        }
    }
});
