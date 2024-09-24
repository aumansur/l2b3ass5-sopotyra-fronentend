import { Form, Input } from "antd";
import { useForm, Controller, useFormContext } from "react-hook-form";

type TSFInputProps = {
  name: string;
  type: string;
  id: string;
  label: string;
  className?: string;
  defaultValue?: any;
  disabled?: boolean;
};

const SFInput = ({
  name,
  type,
  label,
  className,
  defaultValue,
  disabled,
}: TSFInputProps) => {
  // const { control } = useFormContext();
  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <Form.Item labelCol={{ span: 24 }} layout="vertical" label={label}>
          <Input
            disabled={disabled}
            className={className}
            {...field}
            type={type}
            id={name}
          />{" "}
        </Form.Item>
      )}
    />
  );
};

export default SFInput;
