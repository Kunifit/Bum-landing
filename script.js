const ctaLinks = document.querySelectorAll("[data-cta-location]");

ctaLinks.forEach((ctaLink) => {
  ctaLink.addEventListener("click", () => {
    const eventName = ctaLink.dataset.eventName || "free_trial_cta_click";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      cta_location: ctaLink.dataset.ctaLocation,
    });
  });
});
