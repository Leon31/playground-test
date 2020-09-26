import React, { useState, FormEvent, ChangeEvent } from 'react';
import Revealer from '../../utils/revealer';

interface State {
  name: string
  surname: string
  email: string
  message: string
}

type error = "email" |  "message" | "";

const initialState: State = {
  name: '',
  surname: '',
  email: '',
  message: '',
}

function Contacts () {
  const [state, setState] = useState<State>(initialState);
  const [error, setError] = useState<error>();

  function handleChange (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const { target: {name, value} } = e;
    setState(state => ({...state, [name]: [value]}));
    setError("")
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateEmail(state.email)) return setError("email");
    if (!state.message) return setError("message");
    setState(initialState);
  }

  return (
    <div className="contacts grid grid-row grid-col-12" id="contact-us">
      <Revealer revealIn="fadeInLeft" revealOut="fadeOut">
        <div className="contacts_headline col-span-3">
            <h1 className="headline_title">contact us</h1>
            <p className="headline_text">
              Playground srl <br/>
              Via G. Mazzini 3/C, <br/>
              Cernusco Sul Naviglio (Milano) <br/>
              - <br/>
              T +39 0240706003 <br/>
            </p>
        </div>
      </Revealer>
      <Revealer revealIn="fadeIn" revealOut="fadeOut">
        <form className="contacts_form col-span-6 grid grid-col-6" onSubmit={handleSubmit}>
          <input className="form_input--name col-span-3" value={state.name} onChange={handleChange} placeholder="name" name="name" type="text" />
          <input className="form_input--surname col-span-3" value={state.surname} onChange={handleChange} placeholder="last name" name="surname" type="text" />
          <input style={{borderColor: error === "email" ? "red" : undefined }} className="form_input--email col-span-6" value={state.email} onChange={handleChange} placeholder="email" name="email" type="email" />
          <textarea style={{borderColor: error === "message" ? "red" : undefined }} className="form_textarea col-span-6" value={state.message} onChange={handleChange} placeholder="message" name="message" id="message" cols={30} rows={10} ></textarea>
          <button className="btn_secondary--light form_button col-span-2" type="submit">send <span className="fa fa-chevron-right"> </span> </button>
        </form>
      </Revealer>
    </div>
  )
}

function validateEmail (email: string): boolean {
  const emailFormat = new RegExp(/^.*@[a-z]*\.[a-z]*/);
  return emailFormat.test(email);;
}

export default Contacts;