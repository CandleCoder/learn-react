import {useState} from 'react'

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        setEnteredTitle: '',
        setEnteredAmount: '',
        setEnteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                setEnteredTitle: event.target.value
            }
        });
    }

    const amounthangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                setEnteredAmount: event.target.value
            }
        });
    }

    const datehangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                setEnteredDate: event.target.value
            }
        });
    }

    return (
        <div className ='new-Expense'>
        <form>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type = 'text' onChange = {titleChangeHandler}></input>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min = '0.01' step = '0.01' onChange = {amounthangeHandler}></input>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = '2019-01-01' max = '2022-12-31' onChange = {datehangeHandler}></input>
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