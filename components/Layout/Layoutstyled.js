import styled from 'styled-components';
import { transformXY } from '../../theme/custom/mixins';

export default styled.div`
    width: 800px;
    height: auto;
    margin: 0px auto;
    padding: 10px;
    position: absolute;
    left:50%;
    top:50%;
    ${transformXY('-50%', '-50%')};

    @media (max-width: ${({ theme }) => theme.screens.screenxs}) {
        width: 100%;
    }
`;
