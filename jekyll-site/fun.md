---
layout: default
title: Fun
permalink: /fun/
---
<h1>Engineering</h1>
{% for portfolio in site.portfolio %}
{% if portfolio.type == 'engineering' %}
  <h2>
    {{ portfolio.title }}
  </h2>
{% endif %}
{% endfor %}

<h1>Exploring the Hyphen</h1>
{% for portfolio in site.portfolio %}
{% if portfolio.type == 'hyphen' %}
  <h2>
    {{ portfolio.title }}
  </h2>
{% endif %}
{% endfor %}

<h1>Writing</h1>
{% for portfolio in site.portfolio %}
{% if portfolio.type == 'writing' %}
  <h2>
    {{ portfolio.title }}
  </h2>
{% endif %}
{% endfor %}
