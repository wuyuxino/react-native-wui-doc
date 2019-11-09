import React,{Component} from 'react'
import { Icon } from 'antd'
import wdatepicker from '../../../assets/wdatepicker.png'

class Wdatepicker extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wdatepicker } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wdatepicker />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
                  title:'topContainerStyle (object)',
                  explain:'标题容器样式设置'
                },
                {
                  title:'trueTextStyle (object)',
                  explain:'确定文字样式设置'
                },
                {
                  title:'falseTextStyle (object)',
                  explain:'取消文字样式设置'
                },
                {
                  title:'trueText (object、number)',
                  explain:'确定文字设置'
                },
                {
                  title:'falseText (object、number)',
                  explain:'取消文字设置'
                },
                {
                  title:'dataContainerStyle (object)',
                  explain:'中间日期容器样式设置'
                },
                {
                  title:'year (array)',
                  explain:'传入的年数据'
                },
                {
                  title:'month (array)',
                  explain:'传入的月数据'
                },
                {
                  title:'pickerStyleOne (object)',
                  explain:'年选择容器样式设置'
                },
                {
                  title:'pickerStyleTwo (object)',
                  explain:'月选择容器样式设置'
                },
                {
                  title:'pickerStyleThree (object)',
                  explain:'日选择容器样式设置'
                },
                {
                  title:'pickerTitle (string、number)',
                  explain:'顶部标题设置'
                },
                {
                  title:'pickerTitleStyle (object)',
                  explain:'顶部标题样式设置'
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
                  title:'isShow (bool)',
                  explain:'控制picker的显示和隐藏'
                },
                {
                  title:'closeModal (func)',
                  explain:'关闭modal时候的回调函数'
                },
                {
                  title:'trueButton (func)',
                  explain:'点击确定按钮后的回调函数'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wdatepicker</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wdatepicker}/>
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

export default Wdatepicker
