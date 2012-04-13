ENV['RACK_ENV'] = 'test'

require 'rubygems'
require 'bundler/setup'

Bundler.require

require 'test/unit'
require 'rack/test'

require File.dirname(__FILE__) + "/../../arnunestattoos.rb"

class TattooAppTest < Test::Unit::TestCase

  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_homepage
    get '/'
    assert_equal 200, last_response.status
  end

end
