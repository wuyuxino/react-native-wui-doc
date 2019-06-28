import React,{Component} from 'react'
import { Icon } from 'antd'
import wcardone from '../../../../assets/wcardone.png'

class Wcardone extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Wcardone } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Wcardone />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
                  explain:'外层容器样式设置'
                },
                {
                  title:'innerContentStyle (object)',
                  explain:'内层容器样式设置'
                },
                {
                  title:'imageStyle (object)',
                  explain:'图片样式设置'
                },
                {
                  title:'imageUrl (string)',
                  explain:'图片路径'
                },
                {
                  title:'titleContentStyle (object)',
                  explain:'标题容器样式设置'
                },
                {
                  title:'titleTextStyle (object)',
                  explain:'标题文字样式设置'
                },
                {
                  title:'titleText (string、number)',
                  explain:'标题文字设置'
                },
                {
                  title:'subtitleText (string、number)',
                  explain:'副标题文字设置'
                },
                {
                  title:'subtitleTextStyle (object)',
                  explain:'标题文字样式设置'
                },
                {
                  title:'bottomContentStyle (object)',
                  explain:'底部容器设置'
                },
                {
                  title:'bLeftConStyle (object)',
                  explain:'底部左侧容器设置'
                },
                {
                  title:'bRightConStyle (object)',
                  explain:'底部右侧容器设置'
                },
                {
                  title:'bottomIconStyle (object)',
                  explain:'底部左侧图标样式设置'
                },
                {
                  title:'bottomRIconStyle (object)',
                  explain:'底部右侧图标样式设置'
                },
                {
                  title:'seeImg (string)',
                  explain:'查看图标设置'
                },
                {
                  title:'seeNumber (string、numebr)',
                  explain:'查看图标右侧显示文字设置设置'
                },
                {
                  title:'commentImg (string)',
                  explain:'评论图标设置'
                },
                {
                  title:'commentRImg (string)',
                  explain:'右侧评论图标设置'
                },
                {
                  title:'commentNumber (string、numebr)',
                  explain:'评论图标右侧显示文字设置设置'
                },
                {
                  title:'bottomTextStyle (object)',
                  explain:'左侧容器显示字体样式设置'
                },
                {
                  title:'heartImg (object)',
                  explain:'左侧容器显示字体样式设置'
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
                  title:'clickFunc (function)',
                  explain:'点击容器需要执行的函数'
                },
                {
                  title:'commentClickFun (function)',
                  explain:'点击右下角评论图标需要执行的函数'
                },
                {
                  title:'heartClickFun (function)',
                  explain:'点击右下角喜爱图标需要执行的函数'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Wcardone</h1>
          <h2 style={{marginTop:'10px'}}><Icon type="picture" theme="filled" style={{color:'#1890FF'}} /> 效果图</h2>
          <img 
            width='300px' 
            style={{
              borderRadius:'45px'
            }}
            src={wcardone}/>
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

export default Wcardone;
