import "./globals.css";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/AuthProvider";

export const metadata = {
  title: "Simply Track",
  description:
    "The best place to track your hours logged and distance traveled!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
