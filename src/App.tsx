import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import Layout from './screen/layout';
import { Routes, Route, Outlet, Navigate,Navigator, NavigateProps } from '@solidjs/router';
import { routes } from './app/const/routes';
import { Home } from './screen/home/home';
import { Edit } from './screen/edit/Edit';
import { DB } from './app/db/db';
  /*const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};
*/


const App: Component = () => {
  function DefaultLayout(){
    return (<Layout><Outlet/></Layout>)
  }

  onMount(async () => {
    console.log('filename')
    DB.checkAndMigrate()
    console.log('filename end')
  });
  


  //function getPath({navigate, location}: ({navigate:Navigator, location:Location})){
  function getPath({navigate, location}:{navigate:Navigator, location:Location}){
    return location.pathname == "/" || location.pathname=="" ? routes.home : location.pathname
  }
  return (
    <>
    <Routes>
        <Route path="/">
          <Navigate href={getPath} />
        </Route>
        <Route path="/" element={<DefaultLayout/>}>
            <Route path={routes.home} element={<Home/>}></Route>          
            <Route path={routes.edit} element={<Edit/>}></Route>          
        </Route>
    </Routes>      
    </>
  );
};

export default App;
