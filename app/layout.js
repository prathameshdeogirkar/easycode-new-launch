import "./globals.css";
import 'remixicon/fonts/remixicon.css'


export const metadata = {
  title: "easeCode | Upcoming Launches",
  description: "Discover the latest upcoming courses, features, and events by easeCode. Stay ahead with the future of coding education.",
   icons: {
    icon:"/favicon.ico"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
