---
layout: default
style: custom-style.css
---

<style>

.hero {
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  font-family: var(--sans-serif);
  /* margin: 0rem 0 0rem; */
  text-wrap: balance;
  /* text-align: center; */
}

.hero h1 {
  margin: 1rem 1;
  /* max-width: none; */
  text-align: left;
  /* font-size: 2vw; */
  font-size: 40px;
  /* font-weight: 240; */
  line-height: 1.5;
  /* background: #15B2B2; */
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

.hero p {
  margin: 0;
  text-align: left;
  /* max-width: 34em; */
  font-size: 16px;
  font-style: initial;
  font-weight: 200;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

.card-img-top {
    width: 100%;
    height: 12vw;
    object-fit: cover;
}

.card {
    border: 0px solid #ddd;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    text-decoration: none; /* Remove underline from link */
    color: inherit; /* Ensure text color is inherited from parent */
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 0.4px solid var(--theme-foreground-focus);
  }

.card-block {
    padding: 0.4rem;
}

.card-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
}

.card-text {
    margin: 0.2rem 0;
    font-size: 1rem;
    color: var(--theme-foreground-muted);
}

</style>


<div class="hero">
  <h1>Hello! I'm Veronica.</h1>
  <p>I'm an Electrical Engineering student at Dartmouth College, and I love designing systems, products, electronics, and anything related to energy. When I am not engineering, you’ll find me climbing in the Colorado mountains or surfing on the California coast.</p>
</div>

---
## Featured Projects

<div class="grid grid-cols-3">
  <a href="/solar-water-heating" class="card">
    <img alt="Card image cap" class="card-img-top img-fluid" src="img/dhe/uganda-system.jpg" />
    <div class="card-block">
      <h2 class="card-title">Solar Water-Heating System</h2>
      <p class="card-text">Built and operating in Uganda</p>
    </div>
  </a>

  <a href="/inverter" class="card">
    <img alt="Card image cap" class="card-img-top img-fluid" src="img/Bishop_1.jpeg" />
    <div class="card-block">
      <h2 class="card-title">Split-phase Grid-tied High-Power Inverter</h2>
      <p class="card-text">For residential load-shedding battery system</p>
    </div>
  </a>

  <a href="/looma-redesign" class="card">
    <img alt="Card image cap" class="card-img-top img-fluid" src="img/Bishop_1.jpeg" />
    <div class="card-block">
      <h2 class="card-title">Looma System & PCB Design</h2>
      <p class="card-text">Electrical re-design of Looma Educational System</p>
    </div>
  </a>
</div>

---
## Additional Projects





---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./all-projects.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.