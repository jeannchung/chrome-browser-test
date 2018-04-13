// spec.js
// sleep cycles added for functional visibility


describe('illuminate demo app', function() {
  browser.ignoreSynchronization=true;

  // open main page
  it('open demo page', function() {
    browser.get('https://demo.illuminateed.com/live/?prev_page=Main_NotDashboardPage&page=SisLogin'); //Go to the demo page
    browser.sleep(1000);
  });

  // test next button
  it('next button', function() {
    element(by.name('button_next')).click();
    browser.sleep(1000);
  });
  

  // test forgot password button, return to demo page
  it('forgot password button', function() {
    element(by.css('a[href*="?SisForgotPassword"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test facebook like button, close and return to demo page
  it('facebook like', function() {
    element(by.id('facebook-like')).click(); // click
    browser.sleep(7000); // wait for load, large background picture calls for 7s
    browser.getAllWindowHandles().then((handles) => {
    browser.driver.switchTo().window(handles[1]); // focus on new tab
    browser.driver.close(); // close tab 
    browser.sleep(1000);
    browser.driver.switchTo().window(handles[0]);
    });
  });

  // test illuminateED twitter button, close, return
  it('illuminateED twitter', function() {
    element(by.id('twitter-button-illuminateed')).click(); // click
    browser.sleep(5000); // wait for load
    browser.getAllWindowHandles().then((handles) => {
    browser.driver.switchTo().window(handles[1]); // focus on new tab
    browser.driver.close(); // close tab 
    browser.sleep(1000);
    browser.driver.switchTo().window(handles[0]);
    });
  });

  // test illuminateOPS twitter button, close, return
  it('illuminateOPS twitter', function() {
    element(by.id('twitter-button-illuminateops')).click(); // click
    browser.sleep(5000); // wait for load
    browser.getAllWindowHandles().then((handles) => {
    browser.driver.switchTo().window(handles[1]); // focus on new tab
    browser.driver.close(); // close tab 
    browser.sleep(1000);
    browser.driver.switchTo().window(handles[0]);
    });
  });

  // test release notes link
  it('release notes', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/articles/360002018714-Release-Notes-v10-1"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test march 21 webinar link
  it('march 21 webinar', function() {
    element(by.css('a[href*="https://attendee.gotowebinar.com/register/6711803094711305219?source=ATD"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });


  /* something in page code changes at this point - unable to properly locate these 
  links through multiple locators such as xpath and css/href*/
  //console throws error for the remaining 12 links on page -- elements not found 

  // test customer product info link
  it('customer product info', function() {
    element(by.xpath("//*[@id='login_updates']/div/ol[1]/li/div[2]/p[2]/a")).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test monthly learning link
  it('monthly learning', function() {
    element(by.css('a[href*="http://go.illuminateed.com/monthlylearning"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test live proctoring help doc
  it('proctor help doc', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/articles/360001575874-Monitoring-Progress-on-Online-Assessments-General-and-Live-Proctoring"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test live proctoring webinar
  it('proctor webinar', function() {
    element(by.css('a[href*="http://gslink.illuminateed.net/wf/click?upn=SG5vk6r1WQKpKzCWoPdii1zZGRu9fVv9snsWyve96BhU-2Bmnjq-2FtKcwBPLg4G-2Fbh7_iYfQllYcpyWEwczIM1abNM1HcsreBx6p8svHgJyjnhzt-2FOE2nA3VuPOTfyCZVv6mwu8ln6Nt1aRBqWNsGiTMyjKOH6qz5RLFxpT1Ci4ORqhcci3ztIOHsvlbPQkXF00HiF043ATKVbCt4PgANUJvn4myOMEb3rOIatUpC4BcDNXZzjy093QpH0IJv304AHborhaAg3OjS8Fny71s6UAMpwl4NKEqHa7Sne-2FiXza2qO1KYmJSlRFtKKKGfo8r93n9dPCs5DiNArsXyxW2YHVuR68IR4d74NWzI2s9pXNRJIfbByc5hz8Oo-2FV-2BjqJiqmgpW40k0REYdtmrEBthP568I5uNCKQShkdTLDtVJ0cAIO1AnZBhjAaZJ-2BceN8brgexx7QXJxtDgQWNtshOHuJgZKii3zrKBU3nZSRhqJJiIPlvrck1vd21VSjjbogQH4kKhTqwnk2VwTNJAStoSBvafZ09eSCp14-2BCzooyayDPAVHKuS0RYLMRDYNUvPr76euJ6"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test PFT link
  it('pft', function() {
    element(by.css('a[href*="https://www.cde.ca.gov/ta/tg/pf/"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test PFT help doc link
  it('pft help doc', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/sections/360000052314-Physical-Fitness-Testing"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

    // test PFT flyer
  it('pft flyer', function() {
    element(by.css('a[href*="http://go.illuminateed.com/pft"]')).click();
    browser.sleep(1000);
    // no need to go back, link is downloadable
    browser.sleep(1000);
  });

    // test PSAT student summ
  it('psat student summ', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/articles/360001114333-PSAT-SAT-Student-Summary"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test PSAT student roster
  it('psat student roster', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/articles/360001114353-PSAT-SAT-Student-Roster"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test PSAT perf summ
  it('psat perf summ', function() {
    element(by.css('a[href*="https://support.illuminateed.com/hc/en-us/articles/360001130594-PSAT-SAT-Performance-Summary"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test equity symposium
  it('symposium', function() {
    element(by.css('a[href*="https://www.eventbrite.com/e/illuminate-education-equity-symposium-bay-area-tickets-37950545102?aff=ATD"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });

  // test upcoming webinars
  it('upcoming webinars', function() {
    element(by.css('a[href*="https://www.illuminateed.com/resources/"]')).click();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
  });


});


