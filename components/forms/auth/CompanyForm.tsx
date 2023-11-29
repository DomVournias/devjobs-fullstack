"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn, useForm } from "react-hook-form";
import { signUpCompanySchema, signUpCompanySchemaType } from "@/schemas/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CompanyForm = ({ form, loading }: { form: any; loading: boolean }) => {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="name"
        disabled={loading}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Company LTD" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex w-full gap-5">
        <FormField
          control={form.control}
          name="email"
          disabled={loading}
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="mail@example.com" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          disabled={loading}
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="joe_doe" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="password"
        disabled={loading}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter a password"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        disabled={loading}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter the same password"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="w-full mt-4" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Register
      </Button>
    </div>
  );
};

export default CompanyForm;
