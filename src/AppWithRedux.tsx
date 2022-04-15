import React, {
    useEffect,
    useReducer,
    //	useState
} from 'react'
import './App.css'
import { v1 } from 'uuid'
import TodoList from './TodoList'
import AddItemForm from './components/AddItemForm'
import ButtonAppBar from './components/ButtonAppBar'
import {
    addNewTodoEmptyListAC,
    addTitleTasksAC,
    changeTitleStatusAC,
    onChangeTaskTitleNameAC,
    //onChangeTaskTitleNameAC,
    removeTitleTasksAC,
    tasksLocalStorageAC,
    tasksReducer,
} from './reducers/tasksReducer'
import {
    actions,
    //addNewTodoListTitleAC, daysLocalStorageAC,
    daysReducer,
    //onChangeWeekDayTitleAC,
    //removeDayAC,
    //sortTitlesOnButtonStatusAC
} from './reducers/daysReducer'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}

export type daysType = {
    id: string
    title: string
    filter: tasksValueType
}

export type tasksValueType = `all` | `completed` | `uncompleted`

// export const mondayID = `mondayID___v1()_with_localStorage` //v1()
// export const tuesdayID = `tuesdayID___v1()_with_localStorage` //v1()
// export const wednesdayID = `wednesdayID___v1()_with_localStorage` //v1()
// export const thursdayID = `thursdayID___v1()_with_localStorage` //v1()
// export const fridayID = `fridayID___v1()_with_localStorage` //v1()
// export const saturdayID = `saturdayID___v1()_with_localStorage` // v1()
// export const sundayID = `sundayID___v1()_with_localStorage` //v1()

// export const initialTasks: { [key: string]: tasksType[] } = {
//     [mondayID]: [
//         { id: v1(), title: '1st _ job ', isDone: true },
//         { id: v1(), title: '2nd _ job ', isDone: false },
//         { id: v1(), title: '3th _ job ', isDone: false },
//         { id: v1(), title: '4th _ job ', isDone: false },
//         { id: v1(), title: '5th _ job ', isDone: false },
//         { id: v1(), title: '6th _ job ', isDone: false },
//         { id: v1(), title: '7th _ job ', isDone: false },
//     ],
//     [tuesdayID]: [
//         { id: v1(), title: '10th  _ job ', isDone: true },
//         { id: v1(), title: '11th  _ job ', isDone: false },
//         { id: v1(), title: '12th  _ job ', isDone: false },
//         { id: v1(), title: '13th  _ job ', isDone: false },
//         { id: v1(), title: '14th  _ job ', isDone: false },
//         { id: v1(), title: '15th  _ job ', isDone: false },
//         { id: v1(), title: '16th  _ job ', isDone: false },
//     ],
//     [wednesdayID]: [
//         { id: v1(), title: '17th  _ job ', isDone: true },
//         { id: v1(), title: '18th  _ job ', isDone: false },
//         { id: v1(), title: '19th  _ job ', isDone: false },
//         { id: v1(), title: '20th  _ job ', isDone: false },
//         { id: v1(), title: '21th  _ job ', isDone: false },
//         { id: v1(), title: '22th  _ job ', isDone: false },
//         { id: v1(), title: '23th  _ job ', isDone: false },
//     ],
//     [thursdayID]: [
//         { id: v1(), title: '25th  _ job ', isDone: true },
//         { id: v1(), title: '26th  _ job ', isDone: false },
//         { id: v1(), title: '27th  _ job ', isDone: false },
//         { id: v1(), title: '28th  _ job ', isDone: false },
//         { id: v1(), title: '29th  _ job ', isDone: false },
//         { id: v1(), title: '30th  _ job ', isDone: false },
//         { id: v1(), title: '31th  _ job ', isDone: false },
//     ],
//     [fridayID]: [
//         { id: v1(), title: '35th  _ job ', isDone: true },
//         { id: v1(), title: '36th  _ job ', isDone: false },
//         { id: v1(), title: '37th  _ job ', isDone: false },
//         { id: v1(), title: '38th  _ job ', isDone: false },
//         { id: v1(), title: '39th  _ job ', isDone: false },
//         { id: v1(), title: '40th  _ job ', isDone: false },
//         { id: v1(), title: '41th  _ job ', isDone: false },
//     ],
//     [saturdayID]: [
//         { id: v1(), title: '45th  _ job ', isDone: true },
//         { id: v1(), title: '46th  _ job ', isDone: false },
//         { id: v1(), title: '47th  _ job ', isDone: false },
//         { id: v1(), title: '48th  _ job ', isDone: false },
//         { id: v1(), title: '49th  _ job ', isDone: false },
//         { id: v1(), title: '50th  _ job ', isDone: false },
//         { id: v1(), title: '51th  _ job ', isDone: false },
//     ],
//     [sundayID]: [
//         { id: v1(), title: '52th  _ job ', isDone: false },
//         { id: v1(), title: '53th  _ job ', isDone: false },
//         { id: v1(), title: '54th  _ job ', isDone: false },
//         { id: v1(), title: '55th  _ job ', isDone: false },
//         { id: v1(), title: '56th  _ job ', isDone: false },
//         { id: v1(), title: '57th  _ job ', isDone: false },
//         { id: v1(), title: '58th  _ job ', isDone: false },
//     ],
// }

//console.log(initialTasks[sundayID][0].title) // = `52th  _ job`

// export const initialDays: daysType[] = [
//     { id: mondayID, title: `Monday`, filter: 'all' },
//     { id: tuesdayID, title: `Tuesday`, filter: 'all' },
//     { id: wednesdayID, title: `Wednesday`, filter: 'all' },
//     { id: thursdayID, title: `Thursday`, filter: 'all' },
//     { id: fridayID, title: `Friday`, filter: 'all' },
//     { id: saturdayID, title: `Saturday`, filter: 'all' },
//     { id: sundayID, title: `Sunday`, filter: 'all' },
// ]

export function AppWithRedux() {

    const dispatch = useDispatch()
    const tasks = useSelector<AppRootState, { [key: string]: tasksType[] }>(state => state.tasks)
    const days = useSelector<AppRootState, daysType[] >(state => state.days)
    //const [tasks, setTasks] = useState<{ [key: string]: tasksType[] }>(initialTasks)
    // const [tasks, tasksDispatch] = useReducer(tasksReducer, initialTasks)
    //
    // // const [days, setDays] = useState<daysType[]>([
    // const [days, daysDispatch] = useReducer(daysReducer, initialDays)
    //
    // //const [filter, setFilter] = useState<tasksValueType>(`all`) //- убрали/переместили в 87ю строку el.filter!!!

    //useEffect for tasks if 1st start
    // useEffect(() => {
    //     let tasksTakenFromLocalStorageString =
    //         localStorage.getItem('tasksLocalStorage')
    //     if (tasksTakenFromLocalStorageString) {
    //         let parsedTasksObject = JSON.parse(tasksTakenFromLocalStorageString)
    //         console.log(parsedTasksObject)
    //         //setTasks(parsedTasksObject)
    //         //tasksDispatch(tasksLocalStorageAC(parsedTasksObject))
    //         dispatch(tasksLocalStorageAC(parsedTasksObject))
    //     }
    // }, [])

    //useEffect for updated tasks (not for 1st start, in other words if localStorage already updated)
    // useEffect(
    //     () => localStorage.setItem(`tasksLocalStorage`, JSON.stringify(tasks)),
    //     [tasks]
    // )

    //useEffect for days if 1st start
    // useEffect(() => {
    //     let daysTakenFromLocalStorageString =
    //         localStorage.getItem(`daysLocalStorage`)
    //     if (daysTakenFromLocalStorageString) {
    //         let parsedDaysArray = JSON.parse(daysTakenFromLocalStorageString)
    //         console.log(parsedDaysArray)
    //         //setDays(parsedDaysArray)  !!!!!!!!
    //         // daysDispatch(actions.daysLocalStorageAC(parsedDaysArray))
    //         dispatch(actions.daysLocalStorageAC(parsedDaysArray))
    //     }
    // }, [])

    //useEffect for updated days (not for 1st start, in other words if localStorage already updated)
    // useEffect(
    //     () => localStorage.setItem(`daysLocalStorage`, JSON.stringify(days)),
    //     [days]
    // )

    function addTitle(dayID: string, inpTitle: string) {
        //setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
        let newID = v1()
        // tasksDispatch(addTitleTasksAC(dayID, inpTitle, newID))
         dispatch(addTitleTasksAC(dayID, inpTitle, newID))
    }

    function removeTitle(dayID: string, taskID: string) {
        //setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
        //tasksDispatch(removeTitleTasksAC(dayID, taskID))
        dispatch(removeTitleTasksAC(dayID, taskID))
    }

    function changeTitleStatus(
        dayID: string,
        taskID: string,
        isDoneTask: boolean
    ) {
        //setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID ? {...el, isDone: !isDoneTask}: el)})
        // tasksDispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
        dispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
    }

    function addNewTodoList(newTodoListTitle: string) {
        // должно быть 2 set!!! setDays+setTasks !!!!!
        let newTodoListID = v1()
        console.log(`newTodoListTitle in App`, newTodoListTitle)

        //setTasks({...tasks, [newTodoListID]: []})
        // tasksDispatch(addNewTodoEmptyListAC(newTodoListID))
         dispatch(addNewTodoEmptyListAC(newTodoListID))



        //setDays([...days, {id: newTodoListID, title: newTodoListTitle, filter: "all"},])
        // daysDispatch( actions.addNewTodoListTitleAC(newTodoListID, newTodoListTitle) )
        dispatch( actions.addNewTodoListTitleAC(newTodoListID, newTodoListTitle) )
    }

    function onChangeTaskTitleName(
        dayID: string,
        taskID: string,
        newTitle: string
    ) {
        console.log(newTitle)
        //setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID? {...el, title: newTitle}: el)	})
        // tasksDispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
        dispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
    }

    function sortTitlesOnButtonStatus(dayID: string, value: tasksValueType) {
        //setDays([...days.map(el => el.id === dayID ? {...el, filter: value} : el)])  !!!!!!
        // daysDispatch(actions.sortTitlesOnButtonStatusAC(dayID, value))
        dispatch(actions.sortTitlesOnButtonStatusAC(dayID, value))
    }

    function removeDay(dayID: string) {
        //setDays([...days.filter(el => el.id !== dayID)])   !!!!!!!
        // daysDispatch(actions.removeDayAC(dayID))
        dispatch(actions.removeDayAC(dayID))
        //console.log(tasks)
        delete tasks[dayID]
        //console.log(tasks)
    }

    function onChangeWeekDayTitle(dayID: string, newWeekDayTitle: string) {
        console.log(newWeekDayTitle)
        // setDays([...days.map(el => el.id === dayID ? {...el, title: newWeekDayTitle} : el)]) !!!!
        //daysDispatch(actions.onChangeWeekDayTitleAC(dayID, newWeekDayTitle))
        dispatch(actions.onChangeWeekDayTitleAC(dayID, newWeekDayTitle))
    }

    console.log(days, 'days')
    return (
        <div className="App">
            <ButtonAppBar />

            <h2> Todo Week Schedule + 11 Unit Tests(React/TypeScript/Redux).</h2>

            <div>
                <AddItemForm addItem={addNewTodoList} />
            </div>

            <div className="days_container">
                {days.map((el) => {
                    let currentTasks = tasks[el.id]
                    if (el.filter === `completed`)
                        currentTasks = tasks[el.id].filter((el) => el.isDone)
                    if (el.filter === `uncompleted`)
                        currentTasks = tasks[el.id].filter((el) => !el.isDone)
                    return (
                        <div className={`week`} key={el.id}>
                            <TodoList
                                key={el.id}
                                dayID={el.id}
                                tasks={currentTasks}
                                weekTitle={el.title}
                                addTitle={addTitle}
                                changeTitleStatus={changeTitleStatus}
                                removeTitle={removeTitle}
                                sortTitlesOnButtonStatus={
                                    sortTitlesOnButtonStatus
                                }
                                filter={el.filter}
                                removeDay={removeDay}
                                onChangeTaskTitleName={onChangeTaskTitleName}
                                onChangeWeekDayTitle={onChangeWeekDayTitle}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//export default App
