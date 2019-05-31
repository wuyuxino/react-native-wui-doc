import React,{Component} from 'react'
import { Icon } from 'antd'
import wtimeselect from '../../../assets/wtimeselect.png'

class WtimeSelect extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { WtimeSelect } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<WtimeSelect />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
            float:'left'
          }}>
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>WtimeSelect</h1>
          <h2><Icon type="snippets" theme="filled" style={{color:'#1890FF'}} /> 属性</h2>
          <ol>
            {
              [
                {
                  title:'containerStyle (object)',
                  explain:'容器整体样式设置'
                },
                {
                  title:'pointerStyle (object)',
                  explain:'顶部指针样式设置'
                },
                {
                  title:'itemStyle (object)',
                  explain:'滚动单元样式设置'
                },
                {
                  title:'timeTextStyle (object)',
                  explain:'时间文字显示样式设置'
                },
                {
                  title:'textChoiceColor (string)',
                  explain:'当前选中时间文字颜色设置'
                },
                {
                  title:'textNoChoiceColor (string)',
                  explain:'当前没有选中时间文字颜色设置'
                },
                {
                  title:'bottomPointerStyle (object)',
                  explain:'底部刻度样式设置'
                },
                {
                  title:'pointerChoiceColor (string)',
                  explain:'底部刻度选中颜色设置'
                },
                {
                  title:'pointerNoChoiceColor (string)',
                  explain:'底部刻度未选中颜色设置'
                },
                {
                  title:'timeData (array)',
                  explain:'需要传入的显示时间的数组'
                },
                {
                  title:'equipartition (number)',
                  explain:'当前所见时间轴的份数（默认5'
                },
                {
                  title:'timeData (array)',
                  explain:'需要传入的显示时间的数组'
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
                  title:'currentTimeFun',
                  explain:'滚动的时候返回的当前时间'
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
            float:'right'
          }}>
          <h2 style={{marginTop:'60px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='500px' 
            style={{
              borderRadius:'60px'
            }}
            src={wtimeselect}/>
          <h2 style={{marginTop:'30px',marginBottom:'30px'}}><Icon type="code" theme="filled" style={{color:'#1890FF'}} /> 使用方法</h2>
          <textarea 
            className='textarea'
            rows="20" 
            cols="80"
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

export default WtimeSelect
