const ctaLinks = document.querySelectorAll(
  '[data-event-name="free_trial_cta_click"][data-cta-location]',
);

ctaLinks.forEach((ctaLink) => {
  ctaLink.addEventListener("click", () => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "free_trial_cta_click", {
      cta_location: ctaLink.dataset.ctaLocation,
    });
  });
});
