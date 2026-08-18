---
title: Autonomous Maze-solving Robot
# number: "02"
# kicker: Mechatronics
kicker: Micromouse
# summary: 'A maze-solving robot — full electrical + firmware + <span class="hl">closed-loop control</span> stack.'
# summary: 'that drives through an unknown maze, maps the walls, and solves the maze.'
# summary: >
#   Designed, implemented, & tuned the robot's low-level controls
#   Characterized the motors & sensors
#   Integated the electrical subsystems of the robot (sensing, power, and control) -- including wiring and troubleshooting power and communication
#   Integrated the firmware for the robot, including sensor data processing, motor control, navigation algorithms, and high-level decision logic (the FSM) of the robot
card_summary: >
  Characterized motor dynamics and sensor behavior, implemented low-level motion control, and integrated embedded firmware for real-time sensing, navigation, and autonomous decision-making.
summary: >
  Characterized motor dynamics and sensor behavior, implemented low-level motion control, and integrated embedded firmware for real-time sensing, navigation, and autonomous decision-making.
# role: Full electrical & firmware ownership
featured: true
order: 2
# accent: "#00C5CD"
# accent_ink: "#008688"
accent: "#67e8f9"
accent_ink: "#007393"
card_image: /img/micromouse/mazedrive_closeup.gif
hero_image: /img/micromouse/mazedrive_closeup.gif
# tags: [Controls, Firmware, Full stack]
---


<!-- Our goal was simple: build a robot to autonomously drive through a maze, map the walls, and solve the maze. -->

<!-- My work centered on the pieces that connected everything together: choosing and characterizing sensors, designing and implementing closed-loop controllers, building the embedded software framework, and turning a collection of independently developed subsystems into a robot that could reliably drive itself through the maze. -->

During my 10-week mechatronics course at Dartmouth, my group of 4 built an autonomous differential-drive robot which successfully navigated and solved a 16x16 maze, inspired by the micromouse competition series.

My most significant contributions included the following:
* • motor selection & characterization
* • low-level motion control: turn controller & speed controller
* • sensor (IMU & TOF) bring-up, configuration & calibration, testing, troubleshooting
* • electrical & wiring
* • firmware architecture, integration, and testing scripts
* • majority of troubleshooting & debugging

### So, how does the robot "work"?

<figure>
  <img src="/img/micromouse/micromouse_system_diagram.png" alt="">
  <figcaption>Information flow</figcaption>
</figure>

1. ToF sensors → wall distances. Perpendicular three answer "is there a wall in this cell?"; diagonals look into the next cell.
2. IMU → absolute-ish heading (fused yaw) and yaw rate. Used for turns and heading hold.
3. Encoders → wheel angular velocity (inner loop feedback) and integrated distance (outer loop feedback).
4. Flood fill consumes the wall map and the current pose, returns a desired compass direction.
5. FSM converts that direction into a relative turn plus one forward cell move.
6. Controllers execute those primitives.
7. One write point pushes PWM to the shield.

<figure>
  <img src="/img/micromouse/micromouse_hardware_annotated.png" alt="">
  <figcaption>robot hardware</figcaption>
</figure>


<!-- ### Navigating the maze... (without crashing into the walls)
The robot stops at the center of each cell, checks for walls, and decides if it should drive forward, turn 90° left, turn 90° right, or turn 180°.

Basically, this means that the robot must be able to drive forward and turn. -->




### Integration
One of the project's biggest challenges was that each subsystem—wall sensing, motion control, localization, and navigation—was developed separately before being combined into a single autonomous robot. Rather than allowing each controller to operate independently, I reorganized the motion-control software so that the finite state machine could issue standardized "drive forward" and "turn" commands while lower-level controllers handled heading regulation, motor speed, and encoder feedback. This separation made it possible to test individual subsystems while keeping the navigation logic independent of the underlying control implementation.





<!-- ===================================================================== -->
<!-- System & Software Architecture -->
<!-- 
<div class="dive">
  <div class="dive__text">
    <h3>From Six Separate Projects to One Robot (system & software architecture)</h3>
    <p>
      One of the project's biggest challenges was that each subsystem—wall sensing, motion control, localization, and navigation—was developed separately before being combined into a single autonomous robot. Rather than allowing each controller to operate independently, I reorganized the motion-control software so that the finite state machine could issue standardized "drive forward" and "turn" commands while lower-level controllers handled heading regulation, motor speed, and encoder feedback. This separation made it possible to test individual subsystems while keeping the navigation logic independent of the underlying control implementation.
    </p>
    <p></p>
  </div>
  <figure class="dive__media"><img src="/img/micromouse/robot_frontview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_backview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_sideview.jpg" alt=""></figure>
</div> -->

<!-- ===================================================================== -->
<!-- CONTROLS -->




<!-- ===================================================================== -->
<!-- INTEGRATION -->

<!-- <aside class="story">
  <h3>Debugging story</h3>
  <p></p>
</aside> -->

<!-- ===================================================================== -->
<!-- RESULT -->

<figure>
  <img src="/img/micromouse/mazedrive_topview.gif" alt="">
  <figcaption>
    Our micromouse robot navigating navigating a competition-style maze.
  </figcaption>
</figure>

