import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string
  alt?: string
}

export function Avatar({ src, alt, className, children, ...props }: AvatarProps) {
  return (
    <div
      className={cn("relative inline-flex size-8 items-center justify-center overflow-hidden rounded-full bg-muted", className)}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt ?? ""} fill className="object-cover" />
      ) : (
        children
      )}
    </div>
  )
}


