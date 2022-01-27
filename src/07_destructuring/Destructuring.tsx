import React, {useState} from "react";

type LessonsType = {
    title: string
}
export type ManTypeProps = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManTypeProps
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    /*const {title, man, ...restProps} = props;*/
    /*const {title, man: {name}} = props*/
    /*const {name} = props.man*/
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{props.car.model}</div>
    </div>
}


function useMyState(message: string){
    return[message,function (){}]
}
/*const [message, setMessage] = useMyState('hello')*/
