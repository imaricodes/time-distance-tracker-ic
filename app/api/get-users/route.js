import { NextResponse } from "next/server";
import pool from "../../../models/dbconfig.js";

/*
This route is called to get all of the users from the user_profiles table
*/

export async function GET() {
  console.log("Get Request Ran");
  try {
    const queryStr = {
      text: `SELECT * FROM user_profiles;`,
    };

    console.log("just before");
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
