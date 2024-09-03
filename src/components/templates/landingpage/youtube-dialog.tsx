import { Button } from "@/components/_ui/primitives/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/_ui/primitives/dialog";
import { PlayCircle } from "lucide-react";

export function YoutubeButtonDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <PlayCircle className="mr-2" />
          Checkout the Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg bg-[#ffff0000] border-none">
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/znuj3QZbf-k?si=OFHBKHhW0uAXoGjd"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
