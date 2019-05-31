import React,{Component} from 'react'
import { Icon } from 'antd'
import wcomment from '../../../assets/wcomment.png'

class Wcomment extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wcomment } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wcomment />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wcomment</h1>
          <h2><Icon type="snippets" theme="filled" style={{color:'#1890FF'}} /> 属性</h2>
          <ol>
            {
              [
                {
                  title:'containerStyle (object)',
                  explain:'容器整体样式设置'
                },
                {
                  title:'topConStyle (object)',
                  explain:'顶部容器整体样式设置'
                },
                {
                  title:'topLeftUserConStyle (object)',
                  explain:'顶部左侧容器整体样式设置'
                },
                {
                  title:'imgStyle (object)',
                  explain:'用户头像样式设置'
                },
                {
                  title:'userImgUrl (string)',
                  explain:'用户头像地址设置'
                },
                {
                  title:'topRightConStyle (object)',
                  explain:'顶部右侧容器整体样式设置'
                },
                {
                  title:'userText (string、number)',
                  explain:'用户名称设置'
                },
                {
                  title:'userTextStyle (object)',
                  explain:'用户名称文字样式设置'
                },
                {
                  title:'timeText (string、number)',
                  explain:'用户名称下方时间文字设置'
                },
                {
                  title:'timeTextStyle (object)',
                  explain:'用户名称下方时间文字样式设置'
                },
                {
                  title:'commentConStyle (object)',
                  explain:'评论框总体样式设置'
                },
                {
                  title:'commentConLeftStyle (object)',
                  explain:'评论框内部左侧样式设置'
                },
                {
                  title:'commentConRightStyle (object)',
                  explain:'评论框内部右侧样式设置'
                },
                {
                  title:'commentTextStyle (object)',
                  explain:'评论框内部文字样式设置'
                },
                {
                  title:'commentText (object)',
                  explain:'评论框内部文字设置'
                },
                {
                  title:'starNum (array)',
                  explain:'星星的总个数'
                },
                {
                  title:'starStyle (object)',
                  explain:'底部星星的样式'
                },
                {
                  title:'scoreNum (number)',
                  explain:'当前的评分星级'
                },
                {
                  title:'choiceColor (string)',
                  explain:'星星选中时候的颜色'
                },
                {
                  title:'noChoiceColor (string)',
                  explain:'星星未选中时候的颜色'
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
                  title:'暂无方法',
                  explain:''
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
            src={wcomment}/>
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

export default Wcomment
