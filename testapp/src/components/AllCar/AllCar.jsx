import { useState } from "react";

 

 function AllCar(props){

         console.log(props)

         let[data,setData]=useState(props.transData)
         console.log(data)

    return(
     <> 
     <h1>My all Cars are: {data[0].carName}, {data[1].carName}, {data[2].carName}</h1>
     
     </>
    )
 };

 export default AllCar;