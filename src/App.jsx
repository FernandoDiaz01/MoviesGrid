import React from "react";
import {MovieGrid }from "./MovieGrid";
import styles from './App.module.css';
import MoviesFavorites from "./MoviesFavorites";
import { Route, Routes } from "react-router";
import MovieDetail from "./MovieDetail";

//redux


 export function App() {
  return (
    
  <>
  <header>
    <h1 className={styles.title} >Movies</h1>
    </header>
    <div>
      <Routes>
        <Route path="/" element={<MovieGrid/>}/>
      <Route path='/fav' element={<MoviesFavorites/>} />
      <Route path='/detail' element={<MovieDetail/>} />
      </Routes>
      </div>
    </>
    
 

  );
}



