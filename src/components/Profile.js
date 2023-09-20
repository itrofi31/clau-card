export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile__collage'>
        <img
          src={process.env.PUBLIC_URL + '/collage.jpg'}
          alt='collage'
          loading='lazy'
        ></img>
      </div>
      <div className='profile__avatar'>
        <img
          className='card-img'
          src={process.env.PUBLIC_URL + '/avatar.jpg'}
          alt='profile'
          loading='lazy'
        >
          {console.log()}
        </img>
      </div>
      <h1>Клавдия Бывальская</h1>
      <p className='profile__subtitle'>| чувствуй &#x2022; фото |</p>
    </div>
  );
}
