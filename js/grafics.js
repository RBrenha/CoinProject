// Gráfico de Pizza (Token Allocation)
const allocationChart = new Chart(document.getElementById('allocationChart'), {
    type: 'pie',
    data: {
        labels: ['Community', 'Team', 'Liquidity', 'Dev Holding'],
        datasets: [{
            data: [83.8, 15, 0.5, 0.7],
            backgroundColor: ['#2196f3', '#4caf50', '#ff5722', '#ffc107'],
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

const marketCapChart = new Chart(document.getElementById('marketCapChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Market Cap (USD)',
            data: [0, 150000, 100000, 90000, 95000, 80000, 70000, 76000],
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
                        return `Market Cap: $${tooltipItem.raw.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return `$${value.toLocaleString()}`; // Exibe valores com separadores de milhar
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
            data: [3000, 5000, 4000, 3500, 3750, 3000, 2500, 2700], // Baseado no Market Cap
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
