import { useState } from "react";
import AllCar from "../AllCar/AllCar";

function Car1(){

    // State in component:-

    let carData=[
        {
            carName:"TATA Nexon",
            CarColor:"Red"
        },
        {
            carName:"Suzuki Frone",
            CarColor:"Black"
        },
        {
            carName:"Fortuner",
            CarColor:"Grey"
        }
    ]

    let [data,setData]=useState(carData[0].carName)
    console.log(data);


    let handleClick=()=>{
     setData(carData[1].carName);
    }

     let handleClick1=()=>{
     setData(carData[2].carName);
    }


    return(
        <>
            <h1>My First Car {data}</h1>
            <button onClick={handleClick}> Secondary Car</button>
            <button onClick={handleClick1}>Show my third Car</button>
            <AllCar transData={carData}/>
        </>
    )
}

export default Car1;