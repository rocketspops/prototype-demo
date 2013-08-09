#!/usr/bin/env rake

require 'yaml'

#
# * Eval contents of _posts
# * Create blank stylesheet with naming convention if doesn't exist
# * Create blank javascript with naming convention if doesn't exist
# * Create images folder with naming convention if doesn't exist
# * Add prefix to images if necessary
# * Add new directory to _config.yml in sources
#
desc "Generate folders and rename assets to match the name of the associated post"
task :generate do
  post_names = Dir.entries("_posts").select { |x| x.include?(".html") }.map { |x| x.sub(".html", "") }
  post_names.each do |post_name|
    ensure_assets_exist(post_name)
    manage_images(post_name)
    ensure_listed_in_sources(post_name)
  end
end

def ensure_assets_exist(post_name)
  FileUtils.mkdir_p image_dir(post_name)
  FileUtils.touch   "_assets/javascripts/#{post_name}.js"
  FileUtils.touch   "_assets/stylesheets/#{post_name}.scss"
end

def manage_images(post_name)
  root_dir = Dir.pwd
  FileUtils.chdir image_dir(post_name)
  Dir.glob("*").each do |image_name|
    unless image_name =~ Regexp.new("^#{post_name}")
      puts "Renaming #{image_name} to #{post_name}-#{image_name}"
      FileUtils.mv(image_name, "#{post_name}-#{image_name}")
    end
  end
ensure
  Dir.chdir root_dir
end

def ensure_listed_in_sources(post_name)
  config = YAML.load_file("_config.yml")
  source = image_dir(post_name)
  unless config['assets']['sources'].include?(source)
    puts "Adding #{source} to list of sources"
    config['assets']['sources'] << source
    File.write('_config.yml', config.to_yaml)
  end
end

def image_dir(post_name)
  "_assets/images/#{post_name}"
end

task :default => :generate

