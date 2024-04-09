import React from "react";
import './Assets/footer.css'

export const Footer = () => {
  return (
    <div  className="foot">
        <div className="foot1">
            <div className="copyrights" style={{color:"grey"}}>
                &copy; Copyrights Reserved.
            </div>
            <div className="omi">
                
               <i style={{color:"grey"}}>Powered By Open Weather Map API</i> 

            </div>
        </div>
        
    </div>
  );
};
