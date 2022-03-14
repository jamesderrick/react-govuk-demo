import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button,FormGroup,InputField} from 'govuk-react';
import FormContext from '../store/form-context'

function Personal() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [NINumber, setNINumber] = useState('');

    const formCtx = useContext(FormContext);
    const navigate = useNavigate();

    function submitData() {
        const personalData = {
            first: firstName,
            last: lastName,
            ni: NINumber
        };

        formCtx.addData('personal',personalData)
        navigate('/2')

    }
    return (
        <>
        <FormGroup>
            <InputField
                onChange={(e) => setFirstName(e.target.value)}
                margin={[0,8]}
            >
                First Name
            </InputField>
            <InputField
                onChange={(e) => setLastName(e.target.value)}
                margin={[0,8]}
            >
                Last Name
            </InputField>
        </FormGroup>

        <InputField
            onChange={(e) => setNINumber(e.target.value)}
            hint={<>It's on your National Insurance card, benefit letter, payslip or P60.<br/>For example. 'QQ 12 34 56 C'.</>}
            margin={[0,8]}
        >
            National Insurance Number
        </InputField>
        <Button
            onClick={submitData}
            margin={[2,8]}
        >
            Next
        </Button>
        </>
    )
}

export default Personal