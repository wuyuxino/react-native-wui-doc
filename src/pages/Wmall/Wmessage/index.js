import React,{Component} from 'react'
import { Icon } from 'antd'
import wmessage from '../../../assets/wmessage.png'

class Wmessage extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wmessage } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wmessage />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
    container.value = str
  }

  componentDidMount = () => {
    this.textValue() 
  }

  render(){
    return(
      <div
        style={{
          width:'100%',
          overflow:'hidden'
        }}>
        <div
          style={{
            width:'50%',
            float:'right'
          }}>
          <h2 style={{marginTop:'60px'}}><Icon type="snippets" theme="filled" style={{color:'#1890FF'}} /> 属性</h2>
          <ol>
            {
              [
                {
                  title:'wrapCon (object)',
                  explain:'外层容器整体样式设置'
                },
                {
                  title:'messageConStyle (object)',
                  explain:'消息容器样式设置'
                },
                {
                  title:'bottomConStyle (object)',
                  explain:'底部容器样式设置'
                },
                {
                  title:'sendConStyle (object)',
                  explain:'发送按钮样式设置'
                },
                {
                  title:'sendImgUrl (string)',
                  explain:'发送按钮图片地址设置'
                },
                {
                  title:'sendImgStyle (object)',
                  explain:'发送按钮图片样式设置'
                },
                {
                  title:'inputStyle (object)',
                  explain:'输入框样式设置'
                },
                {
                  title:'avatarStyle (object)',
                  explain:'消息头像样式设置'
                },
                {
                  title:'leftItemConStyle (object)',
                  explain:'左侧消息容器样式设置'
                },
                {
                  title:'leftPopupStyle (object)',
                  explain:'左侧消息展示容器样式设置'
                },
                {
                  title:'leftPopupInnerStyle (object)',
                  explain:'左侧消息展示内部容器样式设置'
                },
                {
                  title:'lContentTextStyle (object)',
                  explain:'左侧消息展示内部文字样式设置'
                },
                {
                  title:'rContentTextStyle (object)',
                  explain:'右侧消息展示内部文字样式设置'
                },
                {
                  title:'leftID (string、number)',
                  explain:'判断当前用户发送的信息展示的位置（左侧还是右侧）'
                },
                {
                  title:'rightPopupStyle (objecr)',
                  explain:'右侧消息展示容器样式设置'
                },
                {
                  title:'rightPopupInnerStyle (object)',
                  explain:'右侧消息展示内部容器样式设置'
                },
                {
                  title:'rightItemConStyle (object)',
                  explain:'右侧消息容器样式设置'
                },
                {
                  title:'keyboardHeight (number)',
                  explain:'设置input抬起高度，防止遮挡键盘'
                },
                {
                  title:'avatar (string)',
                  explain:'当前发送信息的用户头像'
                },
                {
                  title:'id (string、number)',
                  explain:'当前发送信息的用户id'
                },
                {
                  title:'listTalkData (array)',
                  explain:'初始化信息展示数组'
                }
              ].map((i,n)=>{
                return(
                  <li key={n}>
                    <span
                      style={{
                        letterSpacing:1,
                        fontSize:'20px',
                        color:'#003a8c'
                      }}>{i.title}</span>
                    <br/>
                    <span
                      style={{
                        letterSpacing:1,
                        color:'#666',
                        lineHeight:'26px'
                      }}>{i.explain}</span>
                  </li>
                )
              })
            }
          </ol>
          <h2><Icon type="setting" theme="filled" style={{color:'#1890FF'}} /> 方法</h2>
          <ol>
            {
              [
                {
                  title:'talkArrayBack (function)',
                  explain:'每次发送信息后的回调函数，返回当前所有发送信息的内容数组'
                }
              ].map((i,n)=>{
                return(
                  <li key={n}>
                    <span
                      style={{
                        letterSpacing:1,
                        fontSize:'20px',
                        color:'#003a8c'
                      }}>{i.title}</span>
                    <br/>
                    <span
                      style={{
                        letterSpacing:1,
                        color:'#666',
                        lineHeight:'26px'
                      }}>{i.explain}</span>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div
          style={{
            width:'50%',
            float:'left',
            paddingLeft:'30px'
          }}>
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wmessage</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wmessage}/>
          <h2 style={{marginTop:'30px',marginBottom:'30px'}}><Icon type="code" theme="filled" style={{color:'#1890FF'}} /> 使用方法</h2>
          <textarea 
            className='textarea'
            rows="20" 
            cols="48"
            style={{
              borderColor:'#ccc',
              background:'#f2f2f2',
              borderRadius:'8px',
              padding:'20px',
              whiteSpace:'pre'
            }}>
          </textarea>
          <h2 style={{marginTop:'30px',marginBottom:'30px'}}><Icon type="warning" theme="filled" style={{color:'orange'}} /> 注意事项</h2>
        </div>
      </div>
    )
  }
}

export default Wmessage
