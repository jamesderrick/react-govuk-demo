import {useContext} from 'react';
import FormContext from '../store/form-context';

function Progress() {

    const progressCtx = useContext(FormContext);

    return (
        <>
        <h1>{progressCtx.progress}</h1>
        </>
    )
}

export default Progress;