import React from "react";
import { useCreateAdminMutation } from "../../../redux/feature/createAdmin/createAdmin";
import { Button, Col, Form, Row } from "antd";
import Title from "antd/es/typography/Title";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

// Define the form values type
interface AdminFormValues {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
}

const CreateAdmin: React.FC = () => {
  const [addAdmin] = useCreateAdminMutation();

  // Define the submit handler with proper types
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, 'I am created admin data');

    try {
      const res = await addAdmin(data).unwrap(); // Unwrap the result to handle it as a resolved value
      console.log(res);

      if (res.success) {
        toast.success("Admin has been created successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col lg={10} className="p-8 shadow-lg rounded-lg bg-white" sm={12} md={6}>
        <Title level={4}>Make your New Admin</Title>
        <SFform onSubmit={onSubmit}>
          <Form.Item>
            <SFInput type="text" label="Admin Name" id="name" name="name" />
          </Form.Item>
          <Form.Item>
            <SFInput type="email" label="Email" id="email" name="email" />
          </Form.Item>
          <Form.Item>
            <SFInput type="password" label="Password" id="password" name="password" />
          </Form.Item>
          <Form.Item>
            <SFInput type="number" label="Phone Number" id="phone" name="phone" />
          </Form.Item>
          <Form.Item>
            <SFInput type="text" label="Location" id="address" name="address" />
          </Form.Item>
          <Button className="bg-primary text-white" htmlType="submit">Create Admin</Button>
        </SFform>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
