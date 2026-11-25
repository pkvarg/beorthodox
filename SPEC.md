# SPEC: "Who is the church?" 3D scroll scene

A short, light-hearted 3D scene on the Be Orthodox home page. A heavy stone
building labelled "Institution" wobbles, cracks and falls apart as you scroll,
and out of it pop small round people who gather in a circle around a warm light.
It says the site's main point in one picture: **the church is people, not a
building.** It should make visitors smile, and make them want a website that
does something like this.

Three-word pitch: **scroll, crack, gather.**

## Assumptions

- **Placement:** a pinned section on the home page, between the gold hero and
  "Everyone wants to be right". The hero, articles and design stay as they are.
- **Humour stays kind.** The joke is on a generic building and its paperwork,
  never on a named church, person or practice. No crosses, mitres or vestments.
- **No credit line:** the last scene carries only the button; the pictusweb.sk
  credit was removed on request.
- **Names:** Anna, Tom and Maria appear as name tags: simple, made-up first
  names.
- **Branch:** `feature/3d-church-scene`. Nothing is deployed until it is merged.

## 1. Tech stack

| Choice | Why |
|---|---|
| Astro (existing) | The site is already Astro; the scene is one component plus one client script. |
| Three.js | Renders the building, pieces, people and light; small, no React needed. |
| GSAP + ScrollTrigger | One timeline scrubbed to scroll, so every move rewinds exactly. |
| Lenis | Smooth scroll across the page, synced to ScrollTrigger. |
| No Vite config changes | Astro already bundles with Vite; libraries come from npm. |

All three libraries load only on the home page, from the scene's own script.

## 2. Scroll timeline

The section is pinned for about 5 viewport heights. Percentages are progress
through that pinned section.

| # | Scroll | Camera | 3D objects | Text (left on desktop, bottom on phone) | Into next scene |
|---|---|---|---|---|---|
| 1 | 0–15% | Front, slightly below, slow drift right | One heavy grey stone building with gold columns, a pediment and a brass plate reading "INSTITUTION". Rotates a few degrees. A stack of paper "Proclamations" sits on the steps. | **Where is the church?** / Many people look for it in a building. | Building starts to shiver. |
| 2 | 15–35% | Small push in | Building wobbles (scrubbed shake, growing). Cracks (thin gold lines) spread up the walls. Papers fly off the stack one by one and flutter away. The brass plate tilts and swings on one screw. | **A building never prayed with anyone.** / It can make announcements. It cannot sit with you. | Plate falls off. Building jolts. |
| 3 | 35–55% | Pull back to wide | Building splits into ~12 blocks that tumble apart and sink below the floor. Out of the middle pop ~18 small round people (body + head, dot eyes), bouncing up in a staggered wave, blinking. | **The church is people.** / Living people, born of God. | People start walking toward the centre. |
| 4 | 55–75% | Slow orbit to three-quarter view | People wander inward. Three of them step forward with floating name tags: Anna (holding a teacup), Tom (holding a book), Maria (holding a Bible). Each waves when its tag appears. | **Anna next door. Tom at work. Maria on Thursdays.** / People you pray with. That is your church. | A warm light rises in the centre. |
| 5 | 75–92% | Rises above, looking down at 45° | Everyone forms a ring around a soft warm light and joins hands. The gap closes, then one latecomer runs in from the edge and squeezes into the circle, pushing the others apart a little. Everyone does one small hop. | **One Body, joined to the Head.** / Christ is the Head. We are his body, in every city. | Camera keeps rising. |
| 6 | 92–100% | Top-down, ring fills the frame | The ring rotates slowly; the light pulses once. | Button: **Read: What is the church?** → `/library/who-are-we/what-is-the-church` | Pin releases into the next section. |

## 3. Reversal behaviour

- Everything is a single GSAP timeline with `scrub`, so scrolling up plays it
  backwards: people walk back out, bounce down into the building, blocks fly
  back together, cracks retract, papers return to the stack, the plate re-hangs.
- No `onEnter` one-shot animations. Positions are set from timeline progress
  only, so no element depends on having played forward first.
- Blinking and the idle bob are time-based and run in both directions; they do
  not change positions that the timeline owns.
- Text panels fade by progress, so each panel is visible only within its
  scene's range in both directions.

## 4. Sections and final copy

Scene 1. Headline: "Where is the church?" Sub: "Many people look for it in a
building."

Scene 2. Headline: "A building never prayed with anyone." Sub: "It can make
announcements. It cannot sit with you."

Scene 3. Headline: "The church is people." Sub: "Living people, born of God."

Scene 4. Headline: "Anna next door. Tom at work. Maria on Thursdays."
Sub: "People you pray with. That is your church."

Scene 5. Headline: "One Body, joined to the Head." Sub: "Christ is the Head. We
are his body, in every city."

Scene 6. Button: "Read: What is the church?"

3D labels: "INSTITUTION" (brass plate), "Proclamations" (paper stack), name
tags "Anna", "Tom", "Maria".

## 5. Performance budget

- 60 fps on a modern laptop; smooth on a mid-range phone.
- Draw calls: at most 25 per frame in every scene.
- People: 2 `InstancedMesh` (bodies, heads) for all figures + 3 tag sprites.
- Building pieces: 1 `InstancedMesh` for blocks + 1 mesh for the roof.
- Papers: 1 `InstancedMesh`, 12 instances.
- No particles over 300. No post-processing on phones.
- `devicePixelRatio` capped at 2 (1.5 on phones). Rendering stops when the
  section is off screen or the tab is hidden.
- JavaScript for the scene loads only on the home page and stays under 200 KB
  gzipped.

## 6. Mobile plan and fallback

- Phones: same six scenes, 12 people instead of 18, text panel at the bottom of
  the screen over a dark fade, camera pulled back so the ring fits.
- `prefers-reduced-motion`: no pin and no scrubbing. The section shows the
  final ring as a still render with all six text blocks stacked as normal text.
- No WebGL: the same stacked text with a simple drawn picture (SVG) of people in
  a ring. The page never shows an empty box.

## 7. Asset list

| Asset | Source | License |
|---|---|---|
| Stone building, columns, pediment | Procedural (boxes, cylinders) | Own work |
| Building blocks after the split | Procedural | Own work |
| People (capsule body, sphere head, dot eyes) | Procedural | Own work |
| Teacup, book, Bible props | Procedural (cylinder, boxes) | Own work |
| Paper sheets | Procedural (planes) | Own work |
| Labels and name tags | Canvas text textures using the site's own Cinzel font | Cinzel: SIL Open Font License |
| Warm light | Point light + soft sprite | Own work |
| Fallback picture | Hand-written SVG | Own work |

No downloaded models, textures or sounds.
