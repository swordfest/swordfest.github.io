import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SideBarMobile from './components/SideBarMobile'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import ButtonsPagination from './components/ButtonsPagination'
import ContentServers from './components/ContentServers'
import ModalQR from './components/ModalQR'
import DataFetching from './components/DataFetching'




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar/>
    {/* <SideBarMobile/> */}
    {/* <ModalQR/> */}
    <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
      <Sidebar/>
      <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
      <ButtonsPagination/>
      <ContentServers/>
      {/* <DataFetching/> */}
      <ButtonsPagination/>
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/

reportWebVitals();





