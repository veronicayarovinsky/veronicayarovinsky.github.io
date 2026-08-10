---
# title: Aircraft Takeoff & Landing Performance Sensor Module
# title: Embedded Sensing Module for Light Aircraft
title: Aircraft Telemetry & Sensing Module
# number: "03"
# kicker: PCBA + bring-up
kicker: STOLmate
# summary: 'Ground-up redesign of a prototype into a <span class="hl">manufacturable PCBA</span>, with firmware.'
summary: >
    Redesigned the embedded sensing architecture for a battery-powered aircraft-mounted module that measures takeoff and landing performance and wirelessly transmits telemetry to a companion app.
# role: Hardware + firmware (capstone)
# dates: Oct 2024 – Apr 2025
featured: true
order: 3
# accent: "#00C5CD"
# accent_ink: "#008688"

accent: "#67e8f9"
accent_ink: "#007393"

hero_image: /img/stolmate/stolmate_pcb_final_front.jpg
# hero_image:  # add /img/... when you have a photo (placeholder card shows until then)
# tags: [STM32WB, BLE, Firmware]
---


## Context

Battery-powered embedded sensing module for light aircraft that measures aircraft-to-ground distance and wirelessly transmits flight telemetry for takeoff and landing performance analysis.

FILL IN (60–100 words): what STOLmate measures, and that you led the redesign from a
dev-board prototype to a custom manufacturable PCBA.

<div class="dive">
  <div class="dive__text">
    <h3>Requirements + architecture</h3>
    <p>FILL IN: functional requirements, block architecture.</p>
  </div>
  <figure class="dive__media"><img src="/img/stolmate/stolmate-blockdiagram-pcb-architecture.png" alt=""></figure>
</div>

<div class="dive dive--reverse">
  <figure class="dive__media"><img src="/img/stolmate/stolmate-pcb-stackup.png" alt=""></figure>
  <div class="dive__text">
    <h3>4-layer impedance-controlled design + STM32WB</h3>
    <p>FILL IN: layer stack, migration to STM32WB, layout considerations.</p>
  </div>
</div>

<aside class="story">
  <h3>Drone-based BLE testing</h3>
  <p>FILL IN (80–120 words): how you replicated flight profiles to iterate hardware + firmware.</p>
</aside>

## Gallery

<div class="gallery">
  <figure><img src="/img/stolmate/stolmate-pcb-front.jpeg" alt=""><figcaption>Manufactured board (front)</figcaption></figure>
  <figure><img src="/img/stolmate/stolmate-pcb-back.jpeg" alt=""><figcaption>Manufactured board (back)</figcaption></figure>
  <figure><img src="/img/stolmate/stolmate-3D-mechanical.png" alt=""><figcaption>Mechanical fit</figcaption></figure>
</div>