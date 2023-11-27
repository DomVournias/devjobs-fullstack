"use client";

import React, { Ref } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SelectListItem } from "@/interfaces";
import { handleSalaryChecks } from "@/utils/salaries";

interface SelectFieldProps {
  items: SelectListItem[];
  label: string;
  placeholder: string;
  disabled: boolean | undefined;
  custom: boolean;
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string | undefined;
    name: string;
    ref: Ref<any>;
  };
}

const SelectField = ({
  items,
  label,
  placeholder,
  field,
  custom,
  disabled,
}: SelectFieldProps) => {
  const selectedValue = field.value !== undefined ? field.value : "";
  const displayValue = disabled ? "International" : selectedValue;

  const handleFieldValue = (value: string) => {
    field.onChange(value);
  };

  return (
    <Select
      onValueChange={handleFieldValue}
      defaultValue={displayValue}
      disabled={disabled}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {!custom ? (
            <>
              {items.map((item) => (
                <SelectItem value={item.name} key={item.id}>
                  {disabled ? "International" : item.name}
                </SelectItem>
              ))}
            </>
          ) : (
            <>
              {items.map((item) => (
                <SelectItem value={item.name} key={item.id}>
                  {handleSalaryChecks(item.min, item.max)}
                </SelectItem>
              ))}
            </>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
