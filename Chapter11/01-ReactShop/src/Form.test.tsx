import { required, IValues } from "./Form";

describe("required", () => {
  test("When required called with title being an empty string, an error should be 'This must be populated'", () => {
    // debugger;
    const values: IValues = {
      title: ""
    };
    // console.log("values:", values);
    const result = required("title", values);
    // console.log("result:", result);
    expect(result).toBe("This must be populated");
  });
});
