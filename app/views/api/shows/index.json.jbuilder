@shows.each do |show|
    json.set! show.id do 
        json.partial! 'show',  show: show
    end
end 
