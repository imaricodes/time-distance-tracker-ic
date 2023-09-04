import { useTripContext } from "../contexts/TripContext";
import TripForm from "./TripForm";

export default function Trip({ tripData }) {
  const { openTrip, handleSetOpenTrip } = useTripContext();

  const tripCollapsed = () => {
    return (
      <div
        onClick={() => handleSetOpenTrip(tripData.id)}
        className="flex gap-10 h-10 items-center px-3 cursor-pointer "
      >
        <p>{tripData.id}</p>|<p>{tripData.origin_addr_id}</p> |
        <p>{tripData.destination_addr_id}</p>
      </div>
    );
  };

  const tripExpanded = () => {
    return (
      <div>
        <TripForm />
      </div>
    );
  };

  return (
    <div className="mb-10  gap-10  bg-red-100 rounded-lg ">
      {openTrip === tripData.id ? tripExpanded() : tripCollapsed()}
    </div>
  );
}
