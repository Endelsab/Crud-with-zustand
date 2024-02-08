import React from "react"
import List from "./components/List"
import Add from "./components/Add"
import Update from "./components/Update"
import{BrowserRouter,Routes, Route} from "react-router-dom"



function App() {
  

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/"  element={<List/>}/>
              <Route path="/Add"  element={<Add/>}/>
              <Route path="/Update/:id"  element={<Update/>}/>
            </Routes>
        </BrowserRouter>
   

    </>
  )
}

export default App
