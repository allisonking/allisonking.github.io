---
layout: default
title: Fun
permalink: /fun/
types:
  - Engineering
  - Exploring the Hyphen
  - Writing
---

Here you'll find samples of my work as an engineer, a storyteller, and something in between:
<!-- <a href="#Engineering"> Engineering </a>
<a href="#hyphen"> -- </a>
<a href="#Writing"> Writing </a> -->
{% for type in page.types %}
  <a href="#{{type}}">{{type}} </a>
{% endfor %}


{% for type in page.types %}
 <h2 class="portfolio-heading" id="{{type}}"> {{type}} </h2>
 {% for portfolio in site.portfolio %}
 {% if portfolio.type == type %}
 <div class='post-wrapper'>
   {%- if portfolio.image_url -%}
   <div class='post-image'>
       <img src="{{ portfolio.image_url }}"/>
   </div>
   {%- endif -%}
   <div class='post-content'>
   <h3>
     <a class="post-link" href="{% if portfolio.ext_url %} {{ portfolio.ext_url }} {% else %} {{ portfolio.url | relative_url }} {% endif %}" {% if portfolio.ext_url %}target="_blank"{% endif %}>
       {{ portfolio.title | escape }}
       {%- if portfolio.ext_url -%}
       <span class="external-link"><i class="fas fa-external-link-alt"></i></span>
       {%- endif -%}
     </a>
   </h3>
   {{ portfolio.description }}
   </div>
 </div>

 {% endif %}
 {% endfor %}
 <h3> </h3>
{% endfor %}
