import TripsList from "./TripsList";

export default function DateRow({ date, tripsData }) {
  return (
    <div>
      <div className="flex gap-20 ">
        <div>Aug {date}</div>
        <div>
          <TripsList date={date} tripsData={tripsData} />
        </div>
      </div>
    </div>
  );
}
