import { Button, DateField } from 'govuk-react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContext from '../store/form-context';

function DateOfBirth() {

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [dobValid, setDobValid] = useState(true);
    const [error, setError] = useState(true);

    const formCtx = useContext(FormContext);
    const navigate = useNavigate();
  
    function submit() {
      const date = new Date(year,month - 1,day)
      if(!validDate(date, "dob")){
        setDobValid(false)
      } else {
        setDobValid(true)
        const formData = {
          "dob" : date.getTime()
        }
        formCtx.addData('dob',formData)
        navigate('/3')

      }
    }
  
    function validDate(date, type) {
      const today = new Date()
  
      if(date.getDate() !== parseInt(day) || date.getMonth() !== month - 1 || date.getFullYear() !== parseInt(year)) {
        setError("Invalid Date")
        return false
      }
  
      if(type === "dob"){
        if(date > today) {
          setError("Date of birth cannot be in the future")
          return false
        }
      }
  
      return true
    }
  
    function fieldsChanged(e) {
      if(e.day) {
        setDay(e.day)
      }
      if(e.month) {
        setMonth(e.month)
      }
      if(e.year) {
        setYear(e.year)
      }
    }
  
    return (
      <>
      <h1>Demo</h1>
      <DateField
        input={{
          onChange: fieldsChanged
        }} 
        inputNames={{
          day: 'dayInput',
          month: 'monthInput',
          year: 'yearInput'
        }}
        errorText={!dobValid && error}
        hintText="For example, 31 03 1980"
      >
        What is your date of birth?
      </DateField>
      <Button onClick={submit}>
        Submit
      </Button>
      </>
    );
}

export default DateOfBirth