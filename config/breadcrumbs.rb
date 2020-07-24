crumb :root do
  link "フリマ",root_path
end

crumb :show do
  link "マイページ",user_path(current_user.id)
end

crumb  :pay_new do
  link "お支払い方法", new_card_path
  parent :show
end

crumb :product_new do
  link "出品",new_product_path
  parent :root
end

crumb :favorite do
  link "お気に入り",product_favorites_path
  parent :show
end
















# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).