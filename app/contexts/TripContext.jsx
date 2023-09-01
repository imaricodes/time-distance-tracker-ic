import { createContext, useState, useContext } from "react";

/*This line creates a new React context called TripContext using
the createContext function from React. A context is a way to share
data and functions between components without having to pass them
 explicitly through props. */
export const TripContext = createContext();

/* This component is the provider for the TripContext. It manages 
the state related to trips (openTrip and addTripId) and provides functions 
(handleSetOpenTrip and handleAddTrip) to update this state. It wraps its 
child components in the TripContext.Provider component, passing the state 
and functions as a value prop. This makes these values accessible to any 
child component that subscribes to this context.*/
export const TripContextProvider = (props) => {
  const [openTrip, setOpenTrip] = useState(null);
  const [addTripId, setAddTripId] = useState(null);

  const handleSetOpenTrip = (data) => {
    setOpenTrip(data);
    setAddTripId(null);
  };

  const handleAddTrip = (date) => {
    setAddTripId(date);
    setOpenTrip(null);
  };

  return (
    <TripContext.Provider
      value={{
        handleSetOpenTrip: handleSetOpenTrip,
        openTrip: openTrip,
        addTripId: addTripId,
        handleAddTrip: handleAddTrip,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

/* The useTripContext is then used within the children of the parent 
component that need access to state and functions. DateRow, Trip, TripForm, 
TripsList are all children of Month and can access state and functions by using 
userTripContext */

export function useTripContext() {
  const context = useContext(TripContext);

  if (!context) {
    throw new Error(
      "useTheme Context must be used within a Theme Context Provider"
    );
  }
  return context;
}
