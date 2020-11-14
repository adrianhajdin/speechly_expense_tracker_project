const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const createCategory = (category) => {
    return  { type: category, amount: 0, color: generateRandomColor() }
}

export const expenseCategories = [
    createCategory('Bills'),
    createCategory('Car'),
    createCategory('Clothes'),
    createCategory('Travel'),
    createCategory('Food'),
    createCategory('Shopping'),
    createCategory('House'),
    createCategory('Entertainment'),
    createCategory('Phone'),
    createCategory('Pets'),
    createCategory('Other'),
];

export const incomeCategories = [
    createCategory('Business'),
    createCategory('Investments'),
    createCategory('Extra income'),
    createCategory('Deposits'),
    createCategory('Lottery'),
    createCategory('Gifts'),
    createCategory('Salary'),
    createCategory('Savings'),
    createCategory('Rental income'),
];

export const resetCategories = () => {
    incomeCategories.forEach((iC) => {
        iC.amount = 0
    });

    expenseCategories.forEach((iC) => {
        iC.amount = 0
    });
}