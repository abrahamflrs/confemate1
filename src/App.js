import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";

function App (){
return(
<div>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio/>} />
  </Routes>
</BrowserRouter>
</div>
)

}

export default App;