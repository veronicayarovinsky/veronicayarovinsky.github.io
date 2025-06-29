---
title: High Power Discharge PCB – Dartmouth Formula Racing
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# High Power Discharge PCB – Dartmouth Formula Racing

I designed this PCB for the Dartmouth Formula Racing (DFR) electric car to connect the high-voltage and low-voltage subsystems internal and external to the car's junction box and to meet FSAE rules for tractive system safety.

The purpose of this PCB was to:
1. safely discharge the car’s high-voltage (TS) bus when the system is shut down or tripped by safety circuits.
2. connect the high-voltage and low-voltage subsystems internal and external to the car's junction box

Purpose: safely discharge the HV bus when car is powered down or tripped by safety systems
→ makes sure that system is below 60V within 5 seconds

Designed in about a week 

FSAE rules compliance was key
Both HV (480 V, car’s tractive system) and GLV for car’s controls
Not really size constrained
Board was designed before the junction box itself was designed


Basically the board connects everything in the car’s junction box including:
* Energy Meter Receptacle
* Bspd current sensor
* Discharge resistor
* HVD (high voltage disconnect) connector: Hirose EM30MSD-A(06)
* DCDC (RSDH-300-12)
* Tractive system measuring points
* Ready to move light (RTML / TSAL)



<br>

__Board schematics and layout in KiCad__

<div class="row">
  <div class="column">
    <img src="img/dfr/dfr-schematic.png" alt="dfr-schematic" style="width:120%">
  </div>
  <div class="column">
    <img src="img/dfr/dfr-layout-front.png" alt="dfr-layout-front" style="width:70%">
  </div>
</div>
<br>


<!-- <div>
    <img src="img/dfr/dfr-schematic.png" alt="dfr-schematic" style="width:50%">
    <img src="img/dfr/dfr-layout-front.png" alt="dfr-layout-front" style="width:50%">
</div> -->


__3D Render of Layout in KiCad__

<div class="row">
  <div class="column">
    <img src="img/dfr/dfr-3D-front.png" alt="dfr-3D-front" style="width:100%">
  </div>
  <div class="column">
    <img src="img/dfr/dfr-3D-back.png" alt="dfr-3D-back" style="width:98%">
  </div>
</div>
<br>

<!-- <div class="row">
  <div class="column">
    <p>Soldered PCB</p>
    <img src="img/dfr/dfr-pcb1.png" alt="dfr-pcb1" style="width:100%">
  </div>
  <div class="column">
    <p>In the car</p>
    <img src="img/dfr/discharge-pcb-in-car-cropped.png" alt="discharge-pcb-in-car-cropped" style="width:100%">
  </div>
</div>
<br> -->

__Soldered PCB__

<div>
    <img src="img/dfr/dfr-pcb1.png" alt="dfr-pcb1" style="width:60%">
</div>
<br>

__PCB integrated into the car__

<div>
    <img src="img/dfr/discharge-pcb-in-car-cropped.png" alt="discharge-pcb-in-car-cropped" style="width:60%">
</div>

<br>

[**< back to projects page**](./)
