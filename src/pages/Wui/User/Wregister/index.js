import React,{Component} from 'react'
import { Icon } from 'antd'
import wregister from '../../../../assets/wregister.png'

class WregisterPage extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wregister } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1,position:"relative"}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wregister />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
                  title:'containerStyle (object)',
                  explain:'容器整体样式设置'
                },
                {
                  title:'centerConStyle (object)',
                  explain:'中间容器样式设置'
                },
                {
                  title:'inputConStyle (object)',
                  explain:'输入框外侧容器样式设置'
                },
                {
                  title:'leftInputConStyle (object)',
                  explain:'输入框内部左侧容器样式设置'
                },
                {
                  title:'inputStyle (object)',
                  explain:'输入框样式设置'
                },
                {
                  title:'inputLeftImgStyle (object)',
                  explain:'输入框左侧容器图片样式设置'
                },
                {
                  title:'leftImgUrl (string)',
                  explain:'用户名输入框左侧容器图片地址设置'
                },
                {
                  title:'leftImgUrlE (string)',
                  explain:'Email输入框左侧容器图片地址设置'
                },
                {
                  title:'leftImgUrlP (object)',
                  explain:'用户密码输入框左侧容器图片地址设置'
                },
                {
                  title:'leftImgUrlT (string)',
                  explain:'用户电话输入框左侧容器图片地址设置'
                },
                {
                  title:'submitConStyle (object)',
                  explain:'提交按钮样式设置'
                },
                {
                  title:'submitText (string、number)',
                  explain:'提交按钮文字设置'
                },
                {
                  title:'submitTextStyle (object)',
                  explain:'提交按钮文字样式设置'
                },
                {
                  title:'bottomConStyle (object)',
                  explain:'底部容器样式设置'
                },
                {
                  title:'bottomTextStyle (object)',
                  explain:'底部容器字体样式设置'
                },
                {
                  title:'bottomText (string、number)',
                  explain:'底部容器字体设置'
                },
                {
                  title:'titleStyle (object)',
                  explain:'标题文字容器样式设置'
                },
                {
                  title:'titleTextStyle (object)',
                  explain:'标题文字样式设置'
                },
                {
                  title:'titles (string、number)',
                  explain:'标题文字设置'
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
                  title:'inputTextUsername (function)',
                  explain:'获取当前用户输入的用户名'
                },
                {
                  title:'inputTextPassWord (function)',
                  explain:'获取当前用户输入的密码'
                },
                {
                  title:'inputTextEmail (function)',
                  explain:'获取当前用户输入的Email'
                },
                {
                  title:'inputTextPhoneNumber (function)',
                  explain:'获取当前用户输入的电话'
                },
                {
                  title:'submitFun (function)',
                  explain:'用户点击注册后执行的函数'
                },
                {
                  title:'bottomFunc (function)',
                  explain:'用户点击底部按钮后执行的函数'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wregister</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wregister}/>
          <h2 style={{marginTop:'30px',marginBottom:'30px'}}><Icon type="code" theme="filled" style={{color:'#1890FF'}} /> 使用方法</h2>
          <textarea 
            className='textarea'
            rows="20" 
            cols="60"
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

export default WregisterPage;
