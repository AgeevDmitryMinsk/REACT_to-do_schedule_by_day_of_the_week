//import { tasksType } from '../App'
import {v1} from "uuid";
import {tasksType} from "../AppWithRedux";


export const mondayID = `mondayID___v1()_with_localStorage` //v1()
export const tuesdayID = `tuesdayID___v1()_with_localStorage` //v1()
export const wednesdayID = `wednesdayID___v1()_with_localStorage` //v1()
export const thursdayID = `thursdayID___v1()_with_localStorage` //v1()
export const fridayID = `fridayID___v1()_with_localStorage` //v1()
export const saturdayID = `saturdayID___v1()_with_localStorage` // v1()
export const sundayID = `sundayID___v1()_with_localStorage` //v1()

const initialState: { [key: string]: tasksType[] } = {
    [mondayID]: [
        { id: v1(), title: '1st _ job ', isDone: true },
        { id: v1(), title: '2nd _ job ', isDone: false },
        { id: v1(), title: '3th _ job ', isDone: false },
        { id: v1(), title: '4th _ job ', isDone: false },
        { id: v1(), title: '5th _ job ', isDone: false },
        { id: v1(), title: '6th _ job ', isDone: false },
        { id: v1(), title: '7th _ job ', isDone: false },
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
}

export const tasksReducer = (
    state: { [key: string]: tasksType[] } = initialState,
    action: tasksReducerType
): { [key: string]: tasksType[] } => {
    switch (action.title) {
        case 'ADD-TITLE_TASKS': {
            console.log('ADD-TITLE_TASKS')
            let newTask = {
                id: action.payload.newID,
                title: action.payload.inpTitle,
                isDone: false,
            }
            const day = state[action.payload.dayID]
            if (day) {
                day.push(newTask)
            }
            //setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
            return { ...state }
        }
        case 'REMOVE-TITLE_TASKS': {
            //console.log("REMOVE-TITLE_TASKS")
            //setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
            const dayTasks = state[action.payload.dayID]

            if (dayTasks) {
                state[action.payload.dayID] = dayTasks.filter(
                    (el) => el.id !== action.payload.taskID
                )
            }
            return { ...state }
        }
        case 'CHANGE-TITLE_TASKS-STATUS': {
            console.log('CHANGE-TITLE_TASKS-STATUS')
            const dayTasks = state[action.payload.dayID]
            if (dayTasks) {
                //setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID ? {...el, isDone: !isDoneTask}: el)})
                state[action.payload.dayID] = dayTasks.map((el) =>
                    el.id === action.payload.taskID
                        ? {
                              ...el,
                              isDone: !action.payload.isDoneTask,
                          }
                        : el
                )
            }
            return { ...state }
        }
        case 'CHANGE-TITLE_TASKS-NAME': {
            console.log('CHANGE-TITLE_TASKS-NAME')
            const dayTasks = state[action.payload.dayID]
            if (dayTasks) {
                //setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID? {...el, title: newTitle}: el)	})
                state[action.payload.dayID] = dayTasks.map((el) =>
                    el.id === action.payload.taskID
                        ? {
                              ...el,
                              title: action.payload.newTitle,
                          }
                        : el
                )
            }
            console.log('state', state)
            return { ...state }
        }
        case 'ADD-NEW-DAY': {
            console.log('ADD-NEW-DAY')
            //setTasks({...tasks, [newTodoListID]: []}
            return { ...state, [action.payload.newTodoListID]: [] }
        }
        case 'CHANGE-LOCAL-STORAGE-TASKS': {
            return action.payload.tasks
        }

        default:
            return state
    }
}

type tasksReducerType =
    | addTitleTasksACType
    | removeTitleTasksACType
    | changeTitleStatusACType
    | onChangeTaskTitleNameACType
    | addNewTodoListACType
    | tasksLocalStorageACType

export type addTitleTasksACType = ReturnType<typeof addTitleTasksAC>

export const addTitleTasksAC = (
    dayID: string,
    inpTitle: string,
    newID: string
) => {
    return {
        title: 'ADD-TITLE_TASKS',
        payload: {
            dayID,
            inpTitle,
            newID,
        },
    } as const // !!!!!!!!!!!!!!!!
}

export type removeTitleTasksACType = ReturnType<typeof removeTitleTasksAC>

export const removeTitleTasksAC = (dayID: string, taskID: string) => {
    return {
        title: 'REMOVE-TITLE_TASKS',
        payload: {
            dayID,
            taskID,
        },
    } as const
}

export type changeTitleStatusACType = ReturnType<typeof changeTitleStatusAC>
export const changeTitleStatusAC = (
    dayID: string,
    taskID: string,
    isDoneTask: boolean
) => {
    return {
        title: 'CHANGE-TITLE_TASKS-STATUS',
        payload: {
            dayID,
            taskID,
            isDoneTask,
        },
    } as const
}

export type onChangeTaskTitleNameACType = ReturnType<
    typeof onChangeTaskTitleNameAC
>
export const onChangeTaskTitleNameAC = (
    dayID: string,
    taskID: string,
    newTitle: string
) => {
    return {
        title: 'CHANGE-TITLE_TASKS-NAME',
        payload: {
            dayID,
            taskID,
            newTitle,
        },
    } as const // !!!!!!!!!!!!!!!!
}

export type addNewTodoListACType = ReturnType<typeof addNewTodoEmptyListAC>
export const addNewTodoEmptyListAC = (newTodoListID: string) => {
    return {
        title: 'ADD-NEW-DAY',
        payload: {
            newTodoListID,
        },
    } as const // !!!!!!!!!!!!!!!!
}

export type tasksLocalStorageACType = ReturnType<typeof tasksLocalStorageAC>
export const tasksLocalStorageAC = (tasks: { [key: string]: tasksType[] }) => {
    return {
        title: 'CHANGE-LOCAL-STORAGE-TASKS',
        payload: {
            tasks,
        },
    } as const
}
