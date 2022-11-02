import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
	}

	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;

/*map 사용시 key의 이유 우리가 추가한 새아이템이 특정 state를
			갖고있다면 새 아이템은 이전 아이템을 덮어쓴다 거기에 있을 수도
			있는 어떤 상태의 변화는 사라지고 잠재적 성능 이슈나 버그가
			발생할 수 있음 */
