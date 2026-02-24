"use client";
import dynamic from "next/dynamic";

export const AIAssistantClient = dynamic(() => import("./AIAssistant").then(mod => mod.AIAssistant), { ssr: false });
