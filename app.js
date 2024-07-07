let expenses = [
    { name: 'Lunch', amount: 15, category: 'Food' },
    { name: 'Bus Ticket', amount: 3, category: 'Transport' },
    { name: 'Movie', amount: 12, category: 'Entertainment' },
    { name: 'Electricity Bill', amount: 60, category: 'Utilities' },
    { name: 'Dinner', amount: 25, category: 'Food' },
    { name: 'Gas', amount: 20, category: 'Transport' },
    { name: 'Concert', amount: 50, category: 'Entertainment' },
    { name: 'Water Bill', amount: 30, category: 'Utilities' },
    { name: 'Coffee', amount: 5, category: 'Food' },
    { name: 'Taxi', amount: 18, category: 'Transport' },
];

let budgets = {
    Food: 0,
    Transport: 0,
    Entertainment: 0,
    Utilities: 0
};

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;

    if (name && amount && category) {
        expenses.push({ name, amount, category });
        displayExpenses();
        updateChart();
    }
}

function setBudgets() {
    budgets.Food = parseFloat(document.getElementById('budget-food').value);
    budgets.Transport = parseFloat(document.getElementById('budget-transport').value);
    budgets.Entertainment = parseFloat(document.getElementById('budget-entertainment').value);
    budgets.Utilities = parseFloat(document.getElementById('budget-utilities').value);

    updateChart();
}

function displayExpenses() {
    const expenseList = document.getElementById('expenses');
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerText = `${expense.name} - $${expense.amount} (${expense.category})`;
        expenseList.appendChild(li);
    });
}

function updateChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const expenseData = {
        labels: ['Food', 'Transport', 'Entertainment', 'Utilities'],
        datasets: [{
            label: 'Expenses',
            data: [
                expenses.filter(e => e.category === 'Food').reduce((sum, e) => sum + e.amount, 0),
                expenses.filter(e => e.category === 'Transport').reduce((sum, e) => sum + e.amount, 0),
                expenses.filter(e => e.category === 'Entertainment').reduce((sum, e) => sum + e.amount, 0),
                expenses.filter(e => e.category === 'Utilities').reduce((sum, e) => sum + e.amount, 0)
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Budgets',
            data: [
                budgets.Food,
                budgets.Transport,
                budgets.Entertainment,
                budgets.Utilities
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: expenseData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize
displayExpenses();
updateChart();
