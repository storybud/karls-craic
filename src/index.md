---
title: Blog
layout: layouts/base.njk
pagination:
  data: blog.data
  size: 100
  alias: blogs
---

# Restaurants

<ul>
{%- for post in blogs -%}
{{ post.id }}
  <li><a href="/blogs/{{ post.id }}/">{{ post.attributes.Title }}</a></li>
{%- endfor -%}
</ul>