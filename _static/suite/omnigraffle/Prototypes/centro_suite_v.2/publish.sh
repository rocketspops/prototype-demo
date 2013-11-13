#!/bin/bash
#
# script to push prototypes to http://product-design.transis.net/prototypes/centro_suite_v.2

rsync -r * centro@product-design.transis.net:/data/product-design/current/public/prototypes/centro_suite_v.2
ssh centro@product-design.transis.net "echo '<meta http-equiv=\"refresh\" content=\"0; url=Dashboard_First_Run.html\">' > /data/product-design/current/public/prototypes/centro_suite_v.2/index.html"
echo "Successfully published to http://product-design.transis.net/prototypes/centro_suite_v.2..."

