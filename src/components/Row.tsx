import React, { FC } from 'react'
export interface RowI{
    children: string | JSX.Element | JSX.Element[] |( () => JSX.Element)
}
const Row:FC<RowI>=({children})=> {
  return (
    <div className='row' style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}><>
        {children}
        </>
    </div>
  )
}

export default Row;
