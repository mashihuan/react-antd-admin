import styled from 'styled-components'
import { LG_SCREEN_WIDTH, MID_SCREEN_WIDTH } from '@/common/config'

export const AppSiderWrapper = styled.div`
  .app-sider {
    position: fixed;
    left: 0;
    height: 100vh;
    overflow: hidden;
    transition: width .3s cubic-bezier(.645,.045,.355,1);
    .logo {
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 16px;
      .img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .title {
        margin-left: 12px;
        font-weight: bold;
        font-size: 18px;
        color: #fff;
      }
    }
    .app-menu {
      height: calc(100vh - 64px);
      overflow: auto;
      /* 滚动条样式 */
      ::-webkit-scrollbar-track-piece {
        background-color: #263849;
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #53626F;
        outline: 0px;
        border: 0px;
      }
    }
  }

  @media (max-width: ${LG_SCREEN_WIDTH}px) {
    .app-sider.ant-layout-sider-collapsed {
      width: 48px !important;
      min-width: 48px !important;
      .logo {
        padding-left: 8px;
        padding-right: 0;
        text-align: center;
        .title {
          display: none;
        }
      }
      .ant-menu-inline-collapsed {
        width: 48px !important;
      }
      .ant-menu-item {
        padding: 0 16px !important;
      }
    }
  }

  @media (max-width: ${MID_SCREEN_WIDTH}px) {
    .app-sider {
      width: 200px !important;
      min-width: 200px !important;
      /* display: none; */
      .ant-menu-inline-collapsed {
        width: 200px !important;
        > .ant-menu-item .ant-menu-item-icon + span {
          max-width: auto !important;
          opacity: 1;
        }
      }
    }
  }

  
`