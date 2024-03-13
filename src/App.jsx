import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Header from './components/Header'
import ListItems from './components/ListItems'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'

function App() {
  const [FoodList, setFoodList] = useState([])
  const [FoodId,setFoodId]=useState("656329")

  return (
    <div className="App">
      <Header/>
      <Search FoodList={FoodList} setFoodList={setFoodList}/>
      {/* Parent Component */}
      <Container>
        {/* Children Components */}
        <InnerContainer>
            <ListItems setFoodId={setFoodId} FoodList={FoodList} setFoodList={setFoodList}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails FoodId={FoodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
