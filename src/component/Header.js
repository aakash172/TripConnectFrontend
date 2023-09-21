import { Link } from "react-router-dom";
import Profile from "./MenuHandler";

export default function Header() {
  return (
    <div className="flex justify-between px-8 py-3">
      {/* logo */}

      <div className=""><Link to={'/'}>Airbnb</Link></div>

      {/* Functionality */}
      <div className="flex  space-x-2 px-6 py-2 border rounded-3xl border-amber-500		">
        <div>Anywhere</div>
        <div className="border-l border-r border-amber-400 px-2">AnyWeek</div>
        <div>Addguest</div>
      </div>

      {/* Profile */}
      <Profile />
    </div>
  );
}
