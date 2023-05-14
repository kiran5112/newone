// rfce
import { createContext, useEffect, useState } from 'react';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import axios from 'axios';
import Header from './PROJECTS/Header';
// import Products from './PROJECTS/Products'
import Clocks from './PROJECTS/Clocks';
import PRAC2 from './PROJECTS/PRAC2';
import ClowdApp from './PROJECTS/ClowdApp';
import Tipcl from './Tipcl';
import Web from './PROJECTS/Web';
import Cart from './Cart';
import Flex from './PROJECTS/Flex';
import Ecommers from './PROJECTS/Ecommers';




function App() {
  return (
    <div>
      <Ecommers />
      <ClowdApp/>
    </div>
  )
}

export default App








