---
layout: default
title: Veronica Yarovinsky
---

<section class="hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__inner">
    <div class="hero__text">
      <h1>Veronica Yarovinsky</h1>
      <!-- <p class="hero__tagline">I build and debug <span class="hl">real systems</span> — high-voltage powertrains, autonomous robots, custom hardware.</p> -->
      <!-- <p class="hero__tagline">Designing, integrating, testing, and optimizing  hardware & electromechanical systems.</p> -->
      <!-- <p class="hero__lead">I'm Veronica, a recent Dartmouth College graduate with a BE in Electrical Engineering. I enjoy turning ideas into reliable systems by combining electrical engineering, controls, software, and hands-on testing. I'm especially interested in fast-paced engineering environments where I can integrate new hardware, solve unexpected challenges, and continuously improve system performance.</p> -->
      <p class="hero__lead">
        I’m Veronica, a recent Dartmouth College graduate with a BE in Electrical Engineering. I'm an electrical engineer who enjoys being where the hardware is: turning concepts into prototypes, calibrating sensors and controls, troubleshooting unexpected failures, solving problems in the field, and refining performance through rapid cycles of testing and iteration.
      </p>
      <!-- <p class="hero__lead">
        I enjoy working across disciplines and moving between electrical systems, embedded software, controls, and mechanical integration, and I'm happiest working on complex systems where every challenge is an opportunity to learn something new.
      </p>
      <p class="hero__lead">
        Whether it's a vehicle, robot, aircraft, or another electromechanical system, I love the process of building, debugging, and validating technology in the environments where it actually operates. I'm always excited to travel, adapt to new challenges, and jump into whatever role is needed to get the system working.
      </p> -->
      <p class="hero__lead">
        Outside of engineering, I enjoy climbing, skiing, surfing, painting, and traveling, and I bring that same curiosity and creativity into the way I approach technical problems.
      </p>
    </div>
    <div class="hero__cluster" aria-hidden="true">
      <!-- <div class="ph ph--ph ph--build">build shot</div> -->
      <img class="ph ph--ph ph--build" src="{{ '/img/aboutme/me_at_tesla_powerplant.jpg' | relative_url }}" alt="Me at a Tesla Powerplant">
      <img class="ph ph--main" src="{{ '/img/aboutme/dolomites_1.jpg' | relative_url }}" alt="Veronica Yarovinsky">
      <!-- <div class="ph ph--ph ph--macro">detail macro</div> -->
      <img class="ph ph--ph ph--macro" src="{{ '/img/dfr/dfr_pushing_car_1.jpg' | relative_url }}" alt="Pushing the DFR car, alongside my teammates">
    </div>
  </div>
</section>

<section class="section" id="projects">
  <div class="wrap">
    <h2 class="section__title reveal">Featured Projects</h2>
    <div class="featured-grid">
      {% assign featured = site.projects | where: "featured", true | sort: "order" %}
      {% for p in featured %}{% include project-card.html project=p %}{% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="section__title reveal">Other Projects</h2>
    <div class="entry-list reveal">
      {% for item in site.data.other_projects %}
        {% capture body %}{{ item.body | markdownify }}{% endcapture %}
        {% include collapse.html id=item.id eyebrow=item.kicker title=item.title subtitle=item.subtitle images=item.images tags=item.tags page=item.page body=body %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- <section class="section" id="buildlog">
  <div class="wrap">
    <h2 class="section__title reveal">Small Builds & Explorations</h2>
    <div class="entry-list">
      {% assign entries = site.buildlog | sort: "order" %}
      {% for entry in entries %}
        {% capture body %}{{ entry.content }}{% endcapture %}
        {% include collapse.html id=entry.slug title=entry.title images=entry.images tags=entry.tags body=body %}
      {% endfor %}
    </div>
  </div>
</section> -->

<!-- <section class="section" id="buildlog">
  <div class="wrap">
    <h2 class="section__title reveal">Other</h2>
    <p class="section__intro reveal">Small builds and investigations.</p>
    <div class="entry-list">
      {% assign entries = site.buildlog | sort: "order" %}
      {% for entry in entries %}
        {% capture body %}{{ entry.content }}{% endcapture %}
        {% include collapse.html id=entry.slug title=entry.title images=entry.images tags=entry.tags body=body %}
      {% endfor %}
    </div>
  </div>
</section> -->