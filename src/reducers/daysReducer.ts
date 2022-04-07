// import { daysType, tasksValueType } from '../App'
// import {fridayID, mondayID, saturdayID, sundayID, thursdayID, tuesdayID, wednesdayID} from "../AppWithRedux";

import {daysType, tasksValueType} from "../AppWithRedux";
import {fridayID, mondayID, saturdayID, sundayID, thursdayID, tuesdayID, wednesdayID} from "./tasksReducer";

const initialDays: daysType[] = [
    { id: mondayID, title: `Monday`, filter: 'all' },
    { id: tuesdayID, title: `Tuesday`, filter: 'all' },
    { id: wednesdayID, title: `Wednesday`, filter: 'all' },
    { id: thursdayID, title: `Thursday`, filter: 'all' },
    { id: fridayID, title: `Friday`, filter: 'all' },
    { id: saturdayID, title: `Saturday`, filter: 'all' },
    { id: sundayID, title: `Sunday`, filter: 'all' },
]

export const daysReducer = (
    state: daysType[] = initialDays,
    action: daysReducerType
): Array<daysType> => {
    switch (action.type) {
        case 'ADD-NEW-TODO-LIST': {
            console.log('ADD-NEW-TODO-LIST')
            //setDays([...days, {id: newTodoListID, title: newTodoListTitle, filter: "all"}])
            return [
                ...state,
                {
                    id: action.payload.newTodoListID,
                    title: action.payload.newTodoListTitle,
                    filter: 'all',
                },
            ]
        }

        case 'SORT-TITLES-ON-BUTTON-STATUS': {
            console.log('SORT-TITLES-ON-BUTTON-STATUS')
            //setDays([...days.map(el => el.id === dayID ? {...el, filter: value} : el)])  !!!!!!
            return [
                ...state.map((el) =>
                    el.id === action.payload.dayID
                        ? { ...el, filter: action.payload.value }
                        : el
                ),
            ]
        }
        case 'REMOVE-DAY': {
            console.log('REMOVE-DAY')
            //setDays([...days.filter(el => el.id !== dayID)])   !!!!!!!
            return [...state.filter((el) => el.id !== action.payload.dayID)]
        }
        case 'CHANGE-WEEKDAY-TITLE': {
            console.log('CHANGE-WEEKDAY-TITLE')
            // setDays([...days.map(el => el.id === dayID ? {...el, title: newWeekDayTitle} : el)]) !!!!
            return [
                ...state.map((el) =>
                    el.id === action.payload.dayID
                        ? { ...el, title: action.payload.newWeekDayTitle }
                        : el
                ),
            ]
        }
        case 'CHANGE-LOCAL-STORAGE-DAYS': {
            //setTasks(parsedtasksObject)
            return action.payload.days
        }

        default:
            return state
    }
}

//type daysReducerType = addNewTodoListACType | sortTitlesOnButtonStatusACType | removeDayACType | onChangeWeekDayTitleACType | daysLocalStorageACType
type daysReducerType = ReturnType<PropertiesType<typeof actions>>
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export const actions = {
    addNewTodoListTitleAC: (
        newTodoListID: string,
        newTodoListTitle: string
    ) => {
        return {
            type: 'ADD-NEW-TODO-LIST',
            payload: {
                newTodoListID,
                newTodoListTitle,
            },
        } as const
    },

    sortTitlesOnButtonStatusAC: (dayID: string, value: tasksValueType) => {
        return {
            type: 'SORT-TITLES-ON-BUTTON-STATUS',
            payload: {
                dayID,
                value,
            },
        } as const
    },
    removeDayAC: (dayID: string) => {
        return {
            type: 'REMOVE-DAY',
            payload: {
                dayID,
            },
        } as const
    },
    onChangeWeekDayTitleAC: (dayID: string, newWeekDayTitle: string) => {
        return {
            type: 'CHANGE-WEEKDAY-TITLE',
            payload: {
                dayID,
                newWeekDayTitle,
            },
        } as const
    },
    daysLocalStorageAC: (days: daysType[]) => {
        return {
            type: 'CHANGE-LOCAL-STORAGE-DAYS',
            payload: {
                days,
            },
        } as const
    },
}

// export type addNewTodoListACType = ReturnType<typeof addNewTodoListTitleAC>
// export const addNewTodoListTitleAC = (newTodoListID: string, newTodoListTitle: string) => {
// 	return {
// 		title: "ADD-NEW-TODO-LIST",
// 		payload: {
// 			newTodoListID, newTodoListTitle
// 		}
// 	} as const
// }
// export type sortTitlesOnButtonStatusACType = ReturnType<typeof sortTitlesOnButtonStatusAC>
// export const sortTitlesOnButtonStatusAC = (dayID: string, value: tasksValueType) => {
// 	return {
// 		title: "SORT-TITLES-ON-BUTTON-STATUS",
// 		payload: {
// 			dayID, value
// 		}
// 	} as const
// }
// export type removeDayACType = ReturnType<typeof removeDayAC>
// export const removeDayAC = (dayID: string) => {
// 	return {
// 		title: "REMOVE-DAY",
// 		payload: {
// 			dayID
// 		}
// 	} as const
// }
// export type onChangeWeekDayTitleACType = ReturnType<typeof onChangeWeekDayTitleAC>
// export const onChangeWeekDayTitleAC = (dayID: string, newWeekDayTitle: string) => {
// 	return {
// 		title: "CHANGE-WEEKDAY-TITLE",
// 		payload: {
// 			dayID, newWeekDayTitle
// 		}
// 	} as const
// }
// export type daysLocalStorageACType = ReturnType<typeof daysLocalStorageAC>
// export const daysLocalStorageAC = (days:daysType[]) => {
// 	return{
// 		title: "CHANGE-LOCAL-STORAGE-DAYS",
// 		payload: {
// 			days
// 		}
//
// 	} as const
// }
