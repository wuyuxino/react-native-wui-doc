import React,{Component} from 'react'
import { Icon } from 'antd'

class Wecharts extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <div
        style={{
          width:'100%',
          overflow:'hidden'
        }}>
        {/* 1 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>Echarts在React中的安装和使用方法</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save echarts  
            <br/>
            <br/>
            使用方法
            <br/>
            {/* star */}
            import React, &#123; Component &#125; from 'react'<br/><br/>
            // 引入echarts文件和中国地图的js文件<br/>
            import echarts from 'echarts'<br/><br/>
            export class EchartMap extends React.Component &#123;<br/>
            &nbsp;&nbsp;constructor(props) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;super(props)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;this.state=&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentName:'china',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isOneClick: true<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;this.setPieOption = this.setPieOption.bind(this)<br/>
            &nbsp;&nbsp;this.initPie = this.initPie.bind(this)<br/>
              &#125;<br/><br/>
              // 初始化图表函数<br/>
              initPie() &#123;<br/>
              &nbsp;&nbsp;const &#123; data &#125; = this.props<br/>
              &nbsp;&nbsp;let myChart = echarts.init(this.refs.AreaEcharts)<br/>
              &nbsp;&nbsp;let options = this.setPieOption(data)<br/>
              &nbsp;&nbsp;myChart.setOption(options)<br/>
              &nbsp;&nbsp;// 检测页面尺寸变化 <br/>
              &nbsp;&nbsp;window.addEventListener("resize", function () &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;myChart.resize();<br/>
              &nbsp;&nbsp;&#125;)<br/>
              &#125;<br/><br/>

              componentDidMount() &#123;<br/>
              &nbsp;&nbsp;this.initPie()<br/>
              &#125;<br/><br/>
              componentDidUpdate() &#123;<br/>
              &nbsp;&nbsp;this.initPie()<br/>
              &#125;<br/><br/>
              render() &#123;<br/>
              &nbsp;&nbsp;const &#123; height, width &#125; = this.props<br/>
              &nbsp;&nbsp;return (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="pie-react"><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref="AreaEcharts" <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&#123;&#123; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: width?width:"100%", <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: height?height:"500px" <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                &nbsp;&nbsp;}<br/><br/>
              setPieOption(data) &#123;<br/>
              &nbsp;&nbsp;return &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;_backgroundColor: '#FFFFFF', <br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;get backgroundColor() &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this._backgroundColor;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
              &nbsp;&nbsp;tooltip : &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;trigger: 'item'  <br/>
              &nbsp;&nbsp;&#125;,      <br/>
              &nbsp;&nbsp;series: [&#123; <br/>
                &nbsp;&nbsp; // 此处设置图表的一些属性方法直接从官方demo复制粘贴过来即可<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;data:mydata,  //数据<br/>
                &nbsp;&nbsp;}]<br/>
                &nbsp;&nbsp;}<br/>
                &nbsp;&nbsp;}<br/>
            }<br/><br/>
            {/* end */}
          </div>
        </div>
      </div>
    )
  }
}

export default Wecharts
