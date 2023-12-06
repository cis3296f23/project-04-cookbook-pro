import { Label, FormGroup, Form, Input } from "reactstrap";

const SearchBox = ({ setfilterOptions, filterOptions }) => {
  // Function to toggle checkbox value and update filterOptions state
  const checkBoxChecked = (key) => {
    // Toggle the value of the clicked checkbox
    filterOptions[key] = !filterOptions[key];
    // Update the filterOptions state using the provided setter function
    setfilterOptions({ ...filterOptions });
  };

  return (
    <Form>
      {Object.entries(filterOptions).map(([key, value]) => {
        return (
          <FormGroup key={key} check>
            {/* Checkbox input */}
            <Input
              type="checkbox"
              checked={value}
              onChange={() => checkBoxChecked(key)}
            />
            {/* Label for the checkbox */}
            <Label check>{key}</Label>
          </FormGroup>
        );
      })}
    </Form>
  );
};

export default SearchBox;
