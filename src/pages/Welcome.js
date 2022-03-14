import {Button, ButtonArrow} from 'govuk-react'
import {useNavigate} from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate();

    return (
        <>
        <h1>Welcome page</h1>
        <p>Intro to form goes here</p>
        <Button
            onClick={() => navigate('/1')}
            icon={<ButtonArrow/>}
            start
        >
            Start now
        </Button>
        </>
    )
}

export default Welcome