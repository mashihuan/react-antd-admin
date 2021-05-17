import styled from 'styled-components'

export const LoginWrapper = styled.div`
  min-height: 100vh;
  padding-top: 200px;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px / 100%;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 33px;
  }
  .ant-form {
    .ant-form-item-required {
      color: #fff;
    }
    .login-btn {
      width: 100%;
    }
  }
`