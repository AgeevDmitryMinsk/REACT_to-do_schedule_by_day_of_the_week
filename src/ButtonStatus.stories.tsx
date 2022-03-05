import React, {useState} from 'react';

import {ButtonStatus, ButtonStatusType} from "./ButtonStatus";
import {daysType, tasksValueType} from "./App";
import {v1} from "uuid";
import './App.css';


export default {
	title: 'ButtonStatusX',
	component: ButtonStatus,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}

const mondayID = v1()
const tuesdayID = v1()
const wednesdayID = v1()
const thursdayID = v1()
const fridayID = v1()
const saturdayID = v1()
const sundayID = v1()


export const ButtonStatusX: React.FC<ButtonStatusType> = (
	{
		//onCLickButtonStatusHandle,
		// dayID,
		// filter

	}
) => {
	// let ButtonStyleALL = filter === `all` ? `active` : ``
	// let ButtonStyleCompleted = filter === `completed` ? `active` : ``
	// let ButtonStyleUnCompleted = filter === `uncompleted` ? `active` : ``
	const [days, setDays] = useState<daysType[]>([
			{id: mondayID, title: `Monday`, filter: "all"},
			{id: tuesdayID, title: `Tuesday`, filter: "all"},
			{id: wednesdayID, title: `Wednesday`, filter: "all"},
			{id: thursdayID, title: `Thursday`, filter: "all"},
			{id: fridayID, title: `Friday`, filter: "all"},
			{id: saturdayID, title: `Saturday`, filter: "all"},
			{id: sundayID, title: `Saturday`, filter: "all"},
		]
	)
	const [filter, setFilter] = useState<tasksValueType>(`all`)

	function sortTitlesOnButtonStatus(dayID: string, value: tasksValueType) {
		setDays([...days.map(el => el.id === dayID
			? {...el, filter: value}
			: el)])
	}

	function onCLickButtonStatusHandle(dayID: string, value: tasksValueType) {
		//sortTitlesOnButtonStatus(dayID, value)
		setFilter(value)
	}

	return (<>
			{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `all`)}*/}
			{/*				className={ButtonStyleALL}>*/}
			{/*	all*/}
			{/*</button>*/}
			{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `completed`)}*/}
			{/*				className={ButtonStyleCompleted}>*/}
			{/*	completed*/}
			{/*</button>*/}
			{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `uncompleted`)}*/}
			{/*				className={ButtonStyleUnCompleted}>*/}
			{/*	uncompleted*/}
			{/*</button>*/}

			<ButtonStatus
				filter={filter}
				onCLickButtonStatusHandle={onCLickButtonStatusHandle}
				dayID={`dayID-dfgdfgdf`}
			/>

		</>

	)


}


//
// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	primary: true,
// 	label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// };
