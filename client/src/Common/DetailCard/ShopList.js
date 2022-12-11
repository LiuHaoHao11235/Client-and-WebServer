import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Form, InputNumber, Popconfirm, Typography } from "antd";
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    Specification: `11111111111111111`,
    price: `10999`,
    number: 1,
  });
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {<InputNumber style={{ width: "60px" }} size="small" min={1} />}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const ShopList = () => {
  const CartList = useSelector((state) => state.addcart.CartList);
  const dispatch = useDispatch();
  const [selectedRowIndex, setSelectedRowIndex] = useState([]);
  const [itemList, setItemList] = useState(CartList);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...CartList];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setItemList(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setItemList(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = useMemo(() => {
    return [
      {
        title: "商品名稱",
        dataIndex: "name",
        width: "25%",
      },
      {
        title: "商品規格",
        dataIndex: "Specification",
        width: "25%",
      },
      {
        title: "商品價格",
        dataIndex: "price",
        width: "15%",
      },
      {
        title: "商品數量",
        dataIndex: "number",
        width: "15%",
        editable: true,
      },
      {
        title: "operation",
        dataIndex: "operation",
        width: "20%",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 12,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a href="none">Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
          );
        },
      },
    ];
  });

  const DeleteItem = (selectedProductList) => {
    setTimeout(() => {
      setItemList((prevItemList) => {
        selectedRowIndex.forEach((selectedKey) => {
          prevItemList.forEach((Item) => {
            if (Item.key === selectedKey) {
              selectedProductList.push(Item.name);
              console.log("selectedProductList", selectedProductList);
              prevItemList = prevItemList.filter(function (item) {
                return item !== Item;
              });
              return;
            }
          });
        });
        const newItemList = [...prevItemList];
        return newItemList;
      });
    });
  };
  const start = () => {
    const selectedProductList = [];
    setLoading(true);
    DeleteItem(selectedProductList);
    setTimeout(() => {
      dispatch({
        type: "DELETE_PRODUCT_FROM_SHOPLIST",
        selectedProductList: selectedProductList,
        selectedRowIndex: selectedRowIndex,
      });
      setSelectedRowIndex([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowIndex) => {
    console.log("selectedRowIndex", newSelectedRowIndex.sort());
    setSelectedRowIndex(newSelectedRowIndex.sort());
  };
  const rowSelection = {
    selectedRowIndex: selectedRowIndex,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowIndex.length > 0;
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <div
        style={{
          position: "absolute",
          top: 65,
          right: -100,
          width: "650px",
          background: "white",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "#d3d3d3",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            style={{
              marginLeft: 8,
              fontWeight: 600,
              color: "white",
              border: "1px grey solid",
            }}
            type="primary"
            danger
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            刪除已選擇商品
          </Button>
          <span
            style={{
              marginLeft: 8,
              fontWeight: 600,
              fontSize: "14px",
              color: "red",
            }}
          >
            {hasSelected ? `選擇 ${selectedRowIndex.length} 個商品` : ""}
          </span>
        </div>
        <Table
          style={{
            border: "1px #e5e5e5 solid",
          }}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowSelection={rowSelection}
          columns={mergedColumns}
          dataSource={itemList}
        />
      </div>
    </Form>
  );
};
export default ShopList;
