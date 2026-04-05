import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactRequest } from "../hooks/useQueries";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export default function ConsultationModal({ open, onOpenChange }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync, isPending } = useSubmitContactRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Unable to submit request. Please try again.");
    }
  };

  const handleClose = (v: boolean) => {
    if (!v) setSubmitted(false);
    onOpenChange(v);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="consultation.dialog"
        className="bg-[oklch(0.135_0.008_240)] border border-border max-w-md rounded-none p-0 overflow-hidden"
      >
        {/* Gold accent top bar */}
        <div className="h-1 bg-gold w-full" />

        <div className="p-8">
          <DialogHeader className="mb-6">
            <p className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              EXCLUSIVE SERVICE
            </p>
            <DialogTitle className="font-display text-2xl font-semibold tracking-wide text-foreground uppercase">
              Request Consultation
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">
              Our horological advisors will contact you within 24 hours to
              schedule your personal consultation.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div
              data-ocid="consultation.success_state"
              className="flex flex-col items-center gap-4 py-8 text-center"
            >
              <CheckCircle className="text-gold" size={48} />
              <p className="font-display text-lg text-foreground">Thank you</p>
              <p className="font-sans text-sm text-muted-foreground">
                Your consultation request has been received. We will be in touch
                shortly.
              </p>
              <Button
                data-ocid="consultation.close_button"
                onClick={() => handleClose(false)}
                className="mt-2 bg-gold text-[oklch(0.108_0.005_240)] hover:bg-gold-light rounded-none font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-8 py-2.5"
              >
                CLOSE
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="consult-name"
                  className="font-sans text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase"
                >
                  Full Name
                </Label>
                <Input
                  id="consult-name"
                  data-ocid="consultation.input"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean-Pierre Rousseau"
                  className="bg-[oklch(0.175_0.010_240)] border-border rounded-none font-sans text-sm placeholder:text-muted-foreground/50 focus-visible:ring-gold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="consult-email"
                  className="font-sans text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase"
                >
                  Email Address
                </Label>
                <Input
                  id="consult-email"
                  type="email"
                  data-ocid="consultation.input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean@example.com"
                  className="bg-[oklch(0.175_0.010_240)] border-border rounded-none font-sans text-sm placeholder:text-muted-foreground/50 focus-visible:ring-gold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="consult-message"
                  className="font-sans text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase"
                >
                  Message
                </Label>
                <Textarea
                  id="consult-message"
                  data-ocid="consultation.textarea"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I am interested in The Classique collection and would like to discuss bespoke options..."
                  rows={4}
                  className="bg-[oklch(0.175_0.010_240)] border-border rounded-none font-sans text-sm placeholder:text-muted-foreground/50 focus-visible:ring-gold resize-none"
                />
              </div>

              <DialogFooter className="mt-2">
                <Button
                  type="button"
                  data-ocid="consultation.cancel_button"
                  variant="ghost"
                  onClick={() => handleClose(false)}
                  className="font-sans text-[10px] font-semibold tracking-[0.12em] text-muted-foreground hover:text-foreground uppercase rounded-none"
                >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  data-ocid="consultation.submit_button"
                  disabled={isPending}
                  className="bg-gold text-[oklch(0.108_0.005_240)] hover:bg-gold-light rounded-none font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-8 py-2.5 disabled:opacity-70"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />{" "}
                      SENDING...
                    </>
                  ) : (
                    "SUBMIT REQUEST"
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
