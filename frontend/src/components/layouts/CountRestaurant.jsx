import React ,{useEffect} from "react";
import {getRestaurants} from "../../actions/restaurantAction";
import {useDispatch ,useSelector} from "react-redux";

export default function CountRestaurant() {
  const dispatch=useDispatch();
  const {loading,error,count,showVegOnly,pureVegRestaurantsCount}=useSelector((state)=>state.restaurants);
  useEffect(()=>{
    dispatch(getRestaurants());
  },[dispatch]);
  return (
    <div>
      {loading? (<p>loading Restaurant count....</p>
      ):error ? (
        <p> Error:{error}</p>
      ):(
         <p className="NumOfRestro">
            {showVegOnly ?pureVegRestaurantsCount : count}{""}
            <span className="Restro">
              {showVegOnly 
              ? pureVegRestaurantsCount===1 
              ? "MEDICAL":
               "MEDICALs"
             :count===1
             ?"MEDICAL"
             :"MEDICALs" 
            } </span>
            </p>
      )}
            <hr/>
            </div>
  );
}
