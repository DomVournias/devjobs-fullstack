"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Ref } from "react-hook-form";
import { Skill } from "@prisma/client";
import { objectSchemaType } from "@/schemas/job";

interface ComboBoxFieldProps {
  items: Skill[];
  field: {
    onChange: ([]) => void;
    onBlur: () => void;
    value: object[] | undefined;
    name: string;
    ref: Ref;
  };
}

export default function ComboBoxField({ items, field }: ComboBoxFieldProps) {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<objectSchemaType[]>([]);

  const handleSelect = (value: string) => {
    const parsedValue = JSON.parse(value);

    const isItemAlreadySelected = selectedItems.some(
      (selectedItem) => selectedItem === parsedValue
    );

    if (!isItemAlreadySelected) {
      const newSelectedItems = [...selectedItems, parsedValue];
      setSelectedItems(newSelectedItems);
      field.onChange(newSelectedItems);
      setOpen(false);
    }
  };

  const handleRemove = (item: objectSchemaType) => {
    const newSelectedItems = selectedItems.filter(
      (prevItem) => prevItem !== item
    );
    setSelectedItems(newSelectedItems);
    field.onChange(newSelectedItems);
  };

  // console.log("SELECTED ITEMS=>", selectedItems);

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-1 py-1 sm:flex-row sm:items-center bg-background">
      <div className="flex ">
        {selectedItems.length === 0 ? (
          <p className="text-sm ml-2">Add skills</p>
        ) : (
          <>
            {selectedItems.map((selectedItem) => (
              <div
                key={`${selectedItem.name}-${selectedItem.id}`}
                className="flex gap-3 items-center justify-center w-fit mr-1 rounded-md bg-accent px-2 py-1 text-sm font-medium leading-none text-accent-foreground"
              >
                {selectedItem.name}
                <button onClick={() => handleRemove(selectedItem)}>
                  <X width={15} />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Plus />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0">
          <Command>
            <CommandInput placeholder="Filter label..." autoFocus={true} />
            <CommandList>
              <CommandEmpty>No label found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={JSON.stringify(item)}
                    onSelect={handleSelect}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
