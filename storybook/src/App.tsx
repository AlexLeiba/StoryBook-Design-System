// import React from "react";
// import { Button } from "./components/ui/Button";
// import { Input } from "./components/ui/Input";
// import { Radio } from "./components/ui/Radio";
// import { Checkbox } from "./components/ui/Checkbox";
// import { Select } from "./components/ui/Select";
// import {
//   Dialog,
//   DialogBody,
//   DialogFooter,
//   DialogHeader,
// } from "./components/ui/Dialog";
import { Loader } from "./components/animations/Loader";
import { FileUpload } from "./components/ui/FileUpload/FileUpload";

function App() {
  return (
    <div>
      {/* <Button size="large" variant="primary">
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
      <Checkbox title="checkbox" defaultChecked /> */}
      {/* 
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
      /> */}

      {/* <Dialog handleCancel={() => {}} handleSubmit={() => {}} isOpened>
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

        <DialogFooter buttonDirection="column" fullWidth variant="submit" />
      </Dialog> */}

      {/* input date? */}
      {/* input nr? */}
      <FileUpload
        uiVariant="dragAndDropContainer"
        title="Your avatar multiple files"
        size="large"
        fileTypes="files"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="multiple"
        buttonVariant="tertiary"

        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="dragAndDropContainer"
        title="Your avatar single files"
        size="medium"
        fileTypes="files"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="multiple"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="dragAndDropContainer"
        title="Your avatar single images"
        size="small"
        fileTypes="images"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="single"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="dragAndDropContainer"
        title="Your avatar multiple images"
        size="small"
        fileTypes="images"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="multiple"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="button"
        title="Your avatar single files"
        size="small"
        fileTypes="files"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="single"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="button"
        title="Your avatar multiple files"
        size="small"
        fileTypes="files"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="multiple"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="button"
        title="Your avatar multiple"
        size="large"
        fileTypes="images"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="multiple"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <FileUpload
        uiVariant="button"
        title="Your avatar single"
        size="medium"
        fileTypes="images"
        handleSubmitFile={(v) => console.log("v", v)}
        uploadVariant="single"
        buttonVariant="tertiary"
        // error="Error mess"
        // success
      />
      <Loader />
    </div>
  );
}

export default App;
