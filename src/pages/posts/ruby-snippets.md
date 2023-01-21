---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My Custom Ruby Snippets'
pubDate: 2023-01-23
description: 'Helpful Ruby snippets for pry, rspec, and controller creation'
author: 'Anthony Ongaro'
tags: ["ruby", "snippets", "json"]
---
# Artisan Hand-Crafted Ruby Snippet Collection
<p>Put these into your ruby.json file or snippets.code-snippets in VS Code</p>

## Insert a Pry
```
	"Insert Pry Stop": {
		"prefix": "pry",
		"body": ["binding.pry"],
		"description": "Do some debugging with pry"
	},
```
## Print A Variable To Terminal
```
	"Debugger": {
		"prefix": "dbg",
		"body": ["puts \"DBG: $1=#{$1.inspect}\""]
	},
```
## Execute Launchy in Test
```
	"Save And Open Page": {
		"prefix": "sop",
		"body": ["save_and_open_page"]
	},
```
## Set Up A Rails Controller
*Note:* Plural controller name, all downcase.
```

	"Controllers Setup": {
		"prefix": "contr",
		"body": [
			"class ${1/(.*)/${1:/pascalcase}/}Controller < ApplicationController",
		"\tdef index",
		"\t\t@${1} = ${1/(.*)/${1:/pascalcase}/}$2.all",
		"\tend\r\r",
		"\tdef show",
		"\t\t@${1}$2 = ${1/(.*)/${1:/pascalcase}/}$2.find(params[:id])",
		"\tend\r\r",
		"\tdef new",
		"\tend\r\r",
		"\tdef create",
		"\tend\r\r"
		"\tdef edit",
		"\tend\r\r"
		"\tdef update",
		"\tend\r\r"
		"\tdef destroy",
		"\tend",
		"end",
		]
	},
```
## Basic Model Setup
```
	"Model Setup": {
		"prefix": "model",
		"body": [
			"class $1 < ApplicationRecord",
		"\t$0",
			"end"
		]
	},
```
## RSpec for Model or Feature Test 
*Note:* Tab is your friend.
```
	// Testing
	"RSpec Setup": {
		"prefix": "test",
		"body": [
			"require 'rails_helper'\r\r",
			"RSpec.describe $1, type: :$2 do",
			"\tdescribe '$3' do",
			"\t\tit '$4' do",
			"\t\t\t$5",
			"\t\tend",
			"\tend",
			"end"
		]
	},
```
## Create Initial Let Blocks For Tests
```
	"Let Test Block": {
		"prefix": "let",
		"body": [
			"let!(:$1) { $2.create!($3: $0) }"
		]
	},
```
## Expectations
```
	"Expect Have Content": {
		"prefix": "content",
		"body": ["expect(page).to have_content($1)"]
	},
```
## Expectations, Within
```
	"Within Expect Have Content": {
		"prefix": "with",
		"body": [
			"within(\"#$1\") do",
			"\texpect(page).to have_content($2)",
			"end"
		]
	},
}
```