import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rabbit, Bird, Turtle } from "lucide-react";

export const SettingsFormComponent = () => (
  <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
      <div className="grid gap-3">
        <Label htmlFor="model">Model</Label>
        <Select>
          <SelectTrigger id="model" className="items-start [&_[data-description]]:hidden">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="genesis">
              <div className="text-muted-foreground flex items-start gap-3">
                <Rabbit className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    Neural <span className="text-foreground font-medium">Genesis</span>
                  </p>
                  <p className="text-xs" data-description>
                    Our fastest model for general use cases.
                  </p>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="explorer">
              <div className="text-muted-foreground flex items-start gap-3">
                <Bird className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    Neural <span className="text-foreground font-medium">Explorer</span>
                  </p>
                  <p className="text-xs" data-description>
                    Performance and speed for efficiency.
                  </p>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="quantum">
              <div className="text-muted-foreground flex items-start gap-3">
                <Turtle className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    Neural <span className="text-foreground font-medium">Quantum</span>
                  </p>
                  <p className="text-xs" data-description>
                    The most powerful model for complex computations.
                  </p>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="temperature">Temperature</Label>
        <Input id="temperature" type="number" placeholder="0.4" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="top-p">Top P</Label>
        <Input id="top-p" type="number" placeholder="0.7" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="top-k">Top K</Label>
        <Input id="top-k" type="number" placeholder="0.0" />
      </div>
    </fieldset>
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
      <div className="grid gap-3">
        <Label htmlFor="role">Role</Label>
        <Select defaultValue="system">
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system">System</SelectItem>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="assistant">Assistant</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="content">Instruction</Label>
        <Textarea id="content" placeholder="You are a..." />
      </div>
    </fieldset>
  </form>
);

