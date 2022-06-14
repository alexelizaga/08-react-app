import { ChangeEvent, useState } from 'react';

export const useForm = <T>( initialState: T ) => {

    const [formData, setFormData] = useState( initialState );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }) );

    }

    return {
        ...formData,
        // properties
        formData,
        // methods
        onChange
    }
}