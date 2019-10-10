import styled from 'styled-components';
import { borderradius, transform, boxshadow } from '../../theme/custom/mixins';

export default styled.div`
    width: 35px;
    float: left;
    height: 35px;
    position: relative;

    .selectedLang {
      width: 32px;
      float: left;
      height: 32px;
      padding: 2px;
      border: solid 1px ${({ theme }) => theme.colors.color4};
      ${borderradius('16px')};

      img {
        display: block;
        max-width: 100%;
      }

      &::before {
        content: '';
        width: 7px;
        height: 1px;
        background:${({ theme }) => theme.colors.color4};
        display: block;
        position: absolute;
        left: 10px;
        top: 100%;
        ${transform('rotate(30deg)')}
      }

      &::after {
        content: '';
        width: 7px;
        height: 1px;
        background:${({ theme }) => theme.colors.color4};
        display: block;
        position: absolute;
        right: 13px;
        top: 100%;
        ${transform('rotate(-30deg)')}
      }
    }
    
      .languageDropDown {
        width:120px;
        height: auto;
        position: absolute;
        left:0;
        top: 100%;
        background: ${({ theme }) => theme.colors.white};
        z-index: 999;
        border: solid 1px ${({ theme }) => theme.colors.color2};
        padding: 5px 10px;
        display: none;
        margin:0;
        list-style: none;
        ${boxshadow('0 0 10px rgba(0,0,0,0.08)')};
        ${borderradius('5px')};

        &:after, &:before {
          bottom: 100%;
          left: 15px;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        &:after {
          border-color: rgba(255, 255, 255, 0);
          border-bottom-color: #fff;
          border-width: 5px;
          margin-left: -5px;
        }
        &:before {
          border-color: rgba(235, 235, 235, 0);
          border-bottom-color: #ebebeb;
          border-width: 6px;
          margin-left: -6px;
        }

        li {
          width: 100%;
          float: left;
          height: auto;
          font-family: ${({ theme }) => theme.fonts.fontsfuitextregular};
          font-size: ${({ theme }) => theme.fontsize.fontbasesizes};
          color: ${({ theme }) => theme.colors.color5};
          cursor: pointer;
          padding: 5px;

          &:hover {
            color: ${({ theme }) => theme.colors.color4};
          }

          span {        
            width:16px;
            float: left;
            height: 16px;
            margin: 4px 10px 0 0; 
            
            img {
              max-width: 100%;
              display: block;
            }
          }
        }
      }
      &:hover {
        .languageDropDown {
          display: block;
        }
      }
    }
  }
`;
