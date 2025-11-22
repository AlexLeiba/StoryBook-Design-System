import React from "react";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Radio } from "./components/ui/Radio";
import { Checkbox } from "./components/ui/Checkbox";
import { Select } from "./components/ui/Select";
import Dialog, {
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "./components/ui/Dialog";

function App() {
  return (
    <div>
      <Button size="large" variant="primary">
        button
      </Button>
      <Button size="small" variant="secondary">
        button
      </Button>

      <Input
        title="input"
        className="bg-gray-400"
        error={"Error"}
        onChange={(e) => e.target.value}
      />

      <Radio
        defaultChecked //default value
        title="radio"
        error={""}
        name="val"
        value={100}
        onChange={(e) => console.log("radio event", e.target.value)}
      />
      <Radio
        title="radio"
        error={""}
        name="val"
        value={200}
        onChange={(e) => console.log("radio event", e.target.value)}
      />
      <Radio
        title="radio"
        error={""}
        name="val"
        value={300}
        onChange={(e) => console.log("radio event", e.target.value)}
      />
      <Checkbox title="checkbox" onChange={(e) => e.target.checked} />
      <Checkbox title="checkbox" />
      <Checkbox title="checkbox" defaultChecked />

      <Select
        onChange={(e) => {
          console.log(e.target.value);
        }}
        title="Select"
        options={[
          { label: "Select an option", value: "" },
          { label: "lab", value: "val1" },
          { label: "lab", value: "val2" },
          { label: "lab", value: "val3" },
        ]}
      />

      <Dialog handleCancel={() => {}} handleSubmit={() => {}} isOpened>
        <DialogHeader>
          <h1 className="text-2xl">Dialog header</h1>
          <h1 className="text-2xl">Dialog header</h1>
        </DialogHeader>

        <DialogBody>
          {" "}
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellat, cupiditate.
            </h1>
          </div>
        </DialogBody>

        <DialogFooter buttonDirection="column" fullWidth variant="submit">
          Dialog footer
        </DialogFooter>
      </Dialog>

      {/* input date? */}
      {/* input nr? */}
    </div>
  );
}

export default App;
