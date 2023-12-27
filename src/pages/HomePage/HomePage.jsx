
import React from 'react'
import css from './homePage.module.css'
// import phoneImage from '../../materials/img/phone1.png';
import phoneImage from '../../materials/img/phoneBook.png'
const HomePage = () => {
  return (
    <div className={css.homePageBox}>
      <h1 className={css.homePageTitle}>PHONEBOOK</h1>
      {/* <img className={css.homePageImgBook} src={phoneImageBook} alt="homePageImgBook" /> */}
      <img className={css.homePageImg} src={phoneImage} alt="homePageImg" />
    </div>
  );
}

export default HomePage

