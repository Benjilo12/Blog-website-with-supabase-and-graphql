import { Link } from "react-router";

function TopBar() {
  const date = new Date(); // Example date
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-stone-950 w-full flex justify-between h-9 ">
      <div className="mx-[30px] md:mx-[70px] my-1">
        {" "}
        <p className="text-gray-50 text-[13px] md:text-base">{formattedDate}</p>
      </div>
      <div className="text-gray-50 text-[12px] md:text-base mr-4 md:mr-[120px] my-1 flex gap-2 mb-2">
        <Link className=" hover:text-gray-500" to="/privacy">
          privacy |
        </Link>
        <Link className=" hover:text-gray-500" to="/advertising">
          advertising
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
