// /** add subscription to the website **/
//
// import React, { useState } from "react";
//
// const SubscribeForm = () => {
//   const [status, setStatus] = useState<string | null>(null);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//
//   const FORM_URL = `https://app.convertkit.com/forms/5561775/subscriptions`;
//
//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//
//     const data = new FormData(event.target as HTMLFormElement);
//
//     try {
//       const response = await fetch(FORM_URL, {
//         method: "post",
//         body: data,
//         headers: {
//           accept: "application/json",
//         },
//       });
//
//       setEmail("");
//       const json = await response.json();
//
//       if (json.status === "success") {
//         setStatus("SUCCESS");
//         return;
//       }
//     } catch (err) {
//       setStatus("ERROR");
//       console.log(err);
//     }
//   };
//
//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setEmail(value);
//   };
//
//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setName(value);
//   };
//
//   return (
//     <div>
//       {status === "SUCCESS" && (
//         <>
//           <p>
//             Welcome aboard{name ? `, ${name}` : ""}{" "}
//             <span role="img" aria-label="Ship">
//               🚢
//             </span>
//           </p>
//           <p>Please check your inbox to confirm the subscription!</p>
//         </>
//       )}
//
//       {status === "ERROR" && (
//         <>
//           <p>Oops, something went wrong...</p>
//           <p>
//             Please, <button onClick={() => setStatus(null)}>try again.</button>
//           </p>
//         </>
//       )}
//       {status === null && (
//         <form onSubmit={handleSubmit}>
//           <input
//             aria-label="Your first name"
//             name="fields[first_name]"
//             placeholder="Your first name"
//             type="text"
//             onChange={handleNameChange}
//             value={name}
//           />
//           <input
//             aria-label="Your email address"
//             name="email_address"
//             placeholder="Your email address"
//             required
//             type="email"
//             onChange={handleEmailChange}
//             value={email}
//           />
//           <button>SUBSCRIBE</button>
//         </form>
//       )}
//     </div>
//   );
// };
//
// export default SubscribeForm;
