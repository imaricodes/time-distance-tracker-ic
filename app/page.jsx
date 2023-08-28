"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

// export const metadata = {
//   title: "Home Page",
// };

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/get-users");
      const data = await res.json();
      console.log("I am Data");
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Time Distance Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Password</th>
            <th>Third Party Auth</th>
            <th>Create At</th>
            <th>Updated On</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.third_party_auth}</td>
              <td>{user.created_at}</td>
              <td>{user.update_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
