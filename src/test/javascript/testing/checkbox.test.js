import {fireEvent, render} from "@testing-library/react";
import {Checkbox} from "../../../main/javascript/testing/checkbox";

test("Selecting the checkbox", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});