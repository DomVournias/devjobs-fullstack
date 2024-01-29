"use client";

import {
  Availability,
  Budget,
  Hours,
  Industry,
  Location,
  MaxSalary,
  MinSalary,
  Position,
  Seniority,
  Skill,
  Type,
} from "@prisma/client";
import { ErrorToast, SuccessToast } from "@/lib/toasts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generateShortUuid, generateUuid } from "@/utils/ids";
import { jobSchema, jobSchemaType } from "@/schemas/job";

import { Button } from "@/components/ui/button";
import ComboBoxField from "./ComboBoxField";
import { CreateJob } from "@/actions/job";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RadioField from "./RadioField";
import { Select } from "@/components/ui/select";
import SelectField from "./SelectField";
import { Switch } from "@/components/ui/switch";
import TextEditor from "@/components/texteditor/TextEditor";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface CreateJobFormProps {
  data: {
    locations: Location[];
    positions: Position[];
    salaries: MinSalary[];
    types: Type[];
    skills: Skill[];
    seniorities: Seniority[];
    hours: Hours[];
    availability: Availability[];
    budget: Budget[];
  };
}

export default function CreateJobForm({
  data = {
    locations: [],
    positions: [],
    salaries: [],
    types: [],
    skills: [],
    seniorities: [],
    hours: [],
    availability: [],
    budget: [],
  },
}: CreateJobFormProps) {
  const initialObject = {
    id: 0,
    name: "",
    value: 0,
    range: "",
  };

  const form = useForm<jobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      description: "",
      position: initialObject,
      location: initialObject,
      minSalary: initialObject,
      maxSalary: initialObject,
      type: initialObject,
      worldwide: false,
      skills: [],
      seniority: initialObject,
      hours: initialObject,
      availability: initialObject,
      budget: initialObject,
      rate: {
        id: "",
        type: "",
        fixed: 0,
        from: 0,
        to: 0,
      },
    },
  });

  async function onSubmit(values: jobSchemaType) {
    try {
      console.log("Form Values ===>>", values);

      // const form = await CreateJob(values);

      SuccessToast("Form created successfully");

      // router.push(`/builder/${form}`);
    } catch (error) {
      ErrorToast("Something went wrong, please try again later");
    }
  }

  const errors = form.formState.errors;
  console.log("Form Errors ===>>", errors);

  // console.log(
  //   "data",
  //   data.salaries.map((o) => o.minName)
  // );

  // console.log(data.positions);

  // TODO: differentiate the international and location types
  // TODO: For example: Hybrid - Partially Remote - Full remote - Worldwide etc...
  const isInternational = form.getValues("worldwide");

  form.watch("type");
  form.watch("budget");

  const jobType = form.getValues("type").name;
  const budgetType = form.getValues("budget").name;

  const shortId = generateShortUuid();
  const longId = generateUuid();

  console.log("Rate", form.getValues("rate"));
  // console.log();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <h5 className="text-lg font-bold opacity-50 mb-4 ">Details</h5>
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
                  <TextEditor text={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <h5 className="text-lg font-bold mb-4 opacity-50">Location</h5>
          <div className="flex w-full gap-5">
            <FormField
              control={form.control}
              name="worldwide"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <FormLabel>Worldwide</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-3 h-10">
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <p>🌍100% Remote</p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-2/3">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <SelectField
                      items={data.locations}
                      label="Countries"
                      placeholder="Select a location"
                      field={field}
                      disabled={isInternational}
                      disabledName="Worldwide"
                      custom={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-8">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <h5 className="text-lg font-bold opacity-50 mb-4">Position</h5>

                <FormControl>
                  <SelectField
                    items={data.positions}
                    label="Positions"
                    placeholder="Select a position"
                    field={field}
                    disabled={false}
                    custom={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seniority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seniority</FormLabel>
                <FormControl>
                  <RadioField items={data.seniorities} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <ComboBoxField items={data.skills} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <RadioField items={data.types} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!jobType ? // ||
          // jobType === "Full-Time"
          // ||
          // jobType === "Part-Time"
          null : (
            <div className="flex w-full gap-5">
              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Hours</FormLabel>
                    <FormControl>
                      <SelectField
                        items={data.hours}
                        label="Working hours"
                        placeholder="Select working hours"
                        field={field}
                        disabled={false}
                        custom={true}
                        range={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Months</FormLabel>
                    <FormControl>
                      <SelectField
                        items={data.availability}
                        label="Months"
                        placeholder="Select working months"
                        disabledName="Select working months"
                        field={field}
                        disabled={false}
                        custom={true}
                        range={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {!jobType || jobType === "Internship" ? null : (
            <div>
              <h5 className="text-lg font-bold opacity-50 mb-4">Budget</h5>
              <div className="space-y-8">
                {jobType === "Contract" || jobType === "Freelance" ? (
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <RadioField items={data.budget} field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : null}

                {jobType === "Contract" || jobType === "Freelance" ? null : (
                  <div className="flex w-full gap-5">
                    <FormField
                      control={form.control}
                      name="minSalary"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>Minimum salary</FormLabel>
                          <FormControl>
                            <SelectField
                              items={data.salaries}
                              label="Minimum Salary"
                              placeholder="Select minimum range"
                              field={field}
                              disabled={false}
                              custom={true}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="maxSalary"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>Maximum salary</FormLabel>
                          <FormControl>
                            <SelectField
                              items={data.salaries}
                              label="Maximum Salary"
                              placeholder="Select maximum range"
                              disabledName="Select maximum range"
                              field={field}
                              disabled={false}
                              custom={true}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {!budgetType ||
                jobType === "Full-Time" ||
                jobType === "Part-Time" ? null : (
                  <div>
                    {budgetType === "Hourly" ? (
                      <div className="flex w-full gap-5">
                        <FormField
                          control={form.control}
                          name="rate"
                          render={({ field }) => (
                            <FormItem className="w-1/4">
                              <FormLabel>From</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder=""
                                  maxLength={3}
                                  max={1000}
                                  number={true}
                                  prefix="$"
                                  suffix="/hour"
                                  onChange={(event) =>
                                    field.onChange({
                                      id: shortId,
                                      name: `$${+event.target.value} - $${
                                        form.getValues("rate")?.to
                                      }/hour`,
                                      from: +event.target.value,
                                      to: form.getValues("rate")?.to,
                                    })
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="rate"
                          render={({ field }) => (
                            <FormItem className="w-1/4">
                              <FormLabel>To</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder=""
                                  maxLength={3}
                                  max={1000}
                                  number={true}
                                  prefix="$"
                                  suffix="/hour"
                                  onChange={(event) =>
                                    field.onChange({
                                      id: shortId,
                                      name: `$${
                                        form.getValues("rate")?.from
                                      } - $${+event.target.value}/hour`,
                                      from: form.getValues("rate")?.from,
                                      to: +event.target.value,
                                    })
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ) : (
                      <div>
                        <FormField
                          control={form.control}
                          name="rate"
                          render={({ field }) => (
                            <FormItem className="w-1/4">
                              <FormLabel>Project Budget</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder=""
                                  maxLength={3}
                                  max={1000}
                                  number={true}
                                  prefix="$"
                                  suffix=""
                                  onChange={(event) =>
                                    field.onChange({
                                      id: shortId,
                                      name: `$${+event.target.value} - $${
                                        form.getValues("rate")?.to
                                      }/hour`,
                                      fixed: +event.target.value,
                                    })
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
