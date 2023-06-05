import React, { useState } from 'react'
import FITable from './FITable'
import TransactionSummery from './TransactionSummery'
import AverageDelay from './AverageDelay'
import Gague from './Gague'
import Cards from './Cards'
import Nav from './Nav'
import { Divider, Typography, Row } from 'antd'
import { RotatingLines } from 'react-loader-spinner'
import styled from 'styled-components'

const { Text } = Typography
const LoaderCss = styled.div`
  .loader-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.834)
      url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzU0NDYwYmFjYzllNzI3Y2FjYTZhMDdlZjVlNzYxOWEwMzk4ZTlkYyZjdD1n/ExfpC1qNeEmJa36Ooy/giphy.gif')
      center no-repeat;
    z-index: 1;
  }
`

const NormalText = styled(Text)`
  font-weight: 800;
  font-size: 25px;
  line-height: 20px;
  color: #1677ff;
`
export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 2000)
  }

  function FakeLoader(props) {
    const [isTimedOut, setTimedOut] = React.useState(false)
    React.useEffect(() => {
      const id = setTimeout(() => setTimedOut(true), 3500)
      return () => clearTimeout(id)
    }, [])
    return isTimedOut ? (
      props.children
    ) : (
      <>
        <div>
          <Row
            style={{
              display: 'block',
              //   marginLeft: 'auto',
              //   marginRight: 'auto',
              //   marginTop:'auto',
              //   marginBottom:'auto',
              justifyContent: 'center',
              paddingTop: '250px',
            }}
          >
            <RotatingLines
              strokeColor="#1677FF"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
             
            />
          </Row>
          <Row
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <NormalText style={{marginTop:'50px'}}>Unleashing your true credit potential..!</NormalText>
          </Row>
        </div>
      </>
    )
  }
  return (
    //    !loading && (
    //     <>
    //     <img src={require('./spinner.html')}></img>

    //    </>
    <>
      <FakeLoader>
        {' '}
        <Nav></Nav>
        <Divider />
        <div
          style={{
            width: 1080,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <br></br>
          <div style={{}}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Gague></Gague>
              <AverageDelay></AverageDelay>
              <TransactionSummery></TransactionSummery>
            </div>
            {/* <Cards></Cards> */}
          </div>
          <Divider></Divider>
          <FITable></FITable>
        </div>
      </FakeLoader>
    </>
  )
}

{
  /* <Nav></Nav>
<Divider/>
<div style={{width:1080, border:"1px solid red",display:'block', marginLeft:'auto', marginRight:'auto' }}>

 <br></br>
 <div style={{ }} >
 <div style={{display:'flex', gap:'20px', }}>
  <Gague></Gague>  
 <AverageDelay></AverageDelay>
 <TransactionSummery></TransactionSummery>
 </div>
 <Cards></Cards>
 </div>
 <Divider></Divider>
<FITable></FITable>
</div> */
}
