import React, {ChangeEvent, useState} from 'react';

type AddItemFormPropsType = {
	addItem: (newUnivTitle:string)=>void
}

const AddItemForm: React.FC<AddItemFormPropsType> = ({addItem}) => {

	const [title, setTitle] = useState(``)
	const [error, setError] = useState(``)

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
			setError(`please, enter some test`)
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
			<input type={"text"} value={title}
						 onChange={onChangeInputHandle}
						 onKeyPress={onKeyPressInputHandle}
				// onBlur={onBlurInputHandle}
						 className={InputStyle}
			/>
			<button onClick={onCLickButtonHandle}>+</button>
			<div className={`errorStyle`}>
				{error}
			</div>

		</>
	);
};

export default AddItemForm;
