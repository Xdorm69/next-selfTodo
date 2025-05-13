import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="text-center">
        <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
        <p className="text-xl font-semibold text-gray-700">
          Loading Zodos...
        </p>
      </div>
    </div>
  );
}
