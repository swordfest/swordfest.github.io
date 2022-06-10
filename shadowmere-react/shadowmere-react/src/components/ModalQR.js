import React from "react";
import '../index.css';

function ModalQR() {
    return (
      <div className="modal-qr w-full overflow-auto fixed z-[150] left-0 top-0 h-screen bg-black bg-opacity-[0.7] flex flex-col items-center justify-center gap-4" >
          <div className=" w-[328px] h-auto sm:w-[360px] bg-white rounded-lg">
              <img className="rounded-lg" alt="QR Code for server address"/>
          </div>
          <h1 className="text-white">Click or tap anywhere on the screen to close it</h1>
      </div>
      )
  }

export default ModalQR;