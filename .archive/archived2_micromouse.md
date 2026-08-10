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
summary: >
  Characterized motor dynamics and sensor behavior, implemented low-level motion control, and integrated embedded firmware for real-time sensing, navigation, and autonomous decision-making.
# role: Full electrical & firmware ownership
featured: true
order: 2
# accent: "#00C5CD"
# accent_ink: "#008688"
accent: "#67e8f9"
accent_ink: "#007393"
hero_image: /img/micromouse/mazedrive_closeup.gif
# tags: [Controls, Firmware, Full stack]
---


<!-- Our goal was simple: build a robot to autonomously drive through a maze, map the walls, and solve the maze. -->

My work centered on the pieces that connected everything together: choosing and characterizing sensors, designing and implementing closed-loop controllers, building the embedded software framework, and turning a collection of independently developed subsystems into a robot that could reliably drive itself through the maze.

<div class="gallery">
  <figure class="dive__media"><img src="/img/micromouse/robot_frontview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_backview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_sideview.jpg" alt=""></figure>
</div>

<div class="dive">
  <div class="dive__text">
    <h3>System Architecture</h3>
    <p>
      One of the project's biggest challenges was that each subsystem—wall sensing, motion control, localization, and navigation—was developed separately before being combined into a single autonomous robot. Rather than allowing each controller to operate independently, I reorganized the motion-control software so that the finite state machine could issue standardized "drive forward" and "turn" commands while lower-level controllers handled heading regulation, motor speed, and encoder feedback. This separation made it possible to test individual subsystems while keeping the navigation logic independent of the underlying control implementation.
    </p>
    <p></p>
  </div>
  <figure class="dive__media"><img src="/img/micromouse/robot_sideview.jpg" alt=""></figure>
</div>



<!-- ===================================================================== -->
<!-- System & Software Architecture -->

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
</div>

<!-- ===================================================================== -->
<!-- CONTROLS -->

<div class="dive dive--reverse">
  <figure class="dive__media"><img src="/img/PLACEHOLDER.png" alt=""></figure>
  <div class="dive__text">
    <h3>Making 90° Turns Actually 90°</h3>
    <p>
    </p>
  </div>
</div>


<div class="gallery">
  <figure class="dive__media"><img src="/img/micromouse/robot_frontview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_backview.jpg" alt=""></figure>
  <figure class="dive__media"><img src="/img/micromouse/robot_sideview.jpg" alt=""></figure>
</div>



<!-- ===================================================================== -->
<!-- INTEGRATION -->

<div class="dive">
  <figure class="dive__media"><img src="/img/PLACEHOLDER.png" alt=""></figure>
  <div class="dive__text">
    <h3>When Everything Broke at Once (integration)</h3>
    <p>
    </p>
  </div>
</div>

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

