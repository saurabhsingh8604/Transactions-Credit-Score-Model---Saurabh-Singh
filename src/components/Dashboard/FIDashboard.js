import React from 'react'
import Nav from './Nav'
import { Divider } from 'antd'
import FISummary from './FISummary'
export default function FIDashboard() {
  return (
    <div style={{padding:'16px'}}>
   <Nav></Nav>
   <Divider/>
   <FISummary></FISummary>
   </div>
  )
}
