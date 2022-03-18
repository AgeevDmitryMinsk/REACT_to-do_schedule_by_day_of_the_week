import React, {ChangeEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox, Fingerprint} from "@mui/icons-material";

type AddItemFormPropsType = {
	addItem: (newUnivTitle: string) => void
}

const AddItemForm: React.FC<AddItemFormPropsType> = ({addItem}) => {

	const [title, setTitle] = useState(``)
	const [error, setError] = useState(``)
	console.log('title in AddItemForm', title)

	function onCLickButtonHandle() {
		if (title.trim() !== ``) {
			addItem(title.trim())
			setTitle(``)
		} else {
			setError(`please, enter some test`)
		}

	}

	function onChangeInputHandle(e: ChangeEvent<HTMLInputElement>) {
		//console.log(e.currentTarget.value)
		let title = e.currentTarget.value
		setTitle(title)
		if (title === ``) {
			setError(`please, enter some text`)
		} else {
			setError(``)
		}
	}

	function onKeyPressInputHandle(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === `Enter`) {
			onCLickButtonHandle()
		}
	}

	function onBlurInputHandle(e: React.FocusEvent<HTMLInputElement, Element>) {
		onCLickButtonHandle()
	}

	let InputStyle = (error) ? `errorInput` : ``

	return (
		<>
			<TextField label="Title"
								 value={title}
								 color={"info"}
								 onChange={onChangeInputHandle}
								 onKeyPress={onKeyPressInputHandle}
								 error={!!error}
								 helperText={error}
								 // onBlur={onBlurInputHandle}
								 //className={InputStyle}
			/>
			<IconButton onClick={onCLickButtonHandle}
									color={"primary"}
			><AddBox/></IconButton>
		</>
	);
};

export default AddItemForm;
