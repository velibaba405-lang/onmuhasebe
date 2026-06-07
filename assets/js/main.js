// Page Navigation
document.querySelectorAll('.sidebar .list-group-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.sidebar .list-group-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get the page name
        const page = item.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(p => {
            p.style.display = 'none';
        });
        
        // Show selected page
        const selectedPage = document.getElementById(page + '-page');
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }
    });
});

// Form submission handling
document.getElementById('gelirForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gelir başarıyla kaydedildi!');
    e.target.reset();
});

document.getElementById('giderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gider başarıyla kaydedildi!');
    e.target.reset();
});

// Initialize Chart
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('comparisonChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
                datasets: [
                    {
                        label: 'Gelir',
                        data: [32000, 38500, 41200, 39800, 38500, 45250],
                        backgroundColor: '#10b981',
                        borderRadius: 8,
                        borderSkipped: false,
                    },
                    {
                        label: 'Gider',
                        data: [10200, 11500, 10800, 11200, 11200, 12850],
                        backgroundColor: '#ef4444',
                        borderRadius: 8,
                        borderSkipped: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                weight: 'bold'
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₺ ' + value.toLocaleString('tr-TR');
                            }
                        }
                    }
                }
            }
        });
    }

    console.log('✅ Ön Muhasebe Sistemi başarıyla yüklendi');
});

// Number formatting for currency
function formatCurrency(value) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(value);
}

// Date formatting
function formatDate(date) {
    return new Intl.DateTimeFormat('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}
