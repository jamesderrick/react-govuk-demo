import {useContext} from 'react';
import FormContext from '../store/form-context';

function FormComplete() {

    const formCtx = useContext(FormContext);

    return (
        <>
        <h1>Form Complete</h1>
        <p>Following data added...</p>
        <p>{JSON.stringify(formCtx.formData)}</p>
        </>
    )
}

export default FormComplete;