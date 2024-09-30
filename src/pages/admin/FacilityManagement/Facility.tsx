/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  Popconfirm,
  Row,
  Table,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";

import {
  useGetAllFacilityQuery,
  useRemoveFacilityMutation,
  useUpdateFacilityMutation,
} from "../../../redux/feature/facillity/facility.auth.api";
import { FaEdit, FaTrash } from "react-icons/fa";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TFacility } from "../../../types";
import { useGetUsersBookingQuery } from "../../../redux/feature/Bookings/auth.bookings.api";

const { Title } = Typography;

interface FacilityType {
  key: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
  image?: string;
  _id: string;
}

const Facility: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: facility } = useGetAllFacilityQuery({});
  const [removeFacility] = useRemoveFacilityMutation();
  const { data: allBookings, refetch } = useGetUsersBookingQuery(undefined);

  const handleDelete = async (id: string) => {
    try {
      await removeFacility(id).unwrap();
      toast.success("Facility deleted successfully");
    } catch (error) {
      toast.error("Failed to delete facility");
      // console.error("Failed to delete facility:", error.message);
    }
  };

  const columns: ColumnsType<FacilityType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (text: string) => <a style={{ color: "#00725A" }}>{text}</a>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
      width: 200,
      render: (text: number) => (
        <span style={{ color: "orange" }}>${text}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, item: FacilityType) => (
        <div className="flex gap-4">
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => handleDelete(item.key)}>
            <FaTrash style={{ color: "orange" }} className="text-xl" />
          </Popconfirm>
          <FaEdit
            onClick={() => {
              setSelectedFacility(item);
              setIsModalOpen(true);
            }}
            className="text-xl text-primary"
          />
        </div>
      ),
      width: 100,
    },
  ];

  const data: FacilityType[] =
    facility?.data.map(
      ({
        location,
        name,
        pricePerHour,
        _id,
        description,
        image,
      }: TFacility) => ({
        key: _id,
        description,
        location,
        name,
        pricePerHour,
        image,
      })
    ) || [];

  return (
    <div
      style={{
        overflowX: "auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}>
      <Title level={3}>All Facilities</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
      {selectedFacility && (
        <FacilityEditModal
          isOpen={isModalOpen}
          onOk={() => {
            setIsModalOpen(false);
            refetch(); // Refetch bookings after updating
          }}
          onCancel={() => setIsModalOpen(false)}
          facilityData={selectedFacility}
        />
      )}
    </div>
  );
};

interface FacilityEditModalProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  facilityData: {
    _id: string;
    key: string;
    name: string;
    description: string;
    pricePerHour: number;
    image?: string;
    location: string;
  };
}

const FacilityEditModal: React.FC<FacilityEditModalProps> = ({
  isOpen,
  onOk,
  onCancel,
  facilityData,
}) => {
  console.log(facilityData, "iam facility data bro modal");

  const [updateFacility] = useUpdateFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facilityInfo = {
      data: {
        ...data,
        id: facilityData._id,
        pricePerHour: Number(data.pricePerHour),
      },
      id: facilityData.key,
    };

    const res = await updateFacility(facilityInfo);
    if (res.data.success) {
      toast.success("Facility has been updated");
      onOk();
    } else {
      toast.error("Failed to update facility");
    }
  };

  return (
    <Modal title="Edit Facility" open={isOpen} onOk={onOk} onCancel={onCancel}>
      <Row justify="center">
        <Col
          lg={24}
          className="p-8 shadow-lg rounded-lg bg-white"
          sm={23}
          md={14}>
          <Title level={3}>Edit Facility</Title>
          <SFform onSubmit={onSubmit}>
            <Form.Item>
              <SFInput
                defaultValue={facilityData?.name}
                type="text"
                label="Facility Name"
                id="Name"
                name="name"
              />
            </Form.Item>
            <Form.Item>
              <SFInput
                defaultValue={facilityData?.description}
                type="text"
                label="Description"
                id="Description"
                name="description"
              />
            </Form.Item>
            <Form.Item>
              <SFInput
                defaultValue={facilityData?.pricePerHour}
                type="number"
                label="Price Per Hour"
                id="PricePerHour"
                name="pricePerHour"
              />
            </Form.Item>
            <Form.Item>
              <SFInput
                defaultValue={facilityData?.image}
                type="text"
                label="Image"
                id="Image"
                name="image"
              />
            </Form.Item>
            {/* upload image  */}

            <Form.Item>
              <SFInput
                defaultValue={facilityData?.location}
                type="text"
                label="Location"
                id="Location"
                name="location"
              />
            </Form.Item>
            <button className="my-primary-btn" type="submit">
              Update Facility
            </button>
          </SFform>
        </Col>
      </Row>
    </Modal>
  );
};

export default Facility;
