import { useState } from "react";
import axios from "axios";
import { Textarea, Button } from "@nextui-org/react";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [progressItems, setProgressItems] = useState([]);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const getCounselling = async () => {
    if (!input) return;
    setDisabled(true);
    setLoading(true);
    const response = await axios.post("/api/get-counselling", {
      prompt: input,
    });
    setOutput(response.data?.result);
    setDisabled(false);
    setLoading(false);
  };

  return (
    <>
      <h1 style={{ fontSize: 60, fontWeight: 900 }}>
        User friendly Counselling :)
      </h1>
      <h2 style={{ fontSize: 40, fontWeight: 600 }}>
        We are here to help you!
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
    </>
  );
}

export default App;
