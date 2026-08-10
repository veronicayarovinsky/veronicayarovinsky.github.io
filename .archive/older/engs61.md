---
title: Heterodyne AM Radio Receiver - ENGS 61
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# Heterodyne AM Radio Receiver - ENGS 61

I designed, simulated, and built a transistor-level radio receiver circuit to demodulate and amplify an AM radio wave into a pair of headphones. I completed this project in 2 weeks as part of the course ENGS 61: Intermediate Electrical Circuits. The measured results differed from the expected results – as expected, since I was testing a medium frequency circuit using a breadboarded implementation (per project instructions).


the design should be able to drive the demodulated signal at an ‘audible’ power level into a pair of 32 ohm headphones



<h3>Schematic of Final Circuit</h3>
<div>
    <img src="img/engs61/engs61-schematic-handdrawn.png" style="width:100%">
</div>
<br>

<h3>Annotated photo of breadboard</h3>
<div>
    <img src="img/engs61/engs61-breadboard-annotated.png" style="width:100%">
</div>
<br>

<h3>Measured output of breadboarded circuit</h3>
<div>
    <img src="img/engs61/engs61-scope.png" style="width:100%">
</div>
<p>gain of breadboarded circuit = 285 mV / 6 mV = 47.5 V/V</p>
<br>

<h3>Comparison of LTSpice sim to measurement</h3>
<p>reciever input: 1.4 MHz carrier with 1 kHz audio tone at modulation depth = 40%</p>
<div>
    <img src="img/engs61/engs61-ltspice.png" style="width:100%">
</div>
<br>


__Overall voltage gain of the circuit__
LTSpice: 46.03 V/V
Measured: 47.5 V/V



<br>

[**< back to projects page**](./)
