import { useEffect, useState, type ReactNode } from "react";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stonkzz-banner-dismissed")) {
      setBannerVisible(false);
    }
  }, []);

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("stonkzz-banner-dismissed", "1");
  };

  return (
    <>
      <SmoothScroll />
      <AnnouncementBanner visible={bannerVisible} onDismiss={dismissBanner} />
      <Nav bannerVisible={bannerVisible} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
