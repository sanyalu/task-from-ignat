import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (error && !(e.currentTarget.value === '' || e.currentTarget.value === ' ')) setError('');
        switch (e.currentTarget.value) {
            case ' ':
                setError(`name can't be empty`)
                return
            case '':
                setError(`name can't be empty`)
                setName(e.currentTarget.value)
                return;
            default:
                setName(e.currentTarget.value);

        }// need to fix
    }
    const addUser = () => {
        setError('');
        addUserCallback(name);
        alert(`Hello  ${name}`)
        setName('')// need to fix
    }

    const totalUsers:number = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
