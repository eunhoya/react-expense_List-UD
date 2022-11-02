import React, { useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: "",
	//   enteredAmount: "",
	//   enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput((prevvState) => {
		//   return { ...prevvState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredDate: event.target.value,
		// });
	};
	const submitHandler = (event) => {
		event.preventDefault();
		// if ((enteredTitle, enteredAmount, enteredDate < 1)) {
		// 	alert('내용을 입력해주세요');
		// } else {
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		/*여러 값을 추가할 때 해당 값은 숫자가 아닌 문자열로 추가됨
		단순히 숫자 변환을 실행하면 됩니다*/

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		// }
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle} // value를 추가하고 입력된 금액 다시 전달
						onChange={titleChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>amount</label>
					<input
						type='number'
						min='0.01'
						//step속성은 input 입력창의 숫자 간격을 설정
						step='0.01' //소수점 2자리까지 입력 설정
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
