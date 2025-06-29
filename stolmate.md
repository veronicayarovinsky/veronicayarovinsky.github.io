---
title: PCBA for Airplane Takeoff & Landing Metrics - STOLmate
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# PCBA for Airplane Takeoff & Landing Metrics - STOLmate


I designed a custom microcontroller-based PCB – integrating a TOF sensor interface, wireless data transmission, and battery charging – based on the previous generation development board-based prototype. I developed embedded firmware, then programmed and validated performance of the PCB. 

This project was part of my work for my engineering capstone project. I focused on the hardware design aspects of the project, and my contributions to the project involved:
* PCB design (solely responsible)
* firmware development
* sensor & accelerometer testing to inform future hardware development 

<br>
<h3>Background</h3>

<div class="row">
  <div class="column">
    <p><b>Short Take-Off and Landing</b> performance measures an aircraft’s ability to minimize the runway distance required for takeoff and landing. This diagram illustrates the 3 STOL measurements reported to the user:</p>
    <ul>
        <li>takeoff ground roll</li>
        <li>landing ground roll</li>
        <li>overshoot</li>
    </ul>
  </div>
  <div class="column">
    <img src="img/stolmate/stolemate-stol-measurements-diagram.png" alt="stolemate-stol-measurements-diagram" style="width:100%">
  </div>
</div>
<br>


STOLmate is the first commercially-available device to enable pilots to train for STOL competitions by determining their takeoff and landing performance independently, and STOLmate 2.0 (what I worked on) enhances the features of the pre-existing model.

----------

<h3>PCB Functional Requirements</h3>

* Garmin Lidar compatibility
* Incorporates Accelerometer
* Bluetooth functionality
* LED indicators for power & charging
* Battery-powered
* Tracks battery charge %
* USB-C charging
* Bluetooth data transmission functionality
* Fits within constraints of existing casing design
* Minimizes part count

<p><b>Other Considerations</b></p>
<ul>
    <li>Mechanical Constraints</li>
    <li>DFM / DFA</li>
    <li>Regulatory Compliance</li>
    <li>Cost</li>
</ul>

<h3>Block Diagram of PCB Architecture</h3>
<p>The diagram below shows the functional blocks of the design.</p>

<div>
    <img src="img/stolmate/stolmate-blockdiagram-pcb-architecture.png" alt="Block Diagram of PCB Architecture" style="width:100%">
</div>
<br>


<h3>The PCB is a 4-layer impedance-controlled design</h3>
<div>
    <img src="img/stolmate/stolmate-pcb-stackup.png" alt="stolmate-pcb-stackup" style="width:100%">
</div>

<div class="row">
  <div class="column">
    <h4>Signal Layer</h4>
    <img src="img/stolmate/stolmate-pcb-signal-layer.png" alt="stolmate-pcb-signal-layer" style="width:68%">
  </div>
  <div class="column">
    <h4>Power Plane</h4>
    <img src="img/stolmate/stolmate-pcb-power-plane.png" alt="stolmate-pcb-power-plane" style="width:100%">
  </div>
</div>
<br>

<div class="row">
  <div class="column">
    <h3>PCB Layout & Routing Considerations</h3>
    <ul>
        <li>EMI</li>
        <li>Noise</li>
        <li>Crosstalk</li>
    </ul>
    <ul>
        <li>Separation of analog & digital signals</li>
        <li>High-frequency signals</li>
        <li>High-speed signal routing</li>
    </ul>
  </div>
  <div class="column">
    <img src="img/stolmate/stolmate-layout-methodology.png" alt="stolmate-layout-methodology" style="width:60%">
  </div>
</div>
<br>


<h3>Mechanical constraints</h3>
<p>Board shape & connector placement determined by mechanical constraints</p>
<div>
    <img src="img/stolmate/stolmate-3D-mechanical.png" alt="stolmate-3D-mechanical" style="width:100%">
</div>
<br>


__PCBA recieved from the manufacturer (JLCPCB)__

<div class="row">
  <div class="column">
    <img src="img/stolmate/stolmate-pcb-front.jpeg" alt="stolmate-pcb-front" style="width:92%">
  </div>
  <div class="column">
    <img src="img/stolmate/stolmate-pcb-back.jpeg" alt="stolmate-pcb-back" style="width:100%">
  </div>
</div>
<br>



<br>

[**< back to projects page**](./)
