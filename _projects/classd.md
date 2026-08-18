---
title: Class-D Audio Amplifier
kicker: Power electronics
card_summary: >
  I designed, simulated, built, and tested a Class-D amplifier using a buck converter topology 
  to deliver high-efficiency audio output to a 4 Ω speaker. The design achieved over 
  96% peak efficiency and clean tracking of a sinusoidal audio input from 100 Hz to 20 kHz.
summary: >
  I designed, simulated, built, and tested a Class-D amplifier using a buck converter topology 
  to deliver high-efficiency audio output to a 4 Ω speaker. The design achieved over 
  96% peak efficiency and clean tracking of a sinusoidal audio input from 100 Hz to 20 kHz.
# summary: >
#   A buck-converter powertrain for a Class-D amp — <span class="hl">~96% efficiency</span>, 
#   from LTspice to a hand-soldered, bench-tested board.'
# role: Power Electronics course project (ENGS 125)
# dates: Oct – Nov 2024
featured: false
accent: "#12C2A0"
accent_ink: "#0A7D66"
card_image: /img/engs125/engs125-pcb.png
hero_image: /img/engs125/engs125-pcb.png
# tags: [Power electronics, LTspice, Altium, Buck converter]
---

The goal: a power stage for a Class-D audio amplifier that could drive a 20 kHz signal into a
4 Ω load from a 12 V supply, optimized for efficiency and tracking. I simulated the
buck-converter design in LTspice, captured the schematic and laid out a low-inductance board in
Altium, hand-soldered it, and characterized it on the bench. Start to finish — including board
turn time — it took about 3.5 weeks, and the final board exceeded every spec.

## Simulation & optimization (LTspice)

I sized the converter for low loss and verified its tracking behavior before committing to a
board.

<div class="gallery">
  <figure><img src="/img/engs125/engs125-ltspice-schematic.png" alt=""><figcaption>LTspice schematic</figcaption></figure>
  <figure><img src="/img/engs125/engs125-ltspice-wavforms-VI.png" alt=""><figcaption>Voltage &amp; current ripple</figcaption></figure>
  <figure><img src="/img/engs125/engs125-ltspice-waveforms-tracking.png" alt=""><figcaption>Tracking verification</figcaption></figure>
</div>

## Board (Altium, hand-soldered)

<div class="gallery">
  <figure><img src="/img/engs125/engs125-layout.png" alt=""><figcaption>Low-inductance PCB layout</figcaption></figure>
  <figure><img src="/img/engs125/engs125-pcb.png" alt=""><figcaption>Populated board (hand-soldered)</figcaption></figure>
</div>

## Measured performance

At D = 50%, 12 V in, 4 Ω load:

- Efficiency: ~96%
- DC output: 5.94 V
- Output ripple: ~161 mV
- Dead-time: 25 ns (L→H), 10 ns (H→L)

<!-- verify these numbers against your lab notes before publishing -->

<div class="gallery">
  <figure><img src="/img/engs125/engs125-scope-waveforms-D50-12V-4Ohm.png" alt=""><figcaption>Switching-node &amp; output waveforms</figcaption></figure>
  <figure><img src="/img/engs125/engs125-amplifier-1Vpp-sinewave-1kHz.png" alt=""><figcaption>Amplifier: 1 Vpp sine at 1 kHz</figcaption></figure>
</div>