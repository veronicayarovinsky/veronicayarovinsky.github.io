---
# title: Aircraft Takeoff & Landing Performance Sensor Module
# title: Embedded Sensing Module for Light Aircraft
title: Aircraft Telemetry & Sensing Module
# number: "03"
# kicker: PCBA + bring-up
kicker: STOLmate
card_summary: >
  Redesigned the embedded sensing architecture for a battery-powered aircraft-mounted module that measures takeoff and landing performance and wirelessly transmits telemetry to a companion app.
summary: >
  STOLmate measures aircraft-to-ground distance during takeoff and landing and transmits performance data to a mobile app. I inherited a functional v1 prototype — SparkFun dev boards wired together around an Apollo3 running the Arduino framework — and led its redesign into a custom manufacturable PCBA.
# role: Hardware + firmware (capstone)
# dates: Oct 2024 – Apr 2025
featured: true
order: 3
# accent: "#00C5CD"
# accent_ink: "#008688"
accent: "#67e8f9"
accent_ink: "#007393"
card_image: /img/stolmate/hardware/stolmate_pcb_final_front.jpg
hero_image: /img/stolmate/hardware/stolmate_pcb_final_front.jpg
# tags: [STM32WB, BLE, Firmware]
---


<!-- ## Context -->
<!-- Battery-powered embedded sensing module for light aircraft that measures aircraft-to-ground distance and wirelessly transmits flight telemetry for takeoff and landing performance analysis. -->


<div class="gallery">
  <figure>
    <div>V1 had four problems that our project sponsor needed solved:</div>
    <ul>
      <li>Hand assembly made each unit slow to build.</li>
      <li>Off-the-shelf hardware cost exceeded the desired material cost per unit.</li>
      <li>BLE dropped often enough that some takeoff and landing runs returned no usable data.</li>
      <li>The Garmin LIDAR-Lite v4 returned inconsistent, inaccurate readings at roughly 33 inches above ground — close to the height at which the module actually mounts under the aircraft.</li>
    </ul>
    <div>Additionally, the sponsor wanted to add battery-level reporting functionality and explore alternative parts for the device's power switch and status LEDs.</div>
  </figure>
  <figure>
    <img src="/img/stolmate/hardware/stolmate-hardware-v1.JPEG" alt="">
    <figcaption>inhereted v1 prototype</figcaption>
  </figure>
  <figure>
    <img src="/img/stolmate/diagrams-renderings/stolemate-stol-measurements-diagram.png" alt="">
    <figcaption>
    Short Take-Off and Landing performance measures an aircraft’s ability to minimize the runway distance required for takeoff and landing.
    </figcaption>
    </figure>
</div>

<br>
Moving to a custom board freed component selection from dev-board compatibility constraints, reduced hand-assembly time and complexity, and gave the sponsor a platform for future hardware revisions.

<!-- I migrated the design to an STM32WB55RG. The toolchain was more mature and removed the Arduino-framework dependency, and the dual-core architecture dedicates a core to the radio, targeting the BLE reliability problem directly. Moving to a custom board also freed component selection from dev-board availability and compatibility constraints, giving the sponsor a platform for future hardware revisions. -->

<br>
<h2>Designing the PCB</h2>

<div class="quad">
  <figure>
    <div>PCB Functional Requirements:</div>
    <ul>
      <li>Garmin Lidar compatibility</li>
      <li>Incorporates Accelerometer</li>
      <li>Battery-powered</li>
      <li>Tracks battery charge %</li>
      <li>USB-C charging</li>
      <li>Bluetooth data transmission functionality</li>
      <li>LED indicators for power & charging</li>
      <li>Programmable through SWD interface</li>
    </ul>
  </figure>
  <figure>
    <div>Other Considerations:</div>
    <ul>
      <li>Mechanical Constraints → fits within constraints of existing casing design</li>
      <li>DFM / DFA → parts available, standard stackup, exceeds spacing rules</li>
      <li>Cost → minimized part count, reduced complexity</li>
      <li>Regulatory Compliance</li>
    </ul>
  </figure>
  <figure><img src="/img/stolmate/hardware/stolmate-pcb-cropped.png" alt=""><figcaption></figcaption></figure>
  <figure><img src="/img/stolmate/diagrams-renderings/stolmate-3D-isometric.png" alt=""><figcaption></figcaption></figure>
  <!-- <figure><img src="/img/stolmate/hardware/stolmate_pcb_final_front.jpg" alt=""><figcaption></figcaption></figure> -->
</div>


<figure class="fig-aside">
  <img src="/img/stolmate/diagrams-renderings/stolmate-blockdiagram-pcb-architecture.png" alt="">
  <figcaption>
    <div>
    Block Diagram of PCB Architecture.
    <p>
    I chose to migrate the design to an STM32WB55RG (in place of Apollo 3) because the dual-core architecture of the STM32WB55RG dedicates a core to the radio. This decision targeted the BLE reliability problem.
    </p>
    </div>
  </figcaption>
</figure>

<!-- After defining the requirements, I selected selecting -->

<br>
<br>
<h3>Schematics</h3>
<div class="trio">
  <figure><img src="/img/stolmate/schematics/stolmate_schematics_power.jpg" alt=""><figcaption>Power</figcaption></figure>
  <figure><img src="/img/stolmate/schematics/stolmate_schematics_mcu.jpg" alt=""><figcaption>MCU</figcaption></figure>
  <figure><img src="/img/stolmate/schematics/stolmate_schematics_peripherals.jpg" alt=""><figcaption>Peripherals</figcaption></figure>
</div>

<br>
<br>
<h3>PCB Stackup</h3>
<div>
<!-- <figure> -->
  <img src="/img/stolmate/diagrams-renderings/stolmate-pcb-stackup.png" alt="" width="80%">
<!-- </figure> -->
</div>

<br>
<br>
<h3>Layout Methodology</h3>
<div class="trio">
  <figure><img src="/img/stolmate/diagrams-renderings/stolmate-pcb-signal-layer.png" alt=""><figcaption>Signal Layer</figcaption></figure>
  <figure><img src="/img/stolmate/diagrams-renderings/stolmate-pcb-power-plane.png" alt=""><figcaption>Power Plane</figcaption></figure>
  <figure><img src="/img/stolmate/diagrams-renderings/stolmate-layout-methodology.png" alt=""><figcaption>Separating Analog & Digital</figcaption></figure>
</div>

<br>
<br>
<h3>Manufactured & Soldered PCB</h3>
<div class="duo">
  <figure><img src="/img/stolmate/hardware/stolmate_pcb_final_front.jpg" alt=""><figcaption></figcaption></figure>
  <figure><img src="/img/stolmate/hardware/stolmate_pcb_final_back.jpg" alt=""><figcaption></figcaption></figure>
</div>



<br>
<br>
<h2>Evaluating Sensor Alternatives</h2>
<div class="quad">
  <figure><img src="/img/stolmate/plane/plane_inside_imu_01.jpg" alt=""><figcaption></figcaption></figure>
  <figure><img src="/img/stolmate/plane/plane_inside_phone_01.jpg" alt=""><figcaption></figcaption></figure>
  <figure><img src="/img/stolmate/plane/plane_outside_computer_01.jpg" alt=""><figcaption></figcaption></figure>
  <figure>
    <p>
      In parallel, I evaluated sensing alternatives — ultrasonic, radar, infrared, and other ToF modules — of which only the Digilent Pmod ToF showed promise.
    </p>
    <p>
      I also tested whether IMU data alone could detect takeoff and landing by collecting and processing data from field tests. 
      The results were promising but not conclusive enough to replace distance sensing, so I placed the IMU on the board for further testing and to serve as a downloadable data-collection feature for the product's users.
    </p>
  </figure>
</div>

