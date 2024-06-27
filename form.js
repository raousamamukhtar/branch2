// "use client";
// import React, { useEffect, useState } from "react";
// import IndividualForm from "../../Components/forms/individual";
// import BusinessForm from "../../Components/forms/business";
// // import { Card, CardBody, Col, Row } from "reactstrap";

// function Forms() {
//   const [win, setWin] = useState(null);
//   useEffect(() => {
//     if (typeof window !== undefined) {
//       setWin(window);
//     }
//   }, []);
//   return (
//     <div className="pb-pt-5 mb-mt-5 py-5 form-bg">
//       <div className="row w-100 container">
//         <div className="col-lg-4">
//           <div className="card">
//             <div className="card-body">
//               {win !== null &&
//               win.location.pathname === "/delivery/individual" ? (
//                 <IndividualForm />
//               ) : (
//                 <BusinessForm />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Forms;
