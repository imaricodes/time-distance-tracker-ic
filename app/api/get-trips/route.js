import { NextResponse } from "next/server";
import { pool } from "models/dbconfig";

/*
This route is called to get all trips by user by date range
*/

export async function GET() {
  try {
    const queryStr = {
      text: `SELECT
        t.user_profiles_id, 
          json_agg(
            jsonb_build_object(
              'id', t.id, 
              'start_date', t.start_date, 
              'end_date', t.end_date, 
              'start_time', t.start_time, 
              'end_time', t.end_time, 
              'start_distance', t.start_distance, 
              'end_distance', t.end_distance, 
              'origin_location', jsonb_build_object(
                'id', lo.id, 
                'location_name', lo.location_name 
              ),
              'destination_location', jsonb_build_object(
                'id', ld.id, 
                'location_name', ld.location_name  
              )
            )
          ) AS trips_data
        FROM
          trips AS t 
        JOIN
          locations AS lo 
        ON
          t.origin_addr_id = lo.id 
        JOIN
          locations AS ld 
        ON
          t.destination_addr_id = ld.id 
        WHERE
          t.start_date >= $1::DATE 
          AND t.end_date <= $2::DATE 
          AND t.user_profiles_id = $3 
        GROUP BY
          t.user_profiles_id;`,
      values: ["2023-08-01", "2023-08-2", 1],
    };

    const { rows } = await pool.query(queryStr);
    const tripsData = rows[0].trips_data;

    if (!tripsData.length > 0) {
      return NextResponse.json(
        { message: "No results found", rows },
        { status: 500 }
      );
    } else {
      console.log("All good we found the data");
      console.log(tripsData);
      return NextResponse.json(tripsData, { status: 200 });
    }
  } catch (err) {
    console.log(`api/get-users error: ${err}`);
    return NextResponse.json({ message: `${err.message}` }, { status: 500 });
  }
}
