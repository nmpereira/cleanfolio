// import { contact } from '../../portfolio'
// import './Form.css'

const Form = () => (
  <section className='section contact center' id='form'>
    <div>
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label htmlFor='name'>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label htmlFor='email'>
            Your Email: <input type='email' name='email' />
          </label>
        </p>

        <p>
          <label htmlFor='message'>
            Message: <textarea name='message' />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  </section>
)

export default Form
