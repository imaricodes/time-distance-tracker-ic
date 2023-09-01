import Trip from "./Trip";
import { useTripContext } from "../contexts/TripContext";
import TripForm from "./TripForm";
//fetch data from all trips for the date this is being used?
// import tripsData from '../tripsData'
//this sould take date as a prop to pull up trips by date

export default function Trips({ tripsData, date }) {
  const { addTripId, handleAddTrip } = useTripContext();

  return (
    <div>
      {tripsData.map((item, index) => {
        return (
          <div key={index} className="mb-10">
            <Trip tripData={item} />
          </div>
        );
      })}

      {addTripId === null && (
        <button onClick={() => handleAddTrip(date)}>ADD TRIP</button>
      )}

      {addTripId !== null && addTripId !== date && (
        <button onClick={() => handleAddTrip(date)}>ADD TRIP</button>
      )}

      {addTripId === date ? <TripForm /> : null}
    </div>
  );
}

//when a trip is selected, the div is hidden and replaced with detail component
