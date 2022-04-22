import React from 'react';
import TodoList from "../TodoList";
import {daysType} from "../AppWithRedux";

const DaysContainer = ({days}: {days: daysType[]}) => {
	return (

		<div className="days_container">
			{days.map((el) =>{
				return (
					<div 	key={el.id}>
						<TodoList
							el={el}
							//	tasks={tasks}
							//onChangeWeekDayTitle={onChangeWeekDayTitle}
							// onChangeTaskTitleName={onChangeTaskTitleName}
							//	removeDay={removeDay}
							//sortTitlesOnButtonStatus={sortTitlesOnButtonStatus}
							// removeTitle={removeTitle}
							// changeTitleStatus={changeTitleStatus}
							// addTitle={addTitle}
						/>
					</div>
				)
			})}
		</div>
	);
};

export default React.memo(DaysContainer) ;
