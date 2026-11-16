import React from "react";
import { data,data1,data2} from "./App";
import { useContext } from "react";

const CompC = () =>{
    const username = useContext(data);
    const age = useContext(data1);
    const address = useContext(data2);
    return(
        <>
        <h1>My name is {username}, age is {age} and address is {address}</h1>
        </>
    )
}
export default CompC




// import React from "react";
// import { data} from "./App";



// const CompC = () =>{

//     return(


//         <>
//         <data.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <>
//                         <h1>My name is {name}</h1>
//                         </>
//                     )
//                 }
//             }
//         </data.Consumer>
//         </>

//         // <>
//         // <data.Consumer>
//         //               {
//         //         (name) =>{
//         //             return(
//         //                 <>
//         //                     <data1.Consumer>
//         //                         {
//         //                             (age)=>{
//         //                                 return(
//         //                                     <>
//         //                                         <data2.Consumer>
//         //                                             {
//         //                                                 (address)=>{
//         //                                                     return(
//         //                                                         <>
//         //                                                         <h1>My Name is {name} and age is {age}</h1>
//         //                                                         <h1>My address is {address}</h1>
//         //                                                         </>
//         //                                                     )
//         //                                                 }
//         //                                             }
//         //                                         </data2.Consumer>
//         //                                     </>
//         //                                 )
//         //                             }
//         //                         }
//         //                     </data1.Consumer>
//         //                 </>
//         //             )
//         //         }
//         //     }

           
//         // </data.Consumer>
//         // </>
//     )
// }
// export default CompC