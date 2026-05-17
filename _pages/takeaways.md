---
layout: archive
title: "Beining's takeaway"
permalink: /takeaways/
author_profile: false
---

{% include base_path %}

<div class="principles">
  {% assign items = site.takeaways | sort: "date" | reverse %}
  {% for post in items %}
    <article class="principle">
      <div class="principle-title">
        <a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a>
        {% if post.date %}
          <span class="pill">{{ post.date | date: "%b %Y" }}</span>
        {% endif %}
      </div>
      {% if post.excerpt %}
        <p class="principle-body">{{ post.excerpt | markdownify | strip_html | strip_newlines }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>
