import UploadImage from "@/shared/components/form/UploadImage";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { appConfig } from "@/shared/configs/app.config";
import { cn } from "@/shared/lib/utils";
import { Avatar } from "@/shared/models/avatar.model";
import { useController, UseControllerProps } from "react-hook-form";
import Turnstile from "react-turnstile";
import { match } from "ts-pattern";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import CountryCombobox from "./CountryCombobox";
import DatePicker from "./DatePicker";
import { SimpleEditor } from "./editor/tiptap-templates/simple/simple-editor";
import NumberInput from "./NumberInput";
import PasswordInput from "./PaasswordInput";
import ProfileCombobox from "./ProfileCombobox";
import ProfileComboboxMultipleSelectWithInsert from "./ProfileComboboxMultipleSelectWithInsert";
import SelectUserCombobox from "./SelectUserCombobox";
import UnitInput from "./UnitInput";
import UploadMultipleImage from "./UploadMulitpleImage";

export interface FormFieldProps extends UseControllerProps {
  label?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  defaultPreview?: string | undefined;
  className?: string;
  labelClass?: string;
  bodyClass?: string;
  helperText?: string;
  min?: number;
  max?: number;
  unit?: string;
  model?: string;
  description?: string;
  defaultPreviews?: Avatar[] | undefined;
  checkboxLabel?: string | React.ReactNode;
}

export default function InputField({
  required = true,
  labelClass,
  className,
  helperText,
  bodyClass,
  unit,
  model,
  description,
  defaultPreviews,
  checkboxLabel,
  ...props
}: FormFieldProps) {
  const { field, fieldState } = useController(props);

  return (
    <div className={cn("flex flex-col gap-2", bodyClass)}>
      {props.label && (
        <Label
          htmlFor={field.name}
          className={cn(
            "gap-0 text-sm leading-6 font-medium text-gray-950 dark:text-white",
            field.disabled && "opacity-70",
            labelClass,
          )}
        >
          {props.label}
          {required ? (
            <span className="text-destructive-600 dark:text-destructive-400 -mt-2 text-xs">
              *
            </span>
          ) : null}
        </Label>
      )}
      {match(props.type)
        // textarea
        .with("textarea", () => (
          <Textarea
            readOnly={field.disabled}
            {...field}
            placeholder={props?.placeholder}
            className={cn("h-32", className)}
          />
        ))

        // profile combobox
        .with("profileCombobox", () => (
          <ProfileCombobox
            pathValue={model as string}
            value={field.value}
            onValueChange={field.onChange}
          />
        ))

        // profile combobox with multiple selection and insert new option
        .with("profileComboboxMultipleSelectWithInsert", () => (
          <ProfileComboboxMultipleSelectWithInsert
            pathValue={model as string}
            value={field.value}
            onValueChange={field.onChange}
            label={props.label as string}
          />
        ))

        // country combobox
        .with("countryCombobox", () => (
          <CountryCombobox value={field.value} onValueChange={field.onChange} />
        ))

        .with("textEditor", () => (
          <SimpleEditor
            value={field.value}
            onValueChange={field.onChange}
            placeholder={props.placeholder}
            className={className}
            disabled={props.disabled}
          />
        ))

        // file
        .with("file", () => (
          <UploadImage className={className} {...props} {...field} />
        ))

        // file
        .with("files", () => (
          <UploadMultipleImage
            defaultPreviews={defaultPreviews}
            className={className}
            {...props}
            {...field}
          />
        ))

        // radio type
        .with("radio", () => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className={cn("flex flex-col items-start gap-4", className)}
          >
            {props.options?.map((option) => (
              <Label key={option.value} className="cursor-pointer font-normal">
                <RadioGroupItem value={option.value} />
                <span> {option.label} </span>
              </Label>
            ))}
          </RadioGroup>
        ))

        // switch type
        .with("switch", () => (
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={field.disabled}
            className={cn("cursor-pointer", className)}
          />
        ))

        // type checkbox
        .with("singleCheckbox", () => (
          <Label htmlFor={field.name} className="flex items-center gap-x-2">
            <Checkbox
              onCheckedChange={(checked) => field.onChange(!!checked)}
              id={field.name}
            />
            <span className={cn("", className)}>{checkboxLabel}</span>
          </Label>
        ))

        // Type captcha
        .with("captcha", () => (
          <div className="flex items-center justify-center">
            <div className="w-full">
              <div className="">
                <Turnstile
                  sitekey={appConfig.CLOUD_FLARE_CAPTCHA_SITE_KEY}
                  onSuccess={(token) => field.onChange(token)}
                  theme="light"
                />
              </div>
            </div>
          </div>
        ))

        // number
        .with("number", () => (
          <NumberInput
            type="number"
            min={props.min}
            max={props.max}
            value={field.value}
            onChange={field.onChange}
            readOnly={field.disabled}
          />
        ))

        // unit input
        .with("unitInput", () => (
          <UnitInput
            type="number"
            value={field.value}
            onChange={field.onChange}
            readOnly={field.disabled}
            unit={unit}
          />
        ))

        // select user combobox
        .with("userSelectionCombobox", () => (
          <SelectUserCombobox
            value={field.value}
            onChange={field.onChange}
            disabled={field.disabled}
          />
        ))

        // Type select option
        .with("select", () => (
          <Select
            value={field.value?.toString()}
            onValueChange={(val) =>
              typeof field.value === "string"
                ? field.onChange(val)
                : field.onChange(Number(val))
            }
          >
            <SelectTrigger
              disabled={field.disabled}
              className="w-full data-[size=default]:h-10"
            >
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {props?.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))

        .with("password", () => (
          <PasswordInput
            name={field.name}
            placeholder={props.placeholder}
            className={className}
            value={field.value}
            onChange={field.onChange}
            readOnly={field.disabled}
          />
        ))

        // Date Picker
        .with("DatePicker", () => (
          <DatePicker
            value={field.value}
            onValueChange={field.onChange}
            className={className}
          />
        ))

        // native type
        .with(
          "text",
          "email",
          "date",
          "tel",
          "url",
          "search",
          "color",
          "time",
          "datetime-local",
          () => (
            <Input
              id={field.name}
              type={props.type}
              placeholder={props.placeholder}
              className={cn("", className)}
              readOnly={field.disabled}
              {...field}
            />
          ),
        )
        .otherwise(() => null)}

      {helperText && (
        <p data-helper-text className="text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {description && (
        <p data-helper-text className="text-sm text-gray-500">
          {description}
        </p>
      )}

      {fieldState.error && (
        <p className="text-sm text-red-500">{fieldState.error.message}</p>
      )}
    </div>
  );
}
