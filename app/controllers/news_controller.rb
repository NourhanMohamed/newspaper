class NewsController < ApplicationController
  before_filter :sutweets, only: :index

  def sutweets
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "esLOvpIAJBAEPt8sWhXMGg"
      config.consumer_secret     = "AZQuNH2MN7BXgPCc3fGc5lax4z1wZUU3lPMc2lOaI"
      config.access_token        = "2226405846-hEAZENcpe3D9WylUB2eS5NRZ4oTDbToPPebU9iv"
      config.access_token_secret = "XR5oWuhYkGJk44PrM3wFb2aJqE9XfxTSm9Ss4VFBvOupj"
    end

    @tweets = client.user_timeline('gucsu', count: 3)
  end
end
