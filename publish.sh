#!/bin/bash
#
# script to build website and push it to http://product-design.transis.net

# create a tmp dir into which jekyll will build the html source
if [ -d "/tmp/jekyll_build" ]; then
    rm -rf /tmp/jekyll_build
fi
mkdir /tmp/jekyll_build

# build website
jekyll build -d /tmp/jekyll_build/

# publish on github only if jekyll build was successful
if [ $? -eq 0 ]; then
    cd /tmp/jekyll_build
    ssh centro@product-design.transis.net "echo '<meta http-equiv=\"refresh\" content=\"0; url=product-design/\">' > /data/product-design/current/public/index.html"
    rsync -r /tmp/jekyll_build/* centro@product-design.transis.net:/data/product-design/current/public/product-design
    echo "Successfully built and published to http://product-design.transis.net..."
else
    echo "Jekyll build failed... not publishing to http://product-design.transis.net"
fi

# cleanup
rm -rf /tmp/jekyll_build
