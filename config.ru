require 'rubygems'
require 'bundler/setup'

Bundler.require

helpers do
  def cache_for(mins = 1)
    response['Cache-Control'] = "public, max-age=#{60*mins}" if Sinatra::Base.production?
  end
end

configure do
  set :haml, {:format => :html5}
  set :sass, {:style => :compact, :debug_info => false}
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.rb'))
end

get '/screen.css' do
  cache_for 60*24 # 1 day
  content_type 'text/css', :charset => 'utf-8'
  sass :screen, Compass.sass_engine_options
end

get '/' do
  cache_for 60*24 # 1 day
  content_type 'text/html', :charset => 'utf-8'
  haml :index
end

run Sinatra::Application
