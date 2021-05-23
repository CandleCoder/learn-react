import { useState } from 'react';

import Card from '../GenericUI/Card';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  console.log("expense se aaya", props)

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    
return (
  <div>
    <Card className = 'expenses' >
     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {props.items.map(expense => 
        <ExpenseItem
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
     )}
    </Card>
  </div>
)
}
export default Expenses;