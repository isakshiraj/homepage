document.addEventListener('DOMContentLoaded', function() {
    const categoryPoints = JSON.parse(localStorage.getItem('categoryPoints'));
    const resultText = document.getElementById('result-text');
    const pieChartContainer = document.getElementById('pie-chart');
    const legendContainer = document.getElementById('legend-container');

    const categoryResultsHTML = Object.keys(categoryPoints)
        .map(category => `<p class="category-points">${category}: ${categoryPoints[category]} points</p>`)
        .join('');

    const sortedCategories = Object.keys(categoryPoints).sort((a, b) => categoryPoints[b] - categoryPoints[a]);
    const topCategories = sortedCategories.slice(0, 2);

    resultText.innerHTML = `<h2>RESULTS</h2>${categoryResultsHTML}`;

    // Save top categories to localStorage
    localStorage.setItem('topCategories', JSON.stringify(topCategories));

    // Define colors for each category
    const colors = ['#FAEDCB', '#B6E4EB', '#FEAFAB', '#DEDAF4', '#F2C6DE', '#FBD5B0'];

    // Check if legend items already exist
    if (!legendContainer.hasChildNodes()) {
        // Create legend items
        Object.keys(categoryPoints).forEach((category, index) => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';

            const legendColor = document.createElement('div');
            legendColor.className = 'legend-color';
            legendColor.style.backgroundColor = colors[index];

            const legendText = document.createElement('div');
            legendText.className = 'legend-text';
            legendText.textContent = category;

            legendItem.appendChild(legendColor);
            legendItem.appendChild(legendText);
            legendContainer.appendChild(legendItem);
        });
    }

    // Only create the pie chart if it doesn't already exist
    if (!document.getElementById('pieChart')) {
        const pieCtx = document.createElement('canvas');
        pieCtx.id = 'pieChart';
        pieCtx.width = 20;  // Set the width of the chart
        pieCtx.height = 20; // Set the height of the chart
        pieChartContainer.appendChild(pieCtx);

        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(categoryPoints),
                datasets: [{
                    data: Object.values(categoryPoints),
                    backgroundColor: colors
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, // Hide the default legend
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw;
                            }
                        }
                    },
                    datalabels: {
                        display: true,
                        color: 'black',
                        formatter: (value, ctx) => {
                            let datasets = ctx.chart.data.datasets;
                            if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                                let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                                let percentage = Math.round((value / sum) * 100) + '%';
                                return `${value} (${percentage})`;
                            } else {
                                return value;
                            }
                        },
                    },
                }
            },
        });
    }

    // Handle next button click
    document.getElementById('next').addEventListener('click', () => {
        window.location.href = 'topCategories.html';
    });
});
