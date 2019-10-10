import styled from 'styled-components';
import { transformXY, calcsizes, transform } from '../../theme/custom/mixins';

export default styled.div`
  width: 800px;
  float: left;
  height: auto;
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.white};
  position: relative;    

  @media (max-width: ${({ theme }) => theme.screens.screenxs}) {
    width: 100%;
  } 

  .langInputBox {
    width: calc(100% - 45px);
    float: left;
    height: auto;
    border: none;
    resize: none;
    margin: 0 0 0 10px;
    min-height: 75px;
    font-family: ${({ theme }) => theme.fonts.fontsfuitextregular};
    font-size: ${({ theme }) => calcsizes(theme.fontsize.fontbasesize, 2, 4, 'minus')};
    color: ${({ theme }) => theme.colors.color3};
  }

  .swipBox {
    width: calc(100% - 45px);
    float: right;
    position: relative;
    height:1px;
    background: ${({ theme }) => theme.colors.color2};
    margin: 10px 0;

    .iconBox {
      width: 35px;
      height: 30px;
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      text-align:center;
      ${transformXY('-50%', '-50%')};
      background: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  }
  .inputGroupBox {
      width: 100%;
      float: left;
      height: auto;
      margin: 0 0 0 0;
    }
`;
