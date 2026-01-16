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
        # -> Verify Pain Points section displays all expected customer problem cards
        await page.mouse.wheel(0, 600)
        

        # -> Verify How It Works section shows step-by-step process clearly
        await page.mouse.wheel(0, 600)
        

        # -> Verify How It Works section shows step-by-step process clearly
        await page.mouse.wheel(0, 600)
        

        # -> Verify How It Works section shows step-by-step process clearly
        await page.mouse.wheel(0, 600)
        

        # -> Verify Audit Score section displays SEO audit score and analytics dashboard
        await page.mouse.wheel(0, 600)
        

        # -> Verify Audit Score section displays SEO audit score and analytics dashboard
        await page.mouse.wheel(0, 600)
        

        # -> Verify Audit Score section displays SEO audit score and analytics dashboard
        await page.mouse.wheel(0, 600)
        

        # -> Verify One-Click Setup section displays automation features properly
        await page.mouse.wheel(0, 600)
        

        # -> Verify Reviews Management section shows review dashboard and functionality showcase
        await page.mouse.wheel(0, 600)
        

        # -> Verify Reviews Management section shows review dashboard and functionality showcase
        await page.mouse.wheel(0, 600)
        

        # -> Verify Reviews Management section shows review dashboard and functionality showcase
        await page.mouse.wheel(0, 600)
        

        # -> Verify Post Scheduler section displays social media scheduling features
        await page.mouse.wheel(0, 600)
        

        # -> Verify Post Scheduler section displays social media scheduling features
        await page.mouse.wheel(0, 600)
        

        # -> Verify Website Builder section presents builder UI and SEO features
        await page.mouse.wheel(0, 600)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=AI Local SEO Manager that helps you rank higher, automatically').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=It\'s not your fault. Local SEO is complex, time-consuming, and constantly changing.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Complicated tools').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Too many platforms, dashboards, and settings to manage.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Incomplete profiles').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Google Business Profiles missing critical information.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No keyword strategy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Guessing what customers are searching for.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Irregular posting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Weeks go by without any updates or engagement.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unmanaged reviews').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reviews pile up with no responses or strategy.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Expensive websites').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Paying too much for sites that don\'t perform.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No visibility').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No idea how you rank or what\'s working.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI understands your business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Runs a detailed audit').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fixes profile issues').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Writes and schedules posts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Manages reviews').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Builds your website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tracks everything').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your SEO Score out of 100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=One-click optimization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reviews done right').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI post scheduler').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dynamic website builder').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Plans & Pricing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by businesses worldwide').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Security & compliance').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Frequently asked questions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let AI manage your Local SEO while you focus on your business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start Free Trial').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Book Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 SaralOne All Rights Reserved').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    