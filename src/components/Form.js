import React, { Component } from 'react';

// import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      // location: '',
      // state: '',
      tags: '',
      isSending: false,
      isError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSending: true
    });

    console.log(this.state);

    // axios
    //   .post(
    //     'https://hook.integromat.com/fzoimp3c2az3q9u97e83coprmuggrfk7',
    //     this.state
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       isSending: false,
    //       fname: '',
    //       lname: '',
    //       email: '',
    //       phone: '',
    //       tags: ''
    //     });
    //     if (response.status === 200) {
    //       this.setState({
    //         isError: false
    //       });
    //       window.location.assign(process.env.PUBLIC_URL + '/gracias');
    //     }
    //     if (response.status === 400) {
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({
    //       isError: true
    //     });
    //   });
  }

  render() {
    const isSending = this.state.isSending;
    return (
      <section id='form' className='form'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-80 text-center mb-5'>
              <h2>Completá el formulario</h2>
              <h4 className='mt-3'>
                Nos pondremos en contacto para brindarte nuestro asesoramiento
                personalizado
              </h4>
            </div>
            <div className='col-md-8'>
              <form id='form_send_lead' onSubmit={this.handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Nombre</label>
                      <input
                        type='text'
                        name='fname'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Apellido</label>
                      <input
                        type='text'
                        name='lname'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Email</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>
                        Teléfono <span>(Opcional)</span>
                      </label>
                      <input
                        type='text'
                        name='phone'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <input type='hidden' name='tags' value='monitoreo' />
                <hr />
                <div className='row text-center'>
                  <div className='col-md-12'>
                    <button
                      id='btn_send_form'
                      className='btn btn-lg btn_2 text-uppercase'
                      type='submit'
                      disabled={isSending}
                    >
                      {isSending ? 'Enviando...' : 'Enviar'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
