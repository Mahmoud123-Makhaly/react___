import { useState } from "react";
import styles from "./AddItem.module.css";
const AddItem = ({ addItem }) => {
  const { formStyle } = styles;
  const init = {
    name: "",
    age: "",
    type: "",
    location: "",
  };
  const [form, setForm] = useState(init);
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(init);
    addItem(form);
  };
  console.log(form);
  return (
    <form className={formStyle} onSubmit={handleSubmit}>
      <label> name:</label>
      <br />
      <input
        type="text"
        id="fname"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <label>Age:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="age"
        value={form.age}
        onChange={handleChange}
      />
      <br />
      <label>Type:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="type"
        value={form.type}
        onChange={handleChange}
      />
      <br />
      <label>Location:</label>
      <br />
      <input
        type="text"
        id="lname"
        value={form.location}
        onChange={handleChange}
        name="location"
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddItem;
