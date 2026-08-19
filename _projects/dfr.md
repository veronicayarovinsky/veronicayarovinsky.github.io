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
card_summary: >
    Integrated vehicle electrical systems, brought up the powertrain, 
    validated CAN communication, and designed HV interface hardware.
summary: >
    Sometimes engineering means designing circuits or pinning connectors. Other times it means sitting on the floor of a garage at midnight with a CAN logger and 100+ pages of documentation, wondering why the car refuses to move. Formula Racing gave me a mix of everything.
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
card_image: /img/dfr/wheelspin_03.gif
hero_image: /img/dfr/dfr_car.jpg
# tags: [Systems integration, HV powertrain, CAN, FSAE]
---


## Chasing Electrical Gremlins in an Racecar

Dartmouth Formula Racing's 2026 Car, Talia, is a dual-motor rear-wheel-drive electric car, built across the 2025 and 2026 seasons. It runs a 396 V nominal / 462 V max tractive system into two independent Cascadia PM100DZ inverters, each driving its own EMRAX 188 MV axial-flux motor through its own gearbox – so torque is commanded per rear wheel, which is what makes torque vectoring and per-wheel traction control possible. An STM32F4 Central Vehicle Controller (CVC) sits between the driver and the inverters: it reads the pedal position, runs the state machine, and sends the per-wheel torque commands to both inverters over CAN.

I found myself drawn most to the integration work: the point where independently designed electronics, firmware, motors, sensors, and high-voltage systems all had to cooperate. That’s also where the most interesting problems tended to appear.


<!-- ## System Integration
My favorite aspects were the problem-solving and troubleshooting deep dives required to get the car driving, i.e. puzzling together the subsystems and digging deep into how things are supposed to work together. Below are a few snapshots of the interesting or memorable hardware debugging stories! -->

<!-- <aside class="story--gold">
    <h3>A Race Car That Wouldn’t Enter Drive</h3>
    <p>
One of the most memorable challenges came during powertrain integration. The shutdown circuit appeared healthy, no errors showed up, and the state machine logic in the CVC code made sense.
Instead of assuming one subsystem was at fault, we started eliminating possibilities.

I verified _____, checked ____, measured _____, and gradually narrowed the search. 
Along the way we discovered multiple independent problems: ________.

The lesson wasn’t that one measurement solved the problem. It was that complex systems often fail in several ways at once, and the fastest path forward is a structured debugging process rather than chasing the newest theory.


faulty connectors, _____, _____, and an unexpected interaction in the precharge system where the high-voltage indicator circuit drew enough current to prevent the vehicle from completing precharge.
    </p>
</aside> -->

<aside class="story">
    <h3>The Invisible Fault: Diagnosing a Dead Resolver</h3>
    <p>
During bring-up of the car's dual-motor powertrain, the left-side Cascadia PM100DX inverter reported "Resolver not connected" in the RMS GUI (Cascadia's motor controller configuration software), which meant that the motor would not spin. The right-side motor-inverter connection was normal and both motors had passed bench testing before installation, which narrowed the likely cause to something introduced during integration. 
    </p>
    <p>
I started with checking the wiring harness, since a swapped sin/cos/excitation pair was the most probable failure. I compared the resolver pinout with the manufacturer documentation and with the working right-side motor-inverter interface; both matched. I also measured resistance across each resolver pin to ground (motor mount) on both sides, which all looked normal: excitation ~15 Ω, sin and cos ~90 Ω. 
    </p>
    <p>
To isolate the fault to inverter vs. motor assembly, I tested all four combinations of the two inverters against the two motors. The fault consistently followed the left motor, successfully exonerating the inverters and the wiring harness. This narrowed my focus to the sensor mounted on that motor: the resolver.
    </p>
    <p>
The puzzle was reconciling "all resistances normal" with a completely non-functional sensor. The breakthrough came from stepping back and analyzing the physical construction of a brushless resolver. The excitation signal reaches the rotor winding through a rotary transformer. The pins I probed with a multimeter (for the DC resistance check) only connected to the stationary side of that transformer. If the rotating winding was broken, it would be galvanically isolated from the meter, rendering the fault completely invisible to a DC continuity check.
    </p>
    <div>
I then scoped the signals forming the closed-loop communication between the inverter and the resolver: excitation (inverter --> resolver) and sin/cos (resolver --> inverter). I applied an excitation signal from the function generator and looked at the oscilloscope waveforms of the returning signals while I rotated the wheel by hand.
    </div>
    <ul>
        <li>Ch1: Excitation signal</li>
        <li>Ch2: Sin+ (referenced to excitation ground)</li>
        <li>Ch3: Sin− (also referenced to excitation ground)</li>
        <li>oscilloscope's math function (Ch2 - Ch3): differential signal between Sin+ and Sin- (Sin output)</li>
    </ul>
    <br>
    <!-- <div class="story__aside">
        Aside: Since I was using standard single-ended oscilloscope probes to measure a differential signal (Sin+ and Sin-), I had to give both probes a shared reference point. By referencing both channels to the same ground, the oscilloscope's math function (Ch2 - Ch3) subtracted out the common-mode voltage and thus showed the differential signal between Sin+ and Sin-, which was the Sin output signal waveform I wanted.
    </div> -->
    <p>
To establish a baseline, I characterized the known-good right motor's resolver first: the sin and cos envelopes varied in quadrature as the rotor turned and stayed phase-coherent with the excitation carrier. These waveforms reflected the behavior of a healthy resolver, which amplitude-modulates its sin/cos envelopes with rotor angle. This amplitude modulation is exactly what the inverter's resolver-to-digital converter (RDC) requires to recover the mechanical angle.
    </p>
    <p>
Using the exact same setup, the left motor's resolver produced no angular modulation at all: the differential sin and cos waveforms did not change with wheel rotation.
    </p>
    <p>
Following the manufacturer’s documentation in reverse, we carefully disassembled the unit and found the culprit: a severed piece of fine magnet wire on the rotor winding, likely caused by mechanical damage during installation.
    </p>
</aside>




<!-- ## Also, I designed a few circuits and PCBs. -->

## Building the Hardware Is Only Half the Job

Beyond debugging, I designed several custom PCBs, helped assemble and wire the high-voltage accumulator, built BMS test hardware, and contributed to vehicle electrical integration.

Those experiences taught me something I hadn’t fully appreciated beforehand: a schematic is only the beginning. Every connector, harness, measurement point, and test procedure influences how easy—or painfully difficult—a system will be to debug months later.

<div class="dive">
  <div class="dive__text">
    <h3>HV Junction Box PCB w Discharge Circuit and HV/GLV Interface</h3>
    <p>
        The HV Junction Box Board is the PCB inside the Junction Box — the car's only high-voltage enclosure outside the accumulator. It's the single interface between the accumulator's post-AIR HV output and every downstream HV consumer (both inverters + the TS-GLV DC-DC), and it carries the safety-critical functions on that path: active TS-bus discharge, soft-start precharge of the DC-DC, TSAL power, the HVD + energy-meter shutdown-circuit interlocks, and the tractive-system measurement points.
    </p>
  </div>
  <figure class="dive__media"><img src="/img/dfr/junctionbox_pcb/junction_box_allyn_01.JPEG" alt=""></figure>
</div>


<div class="dive2">
  <figure class="dive2__media"><img src="/img/dfr/ccgm_isolator_pcb/ccgm_isolator_pcb.jpg" alt=""></figure>
  <div class="dive2__text">
    <h3>CCGM isolator board</h3>
    <p>
    The CCGM isolator board is a galvanically isolated CAN gateway between the EMUS G1 control unit on the GLV side and the string of 8 CCGM modules referenced to the accumulator. It exists because the CCGM023’s datasheet isolation rating is 400 V against a 462 V pack — a rating EMUS cut from 1000 V under IEC 60664-1:2020 for spacing to the metal bottom plate. Instead of buying much more expensive higher-rated modules, I made a custom pcb to isolate power and CAN at the control-unit-to-string boundary, which works because inter-segment isolation only needs to hold segment voltage, ~63 V. It lives inside the accumulator container, in line on the internal EMUS CAN bus.
    </p>
  </div>
</div>


Dartmouth Formula Racing reinforced the kind of engineering I enjoy most: building hardware, measuring real signals, and solving problems that don’t have obvious answers. I like projects where I get to see the big picture of how an entire electromechanical system behaves while also digging into the details, and where success is a car that's fast and fun to drive.

<!-- I like projects where success depends on understanding how an entire electromechanical system behaves, and results in a  -->


