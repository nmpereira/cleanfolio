// import { contact } from '../../portfolio'
// import './Form.css'

const Form = () => (
  <section className='section contact center' id='form'>
    <form name='cleanfolio' method='POST' type='hidden' data-netlify='true'>
      <input type='hidden' name='form-name' value='cleanfolio' />
      <p>
        <input type='text' name='name' placeholder='Name' />
      </p>
      <p>
        <input type='email' name='email' placeholder='email' />
      </p>

      <p>
        <textarea name='message' placeholder='Message' />
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  </section>
)

export default Form
