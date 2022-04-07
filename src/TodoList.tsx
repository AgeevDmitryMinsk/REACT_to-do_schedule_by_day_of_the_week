import React from 'react'
//import { tasksType, tasksValueType } from './App'
import { ButtonStatus } from './ButtonStatus'
import AddItemForm from './components/AddItemForm'
import { EditableSpan } from './EditableSpan'
import { Checkbox, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import {tasksType, tasksValueType} from "./AppWithRedux";

type TodoListType = {
    weekTitle: string
    tasks: tasksType[]
    addTitle: (dayID: string, title: string) => void
    changeTitleStatus: (dayID: string, taskID: string, isDone: boolean) => void
    removeTitle: (dayID: string, taskID: string) => void
    sortTitlesOnButtonStatus: (dayID: string, value: tasksValueType) => void
    filter: tasksValueType
    dayID: string
    removeDay: (dayID: string) => void
    onChangeTaskTitleName: (
        dayID: string,
        taskID: string,
        newTitle: string
    ) => void
    onChangeWeekDayTitle: (dayID: string, newWeekDayTitle: string) => void
}

const TodoList: React.FC<TodoListType> = ({
    tasks,
    weekTitle,
    addTitle,
    changeTitleStatus,
    removeTitle,
    sortTitlesOnButtonStatus,
    filter,
    dayID,
    removeDay,
    onChangeTaskTitleName,
    onChangeWeekDayTitle,
}) => {
    function onCLickButtonStatusHandle(dayID: string, value: tasksValueType) {
        sortTitlesOnButtonStatus(dayID, value)
    }

    let ButtonStyleALL = filter === `all` ? `active` : ``
    let ButtonStyleCompleted = filter === `completed` ? `active` : ``
    let ButtonStyleUnCompleted = filter === `uncompleted` ? `active` : ``

    function onClickRemoveDayHandler() {
        console.log(69)
        removeDay(dayID)
    }

    // function addTaskHandler(newTaskTitle:string) {
    // 	addTitle(dayID, newTaskTitle)
    // }

    function onChangeWeekDayTitleHandler(newWeekDayTitle: string) {
        onChangeWeekDayTitle(dayID, newWeekDayTitle)
    }

    return (
        <div>
            <div>
                <EditableSpan
                    title={weekTitle}
                    onChange={onChangeWeekDayTitleHandler}
                />
                {/*{weekTitle}*/}
                {/*<button onClick={onClickRemoveDayHandler}>X</button>*/}

                <IconButton
                    onClick={onClickRemoveDayHandler}
                    aria-label="delete"
                    size="medium"
                    color={'primary'}
                >
                    <DeleteIcon />
                </IconButton>
            </div>

            {/*<AddItemForm addItem={addTaskHandler}/>*/}
            <AddItemForm
                addItem={(newTaskTitle) => addTitle(dayID, newTaskTitle)}
            />
            <>
                {/*<input type={"text"} value={title}*/}
                {/*			 onChange={onChangeInputHandle}*/}
                {/*			 onKeyPress={onKeyPressInputHandle}*/}
                {/*			 // onBlur={onBlurInputHandle}*/}
                {/*			 className={InputStyle}*/}
                {/*/>*/}
                {/*<button onClick={onCLickButtonHandle}>+</button>*/}
                {/*<div className={`errorStyle`}>*/}
                {/*	{error}*/}
                {/*</div>*/}
            </>
            {tasks.map((el) => {
                function onChangeCheckBoxHandle() {
                    console.log(43)
                    changeTitleStatus(dayID, el.id, el.isDone)
                }

                function onClickRemoveHandleButton() {
                    console.log(62)
                    removeTitle(dayID, el.id)
                }

                function onChangeTitleHandler(newTitle: string) {
                    onChangeTaskTitleName(dayID, el.id, newTitle)
                }

                return (
                    <div key={el.id} className={`tasksStyle`}>
                        {/*<span>{el.title}</span>*/}

                        <Checkbox
                            checked={el.isDone}
                            onChange={onChangeCheckBoxHandle}
                            color={'info'}
                        />
                        <EditableSpan
                            title={el.title}
                            onChange={onChangeTitleHandler}
                        />

                        <IconButton
                            onClick={onClickRemoveHandleButton}
                            aria-label="delete"
                            size="medium"
                            color={'primary'}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            })}

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
                onCLickButtonStatusHandle={onCLickButtonStatusHandle}
                dayID={dayID}
                filter={filter}
            />
        </div>
    )
}

export default TodoList
