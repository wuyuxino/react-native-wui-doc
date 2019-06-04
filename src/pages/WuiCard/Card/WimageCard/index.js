import React,{Component} from 'react'
import { Icon } from 'antd'
import wimagecard from '../../../../assets/wimagecard.png'

class WimageCard extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { WimageCard } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<WimageCard />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
                  title:'imgStyle (object)',
                  explain:'图片样式设置'
                },
                {
                  title:'imgUrl (string)',
                  explain:'图片地址设置'
                },
                {
                  title:'bottomConStyle (object)',
                  explain:'底部容器样式设置'
                },
                {
                  title:'bottomTitleStyle (object)',
                  explain:'底部容器标题文字样式设置'
                },
                {
                  title:'titleText (string)',
                  explain:'底部容器标题文字设置'
                },
                {
                  title:'bottomBriefStyle (object)',
                  explain:'底部容器简介文字样式设置'
                },
                {
                  title:'briefText (string)',
                  explain:'底部容器简介文字设置'
                },
                {
                  title:'bottomLeftConStyle (object)',
                  explain:'底部左侧容器设置'
                },
                {
                  title:'bottomRightConStyle (object)',
                  explain:'底部右侧容器设置'
                },
                {
                  title:'moreStyle (object)',
                  explain:'更多样式设置'
                },
                {
                  title:'moreText (string、number)',
                  explain:'更多文字设置'
                },
                {
                  title:'mapConstyle (object)',
                  explain:'星星容器样式设置'
                },
                {
                  title:'starStyle (object)',
                  explain:'星星样式设置'
                },
                {
                  title:'starNum (number)',
                  explain:'星星评分设置'
                },
                {
                  title:'choiceStarColor (string)',
                  explain:'选中星星的颜色'
                },
                {
                  title:'noChoiceStarColor (string)',
                  explain:'未选中星星的颜色'
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
                  title:'moreFun （function)',
                  explain:'点击更多后跳转的界面'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>WimageCard</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wimagecard}/>
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

export default WimageCard
