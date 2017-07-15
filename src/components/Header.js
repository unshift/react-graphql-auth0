import React from 'react'
import LoginAuth0 from './LoginAuth0'
import config from '../config'
import {logout} from '../auth'
import Btn from './Btn'

const Header = ({data, history, lock}) => (
  <div className="deep-blue top-0 left-0 right-0 w-100 flex flex-row justify-between items-center ph4 pv2 mb3">
    <div></div>
    <div>{!data.user ?
      <LoginAuth0
        history={history}
        data={data}
        lock={lock}
      /> : 
      <Btn>
        <span onClick={() => { logout() }}>
          Logout
        </span>
      </Btn>}
    </div>
  </div>
)

export default Header
