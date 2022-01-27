import React, {ChangeEvent, MouseEvent} from "react";


/*const callback = () => {
    alert("Hello")
    return 12
}
window.setTimeout(callback,1000)*/


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.className)
        /*alert("user was deleted")*/
    }

    /*const saveUser = () => {
        alert("user have been saved")
    }*/

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed" + event.currentTarget.value)
    }
    const blurHandler = () => {
        console.log("focus lost")
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={blurHandler}
            >IT-Incubator user</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button className="delete" tabIndex={4} onClick={deleteUser}>x</button>
            <button className={"save"} tabIndex={1} onClick={deleteUser}>x</button>
        </div>
    )
}