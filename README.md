# NewsHomePage
This Repository is for a home page that retrieve news from XML file 
which could be extracted from RSS feed "https://www.salesforceben.com/feed/".
The Tasks ARE:

///////////

    1. Create a new object: News that has the following fields:
1.1. Title (String)
1.2. Publication Date (Date)
1.3. Link (URL)

    2. Having an automation that retrieves:
news in daily bases, this automation should only retrieve news created one day before of the execution of the automation (Example if today is 14.11.2022 then we wll retrieve and save only news from 13.11.2022, but it can happen that there is no news from yesterday in this case no insertion of records is required).
    3. Having the possibility to:
check before inserting the news if it already exists or not, if it exists, we should not insert it, if not we should insert it.

    4. Having the possibility to:
see the last recent news in the home page of our org, all news should have: title, date, and button that redirects to the link of the news.
    5. Since Salesforce is having 3 releases/year:
and to optimize our data storage, we need an automation that delete all records created in date < Today ()-4months.
    6. All the news should be created from the following link: "https://www.salesforceben.com/feed/" .   
///////////////
