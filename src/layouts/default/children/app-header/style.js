import styled from 'styled-components'
import { LG_SCREEN_WIDTH } from '@/common/config'

export const AppHeaderWrapper = styled.div`
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    line-height: 48px;
    padding: 0 16px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    .left {
      font-size: 20px;
      .icons {
        display: none;
        cursor: pointer;
      }
    }
    .right {
      .ant-btn {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: ${LG_SCREEN_WIDTH}px) {
    .app-header {
      .left {
        .icons {
          display: block;
        }
      }
    }
  }
`