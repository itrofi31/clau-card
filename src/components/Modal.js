import { useState } from 'react';

export default function Modal({ open, onOpenModal }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputText, setInputText] = useState('');

  function handleReset() {
    setInputName('');
    setInputEmail('');
    setInputPhone('');
    setInputText('');
  }
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append('access_key', 'ba21ed5f-7963-4431-8618-de58cd24744e');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log('Success', res);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      onOpenModal();
      handleReset();
    }
  };
  return (
    <>
      <div
        className={open ? 'modal active' : 'modal'}
        onClick={(e) => e.target.classList[0] === 'modal' && onOpenModal()}
      >
        <div className='modal__content'>
          <h2>Запись на фотосессию</h2>
          {/* <p>Заполните форму ниже, и мы с вами свяжемся.</p> */}
          <form
            onSubmit={onSubmit}
            id='form'
          >
            <input
              type='hidden'
              name='subject'
              value='Получена новая заявка на сайте clau-card!'
            />
            <input
              type='checkbox'
              name='botcheck'
              id=''
              style={{ display: 'none' }}
            />
            <input
              type='hidden'
              name='from_name'
              value='Clau-card запись на фотосессию'
            />

            <div>
              <label htmlFor='name'>Имя и фамилия:</label>
              <input
                type='text'
                name='name'
                id='name'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                required
                autoComplete='on'
              />
            </div>
            <div>
              <label htmlFor='email'>Адрес электронной почты:</label>
              <input
                type='email'
                name='email'
                id='email'
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                autoComplete='on'
              />
            </div>
            <div>
              <label htmlFor='phone'>
                Номер телефона (WhatsApp, Telegram):
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                value={inputPhone}
                onChange={(e) => setInputPhone(e.target.value)}
                autoComplete='on'
              />
            </div>
            <div>
              <label htmlFor='message'>Другие способы связи:</label>

              <textarea
                rows='3'
                name='message'
                id='message'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
            </div>
            <button
              className='form-btn'
              type='submit'
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
