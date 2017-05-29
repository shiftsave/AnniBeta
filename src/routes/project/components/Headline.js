import React from "react";
import { TextArea } from "components/baseline";

const Headline = ({ name, client, date, save }) => {
  return (
    <div className="Headline">
      <div className="content">
        <h1>{name}</h1>
        <TextArea
          html={client ? client : "Client Name"}
          save={client => save({ client })}
        />
        <TextArea
          html={date ? date : ""}
          save={date => save({ date })}
        />
      </div>
    </div>
  );
};

export default Headline;
