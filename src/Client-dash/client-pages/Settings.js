// import React, { useState } from 'react';
// import './setting.css';
// import user from '../../Static/Images/users2.jpg'
// import { LuPenLine } from "react-icons/lu";
// import { RxCross2 } from "react-icons/rx";
// const Settings = () => {
//   const [showButtons, setShowButtons] = useState(false);

//   const handlePenClick = () => {
//     setShowButtons(!showButtons);
//   };

//   const resetpass = ({ isVisible, onClose }) => {
//     if (!isVisible) {
//       return null;
//     }
//   }

//   const [isOverlayVisible, setOverlayVisible] = useState(false);

//   // const showOverlay = () => {
//   //   setOverlayVisible(true);
//   // };

//   const hideOverlay = () => {
//     setOverlayVisible(true);
//   };


//   return (
//     <div style={{ border: '2px solid brown' }} className=' client-setting-container'>
//       <div className=' client-setting-all'>
//         <div style={{ border: '2px solid red', }} className='client-sett-left'>
//           <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
//             <div className="hr_client">
//               <h3 style={{ marginBottom: "10px", padding: '10px' }}>Account details</h3>
//             </div>

//             <div className="user-client-container">
//               <img src={user} alt="" className="client-profile-image" />
//             </div>
//             <div >
//               <LuPenLine onClick={handlePenClick} style={{ marginTop: "30px", cursor: "pointer", color: '#067cf3' }} />
//             </div>

//           </div>
//           <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             [TEST] Vinayak Kumhar</div>
//           {showButtons && (
//             <div style={{ display: "flex", marginTop: '50px' }}>
//               <button className='btn1'>Save</button>
//               <button className='btn2' >Cancel</button>
//             </div>
//           )}

//           <div className='Profile-access-client'>

//             {/* <div style={{margin:'20px'}}><h3>Profile access</h3></div> */}
//             <div className="hr_client">
//               <h3 style={{ marginBottom: "10px", padding: '10px' }}>Profile access</h3>
//             </div>

//             <div className='client-email' style={{ margin: '10px', marginTop: '20px' }}>
//               <label>Email</label>
//               <input type="text" placeholder="Email" />


//             <div className='client-resetpass' >
//               <span>Reset Password</span>

//             </div>  

//               <div className="overlay">

//                 <div className="overlay-content">
//                   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'3px solid #84a9ce'}}> 
//                   <h3 style={{ padding:'10px',}}>Reset Password?</h3>
//                   <RxCross2 onClick={hideOverlay} style={{color:'blue',cursor:"pointer"}} />
//                   </div>
//                   <div style={{margin:'10px'}}> 
//                   <p style={{padding:'10px'}}>You're about to send password reset instructions to vinayakkumbhar@hotmail.com! Are you sure?</p>
//                   <button className="btn1">Reset Password</button>
//                   <button className="btn2">Cancel</button>
//                 </div>
//                 </div>


//                 {/* <resetpass isVisible={isOverlayVisible} onClose={hideOverlay} /> */}
//               </div>
//             </div>






//           </div>


//         </div>
//         <div style={{ border: '2px solid blue' }} className='client-sett-right'></div>
//       </div>

//     </div>
//   )
// }

// export default Settings





import React, { useState } from 'react';
import './setting.css';
import user from '../../Static/Images/users2.jpg'
import { LuPenLine } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const ResetPass = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }



  return (
    <div className="overlay">
      <div className="overlay-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #84a9ce' }}>
          <h3 style={{ padding: '10px', }}>Reset Password?</h3>
          <RxCross2 onClick={onClose} style={{ color: 'blue', cursor: "pointer" }} />
        </div>
        <div style={{ margin: '10px' }}>
          <p style={{ padding: '10px' }}>You're about to send password reset instructions to <strong>vinayakkumbhar@hotmail.com</strong>! Are you sure?</p>

          <button className="btn1">Reset Password</button>
          <button onClick={onClose} className="btn2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handlePenClick = () => {
    setShowButtons(!showButtons);
  };

  const showOverlay = () => {
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
  };
  //
  const [passShow, setPassShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleAuthentication = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div style={{ border: '2px solid brown' }} className='client-setting-container'>
      <div className='client-setting-all'>
        <div style={{ border: '2px solid red' }} className='client-sett-left'>
          <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
            <div className="hr_client">
              <h3 style={{ marginBottom: "10px", padding: '10px' }}>Account details</h3>
            </div>

            <div className="user-client-container">
              <img src={user} alt="" className="client-profile-image" />
            </div>
            <div>
              <LuPenLine onClick={handlePenClick} style={{ marginTop: "30px", cursor: "pointer", color: '#067cf3' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            [TEST] Vinayak Kumhar</div>
          {showButtons && (
            <div style={{ display: "flex", marginTop: '50px' }}>
              <button className='btn1'>Save</button>
              <button className='btn2'>Cancel</button>
            </div>
          )}
          <div className='Profile-access-client'>
            <div className="hr_client">
              <h3 style={{ marginBottom: "10px", padding: '10px' }}>Profile access</h3>
            </div>
            <div className='client-email' style={{ margin: '10px', marginTop: '20px' }}>
              <label>Email</label>
              <input type="text" placeholder="Email" />
              <div className='client-resetpass'>
                <span onClick={showOverlay} style={{ cursor: 'pointer', color: '#067cf3' }}>Reset Password</span>
              </div>
            </div>
          </div>
          <div>
            {showAlert && (
              <div className="overlay">
                <div className="overlay-login-container">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4>Authentication</h4>
                    <RxCross2 onClick={handleCloseAlert} />
                  </div>
                  <hr style={{ margin: "15px 0" }} />
                  <div>
                    <p>In order to change your login details you must provide your current password.</p>
                  </div>
                  <div className="password-input" style={{ display: "flex", flexDirection: "column", position: "relative", marginTop: "3%" }}>
                    <label htmlFor="password">Password</label>

                    <div className="inputfield-container">
                      <input type={!passShow ? "password" : "text"} placeholder="Enter Your Password" name="password" id="password" style={{ padding: "8px 12px", width: "100%", border: "2px solid rgb(100, 149, 237)", borderRadius: "10px", margin: "10px 0" }} />
                      <div className="showpass" onClick={() => setPassShow(!passShow)} style={{ position: "absolute", top: "65%", transform: "translateY(-50%)", right: "20px", cursor: "pointer" }}>
                        {!passShow ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <NavLink to="/forgotpass" href="#" style={{ color: "rgb(100, 149, 237)", textDecoration: "none" }}>
                      Forgot Password?
                    </NavLink>
                  </div>
                  <div>
                    <button className="btn1">Submit</button>
                    <button className="btn2" onClick={handleCloseAlert}>
                      Cancle
                    </button>
                  </div>
                </div>
              </div>
            )}




          </div>


        </div>
        <div style={{ border: '2px solid blue' }} className='client-sett-right'></div>
      </div>
      <ResetPass isVisible={isOverlayVisible} onClose={hideOverlay} />
    </div>
  );
}

export default Settings;
