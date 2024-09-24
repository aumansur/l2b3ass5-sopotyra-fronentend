import React from "react";
import { Button, Popconfirm, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useGetAllBookingsQuery, useGetUsersBookinsQuery } from "../../../redux/feature/Bookings/auth.bookings.api";
import { TBooking } from "../../../types/booking.types";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
    render: (text) => <a style={{ color: "#00725A" }}>{text}</a>, // Primary color for name links
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
    width: 100,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "startTime",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "location",
    key: "address",
    width: 200,
  },
  {
    title: "Price",
    dataIndex: "payableAmount",
    key: "payableAmount",
    width: 200,
    render: (text) => <span style={{ color: "orange" }}>${text}</span>, 
  },
  {
    title: "Action",
    dataIndex: "X",
    key: "x",
    render: (_, record) => (
      <Popconfirm
        title="Are you sure you want to delete this item?"
        onConfirm={() => console.log(record)}
      >
        <Button type="link" style={{ color: "red" }}>Delete</Button>
      </Popconfirm>
    ),
    width: 100,
  },
];

const Bookings: React.FC = () => {
  const { data: allBookings } = useGetAllBookingsQuery(undefined);

  const data: DataType[] =
    allBookings?.data.map(({ facility,date ,startTime,endTime, payableAmount,_id }:TBooking) => ({
      key:_id,
      ...facility,
      startTime,
      endTime,
      date,
      payableAmount,
    })) || [];

    console.log(allBookings,'iam admin bookings');
    

  return (
    <div style={{ overflowX: "auto", padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        bordered
      />
    </div>
  );
};

export default Bookings;
