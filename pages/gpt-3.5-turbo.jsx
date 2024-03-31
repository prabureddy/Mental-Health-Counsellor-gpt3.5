import { useState } from "react";
import axios from "axios";
import { Textarea, Button } from "@nextui-org/react";
import Table from "@/components/Table";

function GPT3_5_Turbo() {
  const [disabled, setDisabled] = useState(false);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [counselledData, setCounselledData] = useState([]);

  const getCounselling = async () => {
    if (!input) return;
    setDisabled(true);
    setLoading(true);
    const response = await axios.post("/api/get-counselling", {
      prompt: input,
    });
    const result = response.data?.result;
    if (result) {
      setOutput(result);
      setCounselledData((e) => [
        ...e,
        { query: input, result, id: counselledData.length + 1 },
      ]);
    }
    setDisabled(false);
    setLoading(false);
  };

  const deleteQuery = (id) => {
    setCounselledData((e) => [...e.filter((q) => q.id !== id)]);
  };

  return (
    <div className="page-container">
      <h1 style={{ fontSize: 60, fontWeight: 900 }}>
        User friendly Counselling :)
      </h1>
      <h2 style={{ fontSize: 40, fontWeight: 600 }}>
        We are here to help you! (GPT3.5-Turbo)
      </h2>

      <div className="container">
        <div className="textbox-container">
          <Textarea
            label="Enter your patient problem"
            value={input}
            rows={10}
            onChange={(e) => setInput(e.target.value)}
            disableAnimation
            disableAutosize
            classNames={{
              base: "",
              input: "resize-y min-h-[40px]",
            }}
          />
          <Textarea
            label="Here's what I can say you"
            value={output}
            rows={10}
            readOnly
            disableAnimation
            disableAutosize
            classNames={{
              base: "",
              input: "resize-y min-h-[40px]",
            }}
          />
        </div>
      </div>
      <div className="textbox-container">
        <Button
          color="primary"
          disabled={disabled || !input}
          isLoading={loading}
          onClick={getCounselling}
        >
          {!disabled ? (
            <>Get Counselling for your patient</>
          ) : (
            <>We are on the way to help you...</>
          )}
        </Button>
      </div>
      <div className="textbox-container mt-10">
        <Table
          column={["Query", "Result", "Actions"]}
          data={counselledData}
          deleteQuery={deleteQuery}
        />
      </div>
    </div>
  );
}

export default GPT3_5_Turbo;
