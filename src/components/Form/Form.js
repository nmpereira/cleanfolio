// import { contact } from '../../portfolio'
// import './Form.css'

const Form = () => (
  <section className='section contact center' id='form'>
    <div>
      <form name='cleanfolio' method='POST' data-netlify='true'>
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
    </div>
  </section>
)

export default Form
