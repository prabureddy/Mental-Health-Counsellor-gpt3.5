import { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";

const DisplayResult = ({ ...props }) => {
  const [displayResponse, setDisplayResponse] = useState("");

  useEffect(() => {
    const value = props.value;
    if (!value?.length) {
      return;
    }

    let i = 0;

    const intervalId = setInterval(() => {
      setDisplayResponse(value.slice(0, i));

      i++;

      if (i > value.length) {
        clearInterval(intervalId);
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [props?.value]);

  return <Textarea {...props} value={displayResponse} />;
};

export default DisplayResult;
