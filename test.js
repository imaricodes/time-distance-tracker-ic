import { NextResponse } from "next/server";
import { pool } from "models/dbconfig";

/*
This route is called to get all trips by user by date range
*/

export async function GET() {
  console.log("UserTrips Called");
  try {
    const queryStr = {
      text: `SELECT
              user_profile_id,
              json_agg(trips.*) as trips_data
            FROM
              trips
            WHERE
              start_date >= $1
              AND end_date <= $2
              AND user_profiles_id = $3
          GROUP BY
            user_profiles_id;`,
      value: ["2023-08-01", "2023-08-2", 1],
    };

    const { rows } = await pool.query(queryStr);
    console.log("-------------------------");
    console.log(rows);
    if (!rows.length > 0) {
      return NextResponse.json(
        { message: "No results found", rows },
        { status: 500 }
      );
    } else {
      return NextResponse.json(rows, { status: 200 });
    }
  } catch (err) {
    console.log(`api/get-users error: ${err}`);
    return NextResponse.json({ message: `${err.message}` }, { status: 500 });
  }
}
