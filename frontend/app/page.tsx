"use client";

import { CountdownTimer } from "@/components/countdown-timer";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [email, setEmail] = useState("");

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-slate-500">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <Rocket className="w-12 h-12 mx-auto text-primary animate-bounce" />
          <h1 className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Our Launch is Coming Soon
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            We're working hard to bring you something extraordinary. Stay tuned
            and be the first to know when we launch.
          </p>
        </div>

        <CountdownTimer targetDate={launchDate} />
      </div>
      <footer className="py-6 md:py-0">
        <div className="container-wrapper">
          <div className="container py-4">
            <div className="text-sm text-muted-foreground mt-8">
              © 2025 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
