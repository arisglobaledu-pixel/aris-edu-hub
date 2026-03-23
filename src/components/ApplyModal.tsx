import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
}

const ApplyModal = ({ open, onOpenChange, courseName }: ApplyModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Apply Now</DialogTitle>
        <DialogDescription>
          {courseName ? `Apply for ${courseName}` : "Fill in your details to start the admission process."}
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4 mt-2" onSubmit={(e) => { e.preventDefault(); onOpenChange(false); }}>
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <Label htmlFor="course">Course of Interest</Label>
          <Input id="course" defaultValue={courseName || ""} placeholder="e.g. B.Tech, MBA" />
        </div>
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:opacity-90">
          Submit Application
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);

export default ApplyModal;
