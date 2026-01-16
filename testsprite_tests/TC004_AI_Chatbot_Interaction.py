import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:8080", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Click chatbot trigger button to open chatbot interface
        frame = context.pages[-1]
        # Click chatbot trigger button at bottom right to open chatbot interface
        elem = frame.locator('xpath=html/body/div/main/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Try to click chatbot trigger button to close chatbot interface, then reopen it to test session state handling
        frame = context.pages[-1]
        # Click chatbot trigger button to close chatbot interface
        elem = frame.locator('xpath=html/body/div/main/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Try inputting an uncommon or invalid query again after reopening chatbot interface to test fallback or clarification response
        frame = context.pages[-1]
        # Type an uncommon or invalid query into chatbot input after reopening chatbot
        elem = frame.locator('xpath=html/body/div/main/div[2]/div[3]/div/div/textarea').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('asdkfjhasdlfkjhasd')
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=AI Local SEO Manager that helps you rank higher, automatically').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get Started').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Book Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No learning curve').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Works globally').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure and compliant').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=4.9 Rating').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ranking improved for "best coffee shop"').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=New review replied automatically').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Website content updated').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+47% Traffic growth').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why local businesses struggle online').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=It's not your fault. Local SEO is complex, time-consuming, and constantly changing.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=How SARALONE fixes this').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A simple, automated workflow that handles everything for you.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI understands your business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Runs a detailed audit').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fixes profile issues').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Writes and schedules posts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Manages reviews').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Builds your website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tracks everything').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your SEO Score out of 100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=One-click optimization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=The simplest workflow you'll ever use. Generate with AI, then publish.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI Content Generator').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Analyzing your business...').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Business profile analyzed').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Keywords researched').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content generated').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Generate with AI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Click once. NAME analyzes your business and creates optimized content instantly.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Publisher').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to publish across platforms').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Google').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Social').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Publish').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reviews done right').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-generated review responses that sound authentic, build trust, and improve your ranking.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Review Manager').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered responses').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Best latte in town! The baristas really know their craft.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why SARALONE reviews work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Authentic tone').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Personalized').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Not spammy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI post scheduler').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Schedule content for months ahead. Set it once, and SARALONE keeps your business active and engaging without any effort from you.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Automatically generates relevant content').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Posts at optimal times for engagement').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Covers all key content types').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Adapts to seasonal trends and events').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Scheduler').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-generated posts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=24 Posts Scheduled').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+32% Engagement').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=12.5K Weekly Reach').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=456 Link Clicks').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dynamic website builder').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A beautiful, SEO-optimized website that updates itself. Custom domains and subdomains ready for global reach.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Serving customers since 2015').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SEO optimized').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Built for search engines from the ground up').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Auto updating').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content stays fresh without manual work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reviews integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Latest reviews displayed automatically').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile-first').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Perfect on every device').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by businesses worldwide').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=S').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sarah Johnson').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Owner, The Coffee House').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Austin, TX').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Managing reviews used to take hours every week. Now SARALONE handles it all, and our responses actually sound better than when I wrote them myself!').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Michael Chen').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Director, Chen Dental Clinic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Vancouver, BC').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=The website builder alone is worth the subscription. SEO-optimized, always updated, and looks incredibly professional. Our leads have increased 3x.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Emma Williams').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Founder, Williams Law Firm').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=London, UK').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered Google Business growth platform for Businesses & Agencies').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Available in India & Global markets').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Business Owner Premium').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Done-For-You').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹10,000/ GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=20% / Special Models').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Business Owner').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Self-Serve SaaS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹6,000/ GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$199/ GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$129/ GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agency Starter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=20 GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹24,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agency Growth').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=50 GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹36,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agency Scale').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=100 GMB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹60,000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure infrastructure').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Enterprise-grade security with encryption at rest and in transit.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data privacy first').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your data is yours. We never sell or share your information.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Built to scale').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reliable infrastructure that grows with your business.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Compliant with GDPR, CCPA, and international data regulations.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get help directly from our team via email.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=support@saralone.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dashboard support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In-app help center with instant answers.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Knowledge base').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Comprehensive guides and tutorials.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=100+ articles').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Quick responses').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We respond fast because your time matters.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=< 24 hour response').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Frequently asked questions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Got questions? We\'ve got answers.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let AI manage your Local SEO while you focus on your business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join thousands of businesses already growing with SARALONE. Start your free trial today—no credit card required.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ No credit card required').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ Cancel anytime').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=✓ Full access during trial').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    