# Observation Session
- February 26, 2013
- Sean Cleary (CM) (Session 2)
- Conducted by Dave Castleton


# Take-aways
________________________________________________________________
- CM's follow a similar pattern when starting out the day
- Use MMS to determine what campaigns they need to work with by looking at which campaigns launched yesterday,emails, and notes
- CM's do the initial (bulk of) mapping for new campaigns, beginning of flight dates, and with new/updated creative
- CM's would benefit from having a central location with:
-- Campaigns scheduled to launch the previous day, today, tomorrow
-- Placement issues (no delivery for live campaigns, delivery for pending campaigns, etc.)
-- I.O.'s processed that were assigned to CM


# General observations
________________________________________________________________

## MMS
- To see mapping panel, must upload CSV first
-- No way to get to mapping other than through upload process

## RAW Reports
- Has 7000+ emails in it today
- So many emails in folder that it kills his Outlook 
- Sean opens RAW Reports in email web client because it's faster

## Mapping
- CA's don't do mapping as much, Sean likes to do his own mapping

## Traffic out a site
- The process of building out all the tags (i.e. sending over the necessary creative assets tags that a publisher needs to launch the campaign)

## Uploading delivery report to MMS
- Report pulled from ad server, can't exceed a certain number of line items or MMS won't let it upload (report too big)
- To upload reports that are too large, Sean opens the report file, sorts by day, manually deletes old dates that he already has data for
- Doesn't hit this problem a lot, but for high volume stuff, it can add some extra work

## Email folders
- "Tags" folder has 4900+ emails
- "Site IO" folder has 78,750+ emails in it
-- When he traffics out a site, he will go into "Site IO" and search for email chain related to the campaign and reply all to pick up the email chain

## Mobile placements
- Unless ad type (size) is in the placement name, mobile placements don't have sizes listed in ad type column in MMS Dashboard
-- Just says "Mobile display" in Ad type column
-- No third-party ad server data for mobile

## Reports from MMS
- Campaign Status report
-- Only goes to internal team, alerts them to a campaign going live 
- Creative Status Report
-- Breaks down based the status of each placement based on the green/yellow/etc. tags on the left of MMS dash (can send to anybody)

## Comments
- Uses comments to share brief messages
- Helpful if someone is covering for you to leave a note about what needs to be done next

## Daily Bugle email report
- Automated report from Pentaho 
- Report is specific to a CM's campaigns
- Delivered daily
- Details include:
-- Campaigns scheduled to launch the previous day, today, tomorrow
-- High revenue campaigns
-- Placement issues (no delivery for live campaigns, delivery for pending campaigns, etc.)
-- I.O.'s processed that were assigned to CM
-- And more (see GitHub /product-design/insight/01-discovery/Observation Sessions/Artifacts/Documents/Sean/Daily Bugle Email - Sean Cleary.pdf)


# Task observations
________________________________________________________________

## Starting the day
- Goal: Clear his MMS Dashboard
-- Pending campaigns
-- Recently launched campaigns that have little/no delivery
- Likes to get campaigns live so rest of team can see what's going on and do the things they need to do for the campaign

- Check email
-- Looks for fire drills (things that need immediate action)
-- Creative that need to be uploaded 
 
- Opens MMS
- Sorts by launch date
-- Based on comments and previous knowledge, he knew he had four campaigns he needed to map
- Looks at which campaigns launched yesterday
- Goes to Ad Server
-- Create daily report to go to RAW Reports folder (this can be done preemptively but he just does it at the same time he pulls the initial delivery report)
-- Pull initial delivery report from Ad Server
- Maps tags to placements
-- Does initial mapping for new campaigns, flights, or new/updated creative
-- CA's will do mapping for minor stuff
 

## PointRoll (ad server) process
- PointRoll reports come as an attachment in Outlook
-- Come as embedded content if in web client (see RAW Reports above)
-- Because it's not an attachment, has to manually pull report from ad server
- Logs in to PointRoll to manually pull the report
- Select formatting 
-- Flat data vs. hierarchical data
--- Flat data = static listing of every line
--- Hierarchical = see data broken out by placement
- Exports initial delivery report to CSV
- Saves to his temporary "Mapping folder"
-- This is a folder he created where he saves all the reports he is going to be working with that day
-- He deletes the contents of this folder each morning for the new day
-- Helps him keep track of all the campaigns he needs to deal with that day
- Uploads the report to MMS
- Mapping panel is displayed
- Goes straight to unmapped and looks for outstanding placements
-- He maps up placements that are new to an already live campaign 
- Can't find the tag he's searching for
- Maps up the tags that he sees
- 2 tags are missing
-- Publisher might not have the size that they sent them
- Decides to double check the tags he sent to the publisher
-- Opens Folder on his computer where the tags are stored, organized by campaign
- Sees that 2 tags are indeed missing
- Tags that are in there, are running very low
-- But there are too many impressions to just be a test
-- Will email the publisher in a minute to see what happened to the missing tags and why the tags that are in there are running low

## Uploading/mapping Tapads.com delivery report
-- Has to manual check what he sent to see if they have the right tags by opening up the folder on his computer that contains the tags he sent over and compares it to the tags in the uploaded delivery report
- Pacing is low, will send email to publisher
- Sean usually maps initial tags first, then follows up with publisher
-- Will hold onto campaign (not make it live) until there is substantial delivery
--- Substantial deliver depends on impression/pacing
--- 1,000 imp of 1,000,000 = 0.1% vs. 100 imp of 50,000 imp = 0.2%
-- Some tags have little or no delivery, he'll watch those and check them again tomorrow, might be test tags
- Before he saves mapping, gets a preview screen that puts unmapped tags at the top, allows him to double check if he's got everything mapped correctly
-- Can also add a note at this point
- Uses the Campaign Report Upload Confirmation page to:
-- Checks unmapped at the top
-- Does a quick scroll through the pacing numbers to see if there is anything that needs immediate attention
-- If he sees a problem, would save and go right to getting reports to send to sites to increase impressions 

## Updating publishers
- Once tags are uploaded and mapped, he moves on to communicating what he's seeing out to the sites
- Downloads reports for the site (Excel)
- Attaches it to email
- Updates usually deal w/ missing tags and low/over pacing
- While writing the email, he double opens the initial delivery report Excel attachment to make sure he has the right file attached
-- CA's usually copy pertinent data lines into the body of the email
- Changes email subject to draw attention to it
- Adds"…-NOT LIVE"
- Bcc's "Tags" email folder
- CA will be able to look in "Tags" to find the email chain 
- Email will be sent to:
-- person at site in charge of tracking
-- site sales person
-- site account manager
-- CA (who isn't usually on the initial emails but is this time)
- Should always include AM, AC 
-- There is no AC in this case
-- Rivka from Centro is included instead
- Sean also has an email folder for every campaign (one folder had 40-50 emails in it)
- Also has an archive folder with old campaign folders in it


## Creating daily delivery report
- Selects a campaign in MediaMind (ad server)
- Sets up the daily report that is going to go out
- Selects content for report 
- Selects scheduling for delivery (daily)
- Selects start and end date (adds a couple days of pad at the end just to make sure all the deliver data gets delivered)
- Types in the email to send the report to (raw.reports@centro.net)
- Since the campaign launched yesterday, he manually pulls the first report (could do this preemptively)
- Opens report Excel and saves to CSV to temporary mapping folder
-- Dart/Pointroll allow you to choose report format (.CSV/Excel)
- Uploads the report to MMS
- Maps up first placement, checks pacing, looks good at 122%
-- Doesn't usually reach out to publisher about over-pacing unless pacing exceeds 125% 
- On the Campaign Report Upload Confirmation page, he removes his comment because there is nothing to do on his end and saves
- Creates a Campaign Status report in MMS
-- Form auto selects who from the team will get the status report
-- AM, AC, CM
-- No CA on this one 
--- Analytics will be handled by AC in this case because everything is automated so AC should be able to manage this without a CA
- Clicks on Live (I don't remember if this was on the form to send  out the Campaign status report or on the MMS Dashboard)

- goes back to daily bugle (automated report from pentaho) report so see if there are any other actionable items, can't see this report anywhere else


-------------------
## Additional questions

- Like to see campaign start to finish across rolls? Or at least across roles that deal with the software?

- Need more info on reports process. Where do they pull reports from (MMS/Ad server/Pentaho)? What data gets pulled? What formats are used (Excel/.CSV/Proprietary)? What's good about each system? What's bad?


------------------

