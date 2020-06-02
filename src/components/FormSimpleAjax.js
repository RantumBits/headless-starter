import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'contact_form',
    subject: 'success - form submitted', // optional subject of the notification email
    action: 'https://getform.io/f/93249524-1fb5-46d8-b6e2-7c5a0ecf42e0',
    successMessage: 'Good to hear from you! We will get back to you soon.',
    errorMessage:
      'There is a problem and your message has *not* been sent. Please send an email to hello@ecomloop.com',
  }

  state = {
    alert: '',
    disabled: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST',
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false,
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage,
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet>
        <form
          className="Form"
          method="post"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          netlify-recaptcha="true"
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="First name"
                name="firstname"
                required
              />
              <span>First name</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Last name"
                name="lastname"
                required
              />
              <span>Last name</span>
            </label>
          </div>

          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email address</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="website"
              placeholder="example.com"
              name="website"
              required
            />
            <span>Website address</span>
          </label>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="What's this about?"
              required
            >
              <option disabled hidden>
                What's this about?
              </option>
              <option>New project</option>
              <option>Existing project</option>
              <option>Partnership</option>
            </select>
          </label>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              placeholder="Message"
              name="message"
              rows="10"
              required
            />
            <span>Message</span>
          </label>
          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--Textarea Form--CheckboxInput"
              name="newsletter"
              type="checkbox"
              checked
            />
            <span>Get news updates</span>
          </label>
          <div
            className="g-recaptcha"
            data-sitekey="6LeNl-YUAAAAALV_EC01bmbTdnBXnWEWMg1EJRv4"
          />
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            name="submit"
            type="submit"
            value="Submit"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
