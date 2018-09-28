---
layout: default
title: Fun
permalink: /fun/
types:
  - Engineering
  - Exploring the Hyphen
  - Writing
---
# Fun Stuff
{% for type in page.types %}
 <h2> {{type}} </h2>
 {% for portfolio in site.portfolio %}
 {% if portfolio.type == type %}
 <h3> {{ portfolio.title }} </h3>
 <p> {{ portfolio.description }} </p>
 {% endif %}
 {% endfor %}
 <h3> </h3>
{% endfor %}
