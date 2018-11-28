// TypeScript 2.9

import * as React from "react";
import "./App.css";

interface IProps {
  text: string;
  delimiter?: string; // Need to make prop optional
}

class SplitText extends React.Component<IProps> {
  static defaultProps = {
    delimiter: ","
  };
  render() {
    const bits = this.props.text.split(this.props.delimiter!); // Need to use bang because compiler thinks delimiter prop can be undefined
    return (
      <ul>
        {bits.map((bit: string) => (
          <li key={bit}>{bit}</li>
        ))}
      </ul>
    );
  }
}

const App = () => (
  <div>
    <SplitText text="Fred,Jane,Bob" />
  </div>
);

export default App;
