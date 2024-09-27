import { FieldValues, SubmitHandler } from "react-hook-form";
import SFInput from "../components/form/SFInput/SFinput";
import SFform from "../components/form/SFform/SFform";
import { Button, Col, Divider, Form, Row, Space } from "antd";
import { Typography } from "antd";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { toast } from "sonner";
import { VerifyToken } from "../utils/VerifyToken";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setUser } from "../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();
      console.log(res, "iam token and response");

      const verifyToken = VerifyToken(res?.token);
      dispatch(setUser({ user: verifyToken, token: res?.token }));
      if (res?.success) {
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      className="lg:bg-gradient-to-r lg:from-[#91F350] lg:to-[#49e0fb]"
      style={{ height: "calc(100vh - 93px)" }}>
      <Col
        className="p-8 shadow-lg rounded-lg bg-white"
        sm={12}
        md={6}
        style={{ minWidth: "300px" }}>
        <SFform onSubmit={onSubmit}>
          <Title style={{ color: "#00725A" }} level={2}>
            Sign In
          </Title>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <SFInput label="Email" name="email" type="text" id="email" />
            </Col>
            <Col span={24}>
              <SFInput
                label="Password"
                name="password"
                type="password"
                id="password"
              />
              <Text
                className="text-xs text-secondary"
                style={{ float: "right", paddingTop: "9px" }}>
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </Text>
            </Col>

            <Col span={24}>
              <Form.Item>
                <button
                  className="my-primary-btn"
                  type="submit"
                  style={{
                    backgroundColor: "#00725A",
                    borderColor: "#00725A",
                    width: "100%",
                  }}>
                  Submit
                </button>
              </Form.Item>
            </Col>

            {/* Register Button */}
            <Col span={24}>
              <button
                className="my-primary-btn"
                onClick={() => navigate("/register")}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}>
                Register
              </button>
            </Col>

            <Col span={24}>
              <Divider style={{ marginTop: "-18px" }}>or sign up with</Divider>
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

export default Login;
