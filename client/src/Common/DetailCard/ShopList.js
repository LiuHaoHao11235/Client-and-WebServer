import React, { useState } from "react";
import { Button, Table } from "antd";
const columns = [
  {
    title: "商品名稱",
    dataIndex: "name",
  },
  {
    title: "商品規格",
    dataIndex: "Specification",
  },
  {
    title: "商品價格",
    dataIndex: "price",
  },
];
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    Specification: `11111111111111111`,
    price: `London, Park Lane no. ${i}`,
  });
}
const ShopList = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState([]);
  const [itemList, setItemList] = useState(data);
  const [loading, setLoading] = useState(false);
  const DeleteItem = () => {
    setItemList((prevItemList) => {
      selectedRowIndex.forEach((selectedKey) => {
        prevItemList.forEach((Item) => {
          if (Item.key === selectedKey) {
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
  };
  const start = () => {
    setLoading(true);
    DeleteItem();
    // ajax request after empty completing
    setTimeout(() => {
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
  return (
    <div
      style={{
        position: "absolute",
        top: 65,
        right: -100,
        width: "600px",
        background: "white",
        zIndex: 10,
      }}
    >
      <div
        style={{
          background: "lightgrey",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Button
          style={{
            marginLeft: 8,
            fontWeight: 500,
            color: "white",
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
        rowSelection={rowSelection}
        columns={columns}
        dataSource={itemList}
      />
    </div>
  );
};
export default ShopList;
