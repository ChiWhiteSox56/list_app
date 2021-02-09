import { FC } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Text from '../Text';

const TitleText = styled.h1`
    font-size: 40px;
    text-align: center;
    ${color}
`
const ModalTitle: FC = ({children}) => {
    
    return (
        <TitleText color='#000'>
        <Text>
            {children}
        </Text>
        </TitleText>
    ) 
}

export default ModalTitle;