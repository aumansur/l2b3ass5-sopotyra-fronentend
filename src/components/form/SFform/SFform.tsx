import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TSFFrom = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const SFform = ({ children, onSubmit }: TSFFrom) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
     console.log(data);
     
    onSubmit(data)
  };
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default SFform;
