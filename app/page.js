"use client";
import React from "react";
import { useState } from "react";
import { Button } from '@mantine/core';
import { DatePickerInput } from "@mantine/dates";

export default function Home() {
  const [value, setValue] = useState(null)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-500">Hello Mantine</h1>
      <DatePickerInput
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}        
      />
      <ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
      <Button variant="gradient" >Button</Button>
    </main>
  );
}

/**
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
} 



 */
