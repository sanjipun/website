import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen-2xl w-full m-auto p-6">{children}</main>;
}
