---
title: Class-D Audio Amplifier - ENGS 125
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# Class-D Audio Amplifier

The goal of this project was to design a powertrain for a Class-D audio amplifier circuit capable of driving a 20 kHz signal into a 4 Ω load from a 12 V supply.

I optimized the converter design for efficiency and tracking capability, simulated the circuit in LTSpice, completed the schematic and layout in Altium, then soldered and tested the board.

I completed this project in 3.5 weeks (including board turn time) as part of the course ENGS 125: Power Electronics and Electromechanical Energy Conversion. The design exceeded all specifications required.

<br>

__LTSpice Simulations__

<div>
    <figure>
        <img src="img/engs125/engs125-ltspice-schematic.png" alt="Soldered Board" style="width:50%">
        <figcaption>LTSpice Schematic</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-ltspice-wavforms-VI.png" alt="Soldered Board" style="width:50%">
        <figcaption>Voltage & current ripple waveforms from LTSpice Simulation</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-ltspice-waveforms-tracking.png" alt="Soldered Board" style="width:50%">
        <figcaption>Verifying tracking capabilities in LTSpice</figcaption>
    </figure>
</div>

<br>

__Board schematics and layout, completed in Altium__

<div>
    <figure>
        <img src="img/engs125/engs125-schematic.png" alt="Soldered Board" style="width:50%">
        <figcaption>PCB Schematic in Altium</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-layout.png" alt="Soldered Board" style="width:50%">
        <figcaption>PCB Layout in Altium</figcaption>
    </figure>
</div>

<br>

__Fabricated and Populated Board__

<div>
    <figure>
        <img src="img/engs125/engs125-pcb.png" alt="Soldered Board" style="width:70%">
        <figcaption>Populated Board (soldered by hand)</figcaption>
    </figure>
</div>

<br>

__Testing & Characterizing the Design__

<div>
    <figure>
        <img src="img/engs125/engs125-performance-D50-Vin12V-Rload4Ohms.png" alt="Soldered Board" style="width:50%">
        <figcaption>Design Performance: converter running at D=50%, VIN=12V, Rload = 4Ω</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-scope-waveforms-D50-12V-4Ohm.png" alt="Soldered Board" style="width:50%">
        <figcaption>Waveforms with converter running at D=50%, VIN=12V, Rload = 4Ω</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-amplifier-1Vpp-sinewave-1kHz.png" alt="Soldered Board" style="width:50%">
        <figcaption>Amplifier providing Vout=1Vpp sine wave at 1 kHz</figcaption>
    </figure>
    <figure>
        <img src="img/engs125/engs125-scope-deadtimeHL.png" alt="Soldered Board" style="width:50%">
        <figcaption>Deatime (high to low) of converter running at D=50%, VIN=12V, Rload = 4Ω</figcaption>
    </figure>
</div>


<br>

[**< back to projects page**](./)
