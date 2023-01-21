---
title: 'Setting Up A Rails 5 Application With Postgres & RSpec'
pubDate: 2023-01-23
description: 'A basic cheat sheet for a Rails 6 project at Turing School.'
author: 'Anthony Ongaro'
tags: ["rails 5", "postgres", "rspec"]
---
# New Rails Project
Published on: 2023-01-20

Begin in terminal
`rails new application_name -T -d="postgresql" --skip-spring --skip-turbolinks`

Command breakdown:
`-T` remove standard testing (add RSpec later)
`-d="postgresql"` use PostgreSQL for database (SQLite3 by default)
`--skip-spring` & `--skip-turbolinks` skip things we don't need at this scale

## Ruby Gems
### Add Gems
Add gems to :development :test group in `Gemfile`

```ruby
group :development, :test do
  gem 'pry'
  gem 'rspec-rails'
  gem 'capybara'
  gem 'launchy' # save_and_open_page
	gem 'faker'
	gem 'factory_bot_rails'
  gem 'simplecov'
  gem 'shoulda-matchers'
	gem 'orderly' # tests order of appearance on webpage
end
```

**Bundle Install**
Run `bundle` to install the gems from Gemfile

### Gem Setup
**Install RSpec**:
`rails generate rspec:install`

**In `.gitignore`:**
Add `/coverage/` directory to bottom of file to ignore SimpleCov

**In `rails_helper.rb`:**
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

# Connect To GitHub Repo
Create New GitHub Repository, Add Remote Origin
`git remote add origin git@github.com:<user_name>/<repo_name>.git`

Create Local Initial Commit, Push To Origin
`git push -u origin main`

Probably create a new branch and then...

# Database Setup
See [[Rails Terminal Commands]] for more

## Initial Build-Out 
### Create 
Build the PostgreSQL test and development databases for the project:
`rails db:create`

### Create Database Migrations
Use [dbdesigner](https://app.dbdesigner.net/) to design initial schema before next steps

Generate migrations for each initial table in database with columns and data types
*Table names are always plural*

`rails generate migration CreateSongs title:string length:integer play_count:integer`
`rails generate migration CreateArtists name:string age:integer :integer`
	*You do not need id, foreign_id, updated_at or created_at yet...

### Add Timestamps To Migration Files in /db/migrate
Add `t.timestamps` to migration files in `db` directory (adds created_at/updated_at)
Edit any mistakes you made with your terminal commands

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
`rails db:migrate`

### Create Database Relationships
You can do this before or after the previous step, or any time in the future
Create your database relationships to generate foreign_ids for 'child' tables

`rails generate migration AddArtistToSongs store:references`
*Note the singular parent class being added to the plural child class*

An `Artist` has_many `Songs`, this is how you add foreign_id to Songs to identify its artist_id

### Check Migration File
Make sure everything is correct, and then migrate changes into db.
`rails db:migrate`

## Create Many-To-Many Relationships
#later
`rails g migration CreateSnackMachines snack:references machine:references`          
This creates snack and machine relationship, with snack id + machine id

### Check Schema
Verify schema is all correct at this point or continue setting up tables and relationships as needed.

# Next:
Seed database with `db/seeds.rb` or go into `rails console` and start adding stuff
Start building tests
Start writing [[Rails RSpec Tests]]

# Rails Commands

Start rails development server:
`rails s` / `rails server`

Start rails sql console
`rails dbconsole`

Rails console to interact with objects/db:
`rails c` / `rails console`

Drop, create, migrate database (!!: This Destroys Development DB)
`rails db:{drop,create,migrate,seed}`

Seed from db/seeds.rb
`rails db:seed`

Check project's routes in terminal
`rails routes`

Build models
`rails generate model Task user:references name:string frequency:integer`