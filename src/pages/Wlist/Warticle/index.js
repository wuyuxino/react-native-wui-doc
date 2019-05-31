import React,{Component} from 'react'
import { Icon } from 'antd'
import warticle from '../../../assets/warticle.png'

class Warticle extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0]
    let str = 'import { Warticle } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<Warticle />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal'
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
          <h1 style={{fontSize:'30px',color:'#1890FF',letterSpacing:1}}>Warticle</h1>
          <h2><Icon type="snippets" theme="filled" style={{color:'#1890FF'}} /> 属性</h2>
          <ol>
            {
              [
                {
                  title:'containerStyle (object)',
                  explain:'容器整体样式设置'
                },
                {
                  title:'topContainerStyle (object)',
                  explain:'顶部容器整体样式设置'
                },
                {
                  title:'topLeftConStyle (object)',
                  explain:'顶部左侧容器整体样式设置'
                },
                {
                  title:'topRightConStyle (object)',
                  explain:'顶部右侧容器整体样式设置'
                },
                {
                  title:'topImgStyle (object)',
                  explain:'顶部头像样式设置'
                },
                {
                  title:'topImgUrl (string)',
                  explain:'顶部头像地址设置'
                },
                {
                  title:'userConStyle (object)',
                  explain:'顶部用户名容器样式设置'
                },
                {
                  title:'userTextStyle (object)',
                  explain:'顶部用户名文字样式设置'
                },
                {
                  title:'userText (string、number)',
                  explain:'顶部用户名文字设置'
                },
                {
                  title:'tagText (string、number)',
                  explain:'顶部用户名文字右侧标签文字设置'
                },
                {
                  title:'tagTextConStyle (object)',
                  explain:'顶部用户名文字右侧标签容器样式设置'
                },
                {
                  title:'tagTextStyle (object)',
                  explain:'顶部用户名文字右侧标签文字样式设置'
                },
                {
                  title:'briefText (string、number)',
                  explain:'用户个人简介文字设置'
                },
                {
                  title:'briefTextStyle (object)',
                  explain:'用户个人简介文字样式设置'
                },
                {
                  title:'titleTextStyle (object)',
                  explain:'文章标题文字样式设置'
                },
                {
                  title:'titleText (string、number)',
                  explain:'文章标题文字设置'
                },
                {
                  title:'contentText (string、number)',
                  explain:'文章内容文字设置'
                },
                {
                  title:'contentTextStyle (object)',
                  explain:'文章内容文字样式设置'
                },
                {
                  title:'imgConStyle (object)',
                  explain:'图片容器样式设置'
                },
                {
                  title:'imgItemStyle (object)',
                  explain:'单个图片单元容器样式设置'
                },
                {
                  title:'contentImgStyle (object)',
                  explain:'图片样式设置'
                },
                {
                  title:'imgDate (array)',
                  explain:'图片数组数据设置'
                },
                {
                  title:'bottomConItemStyle (object)',
                  explain:'底部容器样式设置'
                },
                {
                  title:'bottomImgStyle (object)',
                  explain:'底部图片样式设置'
                },
                {
                  title:'bottomTextStyle (string、number)',
                  explain:'底部文字样式设置'
                },
                {
                  title:'bottomTextOne (string、number)',
                  explain:'底部文字一设置'
                },
                {
                  title:'bottomTextTwo (string、number)',
                  explain:'底部文字二设置'
                },
                {
                  title:'bottomTextThree (string、number)',
                  explain:'底部文字三设置'
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
                  title:'clickFun (function)',
                  explain:'点击文章执行的操作'
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
            src={warticle}/>
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

export default Warticle
