"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button type="button" className="soft-btn soft-btn-dark no-print" onClick={() => window.print()}>
      <Printer className="h-4 w-4" aria-hidden="true" /> Print / Save as PDF
    </button>
  );
}
