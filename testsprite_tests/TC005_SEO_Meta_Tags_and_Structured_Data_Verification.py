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
        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=AI Local SEO Manager that helps you rank higher, automatically').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SARALONE understands your business and manages your complete local SEO—Google Business Profile, reviews, posts, and website—without any manual work.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get Started').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Book Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No learning curve').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Works globally').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure and compliant').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=4.9 Rating').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=94 SEO Score').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ranking improved for "best coffee shop"').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why local businesses struggle online').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=It's not your fault. Local SEO is complex, time-consuming, and constantly changing.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=How SARALONE fixes this').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A simple, automated workflow that handles everything for you.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI understands your business').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tell us about your business once. SARALONE learns everything it needs.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Runs a detailed audit').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fixes profile issues').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Writes and schedules posts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Manages reviews').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Builds your website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tracks everything').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your SEO Score out of 100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SEO Analytics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real-time rankings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Keyword Rankings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=One-click optimization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI Content Generator').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Publisher').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reviews done right').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Review Manager').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered responses').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI post scheduler').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Schedule Posts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dynamic website builder').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by businesses worldwide').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Plans & Pricing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to grow your business with AI?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start Free Trial').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Book Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Security & compliance').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your trust is our priority. Built with security and privacy at the core.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=support@saralone.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Frequently asked questions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let AI manage your Local SEO while you focus on your business').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    