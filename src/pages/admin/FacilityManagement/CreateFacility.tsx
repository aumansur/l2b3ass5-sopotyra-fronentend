/* eslint-disable prefer-const */
import React, { useState } from "react";
import { Button, Col, Form, Row, Upload } from "antd";
import Title from "antd/es/typography/Title";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import { useCreateFacilityMutation } from "../../../redux/feature/facillity/facility.auth.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload/interface";

interface FacilityFormValues {
  name: string;
  description: string;
  pricePerHour: number;
  image: string;
  location: string;
}

const CreateFacility: React.FC = () => {
  const [addFacility] = useCreateFacilityMutation();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<RcFile | null>(null); // Track selected file

  // Cloudinary Image Upload Function
  const handleImageUpload = async (file: RcFile) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, // Replace with your Cloudinary URL
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to upload image: ${res.statusText}`);
      }

      const data = await res.json();
      return data.secure_url; // Cloudinary returns the image URL in secure_url
    } catch (error) {
      console.error("Error uploading image: ", error);
      toast.error("Image upload failed.");
      return null;
    }
  };

  // Handle the file upload change
  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      const file = info.file.originFileObj as RcFile;
      setImageUrl(URL.createObjectURL(file)); // For preview purposes
    }
  };

  // OnSubmit handler
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let facilityData: FacilityFormValues = {
      name: data.name,
      pricePerHour: Number(data.pricePerHour),
      description: data.description,
      image: "",
      location: data.location,
    };

    // Handle image upload first
    if (data.image && data.image[0]) {
      const uploadedImageUrl = await handleImageUpload(
        data.image[0].originFileObj
      );
      if (uploadedImageUrl) {
        facilityData.image = uploadedImageUrl; // Set the Cloudinary URL
      } else {
        toast.error("Image upload failed. Please try again.");
        return;
      }
    }

    try {
      const res = await addFacility(facilityData).unwrap();
      if (res.success) {
        toast.success("Facility has been created successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    }
  };

  // Define the onSubmit handler with type for form data

  // Handle file selection for upload and preview
  const handleFileChange = ({ file }: { file: RcFile }) => {
    setSelectedFile(file); // Store the selected file
    setImageUrl(URL.createObjectURL(file)); // Generate a preview URL
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
          {/* Cloudinary image upload */}
          <Form.Item>
            <Upload
              beforeUpload={() => false} // Disable auto-upload
              maxCount={1}
              listType="picture"
              onChange={handleFileChange} // Handle file change
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Facility Preview"
                style={{ width: "100%", marginTop: "10px" }}
              />
            )}
          </Form.Item>
          <Form.Item>
            <SFInput
              type="text"
              label="Location"
              id="Location"
              name="location"
            />
          </Form.Item>
          <button
            className="my-primary-btn bg-primary text-white"
            type="submit">
            Create Facility
          </button>
        </SFform>
      </Col>
    </Row>
  );
};

export default CreateFacility;
