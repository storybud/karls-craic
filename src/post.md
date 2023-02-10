---
title: Post
layout: layouts/post.njk
pagination:
  data: blog.data
  size: 1
  alias: blog
permalink: 'blogs/{{ blog.id }}/'
---

# {{ blog.attributes.Title }}

{{ blog.attributes.Content }}

