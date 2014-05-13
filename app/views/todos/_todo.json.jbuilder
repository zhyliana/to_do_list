json.(todo, :id, :title, :created_at, :updated_at)

comments ||= nil
json.comments(comments) do |cmt|
  json.partial!("comments/comment", comment: cmt)
end