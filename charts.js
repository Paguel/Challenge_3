const ctx = document.getElementById('statChart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['En attente', 'Validées', 'Rejetées', 'En cours'],
        datasets: [{
          label: 'Nombre de candidatures',
          data: [12, 8, 5, 3, 2],
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)',
            'rgba(34, 197, 94, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(234, 179, 8, 0.7)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(34, 197, 94, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(234, 179, 8, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });