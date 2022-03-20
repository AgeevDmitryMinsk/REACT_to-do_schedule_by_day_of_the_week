import {
	addNewTodoListTitleAC, daysLocalStorageAC,
	daysReducer,
	onChangeWeekDayTitleAC,
	removeDayAC,
	sortTitlesOnButtonStatusAC
} from "./daysReducer";
import {
	daysType,
	fridayID,
	initialDays, mondayID, saturdayID,
	sundayID, tasksValueType, thursdayID, tuesdayID, wednesdayID
} from "../App";


test('correct day should be removed from the Week Schedule', () => {


	const startState: daysType[] =  [
		{id: mondayID, title: `Monday`, filter: `all`},
		{id: tuesdayID, title: `Tuesday`, filter: `all`},
		{id: wednesdayID, title: `Wednesday`, filter: `all`},
		{id: thursdayID, title: `Thursday`, filter: `all`},
		{id: fridayID, title: `Friday`, filter: `all`},
		{id: saturdayID, title: `Saturday`, filter: `all`},
		{id: sundayID, title: `Sunday`, filter: `all`},
	]

	const endState = daysReducer(startState,
		removeDayAC(fridayID)
	)

	expect(endState.length).toBe(6);
	expect(endState[5].id).toBe(sundayID);
	console.log(endState)
});


test('correct day todolist should be added', () => {


	const startState: daysType[] =  [
		{id: mondayID, title: `Monday`, filter: `all`},
		{id: tuesdayID, title: `Tuesday`, filter: `all`},
		{id: wednesdayID, title: `Wednesday`, filter: `all`},
		{id: thursdayID, title: `Thursday`, filter: `all`},
		{id: fridayID, title: `Friday`, filter: `all`},
		{id: saturdayID, title: `Saturday`, filter: `all`},
		{id: sundayID, title: `Sunday`, filter: `all`},
	]
	let newDayListTitle = "New_DayListTitle";
	let newTodoListID = "New_DayListTitle_ID"



	const endState = daysReducer(startState,
		addNewTodoListTitleAC(newTodoListID, newDayListTitle)

	)

	expect(endState.length).toBe(8);
	expect(endState[7].title).toBe(newDayListTitle);
	console.log(endState)
});

test('correct sort Titles On Button Status at the correct day', () => {


	const startState: daysType[] =  [
		{id: mondayID, title: `Monday`, filter: `all`},
		{id: tuesdayID, title: `Tuesday`, filter: `all`},
		{id: wednesdayID, title: `Wednesday`, filter: `all`},
		{id: thursdayID, title: `Thursday`, filter: `all`},
		{id: fridayID, title: `Friday`, filter: `all`},
		{id: saturdayID, title: `Saturday`, filter: `all`},
		{id: sundayID, title: `Sunday`, filter: `all`},
	]
	let dayID = `sundayID`
	let value_at_endState: tasksValueType = 'completed'



	const endState = daysReducer(startState,
		sortTitlesOnButtonStatusAC(sundayID, value_at_endState)
	)

	expect(endState[6].filter).toBe(value_at_endState);
	console.log(endState)
});

test('correct Change WeekDay Title at the correct day', () => {


	const startState: daysType[] =  [
		{id: mondayID, title: `Monday`, filter: `all`},
		{id: tuesdayID, title: `Tuesday`, filter: `all`},
		{id: wednesdayID, title: `Wednesday`, filter: `all`},
		{id: thursdayID, title: `Thursday`, filter: `all`},
		{id: fridayID, title: `Friday`, filter: `all`},
		{id: saturdayID, title: `Saturday`, filter: `all`},
		{id: sundayID, title: `Sunday`, filter: `all`},
	]
	let dayID = wednesdayID
	let newWeekDayTitle = `wednesday => sunday`



	const endState = daysReducer(startState,
		onChangeWeekDayTitleAC(dayID, newWeekDayTitle)
	)

	expect(endState[2].title).toBe(newWeekDayTitle);
	console.log(endState)
});

test('correct days LocalStorage', () => {


	const startState: daysType[] =  [
		{id: mondayID, title: `Monday`, filter: `all`},
		{id: tuesdayID, title: `Tuesday`, filter: `all`},
		{id: wednesdayID, title: `Wednesday`, filter: `all`},
		{id: thursdayID, title: `Thursday`, filter: `all`},
		{id: fridayID, title: `Friday`, filter: `all`},
		{id: saturdayID, title: `Saturday`, filter: `all`},
		{id: sundayID, title: `Sunday`, filter: `all`},
	]
	let days_in_localStorage_Test: daysType[] = [
		{id: saturdayID, title: `Saturday`, filter: `completed`},
		{id: sundayID, title: `Sunday`, filter: `uncompleted`},
	]



	const endState = daysReducer(startState,
		daysLocalStorageAC(days_in_localStorage_Test)
	)

	expect(endState.length).toBe(2);
	expect(endState[0].title).toBe(`Saturday`);
	expect(endState[1].filter).toBe(`uncompleted`);
	console.log(endState)
});
