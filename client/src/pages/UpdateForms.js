import React, { useState } from 'react'
// import { Label, Input, Row, Col, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux'

function UpdateForms() {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState({
    });
  return (
    <div>UpdateForms</div>
  )
}

export default UpdateForms