"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { arraySchema, objectSchema, objectSchemaType } from "@/schemas/job";

import { Ref } from "react-hook-form";
import { SelectListItem } from "@/interfaces";
import { handleSalaryChecks } from "@/utils/salaries";

interface SelectFieldProps {
  items: SelectListItem[];
  label: string;
  placeholder: string;
  range?: boolean | undefined;
  disabled: boolean | undefined;
  custom: boolean;
  disabledName?: string | undefined;
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    id?: number;
    object?: object;
    value: object | undefined;
    name: string;
    ref: Ref;
  };
}

const SelectField = ({
  items,
  label,
  placeholder,
  field,
  range,
  custom,
  disabled,
  disabledName,
}: SelectFieldProps) => {
  // const [minValue, setMinValue] = useState<number>(0);

  const handleFieldValue = (value: string) => {
    const parsedObject = JSON.parse(value);

    // if (!isMaxSalaries) {
    //   setMinValue(parsedObject.value);
    // }
    // console.log(field.name, `==>`, parsedObject);
    field.onChange(parsedObject);
  };

  // console.log(minValue);

  return (
    <Select onValueChange={handleFieldValue} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {!custom ? (
            <>
              {items.map((item) => (
                <SelectItem
                  key={item.id}
                  value={JSON.stringify(item)}
                  textValue={range ? item.range : item.name}
                >
                  {disabled ? disabledName : item.name}
                </SelectItem>
              ))}
            </>
          ) : (
            <>
              {items.map((item) => (
                <SelectItem
                  key={item.id}
                  value={JSON.stringify(item)}
                  textValue={range ? item.range : item.name}
                  // disabled={isMaxSalaries && item.value < minValue}
                >
                  {range ? item.range : item.name}
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
