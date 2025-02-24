
import Image from "next/image"
import GooglePlayDownloadButton from "./ui/GooglePlayDownloadButton"

import AppStoreButton from "./ui/AppStoreDownloadButton";
export function HeroSection() {

  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Go Shawdy App
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crowdfunding Made <span className="text-primary">Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Start your milestones campaign or support others. Every donation makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <GooglePlayDownloadButton/>
              <AppStoreButton/>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <Image
            src="/Goshawty.png" 
            alt="App Preview"
            width={600}
            height={800}
            className="rounded-2xl shadow-2xl relative"
          />
        </div>
      </div>
    </section>
  )
}

