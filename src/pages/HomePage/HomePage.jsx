
import React from 'react'
import css from './homePage.module.css'
const HomePage = () => {
  return (
    <div>
      <img
        className={css.errorImg}
        src={`https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`}
        alt="imgError"
      />
      {/* <h1>HomePage</h1> */}
    </div>
  );
}

export default HomePage