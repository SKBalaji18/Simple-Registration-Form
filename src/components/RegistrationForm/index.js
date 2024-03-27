import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    errInfName: false,
    errInlName: false,
    isFormSubmitted: false,
  }

  onBlurfName = () => {
    const {firstname} = this.state
    const isValid = firstname === ''

    this.setState({errInfName: isValid})
  }

  onBlurlName = () => {
    const {lastname} = this.state
    const isValid = lastname === ''

    this.setState({errInlName: isValid})
  }

  onChangefName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangelName = event => {
    this.setState({lastname: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {firstname, lastname} = this.state
    const validfName = firstname !== ''
    const validlName = lastname !== ''

    if (validfName && validlName) {
      this.setState({
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        errInfName: !validfName,
        errInlName: !validlName,
        isFormSubmitted: false,
      })
    }
  }

  anotherResponse = () => {
    this.setState({
      firstname: '',
      lastname: '',
      errInfName: false,
      errInlName: false,
      isFormSubmitted: false,
    })
  }

  onSuccessfulSubmission = () => (
    <div className="success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-result">Submitted successfully</p>
      <button
        className="submit-btn"
        type="button"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  formRender = () => {
    const {firstname, lastname, errInfName, errInlName} = this.state
    const inputClsfName = errInfName ? 'err-inputEl' : 'inputEl'
    const inputClslName = errInlName ? 'err-inputEl' : 'inputEl'
    return (
      <form onSubmit={this.submitForm} className="form-container">
        <div className="input-container">
          <label htmlFor="fName" className="input-label">
            FIRST NAME
          </label>
          <input
            onBlur={this.onBlurfName}
            onChange={this.onChangefName}
            value={firstname}
            id="fName"
            className={inputClsfName}
            placeholder="First Name"
          />
          {errInfName && <p className="req-text">Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="lName" className="input-label">
            LAST NAME
          </label>
          <input
            onBlur={this.onBlurlName}
            onChange={this.onChangelName}
            value={lastname}
            id="lName"
            className={inputClslName}
            placeholder="Last Name"
          />
          {errInlName && <p className="req-text">Required</p>}
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="page-head">Registration</h1>
        {isFormSubmitted ? this.onSuccessfulSubmission() : this.formRender()}
      </div>
    )
  }
}

export default RegistrationForm
