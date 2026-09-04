import { QRCodeSVG } from "qrcode.react";
import { QrCode } from "lucide-react";
import { APP_DOWNLOAD_URL, isDownloadConfigured } from "@/config/site";
import { cn } from "@/lib/utils";

/** QR code pointing at APP_DOWNLOAD_URL. */
export function QrPanel({
  className,
  caption = "Scan to download on your phone",
}: {
  className?: string;
  caption?: string;
}) {
  const configured = isDownloadConfigured();

  return (
    <figure
      className={cn(
        "flex flex-col items-center gap-3 rounded-3xl glass p-5 text-center",
        className,
      )}
    >
      <div className="rounded-2xl bg-foreground p-3">
        {configured ? (
          <QRCodeSVG
            value={APP_DOWNLOAD_URL}
            size={116}
            bgColor="#ffffff"
            fgColor="#050505"
            level="M"
            title="QR code linking to the Zappit Android APK"
          />
        ) : (
          <div className="grid size-[116px] place-items-center rounded-lg bg-background/5 text-center">
            <QrCode className="size-10 text-background/60" aria-hidden />
          </div>
        )}
      </div>
      <figcaption className="text-xs text-muted-foreground">
        {caption}
        {!configured && (
          <span className="mt-1 block text-subtle">Placeholder — set APP_DOWNLOAD_URL</span>
        )}
      </figcaption>
    </figure>
  );
}
