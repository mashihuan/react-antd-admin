import React, { memo, useState } from 'react'

import { NotFoundWrapper } from './style'
import notFoundImages from '@/assets/img/404/404.png'
import notFoundImagesCloud from '@/assets/img/404/404_cloud.png'

export default memo(function NotFount() {
  const [message] = useState('The webmaster said that you can not enter this page...')

  return (
    <NotFoundWrapper className="wscn-http404-container">
      <div className="wscn-http404">
        <div className="pic-404">
          <img className="pic-404__parent" src={notFoundImages} alt="404" />
          <img className="pic-404__child left" src={notFoundImagesCloud} alt="404" />
          <img className="pic-404__child mid" src={notFoundImagesCloud} alt="404" />
          <img className="pic-404__child right" src={notFoundImagesCloud} alt="404" />
        </div>
        <div className="bullshit">
          <div className="bullshit__oops">OOPS!</div>
          <div className="bullshit__info">All rights reserved
            <a style={{color:'#20a0ff'}} href="https://wallstreetcn.com" target="_blank" rel="noreferrer">wallstreetcn</a>
          </div>
          <div className="bullshit__headline">{ message }</div>
          <div className="bullshit__info">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
          <a href="/" className="bullshit__return-home">Back to home</a>
        </div>
      </div>
    </NotFoundWrapper>
  )
})
