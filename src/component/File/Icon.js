import listimg from "./Listic.png";
import useric from "./Useric.jpg";

function Useric() {
  return (
    <>
      <img className="object-contain w-6 h-8 "src={useric} alt="User" />
    </>
  );
}

function List() {
  return (
    <>
      <>
        <img className="object-contain w-6 h-8 " src={listimg} alt="List" />
      </>
    </>
  );
}
export { Useric, List };
