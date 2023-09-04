"use client";
import { useState } from "react";
import DateRow from "./DateRow";
import { tripsData } from "./tripsData";
import { TripContextProvider } from "../contexts/TripContext";

/* This function takes an integer value between 1 - 12 monthNumber 
  and a year integer value and returns an array of days */
function getDaysForMonth(monthNumber, year) {
  if (
    typeof monthNumber !== "number" ||
    !Number.isInteger(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12 ||
    typeof year !== "number" ||
    !Number.isInteger(year) ||
    year < 2000 ||
    year > 2100
  ) {
    throw new Error("Invalid monthNumber or year provided to Month component");
  }
  const daysInMonth = new Date(year, monthNumber, 0).getDate();
  const datesArray = [];
  for (let day = 1; day <= daysInMonth; day++) {
    datesArray.push(day);
  }
  return datesArray;
}

async function getUserTrips() {
  const res = await fetch("api/user-trips", { cache: "no-store" });
  const userTrips = await res.json();
  console.log(userTrips);
}

export default function Month() {
  // trips will be an array of objects how all trips for given month
  const [trips, setStrips] = useState(tripsData);
  const days = getDaysForMonth(8, 2023);
  const data = getUserTrips();
  console.log(data);
  return (
    <TripContextProvider>
      <div className="px-20">
        <div className="flex justify-between">
          <button className="mb-10 bg-blue-400 text-white font-bold px-4 py-2 rounded-lg">
            FILTER
          </button>
          <button className="mb-10 bg-blue-400 text-white font-bold px-4 py-2 rounded-lg">
            AUGUST
          </button>
        </div>

        {days.map((item, index) => {
          const currentTrips = trips.filter((trip) => {
            return trip.date === item;
          });

          return (
            <div className="bg-blue-100 w-full border-8 px-4 py-4" key={index}>
              <DateRow date={item} tripsData={currentTrips} />
            </div>
          );
        })}
      </div>
    </TripContextProvider>
  );
}
