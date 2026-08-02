---
name: project-landing-page-structure
description: Current Kampung Ride landing page sections, form, and headlines as of Aug 2026
metadata:
  type: project
---

Landing page order: Nav → Hero (headline + signup form + transit diagram) → Problem ("Four cars, one carpark, one destination") → HowItWorks (3 steps) → Commute (mock neighbour cards, currently referencing The Interlace) → SignupSection (waitlist form + live count + trending routes) → FAQ (3 items) → Footer.

Signup form fields: `from` (estate), `to` (destination), `email`. **Does not capture whether the user is a driver or a rider** — this is a live blind spot.

Driver headline: "You're already driving. *Make your neighbours pay for it.*"
Rider tagline direction: anti-surge angle ("Grab charges surge. Your neighbour doesn't.").

**Why:** Antoine is iterating on the page and asking for prioritized improvements. Knowing the current shape means I can suggest diffs rather than rewrites.

**How to apply:** When suggesting changes, reference the actual section names and form fields above. Component files live in `src/components/`. Related: [[project-open-questions]], [[feedback-advice-given-v1]].
