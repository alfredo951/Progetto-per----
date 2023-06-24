import React, { FC } from 'react'
export interface ColumnI{
    height:String,
    width:String|null,
    children: string | JSX.Element | JSX.Element[] |( () => JSX.Element)
}
const Column:FC<ColumnI>=({children, height, width})=> {
  return (
    <div className='column' style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column", width:width?`${width}`:"100%", height:`${height}`}}><>
        {children}
        </>
    </div>
  )
}

export default Column;