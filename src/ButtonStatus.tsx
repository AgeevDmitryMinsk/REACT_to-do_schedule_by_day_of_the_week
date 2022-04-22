import React from 'react'
//import { tasksValueType } from './App'
import { Button } from '@mui/material'
import {tasksValueType} from "./AppWithRedux";

export type ButtonStatusType = {
    onCLickButtonStatusHandle: (dayID: string, valueB: tasksValueType) => void
    dayID: string
    filter: tasksValueType
}

 const ButtonStatus: React.FC<ButtonStatusType> = ({
    onCLickButtonStatusHandle,
    dayID,
    filter,
}) => {
    return (
        <div>
            <Button
                onClick={() => onCLickButtonStatusHandle(dayID, `all`)}
                variant={filter === `all` ? `contained` : 'outlined'}
            >
                all
            </Button>
            <Button
                onClick={() => onCLickButtonStatusHandle(dayID, `completed`)}
                variant={filter === `completed` ? `contained` : `outlined`}
                style={{ margin: '0 5px' }}
            >
                completed
            </Button>
            <Button
                onClick={() => onCLickButtonStatusHandle(dayID, `uncompleted`)}
                variant={filter === `uncompleted` ? `contained` : `outlined`}
            >
                uncompleted
            </Button>
        </div>
    )
}
export default React.memo(ButtonStatus)
