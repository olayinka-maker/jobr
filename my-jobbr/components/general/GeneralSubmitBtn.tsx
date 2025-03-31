import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface GeneralSubmitBtnProps {
  text: string; // The text to display on the button
}

const GeneralSubmitBtn = ({ text }: GeneralSubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <Button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          disabled>
          Submitting...
        </Button>
      ) : (
        <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded">
          {text}
        </Button>
      )}
    </div>
  );
};

export default GeneralSubmitBtn;
