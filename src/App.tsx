import { Component, onCleanup } from 'solid-js';
import { onMount } from 'solid-js';
import Layout from './screen/layout';
import { Routes, Route, Outlet, Navigate, Navigator } from '@solidjs/router';
import { routes } from './app/const/routes';
import { Home } from './screen/home/home';
import { Edit } from './screen/edit/Edit';
import { DB } from './app/db/db';
import { filesRepository } from './app/files/files.repository';
import { files, fileStore, FileStored, setFiles } from './app/files/files.store';
import { Observable, Subscriber } from 'rxjs';
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
  function DefaultLayout() {
    return (<Layout><Outlet /></Layout>)
  }
  let sub: any //cant find the right type of subcribe
  onMount(async () => {
    await DB.checkAndMigrate()
    const q = await filesRepository.getAll()
    sub = await q.$.subscribe((retrivedFiles: FileStored[]) => {
      console.log('trigger all')
      //retrivedFiles.map((e)=>fileStore.createFile(e.name, e.creation, e.content, e .editing, e.opened, e.active))      
      //setFiles(retrivedFiles)
    })
  });

  onCleanup(() => {
    if (sub) {
      console.log('unsubscribe')
      sub.unsubscribe()
    }
  })
  //function getPath({navigate, location}: ({navigate:Navigator, location:Location})){
  function getPath({ navigate, location }: { navigate: Navigator, location: Location }) {
    return location.pathname == "/" || location.pathname == "" ? routes.home : location.pathname
  }
  return (
    <>
      <Routes>
        <Route path="/">
          <Navigate href={getPath} />
        </Route>
        <Route path="/" element={<DefaultLayout />}>
          <Route path={routes.home} element={<Home />}></Route>
          <Route path={routes.edit} element={<Edit />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
