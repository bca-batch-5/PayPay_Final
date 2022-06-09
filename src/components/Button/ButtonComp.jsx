import React from 'react'
import { Button } from '../../styles/Button/buttonStyle'

const ButtonComp = (props) => {
    const {children,color,backgroundColor, width, bgHover,colorHover,border,borderHover,onClick}=props;

  return (
    <Button onClick={onClick} color={color} backgroundColor={backgroundColor}
    width={width} bgHover={bgHover} colorHover={colorHover} border={border} borderHover={borderHover}
    >{children}</Button>
  )
}

export default ButtonComp