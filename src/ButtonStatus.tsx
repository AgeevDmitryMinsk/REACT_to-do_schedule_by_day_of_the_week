import React from 'react';
import {tasksValueType} from "./App";

export type ButtonStatusType = {
	onCLickButtonStatusHandle: (dayID: string, valueB: tasksValueType) => void
	dayID: string
	filter: tasksValueType
}

export const ButtonStatus: React.FC<ButtonStatusType> =
	({
		 onCLickButtonStatusHandle,
		dayID,
		 filter

	 }) => {

		let ButtonStyleALL = filter === `all` ? `active` : ``
		let ButtonStyleCompleted = filter === `completed` ? `active` : ``
		let ButtonStyleUnCompleted = filter === `uncompleted` ? `active` : ``

		return (
			<div>

				<button onClick={() => onCLickButtonStatusHandle(dayID, `all`)}
								className={ButtonStyleALL}>
					all
				</button>
				<button onClick={() => onCLickButtonStatusHandle(dayID, `completed`)}
								className={ButtonStyleCompleted}>
					completed
				</button>
				<button onClick={() => onCLickButtonStatusHandle(dayID, `uncompleted`)}
								className={ButtonStyleUnCompleted}>
					uncompleted
				</button>

			</div>
		);
	};

