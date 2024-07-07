// data.js
let expenses = [
    {
        id: 1,
        date: '2022-01-01',
        category: 'Food',
        amount: 20.00
    },
    {
        id: 2,
        date: '2022-01-05',
        category: 'Transportation',
        amount: 15.00
    },
    {
        id: 3,
        date: '2022-01-10',
        category: 'Entertainment',
        amount: 30.00
    },
    {
        id: 4,
        date: '2022-01-12',
        category: 'Food',
        amount: 25.00
    },
    {
        id: 5,
        date: '2022-01-15',
        category: 'Housing',
        amount: 100.00
    },
    {
        id: 6,
        date: '2022-01-18',
        category: 'Clothing',
        amount: 40.00
    },
    {
        id: 7,
        date: '2022-01-20',
        category: 'Transportation',
        amount: 20.00
    },
    {
        id: 8,
        date: '2022-01-22',
        category: 'Entertainment',
        amount: 25.00
    },
    {
        id: 9,
        date: '2022-01-25',
        category: 'Food',
        amount: 30.00
    },
    {
        id: 10,
        date: '2022-01-28',
        category: 'Housing',
        amount: 120.00
    }
];

let categories = [
    'Food',
    'Transportation',
    'Entertainment',
    'Housing',
    'Clothing'
];

// function to add expense
function addExpense(expense) {
    expenses.push(expense);
    saveData();
}

// function to get all expenses
function getExpenses() {
    return expenses;
}

// function to get all categories
function getCategories() {
    return categories;
}

// function to add category
function addCategory(category) {
    categories.push(category);
    saveData();
}

// function to save data to local storage
function saveData() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('categories', JSON.stringify(categories));
}

// function to load data from local storage
function loadData() {
    expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    categories = JSON.parse(localStorage.getItem('categories')) || [];
}

loadData();

export { addExpense, getExpenses, getCategories, addCategory };