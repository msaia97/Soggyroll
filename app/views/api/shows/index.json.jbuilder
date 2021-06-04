@shows.each do |show|
    json.partial 'show',  show: @show
end 
