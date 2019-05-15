import React, { Component } from 'react';
import {Redirect} from 'dva/router'
import {getCookie} from './cookie'

const authorization=(Target)=>{
    return class Authorization extends Component{
        render(){
            if(getCookie('token')){
                return <Target></Target>
            }else{
                return <Redirect to='/login'></Redirect>
            }
        }   
    }
}
export default authorization