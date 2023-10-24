// import { Route, Routes } from "react-router-dom";

// import s from "./Modal.module.css";
// import RegisterForm from "../RegisterForm/RegisterForm";

// function Modal(props) {
//   const { active, setActive } = props;

//   return (
//     <div
//       className={`${s.modal} ${active && s.active}`}
//       onClick={() => setActive(false)}
//     >
//       <div
//         onClick={(e) => e.stopPropagation(e)}
//         className={`${s.modal_content} ${active && s.active}`}
//       >
//         <Routes>
//           <Route
//             path="/login"
//             element={
//               <RegisterForm
//                 title={"Authorization"}
//                 input={{ email: "Email", password: "Password" }}
//                 type={"login"}
//                 button={{ redirect: "Registration", submit: "Authorization" }}
//                 link={"/reg"}
//                 infoText={"Enter your account login and password"}
//               />
//             }
//           />
//           <Route
//             path="/reg"
//             element={
//               <RegisterForm
//                 title={"Registration"}
//                 input={{ email: "Email", password: "Password" }}
//                 type={"reg"}
//                 button={{ redirect: "Login", submit: "Sign up" }}
//                 link={"/login"}
//                 infoText={
//                   "By registering on the site, you agree to our privacy policy and terms of use."
//                 }
//               />
//             }
//           />

//           <Route
//             path="/reset"
//             element={
//               <RegisterForm
//                 title={"Reset password"}
//                 input={{ email: "Email" }}
//                 type={"reset"}
//                 link={"/login"}
//                 button={{ redirect: "Войти", submit: "Confirm reset" }}
//                 infoText={
//                   "Specify the mail of the registered account. A link to password reset will be sent to the specified mail. Activation period 24 hours"
//                 }
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Modal;
