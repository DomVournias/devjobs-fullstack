"use client";

import { ErrorToast, SuccessToast } from "@/lib/toasts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Industry, Location, Position } from "@/interfaces";
import { jobSchema, jobSchemaType } from "@/schemas/job";

import { Button } from "@/components/ui/button";
import { CreateJob } from "@/actions/job";
import { Input } from "@/components/ui/input";
import SelectField from "./SelectField";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@/components/ui/switch";

interface CreateJobFormProps {
  data: {
    locations: Location[];
    industries: Industry[];
    positions: Position[];
  };
}

export default function CreateJobForm({
  data = { locations: [], industries: [], positions: [] },
}: CreateJobFormProps) {
  const form = useForm<jobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      description: "",
      industry: "",
      position: "",
      location: "",
      international: false,
    },
  });

  async function onSubmit(values: jobSchemaType) {
    try {
      // console.log("Form Values ===>>", values);

      const form = await CreateJob(values);

      SuccessToast("Form created successfully");

      // router.push(`/builder/${form}`);
    } catch (error) {
      ErrorToast("Something went wrong, please try again later");
    }
  }

  // const onSubmit = (values: jobSchemaType) => {
  //   console.log("Form Values ===>>", values);
  // };

  // const errors = form.formState.errors;
  // console.log("Form Errors ===>>", errors);

  // console.log(data);

  const isInternational = form.getValues("international");

  // console.log(isInternational);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="international"
          render={({ field }) => (
            <FormItem>
              <FormLabel>International</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <SelectField
                  items={data.locations}
                  label="Countries"
                  placeholder="Select a location"
                  field={field}
                  disabled={isInternational}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <FormControl>
                <SelectField
                  items={data.industries}
                  label="Industries"
                  placeholder="Select an industry"
                  field={field}
                  disabled={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <SelectField
                  items={data.positions}
                  label="Industries"
                  placeholder="Select a position"
                  field={field}
                  disabled={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
