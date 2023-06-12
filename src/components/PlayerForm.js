import React from "react";

const PlayerForm = ({ onSubmit }) => {
  const [address, setAddress] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ address, amount });
        }}
      >
        <label>Enter Address of Player: </label>
        <textarea
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <label>Enter Eth Amount : </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PlayerForm;
