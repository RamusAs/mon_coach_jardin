import { Card } from "./card"
import Plantes from "../data/data.json"
import { useState } from "react"

export const Layout = () => {
  const { herbes, tomates, patates } = Plantes
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
    <nav>
      <a href="#section1">Herbes aromatiques</a>
      <a href="#section2">Tomates</a>
      <a href="#section3">Patates</a>
      <a href="#section5">Contact</a>
    </nav>
      <section id="hero" className="hero">
        <h1>Mon Coach Jardin</h1>
    </section>
    <section id="section1" className="section1">
        <h2>Herbes aromatiques</h2>
        <div>
          {herbes.map((el, key) => <Card data={ el } key={ key } />)}
        </div>
    </section>
    <section id="section2" className="section2">
      <h2>Tomates</h2>
			<div>
        {tomates.map((el, key) => <Card data={ el } key={ key } />)}
      </div>
    </section>
    <section id="section3" className="section3">
      <h2>Pommes de terre</h2>
			<div>
        {patates.map((el, key) => <Card data={ el } key={ key } />)}
      </div>
      </section>
      <section id="section4" className="get-in-touch">
      <h1 className="title">Get in touch</h1>
      <form className="contact-form row">
          <div className="form-field col x-50">
            <input id="name" className={`input-text js-input ${name ? 'not-empty' : ''}`} onChange={(el) => setName(el.target.value)} type="text" required/>
            <label className="label" htmlFor="name">Name</label>
          </div>
          <div className="form-field col x-50">
            <input id="email" className={`input-text js-input ${mail ? 'not-empty' : ''}`} onChange={(el) => setMail(el.target.value)}type="email" required/>
            <label className="label" htmlFor="email">E-mail</label>
          </div>
          <div className="form-field col x-100">
            <input id="message" className={`input-text js-input ${message ? 'not-empty' : ''}`} onChange={(el) => setMessage(el.target.value)} type="text" required/>
            <label className="label" htmlFor="message">Message</label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Submit"/>
          </div>
      </form>
    </section>

    <video controls playsInline poster="../assets/avatar.png" id="player">
      <source src="../assets/video.mp4" type="video/mp4" size="1440" />
    </video>
    <footer>
      <p> Made for fun by{" "}
        <a href="https//:www.ramusas.com" target="_blank">RamusAs</a>,{" "}
        <a href="https://chat.openai.com" target="_blank">ChatGPT</a>,{" "}
        <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a> and{" "}
        <a href="https://www.d-id.com/" target="_blank">DID</a>{" "}
        ©2023
      </p>
    </footer>
 </>

  )
}