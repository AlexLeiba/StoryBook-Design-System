import Dropdown from "./components/ui/Dropdown";
import { Tooltip } from "./components/ui/Tooltip";

function App() {
  return (
    <div className="h-[calc(100vh-250px)] bg-yellow-50 flex-col justify-between">
      <div className="flex flex-col gap-2">
        {/* <Tooltip
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
        </Tooltip> */}
        <Tooltip title={"title"} variant={"secondary"}>
          <div className="w-[600px]">
            <Dropdown
              handleSelectValue={(v) => console.log("first", v)}
              label="Here is some data"
              size={"large"}
              variant="primary"
              title="Title"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
              error="asasasasas"
            />
          </div>
        </Tooltip>
        <Dropdown
          handleSelectValue={(v) => console.log("first", v)}
          size={"medium"}
          variant="secondary"
          title="Title2"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          success
        />
        <Dropdown
          selectType="multiple"
          handleSelectValue={(v) => console.log("first", v)}
          size={"medium"}
          variant="secondary"
          title="Title2"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <Tooltip title={"title"} variant={"secondary"}>
          <div className="w-[20px]">
            <Dropdown
              selectType="multiple"
              handleSelectValue={(v) => console.log("first", v)}
              size={"large"}
              variant="secondary"
              title="Title2"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          </div>
        </Tooltip>
        <Dropdown
          handleSelectValue={(v) => console.log("first", v)}
          size={"small"}
          variant="ghost"
          title="Title3"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <Dropdown
          selectType="multiple"
          handleSelectValue={(v) => console.log("first", v)}
          size={"small"}
          variant="ghost"
          title="Title3"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
