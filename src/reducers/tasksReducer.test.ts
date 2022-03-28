import {
    fridayID,
    mondayID,
    saturdayID,
    sundayID,
    tasksType,
    thursdayID,
    tuesdayID,
    wednesdayID,
} from '../App'

import {
    addNewTodoEmptyListAC,
    addTitleTasksAC,
    changeTitleStatusAC,
    onChangeTaskTitleNameAC,
    removeTitleTasksAC,
    tasksLocalStorageAC,
    tasksReducer,
} from './tasksReducer'
import { v1 } from 'uuid'

let startState: { [key: string]: tasksType[] }

beforeEach(
    () =>
        (startState = {
            [mondayID]: [
                { id: v1(), title: '1st _ job ', isDone: true },
                { id: v1(), title: '2nd _ job ', isDone: false },
                { id: v1(), title: '3th _ job ', isDone: false },
                { id: v1(), title: '4th _ job ', isDone: false },
                { id: v1(), title: '5th _ job ', isDone: false },
                { id: v1(), title: '6th _ job ', isDone: false },
                { id: v1(), title: '7th _ job ', isDone: true },
            ],
            [tuesdayID]: [
                { id: v1(), title: '10th  _ job ', isDone: true },
                { id: v1(), title: '11th  _ job ', isDone: false },
                { id: v1(), title: '12th  _ job ', isDone: false },
                { id: v1(), title: '13th  _ job ', isDone: false },
                { id: v1(), title: '14th  _ job ', isDone: false },
                { id: v1(), title: '15th  _ job ', isDone: false },
                { id: v1(), title: '16th  _ job ', isDone: false },
            ],
            [wednesdayID]: [
                { id: v1(), title: '17th  _ job ', isDone: true },
                { id: v1(), title: '18th  _ job ', isDone: false },
                { id: v1(), title: '19th  _ job ', isDone: false },
                { id: v1(), title: '20th  _ job ', isDone: false },
                { id: v1(), title: '21th  _ job ', isDone: false },
                { id: v1(), title: '22th  _ job ', isDone: false },
                { id: v1(), title: '23th  _ job ', isDone: false },
            ],
            [thursdayID]: [
                { id: v1(), title: '25th  _ job ', isDone: true },
                { id: v1(), title: '26th  _ job ', isDone: false },
                { id: v1(), title: '27th  _ job ', isDone: false },
                { id: v1(), title: '28th  _ job ', isDone: false },
                { id: v1(), title: '29th  _ job ', isDone: false },
                { id: v1(), title: '30th  _ job ', isDone: false },
                { id: v1(), title: '31th  _ job ', isDone: false },
            ],
            [fridayID]: [
                { id: v1(), title: '35th  _ job ', isDone: true },
                { id: v1(), title: '36th  _ job ', isDone: false },
                { id: v1(), title: '37th  _ job ', isDone: false },
                { id: v1(), title: '38th  _ job ', isDone: false },
                { id: v1(), title: '39th  _ job ', isDone: false },
                { id: v1(), title: '40th  _ job ', isDone: false },
                { id: v1(), title: '41th  _ job ', isDone: false },
            ],
            [saturdayID]: [
                { id: v1(), title: '45th  _ job ', isDone: true },
                { id: v1(), title: '46th  _ job ', isDone: false },
                { id: v1(), title: '47th  _ job ', isDone: false },
                { id: v1(), title: '48th  _ job ', isDone: false },
                { id: v1(), title: '49th  _ job ', isDone: false },
                { id: v1(), title: '50th  _ job ', isDone: false },
                { id: v1(), title: '51th  _ job ', isDone: false },
            ],
            [sundayID]: [
                { id: v1(), title: '52th  _ job ', isDone: false },
                { id: v1(), title: '53th  _ job ', isDone: false },
                { id: v1(), title: '54th  _ job ', isDone: false },
                { id: v1(), title: '55th  _ job ', isDone: false },
                { id: v1(), title: '56th  _ job ', isDone: false },
                { id: v1(), title: '57th  _ job ', isDone: false },
                { id: v1(), title: '58th  _ job ', isDone: false },
            ],
        })
)

test('correct task should be removed from correct the Week Schedule', () => {
    const endState = tasksReducer(
        startState,
        removeTitleTasksAC(mondayID, startState[mondayID][0].id)
    )

    expect(endState[mondayID].length).toBe(6)
    expect(endState[mondayID][0].title).toBe('2nd _ job ')
    //console.log(`removeTitleTasksAC`, endState)
})

test('correct task todolist should be added to correct Day of the Week Schedule', () => {
    let newTaskListTitle = 'New_TaskListTitle'
    let newTaskListTitleID = 'New_TaskListTitle_ID'

    const endState = tasksReducer(
        startState,
        addTitleTasksAC(sundayID, newTaskListTitle, newTaskListTitleID)
    )

    expect(endState[sundayID].length).toBe(8)
    expect(endState[sundayID][7].title).toBe(newTaskListTitle)
    console.log(`addTitleTasksAC_Test`, endState[sundayID][7].title)
})

test('correct task todolist should change Title Status at the correct Day of the Week Schedule', () => {
    let changedTaskID = startState[sundayID][6].id
    let changedTaskID_Status = startState[sundayID][6].isDone

    const endState = tasksReducer(
        startState,
        changeTitleStatusAC(sundayID, changedTaskID, changedTaskID_Status)
    )

    expect(endState[sundayID][6].isDone).toBe(true)

    console.log(`changeTitleStatusAC_Test`, endState[sundayID][6].isDone)
})

test('correct сhange Task Title Name at the correct Day of the Week Schedule', () => {
    let changedTaskID = startState[tuesdayID][5].id
    let changedTaskID_newTitle = 'Hello onChangeTaskTitleNameAC TEST'

    const endState = tasksReducer(
        startState,
        onChangeTaskTitleNameAC(
            tuesdayID,
            changedTaskID,
            changedTaskID_newTitle
        )
    )

    expect(endState[tuesdayID][5].title).toBe(changedTaskID_newTitle)

    console.log(`XXX_changedTaskID_newTitle_Test`, endState[tuesdayID][5].title)
})

test('correct add New Day + Empty TodoList at the Week Schedule', () => {
    let newTodoListID = `New_Day_ID`

    const endState = tasksReducer(
        startState,
        addNewTodoEmptyListAC(newTodoListID)
    )

    expect(endState[newTodoListID]).toStrictEqual([])

    console.log(`VVV_addNewTodoEmptyListAC`, endState[newTodoListID])
})

test('correct change tasks LocalStorage at the Week Schedule', () => {
    let tasksLocalStorage = {
        [mondayID]: [
            { id: v1(), title: '1st _ job ', isDone: true },
            { id: v1(), title: '2nd _ job ', isDone: false },
            { id: v1(), title: '6th _ job ', isDone: false },
            { id: v1(), title: '7th _ job ', isDone: true },
        ],
        [tuesdayID]: [
            { id: v1(), title: '10th  _ job ', isDone: true },
            { id: v1(), title: '11th  _ job ', isDone: false },
            { id: v1(), title: '15th  _ job ', isDone: false },
            { id: v1(), title: '16th  _ job ', isDone: true },
        ],
    }

    const endState = tasksReducer(
        startState,
        tasksLocalStorageAC(tasksLocalStorage)
    )

    expect(endState).toBe(tasksLocalStorage)

    console.log(`___addNewTodoEmptyListAC`, endState)
})
