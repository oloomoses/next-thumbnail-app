"use client"

import { ModeToggle } from "./mode-toggle"

export function Header() {
    return (
        <div className="border-b">
            <div className="h-6 container flex justify-between items-center">
                <div>ThumbnailRater</div>
                <ModeToggle />
            </div>
            
        </div>
    )
}