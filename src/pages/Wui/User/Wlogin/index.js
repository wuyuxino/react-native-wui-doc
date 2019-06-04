import React,{Component} from 'react'
import { Icon } from 'antd'
import wlogin from '../../../../assets/wlogin.png'

class WloginPage extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wlogin } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1,position:"relative"}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wlogin />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
                  title:'centerStyle (object)',
                  explain:'中间容器样式设置'
                },
                {
                  title:'inputContainerStyle (object)',
                  explain:'输入框容器样式设置'
                },
                {
                  title:'leftImgStyle (object)',
                  explain:'leftImgStyle (object)'
                },
                {
                  title:'imgStyle (object)',
                  explain:'输入框左侧容器图片样式设置'
                },
                {
                  title:'imgUrlTop (string)',
                  explain:'输入框顶部左侧容器图片地址 (属于网络图片) 设置'
                },
                {
                  title:'imgUrlBottom (string)',
                  explain:'输入框底部左侧容器图片地址 (属于网络图片) 设置'
                },
                {
                  title:'localImgUrlTop (string)',
                  explain:'输入框顶部左侧容器图片地址 (属于本地图片) 设置'
                },
                {
                  title:'localImgUrlBottom (string)',
                  explain:'输入框底部左侧容器图片地址 (属于本地图片) 设置'
                },
                {
                  title:'inputStyle (object)',
                  explain:'输入框样式设置'
                },
                {
                  title:'bgUriStyle (object)',
                  explain:'背景图片样式设置'
                },
                {
                  title:'bgUrl (string)',
                  explain:'背景图片地址（属于网路图片地址）设置'
                },
                {
                  title:'localBgUrl (string)',
                  explain:'背景图片地址（属于本地图片地址）设置'
                },
                {
                  title:'submitStyle (object)',
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
                  title:'leftContentText (string、number)',
                  explain:'左侧文字显示内容'
                },
                {
                  title:'rightContentText (string、number)',
                  explain:'右侧文字显示内容'
                },
                {
                  title:'leftTextStyle (object)',
                  explain:'左侧文字样式设置'
                },
                {
                  title:'rightTextStyle (object)',
                  explain:'右侧文字样式设置'
                },
                {
                  title:'bottomStyle (object)',
                  explain:'底部容器样式设置'
                },
                {
                  title:'bottomText (string、number)',
                  explain:'底部容器文字设置'
                },
                {
                  title:'bottomTextStyle (object)',
                  explain:'底部容器文字样式设置'
                },
                {
                  title:'logoStyle (object)',
                  explain:'logo样式设置'
                },
                {
                  title:'logoUrl (string)',
                  explain:'logo地址设置'
                },
                {
                  title:'logoTitleConStyles (object)',
                  explain:'logo标题容器样式设置'
                },
                {
                  title:'logoTitleStyles (object)',
                  explain:'logo标题文字样式设置'
                },
                {
                  title:'logoTitle (string、number)',
                  explain:'logo标题文字设置'
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
                  title:'userInputText (function)',
                  explain:'获取当前用户输入的用户名'
                },
                {
                  title:'passInputtext (function)',
                  explain:'获取当前用户输入的密码'
                },
                {
                  title:'submitFunc (function)',
                  explain:'用户点击提交后执行的函数'
                },
                {
                  title:'leftFunc (function)',
                  explain:'用户点击左侧按钮后执行的函数'
                },
                {
                  title:'rightFunc (function)',
                  explain:'用户点击右侧按钮后执行的函数'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wlogin</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wlogin}/>
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

export default WloginPage;
