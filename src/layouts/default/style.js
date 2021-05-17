import styled from 'styled-components'
import { MID_SCREEN_WIDTH } from '@/common/config'

export const DefaultLayoutWrapper = styled.div`
  min-height: 100vh;
  .app-layout {
    min-height: 100vh;
    .app-main {
      flex-direction: column;
      margin-left: ${props => (props.collapsed ? '48px' : '200px')};
      transition: width .3s cubic-bezier(.645,.045,.355,1);
      .app-content {
        width: auto;
        margin: 20px;
        /* background: #f0f2f5; */
      }
    }
  }
  
  @media (max-width: ${MID_SCREEN_WIDTH}px) {
    .app-layout {
      .app-sider-wrap {
        display: none;
      }
      .app-main {
        margin-left: 0;
      }
    }
  }
`