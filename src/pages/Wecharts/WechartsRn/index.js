import React,{Component} from 'react'
import { Icon } from 'antd'

class WechartsRn extends Component{
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
            }}>Echarts在ReactNative中的安装和使用方法</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save native-echarts 
            <br/><br/>
            # 使用方法
            <br/><br/>
            {/* start */}
            import React, &#123; Component &#125; from 'react';<br/>
            import Echarts from 'native-echarts';<br/>
            import &#123; Platform &#125; from 'react-native';<br/><br/>
            export default class PieEcharts extends Component &#123;<br/>
            &nbsp;&nbsp;constructor(props) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;<br/>
            &nbsp;&nbsp; &#125;<br/>
              }<br/><br/>
              //防止页面过度渲染<br/>
              shouldComponentUpdate(nextProps, nextState) &#123;<br/>
              &nbsp;&nbsp;for (let i = 0; i &lt; nextProps.data; i++) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (nextProps.data[i].value !== this.props.data[i].value) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true<br/>
              &nbsp;&nbsp;&nbsp;&nbsp; }<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;if (nextProps.backgroundColor !== this.props.backgroundColor) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return true<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;return false<br/>
              }<br/><br/>
              render() &#123;<br/>
              &nbsp;&nbsp;const option = &#123;<br/>
              &nbsp;&nbsp;backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'rgb(27,27,27)',<br/>
              &nbsp;&nbsp;tooltip: &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  trigger: 'axis',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  formatter: "&#123;a} &#123;b}: &#123;c} (&#123;d}%)"<br/>
              &nbsp;&nbsp;},<br/>
              &nbsp;&nbsp; grid: &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  left: '10%',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  right: '3%',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  top: '5%',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;   bottom: '5%',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;   // containLabel: true,<br/>
              &nbsp;&nbsp; },<br/>
              &nbsp;&nbsp;color: this.props.type === 1 ? ['#26C29F', '#178FDF', '#FF651A'] : ['#50E3C2', '#0093DB', '#7BCF40', '#76DDFB'],<br/>
              &nbsp;&nbsp; series: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;    name: '能耗统计',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;    type: 'pie',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;    radius: ['40%', '80%'],<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;     center: ['50%', '50%'],<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;     avoidLabelOverlap: false,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;     label: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   normal: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    show: false,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     position: 'center'<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;    },<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;emphasis: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show: true,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textStyle: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontSize: 20,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'bold',<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                    &nbsp;&nbsp;},<br/>
                    &nbsp;&nbsp;labelLine: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;normal: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show: false<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                    &nbsp;&nbsp;},<br/>
                    &nbsp;&nbsp;data: this.props.data<br/>
                    &nbsp;&nbsp;}<br/>
                    &nbsp;&nbsp;]<br/>
                    &nbsp;&nbsp;};<br/><br/>
                return (<br/>
                  &nbsp;&nbsp;&lt;Echarts<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp; option=&#123;option&#125;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp; height=&#123;Platform.OS === 'android' ? 150 : 150&#125; /><br/>
                  &nbsp;&nbsp; &nbsp;&nbsp;);<br/>
                  &nbsp;&nbsp;}}<br/><br/>
            {/* end */}
          </div>
        </div>
      </div>
    )
  }
}

export default WechartsRn
