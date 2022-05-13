import { useState } from 'react';

function useForm(initialState) {

    const [form, setForm] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const clear = () => {
        setForm(initialState);
    }

    return [form, handleInputChange, clear];
}

export default useForm;