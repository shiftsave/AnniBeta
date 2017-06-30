import React from "react";
import { TextArea } from "components/baseline";

const Headline = ({ name, client, date, save }) => {
  return (
    <div className="Headline">
      <div className="content">
        <div>
          <TextArea
            value={name}
            placeholder="Enter client name"
            save={client => save({ client })}
            heading
          />

          <TextArea
            value={client}
            placeholder="Enter client name"
            save={client => save({ client })}
            subheading
          />
        </div>
      </div>
    </div>
  );
};

export default Headline;
