#!/usr/bin/env ruby

require 'rubygems'
require 'bundler/setup'
Bundler.require

configure do
  set :haml, {:format => :html5}
  set :sass, {:style => :compact, :debug_info => false}
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.rb'))
end

get '/screen.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :screen, Compass.sass_engine_options
end

get '/' do
  content_type 'text/html', :charset => 'utf-8'
  haml :index
end

run Sinatra::Application
