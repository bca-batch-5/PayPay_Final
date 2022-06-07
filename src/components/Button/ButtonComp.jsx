import React from 'react'
import { Button } from '../../styles/Button/buttonStyle'

const ButtonComp = (props) => {
    const {children,color,backgroundColor, width, bgHover,colorHover,borderColor,borderColorHover}=props;

  return (
    <Button color={color} backgroundColor={backgroundColor}
    width={width} bgHover={bgHover} colorHover={colorHover} borderColor={borderColor} borderColorHover={borderColorHover}
    >{children}</Button>
  )
}

export default ButtonComp