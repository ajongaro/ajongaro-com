---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Setting Up A Rails 5 Application With Postgres & RSpec'
pubDate: 2023-01-23
description: 'A basic cheat sheet for a Rails 5 project at Turing School.'
author: 'Anthony Ongaro'
tags: ["rails 5", "postgres", "rspec"]
---
## Spin Up A New Rails Project

Begin in terminal

```zsh
rails new application_name -T -d="postgresql" --skip-spring --skip-turbolinks
```

Command breakdown:

- `-T` remove standard testing (add RSpec later)
- `-d="postgresql"` use PostgreSQL for database (SQLite3 by default)
- `--skip-spring` & `--skip-turbolinks` skip things we don't need at this scale

## Ruby Gems

### Add Gems

Add gems to :development :test group in `Gemfile`

```ruby
group :development, :test do
  gem 'pry' # binding.pry
  gem 'rspec-rails'
  gem 'capybara' # feature tests
  gem 'launchy' # save_and_open_page
  gem 'faker' # use with factory_bot to generate fake data for tests
  gem 'factory_bot_rails'
  gem 'simplecov' # requires add'l setup
  gem 'shoulda-matchers' # requires add'l setup
  gem 'orderly' # tests order of appearance on webpage
end
```

**Bundle Install**
Run `bundle` to install the gems from Gemfile

### Gem Setup

**Install RSpec**:

```zsh
rails generate rspec:install
```

**In .gitignore:**
Add `/coverage/` directory to bottom of file to ignore SimpleCov

**In rails_helper.rb:**
Add code to *top* of file for SimpleCov

```ruby
require 'simplecov'
SimpleCov.start
```

Add this code to *bottom* of file for Shoulda-Matcher (association testing)

```ruby
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

## Connect To GitHub Repo

Create New GitHub Repository, Add Remote Repo As Origin

```zsh
git remote add origin git@github.com:<user_name>/<repo_name>.git
```

Create Local Initial Commit, Push To Origin

```zsh
git push -u origin main
```

Probably create a new branch and then...

## Initial Build-Out

### Create

Build the PostgreSQL test and development databases for the project:

```zsh
rails db:create
```

### Create Database Migrations

Use [dbdesigner](https://app.dbdesigner.net/) to design initial schema before next steps.
If you already have a schema.rb in place, [dbdiagram](https://www.dbdiagram.io/) is amazing.
It lets you import directly from a copy and pasted schema.

Generate migrations for each initial table in database with columns and data types
*Table names are always plural*

```zsh
rails generate migration CreateSongs title:string length:integer play_count:integer
rails generate migration CreateArtists name:string age:integer :integer
```

- You do not need id, foreign_id, updated_at or created_at yet...

( You'll want to investiate using `rails generate model Songs...` later. )

### Add Timestamps To Migration Files in /db/migrate

Add `t.timestamps` to your new migration files in `db` directory (adds created_at/updated_at)
Edit any mistakes you made with your terminal commands here before migrating.

```ruby
class CreateInstruments < ActiveRecord::Migration[5.2]
  def change
    create_table :instruments do |t|
      t.string :brand
      t.string :type
      t.boolean :used
      t.boolean :needs_repair
      t.integer :price
      
      t.timestamps
    end
  end
end
```

### Migrate Database with Current Migrations

Once done creating all migration files

```zsh
rails db:migrate
```

## Create Database Relationships

You can do this before or after the previous step, or any time in the future
Create your database relationships to generate foreign_ids for 'child' tables

```zsh
rails generate migration AddArtistToSongs store:references
```

Note: *the singular parent class being added to the plural child class*

An `Artist` has_many `Songs`, this is how you add a foreign id to Songs to identify its artist_id

### Check Migration File

Make sure everything is correct, and then migrate changes into db.
`rails db:migrate`

### Create Many-To-Many Relationships

Once you have your initial tables set up, then you can migrate the *relationships*.

```zsh
rails g migration CreateSnackMachines snack:references machine:references
```

This creates snack and machine relationship, with snack id + machine id

### Check Schema

Verify `schema.rb` is all correct at this point or continue setting up tables and relationships as needed.

### Seed the Database 

Seed database with `db/seeds.rb` or go into `rails console` and start adding stuff

## Start Building Model Tests 

Start building tests, start model validations and relationships.
These are just **examples** of different relationships tests and validations.

```ruby
require 'rails_helper'

RSpec.describe User, type: :model, do
  describe 'relationships' do
    it { should belong_to :movies }
    it { should have_many :user_parties }
    it { should have_many(:parties).through(:user_parties) }
  end

  describe 'validations' do
    it { should validate_presence_of :name }
    it { should validate_presence_of :email }
    it { should validate_uniqueness_of :email }
  end
end
```

## Quick Commands

```zsh
# Start rails development server:
rails s rails server

# Start rails sql console
rails dbconsole

# Rails console to interact with objects/db:
rails c / `rails console`

# Drop, create, migrate database (!!: This Destroys Development DB)
rails db:{drop,create,migrate,seed}

# Seed from db/seeds.rb
rails db:seed

# Check project's routes in terminal (important)
rails routes

# Build models
rails generate model Task user:references name:string frequency:integer
```