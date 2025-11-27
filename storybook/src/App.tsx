import { Button } from "./components/ui/Button";
import { Tooltip } from "./components/ui/Tooltip";

function App() {
  return (
    <div className="h-[calc(100vh-250px)] bg-yellow-50 flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Tooltip
          // visible
          title={"title dsds dsds"}
          // icon={icon}
        >
          <Button className="w-[350px] ">{"Button with tooltip"}</Button>
        </Tooltip>
        <Tooltip
          // visible
          title={"title"}
          variant={"secondary"}
          // icon={icon}
        >
          <Button className="">{"Button with tooltip"}</Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
