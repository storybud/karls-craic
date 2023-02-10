---
title: Blog Posts
layout: layouts/page.njk
pagination:
  data: blog.data
  size: 100
  alias: blogs
---

<ul class="columns">
{% for post in blogs %}
  <li class="column is-one-third">
    <a href="/blogs/{{ post.id }}/">{{ post.attributes.Title }}</a>
  </li>
{% endfor %}
</ul>