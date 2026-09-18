# Portfolio Performance Checklist

The portfolio uses motion and visual effects, so performance should be checked whenever a major section changes.

## Rendering

- Avoid unnecessary client-side components.
- Keep repeated animations from triggering expensive layout work.
- Prefer transform and opacity for motion where practical.
- Lazy-load non-critical heavy content.
- Avoid shipping large libraries for a single small effect.

## Media

- Use appropriately sized images.
- Compress decorative assets.
- Do not preload media that is below the fold without a reason.
- Verify mobile network behavior as well as desktop Wi-Fi.

## Interaction

Scrolling, navigation, hover effects, and section transitions should remain responsive on mid-range devices. Animation should not block links, buttons, or keyboard navigation.

## Release check

Run a production build, inspect console errors, test the landing page on mobile and desktop, and check for visible layout shifts or delayed interaction.
