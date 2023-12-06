/**
 * Renders a search box filter component with checkboxes.
 * @param {Object} props - React props containing filter-related data and functions.
 * @param {Function} props.setfilterOptions - Function to update the filter options state.
 * @param {Object} props.filterOptions - Object containing filter options and their states.
 * @returns {JSX.Element} - Returns a component for managing search box filters with checkboxes.
 */
import { Label, FormGroup, Form, Input } from "reactstrap";

const SearchBox = ({ setfilterOptions, filterOptions }) => {
  /**
   * Toggles the checkbox value and updates the filterOptions state.
   * @param {string} key - The key representing the checkbox option.
   */
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
