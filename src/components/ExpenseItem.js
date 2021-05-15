import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className = "expense-item">
            <div>MAY 15 2021</div>
            <div className = "expense-item__description">
                <h2>Drinks</h2>
                <div className = "expense-item__price">$ 700.98</div>
            </div>
        </div>
    );
}
export default ExpenseItem;