import { useContext } from "react";
import { TripContext } from "../contexts/TripContext";

export default function TripForm({ date }) {
  const { addTripId } = useContext(TripContext);

  return (
    <div className=" bg-white">
      <div className="w-full text-20 text-center text-red-400 font-bold py-5">
        {addTripId !== null
          ? `Currently in add new trip mode for August ${addTripId}`
          : null}
        <p>THIS IS THE FORM TO</p>
        <p>VIEW TRIP DETAILS</p>
        <p>ALSO TO ADD AND EDIT TRIP</p>
      </div>
    </div>
  );
}
