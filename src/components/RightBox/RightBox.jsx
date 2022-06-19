import React from 'react'
import { BoxKanan, InBoxKanan } from '../../styles/HomeLayouts/Box/RightBoxStyle'

const RightBox = (props) => {
    const {children,} = props;
  return (
    <BoxKanan>
        <InBoxKanan>
            {children}
        </InBoxKanan>
    </BoxKanan>
  )
}

export default RightBox