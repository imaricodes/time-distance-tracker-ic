import { NextResponse } from "next/server";
import { pool } from "models/dbconfig";

/*
This route is called to get all trips by user by date range
*/

export async function GET() {
  try {
    const queryStr = {
      text: `SELECT
              user_profiles_id,
              json_agg(trips.*) as trips_data
            FROM
              trips
            WHERE
              start_date >= $1
              AND end_date <= $2
              AND user_profiles_id = $3
          GROUP BY
            user_profiles_id;`,
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

      return NextResponse.json(tripsData, { status: 200 });
    }
  } catch (err) {
    console.log(`api/get-users error: ${err}`);
    return NextResponse.json({ message: `${err.message}` }, { status: 500 });
  }
}
