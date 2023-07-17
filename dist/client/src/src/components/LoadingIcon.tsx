import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const LoadingDivStyles = styled.div`
  text-align: center;
  padding-top: 2rem;
  display: inline-block;
  width: 100%;
`

const LoadingInlineStyles = styled.div`
  text-align: center;
  display: inline-block;
`

interface ILoadingGifProps {
  color: string
}

export const LoadingGifSmall = ({ color }: ILoadingGifProps) => {
  const animatedIcon = <FontAwesomeIcon icon={faCircleNotch} spin />
  return <LoadingDivStyles style={{ color }}>{animatedIcon}</LoadingDivStyles>
}

export const LoadingGifInline = ({ color }: ILoadingGifProps) => {
  const animatedIcon = <FontAwesomeIcon icon={faCircleNotch} spin />
  return <LoadingInlineStyles style={{ color }}>{animatedIcon}</LoadingInlineStyles>
}
