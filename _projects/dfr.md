---
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
# tags: [Systems integration, HV powertrain, CAN, FSAE]
---


## About the Car
Talia is Dartmouth Formula Racing's 2026 Formula Hybrid + Electric Entry: a dual-motor rear-wheel-drive electric car, built across the 2025 and 2026 seasons. It runs a 396 V nominal / 462 V max tractive system into two independent Cascadia PM100DZ inverters, each driving its own EMRAX 188 MV axial-flux motor through its own gearbox – so torque is commanded per rear wheel, which is what makes torque vectoring and per-wheel traction control possible. An STM32F4 Central Vehicle Controller (CVC) sits between the driver and the inverters: it reads the pedal position, runs the state machine, and sends the per-wheel torque commands to both inverters over CAN.


<!-- <figure class="fig-aside">
  <img src="/img/dfr/discharge-pcb-in-car-cropped.png" alt="">
  <figcaption>A longer explanation that sits beside the image instead of under it.</figcaption>
</figure> -->

## System Integration: getting the car 
My favorite aspects were the problem-solving and troubleshooting deep dives required to get the car driving, i.e. puzzling together the subsystems and digging deep into how things are supposed to work together. Below are a few snapshots of the interesting or memorable hardware debugging stories!

## Also, I designed a few circuits and PCBs.

<div class="duo">
  <figure><img src="/img/dfr/junctionbox_pcb/junction_box_allyn_01.JPEG" alt=""></figure>
  <figure>
    <h3>HV Junction Box PCB w Discharge Circuit and HV/GLV Interface</h3>
    <p>
    </p>
  </figure>
</div>

<!-- <aside class="note">
  <span class="note__label">What I'd do differently</span>
  <p>Short reflection — reads as maturity, not weakness.</p>
</aside> -->

<!-- <div class="dive dive--reverse">
  <figure class="dive__media"><img src="/img/dfr/junctionbox_pcb/junctionbox-pcb2.png" alt=""></figure>
  <div class="dive__text">
    <h3>HV junction-box PCB (discharge, BSPD, TSMPs)</h3>
    <p>FILL IN: the board's job. Confirm the BSPD current-sensing claim matches the
    current car revision before publishing. Say "monitored CAN traffic," not "scoped CAN."</p>
  </div>
</div> -->

<!-- <figure class="fig-aside">
  <img src="/img/dfr/dfr-tractive-system-schematic.png" alt="">
  <figcaption>A longer explanation that sits beside the image instead of under it.</figcaption>
</figure> -->

<div class="duo">
  <figure><img src="/img/dfr/ccgm_isolator_pcb/ccgm_isolator_pcb.jpg" alt=""></figure>
  <figure>
    <h3>CCGM isolator board</h3>
    <p>The CCGM isolator board is a galvanically isolated CAN gateway between the EMUS G1 control unit on the GLV side and the string of 8 CCGM modules referenced to the accumulator. It exists because the CCGM023’s datasheet isolation rating is 400 V against a 462 V pack — a rating EMUS cut from 1000 V under IEC 60664-1:2020 for spacing to the metal bottom plate. Instead of buying much more expensive higher-rated modules, I made a custom pcb to isolate power and CAN at the control-unit-to-string boundary, which works because inter-segment isolation only needs to hold segment voltage, ~63 V. It lives inside the accumulator container, in line on the internal EMUS CAN bus.
    </p>
  </figure>
</div>

