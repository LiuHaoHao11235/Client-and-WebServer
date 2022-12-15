import { Select } from "antd";
import { useDispatch } from "react-redux";

const RomSizeSelector = () => {
  const dispatch = useDispatch();
  const handleChange = (value, options) => {
    dispatch({
      type: "SET_PRODUCT_INDEX",
      ProductIndex: value,
      rom: options.label,
    });
  };
  return (
    <>
      <Select
        defaultValue="128G"
        style={{
          width: 80,
        }}
        onChange={handleChange}
        options={[
          {
            value: 0,
            label: "128G",
          },
          {
            value: 1,
            label: "256G",
          },
          {
            value: 2,
            label: "512G",
          },
        ]}
      />
    </>
  );
};
export default RomSizeSelector;
