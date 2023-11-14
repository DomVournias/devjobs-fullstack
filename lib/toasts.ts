import { toast } from "@/components/ui/use-toast";

export function SuccessToast(message: string) {
  toast({
    title: "Success",
    description: message,
  });
}

export function ErrorToast(message: string) {
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
}
