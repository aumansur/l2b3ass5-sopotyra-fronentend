import React from "react";
import { Button, Col, Form, Row } from "antd";
import Title from "antd/es/typography/Title";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import { useCreateFacilityMutation } from "../../../redux/feature/facillity/facility.auth.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

// Define the type for form values
interface FacilityFormValues {
  name: string;
  description: string;
  pricePerHour: number;
  image: string;
  location: string;
}

const CreateFacility: React.FC = () => {
  const [addFacility] = useCreateFacilityMutation();

  // Define the onSubmit handler with type for form data
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facilityData: FacilityFormValues = {
      name: data.name,
      pricePerHour: Number(data.pricePerHour),
      description: data.description,
      image: data.image,
      location: data.location,
    };

    console.log(facilityData);

    try {
      const res = await addFacility(facilityData).unwrap();
      console.log(res);

      if (res.success) {
        toast.success("Facility has been created successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col lg={10} className="p-8 shadow-lg rounded-lg bg-white" sm={12} md={6}>
        <Title level={3}>Create Facility</Title>
        <SFform onSubmit={onSubmit}>
          <Form.Item>
            <SFInput type="text" label="Facility Name" id="Name" name="name" />
          </Form.Item>
          <Form.Item>
            <SFInput
              type="text"
              label="Description"
              id="Description"
              name="description"
            />
          </Form.Item>
          <Form.Item>
            <SFInput
              type="number"
              label="Price Per Hour"
              id="PricePerHour"
              name="pricePerHour"
            />
          </Form.Item>
          <Form.Item>
            <SFInput type="text" label="Image" id="image" name="image" />
          </Form.Item>
          <Form.Item>
            <SFInput
              type="text"
              label="Location"
              id="Location"
              name="location"
            />
          </Form.Item>
          <button className="my-primary-btn " type="submit">
            Create Facility
          </button>
        </SFform>
      </Col>
    </Row>
  );
};

export default CreateFacility;
