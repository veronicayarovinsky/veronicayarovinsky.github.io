---
# title: Powertrain & Electrical System Integration for Electric Formula Racecar
# title: Formula SAE electric race car
# title: Electrical Systems for a Formula SAE Electric Racecar
title: Electric Racecar Systems Integration
# number: "01"
kicker: Dartmouth Formula Racing
# summary: '<span class="hl">HV bring-up</span> and safety-system integration on an FSAE electric car.'
# summary: 'HV bring-up and safety-system integration on an FSAE electric car.'
# summary: 'Designed, debugged, and integrated the electrical systems of a student-built electric race car—from custom PCBs and CAN networks to battery management and vehicle bring-up.'
# summary: 'Designed two custom high-voltage PCBs and helped commission the electric race car through accumulator bring-up, CAN integration, and hands-on debugging of the BMS, shutdown circuit, precharge sequence, motor controllers, and safety-critical vehicle electronics.'
# summary: >
#     Resolved Powertrain integration 
#     designed HV interface hardware
#     debugged the precharge & shutdown circuits, 
#     Integrated the vehicle's high-voltage systems, validated CAN 
#     Diagnosed powertrain issues 
summary: >
    Integrated vehicle electrical systems, brought up the powertrain, validated CAN communication, and designed HV interface hardware.
# role: Electrical Engineer, Dartmouth Formula Racing
# dates: Jan 2025 – present
featured: true
order: 1
# accent: "#00C5CD"
# accent_ink: "#008688"

# accent: "#00afce"
# accent: "#22d3ee"
accent: "#67e8f9"
accent_ink: "#007393"

hero_image: /img/dfr/wheelspin_03.gif
# hero_image: /img/dfr/discharge-pcb-in-car-cropped.png
# tags: [Systems integration, HV powertrain, CAN, FSAE]
---


## Context



## CCGM Isolator Board

<div class="duo">
  <figure><img src="/img/dfr/ccgm_isolator_board_schematics_p1.jpg" alt=""><figcaption>Front</figcaption></figure>
  <figure><img src="/img/stolmate/ccgm_isolator_board_schematics_p2.jpg" alt=""><figcaption>Back</figcaption></figure>
</div>



<figure>
  <img src="/img/dfr/dfr-tractive-system-schematic.png" alt="DFR tractive-system architecture">
  <figcaption>Tractive-system architecture and where your work sits.</figcaption>
</figure>

## Architecture

FILL IN: one short paragraph framing the safety + power chain
(shutdown → precharge → IMD → BSPD → discharge), then the diagram.

<div class="dive">
  <div class="dive__text">
    <h3>Shutdown circuit + precharge</h3>
    <p>FILL IN: what you reviewed/built, which FSAE rule it satisfies, what you verified.</p>
  </div>
  <figure class="dive__media"><img src="/img/PLACEHOLDER.png" alt=""></figure>
</div>

<div class="dive dive--reverse">
  <figure class="dive__media"><img src="/img/dfr/dfr-schematic-export.png" alt=""></figure>
  <div class="dive__text">
    <h3>HV junction-box PCB (discharge, BSPD, TSMPs)</h3>
    <p>FILL IN: the board's job. Confirm the BSPD current-sensing claim matches the
    current car revision before publishing. Say "monitored CAN traffic," not "scoped CAN."</p>
  </div>
</div>

<div class="dive">
  <div class="dive__text">
    <h3>CAN monitoring + motor/inverter interfaces</h3>
    <p>FILL IN: "motor/inverter interfaces" (not internals). What you integrated and validated.</p>
  </div>
  <figure class="dive__media"><img src="/img/PLACEHOLDER.png" alt=""></figure>
</div>

<aside class="story">
  <h3>Debugging: the false IMD fault</h3>
  <p>FILL IN (80–120 words): symptom → investigation → root cause. The triple-cause false
  IMD fault. Show the reasoning, not just the fix.</p>
</aside>

## Gallery

<div class="gallery">
  <figure><img src="/img/dfr/dfr-3D-front.png" alt=""><figcaption>KiCad 3D render (front)</figcaption></figure>
  <figure><img src="/img/dfr/dfr-3D-back.png" alt=""><figcaption>KiCad 3D render (back)</figcaption></figure>
  <figure><img src="/img/dfr/dfr-pcb1.png" alt=""><figcaption>Soldered board</figcaption></figure>
  <figure><img src="/img/dfr/discharge-pcb-in-car-cropped.png" alt=""><figcaption>Integrated in the car</figcaption></figure>
</div>

<p class="lead">One or two sentences that frame the whole project.</p>

<figure class="fig-wide">
  <img src="/img/dfr/dfr-schematic-export.png" alt="">
  <figcaption>Full board schematic.</figcaption>
</figure>

<div class="duo">
  <figure><img src="/img/stolmate/stolmate-pcb-front.jpeg" alt=""><figcaption>Front</figcaption></figure>
  <figure><img src="/img/stolmate/stolmate-pcb-back.jpeg" alt=""><figcaption>Back</figcaption></figure>
</div>

<div class="trio">
  <figure><img src="/img/stolmate/stolmate-pcb-front.jpeg" alt=""><figcaption>Front</figcaption></figure>
  <figure><img src="/img/stolmate/stolmate-pcb-back.jpeg" alt=""><figcaption>Back</figcaption></figure>
  <figure>
    <p>Sample text here
    </p>
  </figure>
</div>

<div class="stats">
  <div class="stat"><span class="stat__value">96.2%</span><span class="stat__label">Efficiency</span></div>
  <div class="stat"><span class="stat__value">3 kW</span><span class="stat__label">Output power</span></div>
  <div class="stat"><span class="stat__value">4</span><span class="stat__label">PCB layers</span></div>
</div>

<aside class="note">
  <span class="note__label">What I'd do differently</span>
  <p>Short reflection — reads as maturity, not weakness.</p>
</aside>

<figure class="fig-aside">
  <img src="/img/dfr/discharge-pcb-in-car-cropped.png" alt="">
  <figcaption>A longer explanation that sits beside the image instead of under it.</figcaption>
</figure>



<ol class="steps">
  <li>Bench-tested the discharge path in isolation.</li>
  <li>Brought up the board on the car with GLV only.</li>
  <li>Traced the false IMD trip to three stacked causes.</li>
</ol>
