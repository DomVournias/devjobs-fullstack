"use client";

import { FormControl, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { RadioGroupPropTypes } from "@/interfaces";
import React from "react";
import { Ref } from "react-hook-form";

interface SelectFieldProps {
  items: RadioGroupPropTypes[];
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    id?: number;
    value: object | undefined;
    name: string;
    ref: Ref;
  };
}

const RadioField = ({ items, field }: SelectFieldProps) => {
  const handleFieldValue = (value: string) => {
    const parsedObject = JSON.parse(value);

    // console.log(field.name, `==>`, parsedObject);
    field.onChange(parsedObject);
  };

  return (
    <RadioGroup className="flex gap-6" onValueChange={handleFieldValue}>
      {items.map((item) => (
        <FormItem key={item.id}>
          <FormControl>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={JSON.stringify(item)} id={item.name} />
              <Label htmlFor={item.name}>{item.name}</Label>
            </div>
          </FormControl>
        </FormItem>
      ))}
    </RadioGroup>
  );
};

export default RadioField;
