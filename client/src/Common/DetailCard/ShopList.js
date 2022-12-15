import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Form, InputNumber, Popconfirm, Typography } from "antd";
import "./style.css";
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
  const [itemList, setItemList] = useState(CartList);
  useEffect(() => {
    setItemList(() => {
      return CartList;
    });
  }, [CartList]);
  const dispatch = useDispatch();
  const [selectedRowKey, setSelectedRowKey] = useState([]);
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
      const newCartList = [...CartList];
      const index = newCartList.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newCartList[index];
        newCartList.splice(index, 1, {
          ...item,
          ...row,
        });
        // console.log("newCartList", newCartList);
        setItemList(newCartList);
        setEditingKey("");
        setTimeout(() => {
          dispatch({
            type: "EDIT_PRODUCT_FROM_SHOPLIST",
            NewCartList: newCartList,
          }); //TODO dispatch設定STORE中的值必須要最後執行 所以放在setTimeout中 否則setState hook是異步操作 newCartList值還沒更改就先執行dispatch了
        });
      } else {
        // console.log("newCartList", newCartList);
        newCartList.push(row);
        setItemList(newCartList);
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
        width: "20%",
      },
      {
        title: "商品規格",
        dataIndex: "Specification",
        width: "30%",
        align: "center",
      },
      {
        title: "商品價格",
        dataIndex: "price",
        width: "15%",
        align: "center",
      },
      {
        title: "購買數量",
        dataIndex: "number",
        width: "15%",
        align: "center",
        editable: true,
      },
      {
        title: "編輯商品數量",
        dataIndex: "編輯商品數量",
        width: "20%",
        align: "center",
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
                儲存
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a href="none">取消</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              編輯
            </Typography.Link>
          );
        },
      },
    ];
  });

  const DeleteItem = (selectedProductList) => {
    setTimeout(() => {
      setItemList((prevItemList) => {
        selectedRowKey.forEach((selectedKey) => {
          prevItemList.forEach((Item) => {
            if (Item.key === selectedKey) {
              selectedProductList.push(Item.name);
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
        selectedRowIndex: selectedRowKey,
      });
      setSelectedRowKey([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowIndex) => {
    console.log("selectedRowIndex", newSelectedRowIndex.sort());
    setSelectedRowKey(newSelectedRowIndex.sort());
  };
  const rowSelection = {
    selectedRowIndex: selectedRowKey,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKey.length > 0;
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
          width: "800px",
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
            {hasSelected ? `選擇 ${selectedRowKey.length} 個商品` : ""}
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
          rowClassName="TableRowClass"
        />
      </div>
    </Form>
  );
};
export default ShopList;
