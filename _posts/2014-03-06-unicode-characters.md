---
title: "Interesting Unicode Characters"
layout: "page"
categories: "Typography"
link: "http://www.alanwood.net/unicode/index.html"
---

These are some intersting __unicode__ characters:

፨ ። ፠ ፡ ፥
{: .symbol}

⼢ ⿓
{: .symbol}

䷔ ䷢
{: .symbol}

ꍤ
{: .symbol}

㋢
{: .symbol}


<!--aside-start-->

### Secondary content

{% for link in site.data.links %}
 - [**{{ link.title }}** in category {{ link.categories }}]({{ link.link }})
{% endfor %}

-----

**Lorem ipsum** dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

At vero eos et _accusam_ et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


## JSONIFY


{% highlight json %}

{{ site.pages | jsonify }}

{% endhighlight %}


{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}


##Gist

{% gist 5555251 %}

----

{% gist 5555251 result.md %}
<!--aside-end-->
