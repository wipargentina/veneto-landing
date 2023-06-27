import React, { Component } from 'react'

import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      location: '',
      state: '',
      tags: 'inversor',
      investment: 'veneto-10',
      isSending: false,
      isError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOptionChange(e) {
    this.setState({
      tags: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    //console.log(this.state)

    axios
      .post(
        'https://hook.integromat.com/cun8vog7unxeuek1i22woc15enlcicju',
        this.state
      )
      .then((response) => {
        console.log(response)
        this.setState({
          isSending: false,
          fname: '',
          lname: '',
          email: '',
          phone: '',
          state: '',
          location: '',
          tags: ''
        })
        if (response.status === 200) {
          this.setState({
            isError: false
          })

          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: 'custom.gtm.submittedForm',
            category: 'goals',
            label: 'contact'
          })

          window.location.assign(process.env.PUBLIC_URL + '/gracias')
        }
        if (response.status === 400) {
        }
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isError: true
        })
      })
  }

  render() {
    const isSending = this.state.isSending
    return (
      <section id='form' className='form'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 text-center mb-5'>
              <h2>Completá el formulario</h2>
              <h4 className='mt-3'>
                Nos pondremos en contacto para brindarte nuestro asesoramiento
                personalizado
              </h4>
            </div>

            <div className=' col-lg-9 col-xl-8'>
              <form id='form_send_lead' onSubmit={this.handleSubmit}>
                <div className='row'></div>
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
                      <label htmlFor=''>Teléfono</label>
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
                <div className='row mb-3'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor=''>Provincia</label>
                      <input
                        type='text'
                        name='state'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor=''>Localidad</label>
                      <input
                        type='text'
                        name='location'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor=''>Interés</label>
                      <select
                        name='investment'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
                      >
                        <option value='veneto-10'>Veneto X</option>
                        <option value='veneto-9'>Veneto IX</option>
                        <option value='veneto-8'>Veneto VIII</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <div className='tags'>
                      <label className='mb-1'>
                        ¿Qué finalidad quieres darle a tu Veneto?
                      </label>
                      <div className='tags-options'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='tags'
                            id='tags-1'
                            value='inversor'
                            onChange={this.handleOptionChange}
                            checked={this.state.tags === 'inversor'}
                          />
                          <label className='form-check-label' htmlFor='tags-1'>
                            Quiero <span>Invertir</span>
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='tags'
                            id='tags-2'
                            value='vivienda'
                            onChange={this.handleOptionChange}
                            checked={this.state.tags === 'vivienda'}
                          />
                          <label className='form-check-label' htmlFor='tags-2'>
                            Quiero <span>Vivir</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 text-sm-end'>
                    <button
                      id='btn_send_form'
                      className='btn btn-lg btn-cta text-uppercase'
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
    )
  }
}

export default Form
