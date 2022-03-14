import { createContext, useState } from 'react';

const FormContext = createContext({
    formData: {},
    progress: 0
});

export function FormContextProvider(props) {
    const [formAnswers, setFormAnswers] = useState({})

    function handleAddToFormData(key,data) {

        setFormAnswers((prev) => {
            const newData = prev
            newData[key] = data
            console.log(newData)
            return newData
        })

    }

    const context = {
        formData: formAnswers,
        progress: formAnswers.length,
        addData: handleAddToFormData
    };

    return <FormContext.Provider value={context}>
        {props.children}
    </FormContext.Provider>
}

export default FormContext