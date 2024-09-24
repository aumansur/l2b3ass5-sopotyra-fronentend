import { FieldValues, SubmitHandler } from "react-hook-form";
import SFInput from "../components/form/SFInput/SFinput";
import SFform from "../components/form/SFform/SFform";
import { Button, Col, Divider, Form, Row, Space } from "antd";
import { Typography } from "antd";
import { calc } from "antd/es/theme/internal";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { useRegisterUserMutation } from "../redux/feature/auth/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const Register = () => {
  const navigate=useNavigate()
  const [createUser]=useRegisterUserMutation()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      ...data
    };

    try {
      const res = await createUser(userInfo).unwrap();
      console.log(res, "iam token and response");

   
      if (res?.success) {
        toast.success("Sing up  successfully");
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col
        className="p-8 shadow-lg rounded-lg bg-white"
        sm={12}
        md={6}
        style={{ minWidth: "300px" }}
      >
        <SFform onSubmit={onSubmit}>
          <Title style={{ color: "#00725A" }} level={2} className="text-white">
            Register
          </Title>
          <Row gutter={[0, 20]}>
            <Col className="" span={24}>
              <Form.Item className="-mb-3 md:mb-6">
                <SFInput label="Name" name="name" type="text" id="name" />
              </Form.Item>
              <Form.Item className="-mb-3 md:mb-6">
                <SFInput label="Email" name="email" type="text" id="email" />
              </Form.Item>
              <Form.Item className="-mb-3 md:mb-6">
                <SFInput label="Phone" name="phone" type="number" id="phone" />
              </Form.Item>
              <Form.Item className="-mb-3 md:mb-6">
                <SFInput
                  label="Address"
                  name="address"
                  type="text"
                  id="address"
                />
              </Form.Item>
              <SFInput
                label="Password"
                name="password"
                type="password"
                id="password"
              />
              <Text
                className="text-xs text-secondary"
                style={{ float: "right", paddingTop: "9px" }}
              >
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </Text>
            </Col>

            <Col span={24}>
              <Form.Item className="">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#00725A",
                    borderColor: "#00725A",
                    width: "100%",
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Divider style={{ marginTop: "-18px" }}>sign up</Divider>
              <Divider style={{ marginTop: "-0px" }}>or</Divider>
              <div className="flex justify-center ">
                <Space align="center" className="text-2xl" size={"large"}>
                  <FaGithub />
                  <FcGoogle />
                  <IoLogoFacebook />
                </Space>
              </div>
            </Col>
          </Row>
        </SFform>
      </Col>
    </Row>
  );
};

export default Register;
