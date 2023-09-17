---
title: 'Management Myths: Leading vs. Lagging Indicators'
pubDate: 2023-09-17
author: 'Todd Bittner'
tags: ['management']
---

_Draft_
Although my primary intention for this blog is to document my technical journey
after a significant period of time on the management side of things, I would be somewhat
foolish to ignore my last decade of experience.  Especially since there are areas specific to
the Tech industry where management theory has an outsized impact on an engineer's day-to-day
use of technology.

The two biggest traps I see with management at all levels are (1) the desire to have a complete
understanding of the domain managers oversee or (2) the ability to quantify all aspects of 
management.  (2) can be seen as a symptom of (1), but it suffers from enough of its own 
dysfunctions that it merits a separate pillar in the Errant Ways of Management Theory.

Leading vs. lagging indicators is a bit of a dated concept, as I first heard about it 9 or so 
years ago.  However, like most concepts in software engineering, everything old is new again.
The concepts never die, they just tweak their presentations.  

In management, there aren't really any new concepts, just new, non-sensical buzzwords masking 
the same ol' theory.  

If you're not familiar with leading vs. lagging indicators, the expectation is to find a signal
that allows you to optimize your development or operational performance before a problem occurs,
so you can better control the input to minimize variation of the output, and, thus, make your 
system more predictable.

In everyday terms, the common example that was always thrown at us was weight gain.  Sure, you 
can weigh yourself every day, but that signal _lags_ the actions that have caused weight gain or
loss.  Better to control your calorie intake, so you have a better idea of what your weight gain
will be ahead of your next appointment with the scale.  Armed with that example, we were tasked 
to go find leading indicators for our own domains and come back in a staff meeting or two, armed 
with a new tool to aid the bottom line.

My counter-argument (if I'm disciplined enough to continue to write this blog for the long run and 
it keeps you entertained enough to read it, you'll find I counter most management arguments) was that
finding a leading indicator is _exceedingly hard_.  The weight example makes sense because it's easy
to spot in hindsight.  We could spend more time searching for a leading indicator than we could fixing
the issue the lagging indicator is pointing to.  Why not let the leading indicator shine when it's 
apparent and continue monitoring the lagging indicator, so the system doesn't suffer excessively?

Furthermore, while walking this morning and thinking about weight gain, I realized the primary example
itself is flawed (hence the 9-year delay in my response).  Tracking incoming calories itself is also 
_exceedingly hard_ for the following reasons:

* Having the discipline to document food intake is difficult.
* The estimates are often wrong when searching for calorie counts.
* Tracking calories expended, though easier with the advent of fitness trackers, is an inexact science.
* People often overestimate calories expended and underestimate calories consumed.
* Different foods metabolize at different rates, and water retention can throw off expectations.

So, while it's true that consuming 3500 fewer calories than you expend will lead to weight loss, determining
when you've expended 3500 calories is not easy.

These examples are specific to this leading indicator.  It takes tremendous discipline to ensure simple 
processes are followed.  That, in fact, is what a lot of management at larger companies can devolve into - 
chasing down timesheets and updating status for the nth time in a week.  If your response is "We can 
automate that," then, yes, I agree.  However, remember we don't know what we're trying to automate in 
the first place.  And, once we do, we don't know how much effort automating _it_ takes.  

As for the variability around the measurements themselves, that isn't easy in the software engineering space
either.  Finding the right statistic is difficult to track in any circumstance and measuring it correctly only
adds more complexity.

This isn't to say that you shouldn't look for leading indicators when they're apparent.  But, make sure first
and foremost that you've got a reliable lagging indicator to start with.  Otherwise, you have nothing.  Then,
as with almost everything in the software engineering space, take notes and iterate.  Celebrate your small 
improvements and mildly indulge your cargo cult until you find a more logical path.  If it helps to say three
Hail Marys before pushing your code to production and there's currently no other method to prevent the build 
breaking 20% of the time, then do so.  But be open to exploration and hope that one day in the not-too-distant
future, you can show that two Hail Marys will do the trick.

That is the effective way to search for leading indicators.

