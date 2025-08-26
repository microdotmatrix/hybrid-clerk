"use client";

import { Clock2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DateTimePicker({
  date,
  startTime,
  endTime,
  setDate,
  setStartTime,
  setEndTime,
}: {
  date?: Date;
  startTime?: string;
  endTime?: string;
  setDate: (date: Date) => void;
  setStartTime: (time: string) => void;
  setEndTime: (time: string) => void;
}) {
  return (
    <Card className="w-fit py-4">
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
          className="bg-transparent p-0"
          required
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-6 border-t px-4 !pt-4">
        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="time-from">Start Time</Label>
          <div className="relative flex w-full items-center gap-2">
            <Clock2Icon className="text-muted-foreground pointer-events-none absolute left-2.5 size-4 select-none" />
            <Input
              id="time-from"
              type="time"
              step="1"
              value={startTime || ""}
              onChange={(e) => setStartTime(e.target.value)}
              className="appearance-none pl-8 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="time-to">End Time</Label>
          <div className="relative flex w-full items-center gap-2">
            <Clock2Icon className="text-muted-foreground pointer-events-none absolute left-2.5 size-4 select-none" />
            <Input
              id="time-to"
              type="time"
              step="1"
              value={endTime || ""}
              onChange={(e) => setEndTime(e.target.value)}
              className="appearance-none pl-8 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
