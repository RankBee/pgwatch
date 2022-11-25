import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldPath } from "react-hook-form";
import { IFormInput } from "./ModalComponent";

type Params = {
  field: ControllerRenderProps<IFormInput, FieldPath<IFormInput>>,
  error?: boolean,
  helperText?: string,
  type: "text" | "password" | "number",
  label: string,
  title?: string,
  disabled?: boolean
}

export const SimpleTextField = ({ field, error, helperText, type, label, title, disabled }: Params) => {

  return (
    <TextField
      {...field}
      error={error}
      helperText={helperText}
      type={type}
      label={label}
      sx={{ width: 248 }}
      title={title}
      disabled={disabled}
    />
  );
};

export const MultilineTextField = ({ field, error, helperText, type, label, title }: Params) => {

  return (
    <TextField
      {...field}
      error={error}
      helperText={helperText}
      type={type}
      label={label}
      multiline
      minRows={2}
      maxRows={5}
      title={title}
      sx={{
        flex: "1 1 50%"
      }}
    />
  );
};
