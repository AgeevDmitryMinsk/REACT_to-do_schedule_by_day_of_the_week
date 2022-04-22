import React, { useState } from 'react'

import ButtonStatus, {ButtonStatusType } from './ButtonStatus'
// import { tasksValueType } from './App'

import './App.css'
import {tasksValueType} from "./AppWithRedux";

export default {
    title: 'ButtonStatusX',
    component: ButtonStatus,
}

export const ButtonStatusX: React.FC<ButtonStatusType> = () => {
    const [filter, setFilter] = useState<tasksValueType>(`all`)

    function onCLickButtonStatusHandle(dayID: string, value: tasksValueType) {
        //sortTitlesOnButtonStatus(dayID, value)
        setFilter(value)
    }

    return (
        <ButtonStatus
            filter={filter}
            onCLickButtonStatusHandle={onCLickButtonStatusHandle}
            dayID={`dayID-хардкор`}
        />
    )
}
