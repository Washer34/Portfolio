import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {

  const { t, i18n } = useTranslation();

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>Contact</h1>
      <form action="https://getform.io/f/6e2ad9c0-1fdc-4f47-91ee-69a6dadaefdb" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='contact-label' htmlFor='name'>{t('contactName')}</label>
            <input className='contact-input' id='name' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='contact-label' htmlFor='phone'>{t('contactPhone')}</label>
            <input className='contact-input' id='phone' type="text" name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='contact-label' htmlFor='email'>Email</label>
          <input className='contact-input' id='email' type="email" name="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='contact-label' htmlFor='subject'>{t('contactSubject')}</label>
          <input className='contact-input' id='subject' type="text" name="subject" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='contact-label' htmlFor='message'>Message</label>
          <textarea className='contact-input' id='message' rows='10' name="message"></textarea>
        </div>
        <button className='contact-button'>
          {t('contactSend')}
        </button>
      </form>
    </div>
  )
}

export default Contact