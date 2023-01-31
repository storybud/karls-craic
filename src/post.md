---
title: Post
layout: layouts/base.njk
pagination:
  data: blog.data
  size: 1
  alias: blog
permalink: 'blogs/{{ blog.id }}/'
---

# {{ blog.attributes.Title }}

{{ blog.attributes.Content }}

<!-- ## Categories

{% for category in blog.attributes.categories.data %}

  <li><a href="/categories/{{ category.id }}/">{{ category.attributes.name }}</a></li>
{% endfor %}
  -->