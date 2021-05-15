import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2021, 3 , 25);
    const expenseName = 'Drinks';
    const expenseCost = 4568;
    return (
        <div className = "expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className = "expense-item__description">
                <h2>{expenseName}</h2>
                <div className = "expense-item__price">${expenseCost}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;