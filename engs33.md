---
title: Truss Bridge
layout: default
style: ../assets/css/style.scss
---

[**< back to projects page**](./)

# Truss Bridge

<p>My team of three created a scaled-down model of a pedestrian truss bridge using manila folder material as part of the course ENGS 33: Solid Mechanics. My responsibilities in the project included mechanical design, piece and assembly modeling in SOLIDWORKS, FEA for deformation, and assembling the physical bridge.</p>

<p>The goals of the project were to create the most economic bridge that can withstand 1kN of applied force and to accurately predict deformation and maximum load through finite element analysis (FEA) and hand-calculations, respectively.</p>

<p>Our bridge had the highest load-bearing-to-weight ratio of all eight groups in our class.</p>


<br>

<!-- ======== Design Process ======== -->
<h3>Design Process</h3>
<p>We iterated through multiple bridge designs, shown below. We modeled each in SolidWorks, hand-calculated the compression and tension forces of the side truss structure, performed FEA simulations, and adjuted our design based on the learnings.</p>
<div>
    <img alt="Design Iterations" width="100%" src="../img/engs33/engs33-design-iterations.png">
</div>
<br>

<!-- ======== Final Design ======== -->
<h3>Final Design</h3>
<p>Our final, built design is shown below.</p>
<div>
    <img alt="Fully Assembled Bridge" width="70%" src="../img/engs33/fully-assembled-bridge.png">
</div>
<br>

<!-- ======== SolidWorks Model ======== -->
<h3>SolidWorks Model</h3>
<p><b>The final design for our bridge, as modeled in SolidWorks</b></p>
<div class="row">
    <div class="column">
        <p>Our final model included a lattice inspired tension design at the top. We noticed from past simulations that the top compressive members at the arch were getting pushed down as we increased the load applied, requiring a tension force at the top to alleviate the stress on the compressive members.</p>
        <p>We created a custom material in SolidWorks to more accurately model the properties of the manila paper we were using as our material. To determine the Young’s Modulus for manilla paper (which is 1.05E-10), we conducted tensile tests and compression tests on the Instron.</p>
    </div>
    <div class="column">
        <img alt="CAD model final" width="100%" src="../img/engs33/CAD-model-final.png">
    </div>
</div>

<br>


<!-- ======== FEA Analysis ======== -->

<h3>FEA Analysis</h3>
<div class="row">
  <div class="column">
    <p><b>CAD simulation for finding the maximum amount of stress the bridge can hold:</b></p>
    <p>We used SolidWorks FEA analysis to perform deflection and stress tests, ensuring our bridge met the project's minimum weight loading requirements. This approach enabled us to virtually iterate on our design, resulting in the highest load-bearing-to-weight ratio of all eight groups in our class.</p>
  </div>
  <div class="column">
    <img alt="CAD sim" width="100%" src="../img/engs33/CAD-sim.png">
  </div>
</div>
<br>

<!-- ======== Built Design ======== -->

<h3>Built Design</h3>
<div class="row">
  <div class="column">
    <p><b>Point of failure during testing</b></p>
    <p>During testing, the bridge broke at the 8mm x 8mm crossmembers of the deck. The shear force was evenly split between the two central crossmembers, this is evidenced above by the resulting step offs at the edge of the side member. The members buckled after the application of the load changed once the provided deck cracked.</p>
  </div>
  <div class="column">
    <img alt="failure-point" width="100%" src="../img/engs33/failure-point.png">
  </div>
</div>
<br>



[Link to Final Report](https://drive.google.com/file/d/1Z7scb8cWfSEA4zsg4Kii4mdTYNROgDUh/view?usp=sharing)


<br>

[**< back to projects page**](./)

