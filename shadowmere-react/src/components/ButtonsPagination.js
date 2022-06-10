import React from "react";
import '../index.css';

function ButtonsPagination() {
    return (
        <div className="buttonPagesWrapper w-full h-auto flex justify-center">
          <div class="buttonPages w-[328px] h-14 flex items-center justify-between">
                  {ButtonPaginadoStart()}
                  {ButtonPaginadoPrevious()}
                  {ButtonPaginadoNext()}
                  {ButtonPaginadoEnd()}
          </div>
        </div>
    )
  }
  
  function ButtonPaginadoNext() {
    return (
      <button className="button-next w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f105'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                        
      </button>
    )
  }
  
  function ButtonPaginadoPrevious() {
    return (
      <button className="button-previous w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome rounded-lg shadow-xl" type="button">
        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f104'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>
      </button>
    )
  }
  
  function ButtonPaginadoEnd() {
    return (
      <button className="button-end w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f101'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                                               
      </button>
    )
  }
  
  function ButtonPaginadoStart() {
    return (
      <button className="button-start w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome rounded-lg shadow-xl" type="button">
        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f100'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>                        
      </button>
    )
  }

  export default ButtonsPagination;