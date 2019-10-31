import React, { Component } from 'react';
import { Icon } from 'antd';

class Adaptation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* 1 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            scaleSizeH scaleSizeW
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            设置宽度和高度
          </div>
        </div>
        {/* 2 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            setSpText
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            设置字体的大小
          </div>
        </div>
        {/* 3 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            getStatusBarHeight
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            获取状态栏的高度
          </div>
        </div>
        {/* 4 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            isIphoneX
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            判断是否为iphoneX
          </div>
        </div>
        {/* 5 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            fontScale
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            获取屏幕的dp
          </div>
        </div>
        {/* 6 */}
        <div>
          <p
            style={{
              letterSpacing: 1,
              fontSize: '22px',
              color: '#1890FF',
            }}
          >
            width / height
          </p>
          <div
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: 1,
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              marginBottom: '25px',
            }}
          >
            获取当前手机屏幕的宽度和高度
          </div>
        </div>
      </div>
    );
  }
}

export default Adaptation;
