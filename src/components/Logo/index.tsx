import { logoImg } from '../../assets/vectors';

import { Wrapper } from './styles'

export function Logo() {
  return(
    <Wrapper>
      <img src={logoImg} alt="" aria-hidden />
      <span>money manager</span>
    </Wrapper>
  )
} 