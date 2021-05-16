import {useState} from 'react'

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Multi State Combined Approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountchangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const datechangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSumbitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amout: enteredAmount,
            Date: new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (
        <div className ='new-Expense'>
        <form onChange = {formSumbitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type = 'text' value = {enteredTitle} onChange = {titleChangeHandler}></input>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min = '0.01' step = '0.01' value = {enteredAmount} onChange = {amountchangeHandler}></input>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = '2019-01-01' max = '2022-12-31' value = {enteredDate} onChange = {datechangeHandler}></input>
                </div>
            </div>
            <div className = 'new-expense__actions'>
                <button type ='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    </div>
    )
}
export default ExpenseForm;