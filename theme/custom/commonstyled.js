import { createGlobalStyle } from 'styled-components';
import { boxsizing, clearfix } from './mixins';

export default createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    line-height:22px;
    ${boxsizing('border-box')};
    font-size: ${({ theme }) => theme.fontsize.fontbasesizes}; 
    color: ${({ theme }) => theme.colors.graycolor5};
    background : ${({ theme }) => theme.colors.color1};
  }

  * {
    margin: 0px;
    padding: 0px;
    ${boxsizing('border-box')};
  }

  .clearfix {
    ${clearfix()};
  }
`;
