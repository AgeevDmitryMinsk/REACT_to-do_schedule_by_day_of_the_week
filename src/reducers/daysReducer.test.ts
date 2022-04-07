import { actions, daysReducer } from './daysReducer'
// import {
//     daysType,
//
// } from '../App'
import {fridayID, mondayID, saturdayID, sundayID, thursdayID, tuesdayID, wednesdayID} from "./tasksReducer";
import {daysType, tasksValueType} from "../AppWithRedux";

let startState: daysType[]

//вынес переменную startState из каждого теста наверх и убрал ее объявление через let/const
beforeEach(() => {
    startState = [
        { id: mondayID, title: `Monday`, filter: `all` },
        { id: tuesdayID, title: `Tuesday`, filter: `all` },
        { id: wednesdayID, title: `Wednesday`, filter: `all` },
        { id: thursdayID, title: `Thursday`, filter: `all` },
        { id: fridayID, title: `Friday`, filter: `all` },
        { id: saturdayID, title: `Saturday`, filter: `all` },
        { id: sundayID, title: `Sunday`, filter: `all` },
    ]
})

test('correct day should be removed from the Week Schedule', () => {
    const endState = daysReducer(startState, actions.removeDayAC(fridayID))

    expect(endState.length).toBe(6)
    expect(endState[5].id).toBe(sundayID)
    console.log(endState)
})

test('correct day todolist should be added', () => {
    let newDayListTitle = 'New_DayListTitle'
    let newTodoListID = 'New_DayListTitle_ID'

    const endState = daysReducer(
        startState,
        actions.addNewTodoListTitleAC(newTodoListID, newDayListTitle)
    )

    expect(endState.length).toBe(8)
    expect(endState[7].title).toBe(newDayListTitle)
    console.log(endState)
})

test('correct sort Titles On Button Status at the correct day', () => {
    //let dayID = `sundayID`
    let value_at_endState: tasksValueType = 'completed'

    const endState = daysReducer(
        startState,
        actions.sortTitlesOnButtonStatusAC(sundayID, value_at_endState)
    )

    expect(endState[6].filter).toBe(value_at_endState)
    console.log(endState)
})

test('correct Change WeekDay Title at the correct day', () => {
    let dayID = wednesdayID
    let newWeekDayTitle = `wednesday => sunday`

    const endState = daysReducer(
        startState,
        actions.onChangeWeekDayTitleAC(dayID, newWeekDayTitle)
    )

    expect(endState[2].title).toBe(newWeekDayTitle)
    console.log(endState)
})

test('correct days LocalStorage', () => {
    let days_in_localStorage_Test: daysType[] = [
        { id: saturdayID, title: `Saturday`, filter: `completed` },
        { id: sundayID, title: `Sunday`, filter: `uncompleted` },
    ]

    const endState = daysReducer(
        startState,
        actions.daysLocalStorageAC(days_in_localStorage_Test)
    )

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe(`Saturday`)
    expect(endState[1].filter).toBe(`uncompleted`)
    console.log(endState)
})
