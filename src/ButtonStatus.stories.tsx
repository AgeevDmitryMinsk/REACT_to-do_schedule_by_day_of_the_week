import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

//import { Button } from './Button';
import {ButtonStatus} from "./ButtonStatus";
import {daysType, tasksValueType} from "./App";
import {v1} from "uuid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ButtonStatus',
	component: ButtonStatus,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {control: 'color'},
	},
}
//as ComponentMeta<typeof ButtonStatusType>;

export const ButtonStatusX = () => {
	const mondayID = v1()
	const tuesdayID = v1()
	const wednesdayID = v1()
	const thursdayID = v1()
	const fridayID = v1()
	const saturdayID = v1()
	const sundayID = v1()

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

	function sortTitlesOnButtonStatus(dayID: string, value: tasksValueType) {
		setDays([...days.map(el => el.id === dayID
			? {...el, filter: value}
			: el)])
	}
	return <ButtonStatus
		filter="all"
		onCLickButtonStatusHandle={() => sortTitlesOnButtonStatus(sundayID, 'all')}
	dayID={sundayID}/>

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
