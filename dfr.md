---
title: High Power Discharge PCB – Dartmouth Formula Racing
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# High Power Discharge PCB – Dartmouth Formula Racing

I designed this PCB for the Dartmouth Formula Racing (DFR) electric car to connect the high-voltage and low-voltage subsystems internal and external to the car's junction box and to meet FSAE rules for tractive system safety. I completed this design in less than one week; due to time constraints, we had to order the board before the junction box itself was designed, so the board's layout dictated the mechanical constraints of the junction box itself.

<br>
<div class="row">
  <div class="column">
    <p><b>The purpose of this PCB was to:</b></p>
    <ol>
        <li>safely discharge the car’s high-voltage (TS) bus when the system is shut down or tripped by safety circuits, in compliance with FSAE rules.</li>
        <li>connect the HV (480 V, car’s tractive system) and GLV (controls) subsystems internal and external to the car's junction box.</li>
    </ol>
    <p>A diagram of the car's tractive system is shown to the right, indicating the functional placement of this PCB.</p>
  </div>
  <div class="column">
    <img src="img/dfr/dfr-tractive-system-schematic.png" style="width:100%">
  </div>
</div>
<br>

<!-- The purpose of this PCB was to:
1. safely discharge the car’s high-voltage (TS) bus when the system is shut down or tripped by safety circuits, in compliance with FSAE rules.
2. connect the HV (480 V, car’s tractive system) and GLV (controls) subsystems internal and external to the car's junction box.

A diagram of the car's tractive system is shown to the right, indicating the functional placement of this pcb. -->


<br>
<h3>Board Schematic & Layout in KiCad</h3>
<div>
  <img src="img/dfr/dfr-schematic-export.png" alt="dfr-schematic" style="width:60%">
</div>
<br>
<div class="row">
  <div class="column">
  <br>
    <p>The board incorporates or connects:</p>
    <ul>
      <li>Energy Meter Receptacle</li>
      <li>Bspd current sensor</li>
      <li>Discharge resistor</li>
      <li>HVD (high voltage disconnect) connector: Hirose EM30MSD-A(06)</li>
      <li>DCDC Converter(RSDH-300-12)</li>
      <li>Tractive system measuring points</li>
      <li>Ready to move light (RTML / TSAL)</li>
    </ul>
  </div>
  <div class="column">
    <img src="img/dfr/dfr-layout-front.png" alt="dfr-layout-front" style="width:100%">
</div>
</div>
<br>


<h3>3D Render of Layout in KiCad</h3>
<div class="row">
  <div class="column">
    <img src="img/dfr/dfr-3D-front.png" alt="dfr-3D-front" style="width:100%">
  </div>
  <div class="column">
    <img src="img/dfr/dfr-3D-back.png" alt="dfr-3D-back" style="width:98%">
  </div>
</div>
<br>


<h3>Soldered PCB</h3>
<div>
    <img src="img/dfr/dfr-pcb1.png" alt="dfr-pcb1" style="width:60%">
</div>
<br>

<h3>PCB integrated into the car</h3>
<div>
    <img src="img/dfr/discharge-pcb-in-car-cropped.png" alt="discharge-pcb-in-car-cropped" style="width:60%">
</div>

<br>

[**< back to projects page**](./)
