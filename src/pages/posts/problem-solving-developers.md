---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Problem-solving For Developers'
pubDate: 2022-09-22
description: 'My notes on a helpful Fireship YouTube video'
author: 'Anthony Ongaro'
tags: ["problem-solving", "fireship", "video-notes"]
---
[Watch on YouTube](https://www.youtube.com/watch?v=UFc-RPbq8kg)

### 1. Identify and Understand Problem
"If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem, and 5 minutes thinking about solutions." - Albert Einstein
	
	1. Start with context
	2. Explain why it's an issue / what you're trying to accomplish
	3. Summarize why problem should be solved

### 2. Research and Refine
Start Googling...

	1. Research other people's solutions as a starting point
	2. Look for other sources of learning like YouTube videos, and other free online sources
	3. Make sure you confidently understand what the code does before using it
	4. Discuss the idea with other developers
	5. Refine problem into *smaller* problems
	6. Weigh pros and cons of different approaches

Number 5 above is arguably the most important: break down a problem into it's smallest logical components and then work on the ones you can figure out first. Start with what you know how to do and build on that.

### 3. Write Pseudocode
Focus on logic (how it works and flows), NOT syntax (proper code formatting). Work through what you want to achieve using plain english language as though you were writing code.

```
age is 40

if age is more than 40
  print Age is above 40 to terminal
else if age is equal to 40
  print age is exactly 40! to terminal
otherwise
  print I guess age is less than 40! to terminal
end
```

becomes...

```ruby
age = 40

if age > 40
  puts "Age is above 40"
elsif age == 40
  puts "Age is exactly 40!"
else
  puts "I guess age is less than 40!"
end
```

	1. Added benefit is that you can work on naming your variables and methods well before worrying about other stuff
	2. Creates general idea on how to implement the code
	3. If working with API, use Insomnia to implement code before making requests

### 4. Test Driven Development

	1. Write good tests that will be helpful for making sure it's working
	2. When possible, write tests before writing code
	3. Use red/green/refactor, prevents regression and allows refactoring

### 5. Implement The Solution

	1. Get to passing code as quickly as possible
	2. Doesn't have to be perfect
	3. Leverage dopamine to see success
	4. Rush to implement initial code like a hackathon
	5. Make sure the problem _can_ be solved.

### 6. Reflect and Improve
It's easier to improve existing code that works vs write new code

	1. Improve readability by naming better
	2. Add comments
	3. Remove duplication
	4. Optimize time/space  complexity
	5. Add error handling

### 7. Practice
Unlimited problems to solve, so practice solving problems. You can get good at problem solving just like getting good at a musical instrument. It takes time and practice, and your brain will start changing to understand the types of problems you're working on solving. *Every aspect* of what you're learning and doing can and will improve.

- You'll get faster at typing
- Your brain will know what to look for and where
- You'll learn more shortcuts, programs and systems
- Your knowledge will grow exponentially as each understanding stacks upon the previous learnings
- You'll even get better at Googling and knowing what to look for to find your answer

### 8. Get Feedback From Other Developers
<img width="712" alt="image" src="https://user-images.githubusercontent.com/43623494/190416953-b15806af-9929-4b42-b5ab-c23075175098.png">
